import { Megaphone, MessageSquare, FormInput, Sparkles } from "lucide-react";
import type { SiteConfig } from "@/types/site-editor";

interface ConversionSettingsSectionProps {
  config: SiteConfig;
  onChange: (updated: SiteConfig) => void;
}

const BANNER_VARIANTS = [
  { id: "blue", name: "Codex Blue", bgClass: "bg-blue text-white", borderClass: "border-blue" },
  { id: "dark", name: "Obsidian Black", bgClass: "bg-[#111113] text-white", borderClass: "border-[#111113]" },
  { id: "gradient", name: "Studio Gradient", bgClass: "bg-gradient-to-r from-blue via-indigo-600 to-purple-600 text-white", borderClass: "border-indigo-600" },
  { id: "amber", name: "Gold Amber", bgClass: "bg-amber-500 text-black font-semibold", borderClass: "border-amber-500" },
  { id: "emerald", name: "Growth Emerald", bgClass: "bg-emerald-600 text-white", borderClass: "border-emerald-600" },
] as const;

export function ConversionSettingsSection({ config, onChange }: ConversionSettingsSectionProps) {
  const banner = config.banner || {
    enabled: true,
    text: "Q3 Studio Booking Open — 2 Slots Remaining for Enterprise Architecture Rebuilds",
    ctaText: "Book Discovery Call",
    ctaUrl: "#contact",
    variant: "blue",
    dismissible: true,
  };

  const whatsapp = config.whatsapp || {
    enabled: true,
    phone: "+380630000000",
    defaultMessage: "Hello Codex Dynamics studio, I would like to discuss a new high-performance web project.",
    position: "bottom-right",
    showExtraChannels: true,
  };

  const contactForm = config.contactForm || {
    showBudget: true,
    showTimeline: true,
    showCompany: true,
    showServiceSelect: true,
    customSuccessMessage: "Inquiry received. Our engineering leads will review and respond within 24 hours.",
  };

  return (
    <div className="space-y-8">
      {/* 1. Global Announcement / Promo Banner Bar */}
      <div className="rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue/10 text-blue">
              <Megaphone className="size-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-label">Top Announcement & Promo Banner</h3>
              <p className="text-xs text-subtle">
                High-converting notification bar fixed at the very top of all pages.
              </p>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer self-start sm:self-auto">
            <input
              type="checkbox"
              checked={banner.enabled}
              onChange={(e) =>
                onChange({
                  ...config,
                  banner: { ...banner, enabled: e.target.checked },
                })
              }
              className="size-4 accent-blue rounded cursor-pointer"
            />
            <span className="text-xs font-semibold text-label">
              {banner.enabled ? "Banner Active" : "Banner Disabled"}
            </span>
          </label>
        </div>

        {/* Live Preview */}
        {banner.enabled && (
          <div className="mb-6 p-3 rounded-xl border border-black/5 bg-black/[0.02]">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-subtle mb-1.5">
              Live Top Bar Preview:
            </span>
            <div
              className={`px-4 py-2.5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2 text-xs transition ${
                BANNER_VARIANTS.find((v) => v.id === banner.variant)?.bgClass || "bg-blue text-white"
              }`}
            >
              <div className="flex items-center gap-2 text-center sm:text-left">
                <Sparkles className="size-3.5 shrink-0" />
                <span>{banner.text || "Your announcement text here..."}</span>
              </div>
              {banner.ctaText && (
                <span className="shrink-0 px-2.5 py-1 rounded bg-white/20 text-white hover:bg-white/30 text-[11px] font-semibold">
                  {banner.ctaText} →
                </span>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-label mb-1">Banner Text / Headline</label>
            <input
              type="text"
              value={banner.text || ""}
              onChange={(e) =>
                onChange({
                  ...config,
                  banner: { ...banner, text: e.target.value },
                })
              }
              placeholder="e.g. Q3 Booking Open — 2 Slots Available"
              className="w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-label mb-1">CTA Button Text</label>
            <input
              type="text"
              value={banner.ctaText || ""}
              onChange={(e) =>
                onChange({
                  ...config,
                  banner: { ...banner, ctaText: e.target.value },
                })
              }
              placeholder="e.g. Book Discovery Call"
              className="w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-label mb-1">CTA Destination URL</label>
            <input
              type="text"
              value={banner.ctaUrl || ""}
              onChange={(e) =>
                onChange({
                  ...config,
                  banner: { ...banner, ctaUrl: e.target.value },
                })
              }
              placeholder="#contact or https://..."
              className="w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-label mb-2">Color & Style Theme</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {BANNER_VARIANTS.map((v) => {
                const isSelected = banner.variant === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() =>
                      onChange({
                        ...config,
                        banner: { ...banner, variant: v.id as any },
                      })
                    }
                    className={`p-2.5 rounded-lg border text-center transition cursor-pointer text-xs ${v.bgClass} ${
                      isSelected ? "ring-2 ring-offset-2 ring-blue" : "opacity-85 hover:opacity-100"
                    }`}
                  >
                    {v.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 2. WhatsApp Dock & Floating Action Hub */}
      <div className="rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600">
              <MessageSquare className="size-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-label">WhatsApp Floating Action Dock</h3>
              <p className="text-xs text-subtle">
                Fixed corner trigger connecting high-intent visitors directly to your messengers.
              </p>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer self-start sm:self-auto">
            <input
              type="checkbox"
              checked={whatsapp.enabled}
              onChange={(e) =>
                onChange({
                  ...config,
                  whatsapp: { ...whatsapp, enabled: e.target.checked },
                })
              }
              className="size-4 accent-emerald-600 rounded cursor-pointer"
            />
            <span className="text-xs font-semibold text-label">
              {whatsapp.enabled ? "WhatsApp Dock Active" : "WhatsApp Dock Disabled"}
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <div>
            <label className="block text-xs font-semibold text-label mb-1">WhatsApp Phone Number</label>
            <input
              type="text"
              value={whatsapp.phone || ""}
              onChange={(e) =>
                onChange({
                  ...config,
                  whatsapp: { ...whatsapp, phone: e.target.value },
                })
              }
              placeholder="+380630000000"
              className="w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-label mb-1">Dock Screen Position</label>
            <select
              value={whatsapp.position || "bottom-right"}
              onChange={(e) =>
                onChange({
                  ...config,
                  whatsapp: { ...whatsapp, position: e.target.value as any },
                })
              }
              className="w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label cursor-pointer"
            >
              <option value="bottom-right">Bottom Right (Standard)</option>
              <option value="bottom-left">Bottom Left (Alternative)</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-label mb-1">Pre-filled WhatsApp Message</label>
            <textarea
              rows={2}
              value={whatsapp.defaultMessage || ""}
              onChange={(e) =>
                onChange({
                  ...config,
                  whatsapp: { ...whatsapp, defaultMessage: e.target.value },
                })
              }
              placeholder="Message that automatically populates the visitor's WhatsApp chat..."
              className="w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label resize-none"
            />
          </div>

          <div className="sm:col-span-2 pt-3 border-t border-hairline">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={whatsapp.showExtraChannels}
                onChange={(e) =>
                  onChange({
                    ...config,
                    whatsapp: { ...whatsapp, showExtraChannels: e.target.checked },
                  })
                }
                className="size-4 accent-emerald-600 rounded cursor-pointer"
              />
              <span className="text-xs text-label font-medium">
                Enable multi-channel quick flyout (Telegram, Viber, Direct Call, Email)
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* 3. Contact Form Field Builder */}
      <div className="rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600">
            <FormInput className="size-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-label">Contact Form Fields & Lead Qualification</h3>
            <p className="text-xs text-subtle">
              Toggle specific qualification fields to gather budget, company and timeline requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          <label className="p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer">
            <div>
              <span className="text-xs font-semibold text-label block">Company / Brand Name</span>
              <span className="text-[11px] text-subtle">Collect client brand organization</span>
            </div>
            <input
              type="checkbox"
              checked={contactForm.showCompany !== false}
              onChange={(e) =>
                onChange({
                  ...config,
                  contactForm: { ...contactForm, showCompany: e.target.checked },
                })
              }
              className="size-4 accent-blue rounded cursor-pointer"
            />
          </label>

          <label className="p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer">
            <div>
              <span className="text-xs font-semibold text-label block">Service Focus Dropdown</span>
              <span className="text-[11px] text-subtle">Client selects engineering vs branding vs SMM</span>
            </div>
            <input
              type="checkbox"
              checked={contactForm.showServiceSelect !== false}
              onChange={(e) =>
                onChange({
                  ...config,
                  contactForm: { ...contactForm, showServiceSelect: e.target.checked },
                })
              }
              className="size-4 accent-blue rounded cursor-pointer"
            />
          </label>

          <label className="p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer">
            <div>
              <span className="text-xs font-semibold text-label block">Budget Range Selector</span>
              <span className="text-[11px] text-subtle">Filters inquiries ($3k, $5k, $10k, $25k+)</span>
            </div>
            <input
              type="checkbox"
              checked={contactForm.showBudget !== false}
              onChange={(e) =>
                onChange({
                  ...config,
                  contactForm: { ...contactForm, showBudget: e.target.checked },
                })
              }
              className="size-4 accent-blue rounded cursor-pointer"
            />
          </label>

          <label className="p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer">
            <div>
              <span className="text-xs font-semibold text-label block">Target Timeline Selector</span>
              <span className="text-[11px] text-subtle">Gauges urgency (&lt; 2 weeks, 1 month, etc.)</span>
            </div>
            <input
              type="checkbox"
              checked={contactForm.showTimeline !== false}
              onChange={(e) =>
                onChange({
                  ...config,
                  contactForm: { ...contactForm, showTimeline: e.target.checked },
                })
              }
              className="size-4 accent-blue rounded cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
