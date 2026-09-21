import React, { useState } from "react";
import { Star, Plus, Trash2, Edit3, X, Check } from "lucide-react";
import { toast } from "sonner";
import type { Review } from "@/types/crm";

interface ReviewsTabProps {
  reviews: Review[];
  onSaveReview: (data: any) => Promise<boolean>;
  onEditReview?: (id: number, data: any) => Promise<boolean>;
  onToggleReview: (id: number, is_published: boolean) => Promise<boolean>;
  onDeleteReview: (id: number) => Promise<boolean>;
}

export function ReviewsTab({
  reviews,
  onSaveReview,
  onEditReview,
  onToggleReview,
  onDeleteReview,
}: ReviewsTabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);

  const [form, setForm] = useState({
    author: "",
    rating: 5,
    comment: "",
    image_path: "",
    is_published: true,
  });

  const [editForm, setEditForm] = useState({
    author: "",
    rating: 5,
    comment: "",
    image_path: "",
    is_published: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.author || !form.comment) return;
    const ok = await onSaveReview(form);
    if (ok) {
      setForm({
        author: "",
        rating: 5,
        comment: "",
        image_path: "",
        is_published: true,
      });
      setIsOpen(false);
      toast.success("Review published to Codex Dynamics site.");
    }
  };

  const handleStartEdit = (r: Review) => {
    setEditingReview(r);
    setEditForm({
      author: r.author || "",
      rating: Number(r.rating) || 5,
      comment: r.comment || "",
      image_path: r.image_path || "",
      is_published: Boolean(r.is_published),
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReview || !editForm.author || !editForm.comment) return;
    if (onEditReview) {
      const ok = await onEditReview(editingReview.id, editForm);
      if (ok) {
        setEditingReview(null);
        toast.success("Review updated in SQLite database.");
      }
    } else {
      toast.error("Edit handler not configured.");
    }
  };

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-black/[0.08] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Star className="size-4 text-amber-500 fill-amber-500" />
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight">
              Testimonials & Client Feedback
            </h2>
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            Curate 5-star testimonials, verified reviews, and client quotes displayed on the public landing page.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setEditingReview(null);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-black text-white text-xs font-medium transition-all shadow-2xs active:scale-[0.99] cursor-pointer shrink-0"
        >
          <Plus className="size-3.5" />
          <span>{isOpen ? "Close Form" : "Add Review"}</span>
        </button>
      </div>

      {/* Add Review Form */}
      {isOpen && (
        <div className="bg-white rounded-2xl border border-black/[0.08] p-6 shadow-sm space-y-4 animate-in fade-in duration-150">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 mb-2">
            Create Client Testimonial
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                Client / Reviewer Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Marcus Vance, VP of Product"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl px-3 py-2 text-xs text-neutral-900 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                Rating (1 - 5 Stars)
              </label>
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl px-3 py-2 text-xs text-neutral-900 outline-none cursor-pointer"
              >
                <option value={5}>★★★★★ (5 Stars - Flawless)</option>
                <option value={4}>★★★★☆ (4 Stars - High Quality)</option>
                <option value={3}>★★★☆☆ (3 Stars - Average)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                Avatar / Company Logo URL (Optional)
              </label>
              <input
                type="text"
                placeholder="https://images.unsplash.com/... or /team/marcus.jpg"
                value={form.image_path}
                onChange={(e) => setForm({ ...form, image_path: e.target.value })}
                className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl px-3 py-2 text-xs text-neutral-900 outline-none transition font-mono"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                Testimonial Quote <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                placeholder="Codex Dynamics delivered a flawless full-stack platform with remarkable speed and attention to detail..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl p-3 text-xs text-neutral-900 outline-none transition"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-neutral-700 select-none">
                <input
                  type="checkbox"
                  checked={form.is_published}
                  onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
                  className="rounded text-[#0071E3] focus:ring-[#0071E3] size-4 border-black/15 cursor-pointer"
                />
                <span>Publish immediately on public site</span>
              </label>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-1.5 rounded-xl border border-black/[0.08] hover:bg-neutral-100 text-neutral-600 text-xs font-medium transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition shadow-2xs cursor-pointer"
                >
                  Publish Review
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Edit Review Modal */}
      {editingReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="w-full max-w-lg rounded-2xl bg-white border border-black/[0.08] p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <Edit3 className="size-4 text-[#0071E3]" />
                <h3 className="text-sm font-semibold text-neutral-900">
                  Edit Testimonial #{editingReview.id}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingReview(null)}
                className="p-1 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                  Author Name & Title
                </label>
                <input
                  type="text"
                  required
                  value={editForm.author}
                  onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
                  className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl px-3 py-2 text-xs text-neutral-900 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                  Rating
                </label>
                <select
                  value={editForm.rating}
                  onChange={(e) => setEditForm({ ...editForm, rating: Number(e.target.value) })}
                  className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl px-3 py-2 text-xs text-neutral-900 outline-none cursor-pointer"
                >
                  <option value={5}>★★★★★ (5 Stars)</option>
                  <option value={4}>★★★★☆ (4 Stars)</option>
                  <option value={3}>★★★☆☆ (3 Stars)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                  Avatar / Logo URL (Optional)
                </label>
                <input
                  type="text"
                  value={editForm.image_path}
                  onChange={(e) => setEditForm({ ...editForm, image_path: e.target.value })}
                  className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl px-3 py-2 text-xs text-neutral-900 outline-none transition font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-neutral-500 mb-1">
                  Comment / Review Quote
                </label>
                <textarea
                  rows={3}
                  required
                  value={editForm.comment}
                  onChange={(e) => setEditForm({ ...editForm, comment: e.target.value })}
                  className="w-full bg-[#F9F9FB] border border-black/[0.08] focus:border-[#0071E3] focus:bg-white rounded-xl p-2.5 text-xs text-neutral-900 outline-none transition"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-black/[0.06]">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-neutral-700 select-none">
                  <input
                    type="checkbox"
                    checked={editForm.is_published}
                    onChange={(e) => setEditForm({ ...editForm, is_published: e.target.checked })}
                    className="rounded text-[#0071E3] focus:ring-[#0071E3] size-4 border-black/15 cursor-pointer"
                  />
                  <span>Published on public site</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingReview(null)}
                    className="px-3.5 py-1.5 rounded-xl border border-black/[0.08] hover:bg-neutral-100 text-neutral-600 text-xs font-medium transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium transition shadow-2xs cursor-pointer"
                  >
                    <Check className="size-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.length === 0 ? (
          <div className="md:col-span-3 bg-white rounded-2xl border border-black/[0.08] p-12 text-center text-xs text-neutral-400">
            No testimonials added yet. Click "Add Review" to feature client feedback.
          </div>
        ) : (
          reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-2xl border border-black/[0.08] p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-4 hover:border-black/[0.15] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: r.rating || 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={async () => {
                      await onToggleReview(r.id, !r.is_published);
                      toast.success(`Review ${r.is_published ? "hidden" : "published"}.`);
                    }}
                    className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                      r.is_published
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                        : "bg-neutral-100 text-neutral-500 border border-neutral-200"
                    }`}
                  >
                    {r.is_published ? "● Live" : "○ Draft"}
                  </button>
                </div>

                <p className="text-xs text-neutral-600 italic leading-relaxed">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {r.image_path ? (
                    <img
                      src={r.image_path}
                      alt={r.author}
                      className="size-6 rounded-lg object-cover border border-black/10"
                    />
                  ) : (
                    <div className="size-6 rounded-lg bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center">
                      {r.author.charAt(0)}
                    </div>
                  )}
                  <span className="text-xs font-semibold text-neutral-900">
                    {r.author}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleStartEdit(r)}
                    className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                    title="Edit review"
                  >
                    <Edit3 className="size-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={async () => {
                      await onDeleteReview(r.id);
                      toast.info("Review deleted.");
                    }}
                    className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete review"
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
