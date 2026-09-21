import { useState } from "react";
import {
  Users,
  Search,
  Mail,
  Phone,
  Building,
  MapPin,
  BookOpen,
  Filter,
  Download,
  Plus,
  Trash2,
  Edit3,
  Sparkles,
  Flame,
  X,
  FileSpreadsheet,
  FileJson,
  ChevronDown,
  CheckSquare,
  Square,
  MinusSquare,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import type { Lead } from "@/types/crm";
import { CountryFlag } from "./CountryFlag";

interface LeadsTabProps {
  leads: Lead[];
  onCreateLead: (lead: Partial<Lead>) => Promise<void>;
  onUpdateStatus: (id: number, status: string) => Promise<void>;
  onUpdateNotes: (id: number, notes: string) => Promise<void>;
  onDeleteLead: (id: number) => Promise<void>;
  onBulkDeleteLeads?: (ids: number[]) => Promise<boolean>;
}

export function LeadsTab({
  leads,
  onCreateLead,
  onUpdateStatus,
  onUpdateNotes,
  onDeleteLead,
  onBulkDeleteLeads,
}: LeadsTabProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [isExportOpen, setIsExportOpen] = useState(false);

  // New Lead Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newSource, setNewSource] = useState("website_contact");
  const [newNotes, setNewNotes] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newScore, setNewScore] = useState(75);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Edit Notes Modal State
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [editNotesText, setEditNotesText] = useState("");

  // Filtering
  const filteredLeads = leads.filter((l) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.company && l.company.toLowerCase().includes(q)) ||
      (l.city && l.city.toLowerCase().includes(q)) ||
      (l.country && l.country.toLowerCase().includes(q)) ||
      (l.notes && l.notes.toLowerCase().includes(q));

    if (!matchesSearch) return false;

    if (statusFilter !== "all" && l.status !== statusFilter) return false;
    if (sourceFilter !== "all" && l.source !== sourceFilter) return false;

    return true;
  });

  const allFilteredIds = filteredLeads.map((l) => l.id);
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
    if (!window.confirm(`Are you sure you want to delete ${count} selected lead(s)?`)) return;

    if (onBulkDeleteLeads) {
      const ok = await onBulkDeleteLeads(Array.from(selectedIds));
      if (ok) {
        toast.success(`Deleted ${count} lead(s).`);
        setSelectedIds(new Set());
      }
    } else {
      for (const id of Array.from(selectedIds)) {
        await onDeleteLead(id);
      }
      toast.success(`Deleted ${count} lead(s).`);
      setSelectedIds(new Set());
    }
  };

  // Calculate Metrics
  const totalCount = leads.length;
  const newCount = leads.filter((l) => l.status === "new").length;
  const _blogReaderCount = leads.filter((l) => l.source === "blog_reader").length;
  const qualifiedCount = leads.filter((l) => l.status === "qualified" || l.status === "won").length;
  const avgScore =
    totalCount > 0
      ? Math.round(leads.reduce((acc, l) => acc + (l.score || 50), 0) / totalCount)
      : 0;

  // Format Duration
  const formatDuration = (seconds?: number) => {
    const s = seconds || 0;
    if (s < 60) return `${s}s`;
    const mins = Math.floor(s / 60);
    const remSecs = s % 60;
    return `${mins}m ${remSecs}s`;
  };

  // Status Badge Styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "contacted":
        return "bg-blue/10 text-blue border-blue/20";
      case "qualified":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "proposal":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "won":
        return "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
      default:
        return "bg-fill text-muted-foreground border-black/10";
    }
  };

  // Source Badge Styling
  const getSourceBadge = (source: string) => {
    switch (source) {
      case "blog_reader":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
            <BookOpen className="size-2.5" />
            Blog Reader
          </span>
        );
      case "website_contact":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue/10 text-blue border border-blue/20">
            <Mail className="size-2.5" />
            Website Contact
          </span>
        );
      case "visitor_promotion":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <Sparkles className="size-2.5" />
            Promoted Visitor
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-fill text-muted-foreground border border-black/10">
            Direct Lead
          </span>
        );
    }
  };

  // Export Leads to CSV
  const handleExportCsv = (items = selectedIds.size > 0 ? filteredLeads.filter((l) => selectedIds.has(l.id)) : filteredLeads) => {
    if (items.length === 0) {
      toast.error("No leads to export.");
      return;
    }

    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Source",
      "Status",
      "Score",
      "Country",
      "City",
      "Postal Code",
      "Street",
      "Pages Viewed",
      "Duration (s)",
      "Notes",
      "Created At",
    ];

    const rows = items.map((l) => [
      l.id,
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${(l.email || "").replace(/"/g, '""')}"`,
      `"${(l.phone || "").replace(/"/g, '""')}"`,
      `"${(l.company || "").replace(/"/g, '""')}"`,
      l.source,
      l.status,
      l.score || 50,
      `"${(l.country || "").replace(/"/g, '""')}"`,
      `"${(l.city || "").replace(/"/g, '""')}"`,
      `"${(l.postal_code || "").replace(/"/g, '""')}"`,
      `"${(l.street || "").replace(/"/g, '""')}"`,
      l.pages_viewed_count || 1,
      l.duration_seconds || 0,
      `"${(l.notes || "").replace(/"/g, '""')}"`,
      l.created_at || "",
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `codex_crm_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportOpen(false);
    toast.success(`Exported ${items.length} lead(s) to CSV.`);
  };

  const handleExportJson = (items = selectedIds.size > 0 ? filteredLeads.filter((l) => selectedIds.has(l.id)) : filteredLeads) => {
    if (items.length === 0) {
      toast.error("No leads to export.");
      return;
    }
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(items, null, 2));
    const link = document.createElement("a");
    link.setAttribute("href", jsonStr);
    link.setAttribute("download", `codex_crm_leads_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExportOpen(false);
    toast.success(`Exported ${items.length} lead(s) to JSON.`);
  };

  // Handle Create Lead Submit
  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim() || !newName.trim()) {
      toast.error("Name and Email are required.");
      return;
    }

    try {
      setIsSubmitting(true);
      await onCreateLead({
        name: newName.trim(),
        email: newEmail.trim(),
        phone: newPhone.trim(),
        company: newCompany.trim(),
        source: newSource,
        status: "new",
        score: Number(newScore) || 75,
        notes: newNotes.trim(),
        country: newCountry.trim(),
        city: newCity.trim(),
        pages_viewed_count: 1,
        duration_seconds: 60,
      });

      toast.success("New lead created successfully!");
      setIsCreateModalOpen(false);
      setNewName("");
      setNewEmail("");
      setNewPhone("");
      setNewCompany("");
      setNewNotes("");
      setNewCountry("");
      setNewCity("");
    } catch (err: any) {
      toast.error(err?.message || "Failed to create lead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Save Notes
  const handleSaveNotes = async () => {
    if (!editingLead) return;
    try {
      await onUpdateNotes(editingLead.id, editNotesText);
      toast.success("Lead notes updated.");
      setEditingLead(null);
    } catch {
      toast.error("Failed to update notes.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Header Card */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Users className="size-5 text-blue" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              CRM Leads & Intent Pipeline
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Verified sales pipeline and converted leads from contact submissions and promoted visitors.
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
                  onClick={() => handleExportCsv()}
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

          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
          >
            <Plus className="size-3.5" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6">
            <span className="text-[11px] text-muted-foreground uppercase font-semibold">Total Pipeline</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold font-mono text-label">{totalCount}</span>
              <span className="text-[11px] text-muted-foreground">leads</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6">
            <span className="text-[11px] text-muted-foreground uppercase font-semibold">New Uncontacted</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold font-mono text-emerald-600">{newCount}</span>
              <span className="text-[11px] text-muted-foreground">active</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6">
            <span className="text-[11px] text-muted-foreground uppercase font-semibold">Qualified / Won</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold font-mono text-blue">{qualifiedCount}</span>
              <span className="text-[11px] text-muted-foreground">High Value</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6">
            <span className="text-[11px] text-muted-foreground uppercase font-semibold">Avg Intent Score</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl font-bold font-mono text-emerald-600">
                {avgScore > 0 ? `${avgScore} / 100` : "--"}
              </span>
              <Flame className="size-3.5 text-amber-500" />
            </div>
          </div>
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
              {selectedIds.size} lead(s) selected
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleExportCsv()}
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

      {/* Leads Table Container */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]">
        {/* Search & Filters */}
        <div className="p-4 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-fill-subtle/40">
          <div className="flex flex-wrap items-center gap-3 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" />
              <input
                type="text"
                placeholder="Search leads by name, email, company, city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-black/8 focus:border-blue rounded-full pl-9 pr-4 py-2 text-xs text-label placeholder:text-subtle transition-all outline-none"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Filter className="size-3.5 text-subtle" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="proposal">Proposal</option>
                <option value="won">Won</option>
              </select>
            </div>

            {/* Source Filter */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none cursor-pointer"
              >
                <option value="all">All Sources</option>
                <option value="blog_reader">Blog Readers</option>
                <option value="website_contact">Website Contacts</option>
                <option value="visitor_promotion">Promoted Visitors</option>
              </select>
            </div>
          </div>

          <div className="text-xs text-subtle">
            Showing <strong>{filteredLeads.length}</strong> of {leads.length} leads
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
                <th className="py-3 px-4">Lead Name & Company</th>
                <th className="py-3 px-4">Contact Details</th>
                <th className="py-3 px-4">Source Channel</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Engagement & Intent</th>
                <th className="py-3 px-4">Pipeline Status</th>
                <th className="py-3 px-4">Notes</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-16 text-center text-subtle">
                    <div className="size-10 rounded-full bg-black/5 text-subtle flex items-center justify-center mx-auto mb-2">
                      <RefreshCw className="size-5 text-subtle" />
                    </div>
                    <p className="font-semibold text-label">No leads found</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Promote visitors from the Live Visitor Stream or receive contact submissions.
                    </p>
                  </td>
                </tr>
              ) : (
                filteredLeads.map((l) => {
                  const isSelected = selectedIds.has(l.id);

                  return (
                    <tr
                      key={l.id}
                      className={`hover:bg-fill-subtle/40 transition-colors ${
                        isSelected ? "bg-blue/5" : ""
                      }`}
                    >
                      {/* Checkbox */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          type="button"
                          onClick={() => toggleSelectOne(l.id)}
                          className="text-muted-foreground hover:text-label transition cursor-pointer"
                        >
                          {isSelected ? (
                            <CheckSquare className="size-4 text-blue" />
                          ) : (
                            <Square className="size-4" />
                          )}
                        </button>
                      </td>

                      {/* Name & Company */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div>
                          <div className="font-bold text-label text-xs flex items-center gap-1.5">
                            <span>{l.name}</span>
                            {l.score && l.score >= 85 ? (
                              <span className="p-0.5 text-amber-500" title="High Intent Lead">
                                <Flame className="size-3" />
                              </span>
                            ) : null}
                          </div>
                          {l.company ? (
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                              <Building className="size-3 text-subtle" />
                              <span>{l.company}</span>
                            </div>
                          ) : (
                            <span className="text-[10px] text-subtle">Private Individual</span>
                          )}
                        </div>
                      </td>

                      {/* Contact Details */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="space-y-0.5">
                          {l.email ? (
                            <a
                              href={`mailto:${l.email}`}
                              className="text-xs text-blue hover:underline font-mono flex items-center gap-1"
                              title="Send email"
                            >
                              <Mail className="size-3 text-blue" />
                              <span>{l.email}</span>
                            </a>
                          ) : (
                            <span className="text-[11px] text-subtle">No email</span>
                          )}

                          {l.phone ? (
                            <a
                              href={`tel:${l.phone}`}
                              className="text-[11px] text-muted-foreground hover:text-label font-mono flex items-center gap-1"
                            >
                              <Phone className="size-3 text-subtle" />
                              <span>{l.phone}</span>
                            </a>
                          ) : null}
                        </div>
                      </td>

                      {/* Source Channel */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {getSourceBadge(l.source)}
                      </td>

                      {/* Location with Flag */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div>
                          <div className="flex items-center gap-2 font-semibold text-label">
                            <CountryFlag country={l.country} flag={l.flag} size="sm" />
                            <span>{l.country || "Global"}</span>
                          </div>
                          {l.city && (
                            <div className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                              <MapPin className="size-2.5 text-subtle" />
                              <span>{l.city}</span>
                            </div>
                          )}
                        </div>
                      </td>

                      {/* Engagement & Intent */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-xs font-bold text-label">
                              {l.score || 70}/100
                            </span>
                            <span className="text-[10px] text-muted-foreground">score</span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-subtle mt-0.5">
                            <span>{l.pages_viewed_count || 1} pages</span>
                            <span>•</span>
                            <span>{formatDuration(l.duration_seconds)}</span>
                          </div>
                        </div>
                      </td>

                      {/* Pipeline Status Selector */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <select
                          value={l.status}
                          onChange={(e) => onUpdateStatus(l.id, e.target.value)}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border outline-none cursor-pointer transition-colors ${getStatusBadge(
                            l.status
                          )}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="proposal">Proposal</option>
                          <option value="won">Won</option>
                          <option value="archived">Archived</option>
                        </select>
                      </td>

                      {/* Notes */}
                      <td className="py-3.5 px-4 max-w-xs">
                        <div className="flex items-center gap-1.5 group/note">
                          <p className="text-xs text-muted-foreground truncate" title={l.notes}>
                            {l.notes || "No notes attached"}
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setEditingLead(l);
                              setEditNotesText(l.notes || "");
                            }}
                            className="opacity-0 group-hover/note:opacity-100 p-1 text-subtle hover:text-label transition-opacity cursor-pointer"
                            title="Edit notes"
                          >
                            <Edit3 className="size-3" />
                          </button>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-right">
                        <div className="inline-flex items-center gap-1.5">
                          {l.email ? (
                            <a
                              href={`mailto:${l.email}`}
                              className="p-1.5 rounded-full text-blue hover:bg-blue/10 transition-colors"
                              title="Send Email"
                            >
                              <Mail className="size-3.5" />
                            </a>
                          ) : null}

                          <button
                            type="button"
                            onClick={() => {
                              setEditingLead(l);
                              setEditNotesText(l.notes || "");
                            }}
                            className="p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer"
                            title="Edit Notes"
                          >
                            <Edit3 className="size-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Are you sure you want to remove lead "${l.name}"?`)) {
                                void onDeleteLead(l.id);
                              }
                            }}
                            className="p-1.5 rounded-full text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
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

      {/* Create Lead Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 p-4 sm:p-6 overflow-hidden flex flex-col max-h-[92dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/8 shrink-0">
              <h3 className="text-base font-bold text-label font-display flex items-center gap-2">
                <Plus className="size-4 text-blue" />
                <span>Add Lead to CRM</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsCreateModalOpen(false)}
                className="p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 overflow-y-auto flex-1 py-2 pr-1">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-label">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-label">Phone Number</label>
                  <input
                    type="tel"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-label">Company</label>
                  <input
                    type="text"
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    placeholder="Acme Systems"
                    className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-label">Source Channel</label>
                  <select
                    value={newSource}
                    onChange={(e) => setNewSource(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
                  >
                    <option value="website_contact">Website Contact Form</option>
                    <option value="blog_reader">Blog Reader Subscription</option>
                    <option value="visitor_promotion">Visitor Promotion</option>
                    <option value="direct_referral">Direct Referral</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-label">City / Country</label>
                  <input
                    type="text"
                    value={newCity}
                    onChange={(e) => setNewCity(e.target.value)}
                    placeholder="City, Country"
                    className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold text-label">
                  <span>Lead Score Rating</span>
                  <span className="text-blue font-bold">{newScore}/100</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={newScore}
                  onChange={(e) => setNewScore(Number(e.target.value))}
                  className="w-full h-1.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-blue"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-label">Strategic Notes</label>
                <textarea
                  rows={3}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="Key requirements, budget, timeline, or notes..."
                  className="w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-label hover:bg-black/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Create Lead"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Notes Modal */}
      {editingLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 p-4 sm:p-6 overflow-hidden flex flex-col max-h-[92dvh] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-black/8 shrink-0">
              <h3 className="text-sm font-bold text-label flex items-center gap-2">
                <Edit3 className="size-4 text-blue" />
                <span>Notes for {editingLead.name}</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingLead(null)}
                className="p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 space-y-4 pr-1">
              <textarea
                rows={5}
                value={editNotesText}
                onChange={(e) => setEditNotesText(e.target.value)}
                placeholder="Enter notes about requirements, calls, proposals..."
                className="w-full p-3 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
              />

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setEditingLead(null)}
                  className="px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-label hover:bg-black/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
