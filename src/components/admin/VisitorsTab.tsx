import { useState } from "react";
import {
  Sparkles,
  Search,
  Monitor,
  Smartphone,
  Tablet,
  Copy,
  CheckCircle2,
  Eye,
  UserPlus,
  Clock,
  Filter,
  Trash2,
  ChevronDown,
  Eraser,
  Download,
  FileSpreadsheet,
  FileJson,
  CheckSquare,
  Square,
  MinusSquare,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import type { Visitor } from "@/types/crm";
import { BrowserBadge } from "./BrowserBadge";
import { CountryFlag } from "./CountryFlag";
import { VisitorDetailModal } from "./VisitorDetailModal";
import { resolveGeoLocation } from "@/lib/geo-utils";

interface VisitorsTabProps {
  visitors: Visitor[];
  onSimulate: () => void;
  onAddToLeads?: (visitor: Visitor, customData?: any) => Promise<void>;
  onDeleteVisitor?: (id: number) => Promise<boolean>;
  onBulkDeleteVisitors?: (ids: number[]) => Promise<boolean>;
  onClearVisitors?: (olderThanDays: number | null) => Promise<boolean>;
  leadsSessionIds?: Set<string>;
}

export function VisitorsTab({
  visitors,
  onSimulate,
  onAddToLeads,
  onDeleteVisitor,
  onBulkDeleteVisitors,
  onClearVisitors,
  leadsSessionIds = new Set(),
}: VisitorsTabProps) {
  const [filter, setFilter] = useState("");
  const [browserFilter, setBrowserFilter] = useState<string>("all");
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null);
  const [isPruneOpen, setIsPruneOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const handleCopyIp = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    toast.success(`Copied IP ${ip} to clipboard`);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  const getDeviceIcon = (deviceStr: string) => {
    const d = (deviceStr || "").toLowerCase();
    if (d.includes("mobile") || d.includes("phone")) {
      return <Smartphone className="size-3.5 text-blue" />;
    }
    if (d.includes("tablet") || d.includes("ipad")) {
      return <Tablet className="size-3.5 text-purple-600" />;
    }
    return <Monitor className="size-3.5 text-muted-foreground" />;
  };

  const formatDuration = (seconds?: number) => {
    const s = seconds || 60;
    if (s < 60) return `${s}s`;
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}m ${secs}s`;
  };

  const filteredVisitors = visitors.filter((v) => {
    const q = filter.toLowerCase();
    const matchesQuery =
      !q ||
      v.ip_address.toLowerCase().includes(q) ||
      (v.country && v.country.toLowerCase().includes(q)) ||
      (v.city && v.city.toLowerCase().includes(q)) ||
      (v.browser && v.browser.toLowerCase().includes(q)) ||
      (v.page_url && v.page_url.toLowerCase().includes(q)) ||
      (v.session_id && v.session_id.toLowerCase().includes(q));

    if (!matchesQuery) return false;

    if (browserFilter !== "all") {
      const b = (v.browser || "").toLowerCase();
      if (!b.includes(browserFilter.toLowerCase())) return false;
    }

    return true;
  });

  const allFilteredIds = filteredVisitors.map((v) => v.id);
  const isAllSelected =
    allFilteredIds.length > 0 && allFilteredIds.every((id) => selectedIds.has(id));
  const isSomeSelected =
    selectedIds.size > 0 && (!isAllSelected || selectedIds.size < allFilteredIds.length);

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(allFilteredIds));
    }
  };

  const toggleSelectOne = (id: number) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  const handlePrune = async (days: number | null) => {
    setIsPruneOpen(false);
    const promptText =
      days === null
        ? "Are you sure you want to clear ALL visitor telemetry logs from SQLite?"
        : `Are you sure you want to delete visitor logs older than ${days} days?`;

    if (!window.confirm(promptText)) return;

    if (onClearVisitors) {
      const ok = await onClearVisitors(days);
      if (ok) {
        setSelectedIds(new Set());
        toast.success(days === null ? "All visitor logs purged." : `Pruned logs older than ${days} days.`);
      }
    } else {
      toast.error("Prune handler not configured.");
    }
  };

  const handleDeleteOne = async (id: number) => {
    if (!window.confirm(`Delete visitor session #${id}?`)) return;
    if (onDeleteVisitor) {
      const ok = await onDeleteVisitor(id);
      if (ok) {
        const next = new Set(selectedIds);
        next.delete(id);
        setSelectedIds(next);
        toast.info("Visitor session deleted.");
      }
    }
  };

  const handleBulkDelete = async () => {
    const count = selectedIds.size;
    if (count === 0) return;
    if (!window.confirm(`Are you sure you want to delete ${count} selected visitor session(s)?`)) return;
    if (onBulkDeleteVisitors) {
      const ok = await onBulkDeleteVisitors(Array.from(selectedIds));
      if (ok) {
        toast.success(`Deleted ${count} visitor session(s).`);
        setSelectedIds(new Set());
      }
    } else {
      toast.error("Bulk delete handler not configured.");
    }
  };

  const handleDownloadCsv = (items = selectedIds.size > 0 ? filteredVisitors.filter((v) => selectedIds.has(v.id)) : filteredVisitors) => {
    if (items.length === 0) {
      toast.error("No visitor records to download.");
      return;
    }
    const headers = [
      "ID",
      "Session ID",
      "IP Address",
      "Country",
      "Country Code",
      "City",
      "Region",
      "Browser",
      "Device",
      "Active Route",
      "Referrer",
      "Duration (Seconds)",
      "Visit Count",
      "Is Returning",
      "Email",
      "Name",
      "Created At",
    ];
    const rows = items.map((v) => [
      v.id,
      `"${(v.session_id || "").replace(/"/g, '""')}"`,
      `"${(v.ip_address || "").replace(/"/g, '""')}"`,
      `"${(v.country || "").replace(/"/g, '""')}"`,
      `"${(v.country_code || "").replace(/"/g, '""')}"`,
      `"${(v.city || "").replace(/"/g, '""')}"`,
      `"${(v.region || "").replace(/"/g, '""')}"`,
      `"${(v.browser || "").replace(/"/g, '""')}"`,
      `"${(v.device || "").replace(/"/g, '""')}"`,
      `"${(v.page_url || "").replace(/"/g, '""')}"`,
      `"${(v.referrer || "").replace(/"/g, '""')}"`,
      v.duration_seconds || 0,
      v.visit_count || 1,
      v.is_returning ? "Yes" : "No",
      `"${(v.email || "").replace(/"/g, '""')}"`,
      `"${(v.name || "").replace(/"/g, '""')}"`,
      `"${(v.created_at || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `codex_visitors_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportOpen(false);
    toast.success(`Exported ${items.length} visitor record(s) to CSV.`);
  };

  const handleExportJson = (items = selectedIds.size > 0 ? filteredVisitors.filter((v) => selectedIds.has(v.id)) : filteredVisitors) => {
    if (items.length === 0) {
      toast.error("No visitor records to export.");
      return;
    }
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", jsonStr);
    link.setAttribute("download", `codex_visitors_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportOpen(false);
    toast.success(`Exported ${items.length} visitor record(s) to JSON.`);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner & Actions */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Live Visitor & Client Stream
            </h2>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase">
              Real Time
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Real visitor telemetry, geographical location, browser badges, session duration, and clickstream paths.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {/* Export / Download CSV dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsExportOpen(!isExportOpen)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/10 bg-white hover:bg-fill text-muted-foreground hover:text-label text-xs font-medium transition cursor-pointer shadow-2xs"
            >
              <Download className="size-3.5 text-blue" />
              <span>Export / Download</span>
              <ChevronDown className="size-3" />
            </button>

            {isExportOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-card border border-black/10 shadow-lg p-1.5 z-30 space-y-1 animate-in fade-in">
                <button
                  type="button"
                  onClick={() => handleDownloadCsv()}
                  className="w-full text-left px-3 py-2 text-xs text-label hover:bg-fill rounded-xl transition flex items-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="size-4 text-emerald-600" />
                  <div>
                    <div className="font-medium">Download as CSV</div>
                    <div className="text-[10px] text-subtle">Spreadsheet table format</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => handleExportJson()}
                  className="w-full text-left px-3 py-2 text-xs text-label hover:bg-fill rounded-xl transition flex items-center gap-2 cursor-pointer"
                >
                  <FileJson className="size-4 text-amber-600" />
                  <div>
                    <div className="font-medium">Export as JSON</div>
                    <div className="text-[10px] text-subtle">Raw JSON records</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Prune Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsPruneOpen(!isPruneOpen)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground hover:text-label text-xs font-medium transition cursor-pointer"
            >
              <Eraser className="size-3.5" />
              <span>Prune Logs</span>
              <ChevronDown className="size-3" />
            </button>

            {isPruneOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-card border border-black/10 shadow-lg p-1.5 z-30 space-y-1 animate-in fade-in">
                <button
                  type="button"
                  onClick={() => handlePrune(30)}
                  className="w-full text-left px-3 py-1.5 text-xs text-label hover:bg-fill rounded-xl transition cursor-pointer"
                >
                  Delete older than 30 days
                </button>
                <button
                  type="button"
                  onClick={() => handlePrune(7)}
                  className="w-full text-left px-3 py-1.5 text-xs text-label hover:bg-fill rounded-xl transition cursor-pointer"
                >
                  Delete older than 7 days
                </button>
                <div className="border-t border-hairline my-1" />
                <button
                  type="button"
                  onClick={() => handlePrune(null)}
                  className="w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-xl transition font-medium cursor-pointer"
                >
                  Purge All Visitor Records
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onSimulate}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer"
          >
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Simulate Ping</span>
          </button>
        </div>
      </div>

      {/* Floating / Sticky Bulk Actions Bar */}
      {selectedIds.size > 0 && (
        <div className="rounded-2xl bg-label text-paper p-3 px-4 shadow-lg flex flex-wrap items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center size-6 rounded-full bg-white/20 text-xs font-bold font-mono">
              {selectedIds.size}
            </span>
            <span className="text-xs font-medium">
              {selectedIds.size} visitor session(s) selected
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleDownloadCsv()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-paper text-xs font-medium transition cursor-pointer"
            >
              <FileSpreadsheet className="size-3.5 text-emerald-300" />
              <span>Download CSV</span>
            </button>
            <button
              type="button"
              onClick={() => handleExportJson()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-paper text-xs font-medium transition cursor-pointer"
            >
              <FileJson className="size-3.5 text-amber-300" />
              <span>Export JSON</span>
            </button>
            <button
              type="button"
              onClick={handleBulkDelete}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition cursor-pointer shadow-xs"
            >
              <Trash2 className="size-3.5" />
              <span>Bulk Delete</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedIds(new Set())}
              className="px-2.5 py-1.5 text-xs text-white/70 hover:text-white transition cursor-pointer"
            >
              Deselect All
            </button>
          </div>
        </div>
      )}

      {/* Visitor Table Card */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]">
        {/* Search & Header Bar */}
        <div className="p-4 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-fill-subtle/40">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" />
              <input
                type="text"
                placeholder="Search IP, country, city, browser, route..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-white border border-black/8 focus:border-blue rounded-full pl-9 pr-4 py-2 text-xs text-label placeholder:text-subtle transition-all outline-none"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Filter className="size-3.5 text-subtle" />
              <select
                value={browserFilter}
                onChange={(e) => setBrowserFilter(e.target.value)}
                className="bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none cursor-pointer"
              >
                <option value="all">All Browsers</option>
                <option value="chrome">Chrome</option>
                <option value="safari">Safari</option>
                <option value="firefox">Firefox</option>
                <option value="edge">Edge</option>
                <option value="opera">Opera</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-subtle">
            <span>
              {filteredVisitors.length} of {visitors.length} sessions
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-label">
            <thead className="bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline">
              <tr>
                <th className="py-3 px-4 w-10 text-center">
                  <button
                    type="button"
                    onClick={toggleSelectAll}
                    className="text-muted-foreground hover:text-label transition cursor-pointer"
                    title={isAllSelected ? "Deselect all" : "Select all"}
                  >
                    {isAllSelected ? (
                      <CheckSquare className="size-4 text-blue" />
                    ) : isSomeSelected ? (
                      <MinusSquare className="size-4 text-blue" />
                    ) : (
                      <Square className="size-4" />
                    )}
                  </button>
                </th>
                <th className="py-3 px-4">Time & Status</th>
                <th className="py-3 px-4">Client IP</th>
                <th className="py-3 px-4">Location (Flag + Country)</th>
                <th className="py-3 px-4">Browser Type</th>
                <th className="py-3 px-4">Device</th>
                <th className="py-3 px-4">Duration & Visits</th>
                <th className="py-3 px-4">Active Route</th>
                <th className="py-3 px-4 text-right">Details & Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {filteredVisitors.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-16 text-center text-muted-foreground">
                    <div className="max-w-md mx-auto space-y-2">
                      <div className="size-10 rounded-full bg-black/5 text-subtle flex items-center justify-center mx-auto">
                        <RefreshCw className="size-5 animate-spin text-subtle" />
                      </div>
                      <p className="text-sm font-semibold text-label">No active visitor sessions yet</p>
                      <p className="text-xs text-subtle">
                        Live visitor sessions will populate here in real time as clients browse Codex Dynamics.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredVisitors.map((v) => {
                  const geo = resolveGeoLocation({
                    country: v.country,
                    country_code: v.country_code,
                    flag: v.flag,
                    city: v.city,
                    region: v.region,
                    postal_code: v.postal_code,
                    street: v.street,
                    ip_address: v.ip_address,
                  });

                  const isLead = Boolean(v.is_lead || leadsSessionIds.has(v.session_id));
                  const isSelected = selectedIds.has(v.id);

                  return (
                    <tr
                      key={v.id}
                      className={`hover:bg-fill-subtle/50 transition-colors group ${
                        isSelected ? "bg-blue/5" : ""
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => toggleSelectOne(v.id)}
                          className="text-muted-foreground hover:text-label transition cursor-pointer"
                        >
                          {isSelected ? (
                            <CheckSquare className="size-4 text-blue" />
                          ) : (
                            <Square className="size-4" />
                          )}
                        </button>
                      </td>

                      {/* Time */}
                      <td className="py-3.5 px-4 font-mono text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-subtle font-medium">
                            {v.created_at ? v.created_at.slice(11, 19) : "Just now"}
                          </span>
                        </div>
                      </td>

                      {/* IP */}
                      <td className="py-3.5 px-4 font-mono text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-label">{v.ip_address}</span>
                          <button
                            type="button"
                            onClick={() => handleCopyIp(v.ip_address)}
                            className="text-subtle hover:text-label p-1 rounded-md transition-colors cursor-pointer"
                            title="Copy IP"
                          >
                            {copiedIp === v.ip_address ? (
                              <CheckCircle2 className="size-3.5 text-emerald-600" />
                            ) : (
                              <Copy className="size-3.5" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Location */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <CountryFlag
                            flag={geo.flag}
                            countryCode={geo.country_code || geo.countryCode}
                            country={geo.country}
                          />
                          <div>
                            <div className="font-medium text-label text-xs">
                              {geo.city
                                ? `${geo.city}${geo.region ? `, ${geo.region}` : ""}, ${geo.country}`
                                : geo.country}
                            </div>
                            {geo.region && !geo.city && (
                              <div className="text-[10px] text-subtle font-mono">{geo.region}</div>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Browser */}
                      <td className="py-3.5 px-4">
                        <BrowserBadge browser={v.browser} />
                      </td>

                      {/* Device */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          {getDeviceIcon(v.device)}
                          <span>{v.device || "Desktop"}</span>
                        </div>
                      </td>

                      {/* Duration */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5 text-xs">
                          <Clock className="size-3 text-subtle" />
                          <span className="font-medium text-label">
                            {formatDuration(v.duration_seconds)}
                          </span>
                          {(v.visit_count ?? 0) > 1 && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-blue/10 text-blue font-semibold">
                              {v.visit_count}x
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Active Route */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-1.5 max-w-[140px] truncate text-[11px] font-mono text-muted-foreground">
                          <span className="px-1.5 py-0.5 rounded bg-fill border border-black/5">
                            {v.page_url || "/"}
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedVisitor(v)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fill hover:bg-black/8 text-label text-xs font-semibold border border-black/10 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                          >
                            <Eye className="size-3.5 text-blue" />
                            <span>View More</span>
                          </button>

                          {isLead ? (
                            <span
                              className="p-1.5 rounded-full text-emerald-600 bg-emerald-50 border border-emerald-200"
                              title="Already added to CRM Leads"
                            >
                              <CheckCircle2 className="size-3.5" />
                            </span>
                          ) : onAddToLeads ? (
                            <button
                              type="button"
                              onClick={() => setSelectedVisitor(v)}
                              className="p-1.5 rounded-full text-blue hover:text-white hover:bg-blue bg-blue/5 border border-blue/20 transition-all cursor-pointer"
                              title="Add to Leads"
                            >
                              <UserPlus className="size-3.5" />
                            </button>
                          ) : null}

                          {onDeleteVisitor && (
                            <button
                              type="button"
                              onClick={() => handleDeleteOne(v.id)}
                              className="p-1.5 rounded-full text-subtle hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                              title="Delete log"
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visitor Detail Modal */}
      <VisitorDetailModal
        visitor={selectedVisitor}
        isOpen={!!selectedVisitor}
        onClose={() => setSelectedVisitor(null)}
        onAddToLeads={async (vis, custom) => {
          if (onAddToLeads) {
            await onAddToLeads(vis, custom);
          }
        }}
        isAlreadyLead={
          selectedVisitor
            ? Boolean(selectedVisitor.is_lead || leadsSessionIds.has(selectedVisitor.session_id))
            : false
        }
      />
    </div>
  );
}
