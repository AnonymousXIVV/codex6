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
      <div className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Star className="size-5 text-amber-500 fill-amber-500" />
            <h2 className="text-base font-semibold text-label font-display tracking-tight">
              Client Testimonials & Social Proof
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Curate 5-star client testimonials, verified reviews, and ratings displayed on the public landing page.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setEditingReview(null);
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0"
        >
          <Plus className="size-3.5" />
          <span>{isOpen ? "Close Form" : "Add Review"}</span>
        </button>
      </div>

      {/* Add Review Form */}
      {isOpen && (
        <div className="surface-lift rounded-3xl bg-card border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-label mb-2">
            Create Client Testimonial
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Client / Company Representative Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Marc Benioff, Salesforce"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Star Rating
              </label>
              <select
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all cursor-pointer font-medium"
              >
                <option value={5}>★★★★★ (5 Stars - Exceptional)</option>
                <option value={4}>★★★★☆ (4 Stars - Strong)</option>
                <option value={3}>★★★☆☆ (3 Stars - Neutral)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Avatar or Company Logo URL (Optional)
              </label>
              <input
                type="text"
                placeholder="https://images.unsplash.com/... or relative path"
                value={form.image_path}
                onChange={(e) => setForm({ ...form, image_path: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all font-mono"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5">
                Testimonial Quotation
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe their experience working with Codex Dynamics engineering..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
              />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-label select-none">
                <input
                  type="checkbox"
                  checked={form.is_published}
                  onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
                  className="rounded text-blue focus:ring-blue size-4 border-black/15 cursor-pointer"
                />
                <span>Display on public home page review carousel</span>
              </label>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer"
                >
                  Save Review
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Edit Review Modal */}
      {editingReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="surface-lift w-full max-w-lg rounded-3xl bg-card border border-black/10 p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-hairline">
              <div className="flex items-center gap-2">
                <Edit3 className="size-4 text-amber-500" />
                <h3 className="text-sm font-semibold text-label">
                  Edit Review #{editingReview.id}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingReview(null)}
                className="p-1.5 text-subtle hover:text-label rounded-full hover:bg-fill transition"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Author Name & Title
                </label>
                <input
                  type="text"
                  required
                  value={editForm.author}
                  onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Star Rating
                </label>
                <select
                  value={editForm.rating}
                  onChange={(e) => setEditForm({ ...editForm, rating: Number(e.target.value) })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition"
                >
                  <option value={5}>★★★★★ (5 Stars)</option>
                  <option value={4}>★★★★☆ (4 Stars)</option>
                  <option value={3}>★★★☆☆ (3 Stars)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Avatar / Logo URL (Optional)
                </label>
                <input
                  type="text"
                  value={editForm.image_path}
                  onChange={(e) => setEditForm({ ...editForm, image_path: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1">
                  Comment / Review Quote
                </label>
                <textarea
                  rows={3}
                  required
                  value={editForm.comment}
                  onChange={(e) => setEditForm({ ...editForm, comment: e.target.value })}
                  className="w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-2.5 text-xs text-label outline-none transition"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-hairline">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-label select-none">
                  <input
                    type="checkbox"
                    checked={editForm.is_published}
                    onChange={(e) => setEditForm({ ...editForm, is_published: e.target.checked })}
                    className="rounded text-blue focus:ring-blue size-4 border-black/15 cursor-pointer"
                  />
                  <span>Published on public site</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingReview(null)}
                    className="px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition shadow-sm cursor-pointer"
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
          <div className="md:col-span-3 surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle">
            No testimonials added yet. Click "Add Review" to feature client feedback.
          </div>
        ) : (
          reviews.map((r) => (
            <div
              key={r.id}
              className="surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
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
                    className={`text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${
                      r.is_published
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-black/5 text-subtle"
                    }`}
                  >
                    {r.is_published ? "● Live" : "○ Draft"}
                  </button>
                </div>

                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-hairline flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {r.image_path ? (
                    <img
                      src={r.image_path}
                      alt={r.author}
                      className="size-6 rounded-full object-cover border border-black/10"
                    />
                  ) : (
                    <div className="size-6 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center">
                      {r.author.charAt(0)}
                    </div>
                  )}
                  <span className="text-xs font-semibold text-label">
                    {r.author}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleStartEdit(r)}
                    className="p-1.5 text-subtle hover:text-blue rounded-full hover:bg-blue/10 transition-colors cursor-pointer"
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
                    className="p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer"
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
