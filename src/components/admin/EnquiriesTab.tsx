import { useState } from "react";
import {
  Inbox,
  Mail,
  Phone,
  Clock,
  Trash2,
  Building,
} from "lucide-react";
import { toast } from "sonner";
import type { Enquiry } from "@/types/crm";

interface EnquiriesTabProps {
  enquiries: Enquiry[];
  onUpdateStatus: (id: number, status: string) => Promise<boolean>;
  onDelete: (id: number) => Promise<boolean>;
}

export function EnquiriesTab({
  enquiries,
  onUpdateStatus,
  onDelete,
}: EnquiriesTabProps) {
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = enquiries.filter(
    (e) => statusFilter === "all" || e.status === statusFilter
  );

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

        <div className="flex items-center gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            aria-label="Filter enquiries by status"
            className="bg-white border border-black/8 rounded-full px-4 py-2 text-xs font-medium text-label focus:border-blue outline-none cursor-pointer shadow-sm"
          >
            <option value="all">All Inquiries ({enquiries.length})</option>
            <option value="new">New Leads</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed / Won</option>
          </select>
        </div>
      </div>

      {/* Enquiries List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle">
            No inquiries found for this filter.
          </div>
        ) : (
          filtered.map((lead) => (
            <div
              key={lead.id}
              className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-3 flex-1">
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
                      className="inline-flex items-center gap-1.5 text-blue hover:underline font-medium"
                    >
                      <Mail className="size-3.5" />
                      {lead.email}
                    </a>
                  )}
                  {lead.phone && (
                    <a
                      href={`tel:${lead.phone}`}
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-label font-medium"
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

                <div className="p-4 bg-fill-subtle/60 border border-hairline rounded-xl text-xs text-label leading-relaxed">
                  "{lead.message}"
                </div>
              </div>

              {/* Status Action Buttons */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
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
          ))
        )}
      </div>
    </div>
  );
}
