import React, { useState } from "react";
import { Link2, Plus, ExternalLink, Trash2, Edit3, X, Check } from "lucide-react";
import { toast } from "sonner";
import type { Backlink } from "@/types/crm";

interface BacklinksTabProps {
  backlinks: Backlink[];
  onAddBacklink: (data: { name: string; url: string; notes: string }) => Promise<boolean>;
  onEditBacklink?: (id: number, data: { name: string; url: string; notes: string }) => Promise<boolean>;
  onDeleteBacklink: (id: number) => Promise<boolean>;
}

export function BacklinksTab({
  backlinks,
  onAddBacklink,
  onEditBacklink,
  onDeleteBacklink,
}: BacklinksTabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingBacklink, setEditingBacklink] = useState<Backlink | null>(null);

  const [form, setForm] = useState({ name: "", url: "", notes: "" });
  const [editForm, setEditForm] = useState({ name: "", url: "", notes: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.url) return;
    const ok = await onAddBacklink(form);
    if (ok) {
      setForm({ name: "", url: "", notes: "" });
      setIsOpen(false);
      toast.success("SEO backlink saved to SQLite database.");
    }
  };

  const handleStartEdit = (b: Backlink) => {
    setEditingBacklink(b);
    setEditForm({
      name: b.name || "",
      url: b.url || "",
      notes: b.notes || "",
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBacklink || !editForm.name || !editForm.url) return;
    if (onEditBacklink) {
      const ok = await onEditBacklink(editingBacklink.id, editForm);
      if (ok) {
        setEditingBacklink(null);
        toast.success("Backlink updated in SQLite.");
      }
    } else {
      toast.error("Edit handler not configured.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Link2 className="size-5 text-purple-600" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              SEO Backlink Registry & Link Building
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Track referring domains, guest posts, media coverage, and indexation status to boost Google domain authority.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setEditingBacklink(null);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0"
        >
          <Plus className="size-3.5" />
          <span>{isOpen ? "Close Form" : "Add Backlink"}</span>
        </button>
      </div>

      {/* Add Backlink Card */}
      {isOpen && (
        <div className="surface-lift rounded-2xl bg-card border border-purple-200 p-6 shadow-sm">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-label mb-4">
            Register New Backlink / Media Mention
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Publisher / Platform Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Forbes Tech Council / GitHub"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Target Live URL
              </label>
              <input
                type="url"
                required
                placeholder="https://forbes.com/article/codex-dynamics-review"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all font-mono"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Anchor Text & SEO Notes
              </label>
              <input
                type="text"
                placeholder="e.g. DoFollow link on 'Custom Engineering Studio', DA: 84"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer"
              >
                Save Backlink
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Backlink Modal */}
      {editingBacklink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="surface-lift w-full max-w-lg rounded-3xl bg-card border border-black/10 p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-hairline">
              <div className="flex items-center gap-2">
                <Edit3 className="size-4 text-purple-600" />
                <h3 className="text-sm font-semibold text-label">
                  Edit Backlink #{editingBacklink.id}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingBacklink(null)}
                className="p-1.5 text-subtle hover:text-label rounded-full hover:bg-fill transition"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Publisher / Source Name
                </label>
                <input
                  type="text"
                  required
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Live URL
                </label>
                <input
                  type="url"
                  required
                  value={editForm.url}
                  onChange={(e) => setEditForm({ ...editForm, url: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Anchor Text & SEO Notes
                </label>
                <textarea
                  rows={3}
                  value={editForm.notes}
                  onChange={(e) => setEditForm({ ...editForm, notes: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl p-2.5 text-xs text-label outline-none transition"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-hairline">
                <button
                  type="button"
                  onClick={() => setEditingBacklink(null)}
                  className="px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-paper text-xs font-medium transition shadow-sm cursor-pointer"
                >
                  <Check className="size-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Backlinks Table */}
      <div className="surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-label">
            <thead className="bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline">
              <tr>
                <th className="py-3 px-4">Publisher / Source</th>
                <th className="py-3 px-4">Live URL</th>
                <th className="py-3 px-4">Anchor Text & SEO Notes</th>
                <th className="py-3 px-4">Date Indexed</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              {backlinks.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-subtle">
                    No backlinks registered yet. Click "Add Backlink" to record one.
                  </td>
                </tr>
              ) : (
                backlinks.map((b) => (
                  <tr key={b.id} className="hover:bg-fill-subtle/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-label">
                      <div className="flex items-center gap-2">
                        <Link2 className="size-3.5 text-purple-600 shrink-0" />
                        <span>{b.name}</span>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <a
                        href={b.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-blue hover:underline"
                      >
                        <span>{b.url.length > 40 ? b.url.slice(0, 40) + "..." : b.url}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </td>

                    <td className="py-3 px-4 text-muted-foreground">
                      {b.notes || "High authority referring domain"}
                    </td>

                    <td className="py-3 px-4 font-mono text-[11px] text-subtle">
                      {b.created_at ? b.created_at.slice(0, 10) : "Active"}
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleStartEdit(b)}
                          className="p-1.5 text-subtle hover:text-purple-600 rounded-full hover:bg-purple-50 transition-colors cursor-pointer"
                          title="Edit backlink"
                        >
                          <Edit3 className="size-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={async () => {
                            await onDeleteBacklink(b.id);
                            toast.info("Backlink removed.");
                          }}
                          className="p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer"
                          title="Delete backlink"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
