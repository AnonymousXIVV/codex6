import { useState } from "react";
import {
  Inbox,
  Mail,
  Phone,
  Clock,
  Trash2,
  Building,
  Download,
  FileSpreadsheet,
  FileJson,
  ChevronDown,
  CheckSquare,
  Square,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import type { Enquiry } from "@/types/crm";

interface EnquiriesTabProps {
  enquiries: Enquiry[];
  onUpdateStatus: (id: number, status: string) => Promise<boolean>;
  onDelete: (id: number) => Promise<boolean>;
  onBulkDeleteEnquiries?: (ids: number[]) => Promise<boolean>;
}

export function EnquiriesTab({
  enquiries,
  onUpdateStatus,
  onDelete,
  onBulkDeleteEnquiries,
}: EnquiriesTabProps) {
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [isExportOpen, setIsExportOpen] = useState(false);

  const filtered = enquiries.filter(
    (e) => statusFilter === "all" || e.status === statusFilter
  );

  const allFilteredIds = filtered.map((e) => e.id);
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

  const handleBulkDelete = async () => {
    const count = selectedIds.size;
    if (count === 0) return;
    if (!window.confirm(`Are you sure you want to delete ${count} selected inquiry(ies)?`)) return;

    if (onBulkDeleteEnquiries) {
      const ok = await onBulkDeleteEnquiries(Array.from(selectedIds));
      if (ok) {
        toast.success(`Deleted ${count} inquiry(ies).`);
        setSelectedIds(new Set());
      }
    } else {
      toast.error("Bulk delete handler not configured.");
    }
  };

  const handleBulkUpdateStatus = async (status: string) => {
    const count = selectedIds.size;
    if (count === 0) return;
    for (const id of Array.from(selectedIds)) {
      await onUpdateStatus(id, status);
    }
    toast.success(`Updated ${count} inquiry(ies) to "${status}".`);
    setSelectedIds(new Set());
  };

  const handleDownloadCsv = (items = selectedIds.size > 0 ? filtered.filter((e) => selectedIds.has(e.id)) : filtered) => {
    if (items.length === 0) {
      toast.error("No inquiries to download.");
      return;
    }

    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Status",
      "Message",
      "Created At",
    ];
    const rows = items.map((e) => [
      e.id,
      `"${(e.name || "").replace(/"/g, '""')}"`,
      `"${(e.email || "").replace(/"/g, '""')}"`,
      `"${(e.phone || "").replace(/"/g, '""')}"`,
      `"${(e.company || "").replace(/"/g, '""')}"`,
      `"${(e.status || "").replace(/"/g, '""')}"`,
      `"${(e.message || "").replace(/"/g, '""')}"`,
      `"${(e.created_at || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `codex_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportOpen(false);
    toast.success(`Exported ${items.length} inquiry(ies) to CSV.`);
  };

  const handleExportJson = (items = selectedIds.size > 0 ? filtered.filter((e) => selectedIds.has(e.id)) : filtered) => {
    if (items.length === 0) {
      toast.error("No inquiries to export.");
      return;
    }
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", jsonStr);
    link.setAttribute("download", `codex_inquiries_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportOpen(false);
    toast.success(`Exported ${items.length} inquiry(ies) to JSON.`);
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Inbox className="size-5 text-blue" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Inquiries & Client Lead Submissions
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Every submission through the Codex Dynamics contact form is securely stored in SQLite and managed here.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {/* Export dropdown */}
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
                    <div className="text-[10px] text-subtle">Table spreadsheet format</div>
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

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter enquiries by status"
            className="bg-white border border-black/8 rounded-full px-4 py-2 text-xs font-medium text-label focus:border-blue outline-none cursor-pointer shadow-2xs"
          >
            <option value="all">All Inquiries ({enquiries.length})</option>
            <option value="new">New Inquiries</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Bulk Actions Toolbar */}
      {selectedIds.size > 0 && (
        <div className="rounded-2xl bg-label text-paper p-3 px-4 shadow-lg flex flex-wrap items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center size-6 rounded-full bg-white/20 text-xs font-bold font-mono">
              {selectedIds.size}
            </span>
            <span className="text-xs font-medium">
              {selectedIds.size} inquiry(ies) selected
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
              onClick={() => handleBulkUpdateStatus("contacted")}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-paper text-xs font-medium transition cursor-pointer"
            >
              <CheckCircle2 className="size-3 text-blue" />
              <span>Mark Contacted</span>
            </button>
            <button
              type="button"
              onClick={handleBulkDelete}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition cursor-pointer shadow-xs"
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

      {/* Select All Toggle Bar */}
      {filtered.length > 0 && (
        <div className="flex items-center justify-between px-3 py-1 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={toggleSelectAll}
            className="flex items-center gap-2 text-xs font-medium text-label hover:text-blue transition cursor-pointer"
          >
            {isAllSelected ? (
              <CheckSquare className="size-4 text-blue" />
            ) : isSomeSelected ? (
              <Square className="size-4 text-blue" />
            ) : (
              <Square className="size-4 text-subtle" />
            )}
            <span>Select All ({filtered.length})</span>
          </button>
          <span className="text-subtle font-mono text-[11px]">
            {selectedIds.size > 0 ? `${selectedIds.size} selected` : `${filtered.length} total`}
          </span>
        </div>
      )}

      {/* Enquiries List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="surface-lift rounded-2xl bg-card border border-black/8 p-16 text-center text-xs text-muted-foreground">
            <div className="size-10 rounded-full bg-black/5 text-subtle flex items-center justify-center mx-auto mb-2">
              <RefreshCw className="size-5 text-subtle" />
            </div>
            <p className="text-sm font-semibold text-label">No inquiries found</p>
            <p className="text-xs text-subtle mt-0.5">
              Client messages submitted through the website contact form will appear here in real time.
            </p>
          </div>
        ) : (
          filtered.map((lead) => {
            const isSelected = selectedIds.has(lead.id);

            return (
              <div
                key={lead.id}
                className={`surface-lift rounded-2xl bg-card border p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col md:flex-row md:items-start justify-between gap-4 transition-colors ${
                  isSelected ? "border-blue/40 bg-blue/5" : "border-black/8"
                }`}
              >
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  {/* Select Checkbox */}
                  <button
                    type="button"
                    onClick={() => toggleSelectOne(lead.id)}
                    className="mt-1 text-muted-foreground hover:text-label transition cursor-pointer shrink-0"
                  >
                    {isSelected ? (
                      <CheckSquare className="size-4 text-blue" />
                    ) : (
                      <Square className="size-4 text-subtle" />
                    )}
                  </button>

                  <div className="space-y-3 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-semibold text-sm text-label font-display">
                        {lead.name}
                      </h3>
                      {lead.company && (
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
                          <Building className="size-3 text-subtle" />
                          {lead.company}
                        </span>
                      )}
                      <span
                        className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                          lead.status === "new"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : lead.status === "contacted"
                            ? "bg-blue/10 text-blue border border-blue/20"
                            : "bg-black/5 text-muted-foreground border border-black/5"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      {lead.email && (
                        <a
                          href={`mailto:${lead.email}`}
                          className="inline-flex items-center gap-1.5 text-blue hover:underline font-medium font-mono"
                        >
                          <Mail className="size-3.5" />
                          {lead.email}
                        </a>
                      )}
                      {lead.phone && (
                        <a
                          href={`tel:${lead.phone}`}
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-label font-medium font-mono"
                        >
                          <Phone className="size-3.5 text-emerald-600" />
                          {lead.phone}
                        </a>
                      )}
                      <span className="inline-flex items-center gap-1 text-subtle font-mono text-[11px]">
                        <Clock className="size-3" />
                        {lead.created_at || "Recent"}
                      </span>
                    </div>

                    <div className="p-4 bg-fill-subtle/60 border border-hairline rounded-xl text-xs text-label leading-relaxed break-words">
                      "{lead.message}"
                    </div>
                  </div>
                </div>

                {/* Status Action Buttons */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0 self-end sm:self-auto">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={async () => {
                        const nextStatus = lead.status === "new" ? "contacted" : "closed";
                        await onUpdateStatus(lead.id, nextStatus);
                        toast.success(`Lead marked as ${nextStatus}.`);
                      }}
                      className="px-3.5 py-1.5 bg-fill hover:bg-fill-elevated text-label rounded-full text-xs font-medium border border-black/8 transition-all hover:shadow-sm cursor-pointer"
                    >
                      {lead.status === "new" ? "Mark Contacted" : "Mark Closed"}
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        if (!window.confirm(`Delete inquiry from "${lead.name}"?`)) return;
                        await onDelete(lead.id);
                        toast.info("Inquiry deleted from database.");
                      }}
                      className="p-2 text-subtle hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
                      title="Delete inquiry"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
