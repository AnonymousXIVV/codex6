import {
  Users,
  UserPlus,
  Link2,
  FileText,
  Star,
  Briefcase,
  Contact,
  Globe,
  Sparkles,
  Palette,
  Layout,
  Megaphone,
  AlertTriangle,
} from "lucide-react";
import type { CrmStats } from "@/types/crm";
import type { AdminTabKey } from "./AdminSidebar";
import { useSiteConfig } from "@/context/SiteConfigContext";

interface AdminMetricsProps {
  stats: CrmStats;
  activeTab: string;
  setActiveTab: (tab: AdminTabKey) => void;
}

export function AdminMetrics({ stats, activeTab, setActiveTab }: AdminMetricsProps) {
  const { config } = useSiteConfig();
  const isMaintenance = Boolean(config.emergency?.maintenanceMode);
  const activePreset = config.branding?.preset || "codex_blue";
  const primaryColor = config.branding?.primaryColor || "#0066FF";
  const isCustomizerActive =
    activeTab === "customizer" ||
    activeTab === "branding" ||
    activeTab === "layout" ||
    activeTab === "conversion" ||
    activeTab === "seo_studio" ||
    activeTab === "emergency";
  const isContentActive = activeTab === "content" || activeTab === "site_content";
  const cards = [
    {
      id: "visitors" as const,
      title: "Total Visitors",
      value: stats.totalVisitors,
      subValue: `+${stats.todayVisitors} today`,
      icon: Users,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      accent: "text-emerald-600",
    },
    {
      id: "leads" as const,
      title: "CRM Leads",
      value: stats.totalLeads ?? 0,
      subValue: `${stats.newLeads ?? 0} new inbound`,
      icon: Contact,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      accent: "text-emerald-600",
    },
    {
      id: "enquiries" as const,
      title: "Inquiries",
      value: stats.totalEnquiries,
      subValue: "Form submissions",
      icon: UserPlus,
      badgeColor: "bg-blue/10 text-blue border-blue/20",
      accent: "text-blue",
    },
    {
      id: "backlinks" as const,
      title: "SEO Backlinks",
      value: stats.totalBacklinks,
      subValue: "Indexed domains",
      icon: Link2,
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
      accent: "text-purple-600",
    },
    {
      id: "blogs" as const,
      title: "Blog Articles",
      value: stats.totalBlogs,
      subValue: "Rank Math ready",
      icon: FileText,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
      accent: "text-amber-600",
    },
    {
      id: "reviews" as const,
      title: "Client Reviews",
      value: stats.totalReviews,
      subValue: "5.0 ★ average",
      icon: Star,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
      accent: "text-amber-500",
    },
    {
      id: "projects" as const,
      title: "Portfolio Sites",
      value: stats.totalProjects,
      subValue: "Active showcases",
      icon: Briefcase,
      badgeColor: "bg-blue/10 text-blue border-blue/20",
      accent: "text-blue",
    },
  ];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
        {cards.map((c) => {
          const Icon = c.icon;
          const isSelected = activeTab === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveTab(c.id as any)}
              className={`surface-lift text-left p-4 rounded-2xl bg-card border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "border-blue/50 ring-2 ring-blue/10 shadow-sm"
                  : "border-black/8 hover:border-black/15 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-subtle">
                  {c.title}
                </span>
                <div className={`p-1 rounded-lg ${c.badgeColor}`}>
                  <Icon className="size-3.5" />
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight font-display text-label">
                  {c.value}
                </span>
              </div>

              <div className="text-[11px] font-medium text-muted-foreground mt-1 truncate">
                {c.subValue}
              </div>
            </button>
          );
        })}
      </div>

      {/* Studio Customizer Quick Control Deck */}
      <div className="surface-lift rounded-2xl bg-gradient-to-r from-blue/5 via-purple-500/5 to-emerald-500/5 border border-black/10 p-4 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-blue text-white flex items-center justify-center shadow-xs shrink-0">
              <Sparkles className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-bold text-sm text-label">
                  Studio Customizer & Site Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-black/10 shadow-2xs">
                  <span
                    className="size-2 rounded-full ring-1 ring-black/10 shrink-0"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <span className="text-muted-foreground capitalize">
                    {activePreset.replace("_", " ")}
                  </span>
                </span>
                {isMaintenance && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-600 text-white uppercase animate-pulse">
                    Maintenance Active
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Live visual branding, section order, conversion docks, search metadata, and emergency mode.
              </p>
            </div>
          </div>

          {/* Quick Jump Sub-Tab Buttons */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("branding")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${
                activeTab === "branding"
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white hover:bg-black/5 text-label border-black/10"
              }`}
            >
              <Palette className="size-3.5 text-purple-600" />
              <span>Theme & Colors</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("layout")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${
                activeTab === "layout"
                  ? "bg-amber-600 text-white border-amber-600"
                  : "bg-white hover:bg-black/5 text-label border-black/10"
              }`}
            >
              <Layout className="size-3.5 text-amber-600" />
              <span>Sections & Order</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("conversion")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${
                activeTab === "conversion"
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-white hover:bg-black/5 text-label border-black/10"
              }`}
            >
              <Megaphone className="size-3.5 text-emerald-600" />
              <span>WhatsApp & Docks</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("seo_studio")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${
                activeTab === "seo_studio"
                  ? "bg-sky-600 text-white border-sky-600"
                  : "bg-white hover:bg-black/5 text-label border-black/10"
              }`}
            >
              <Globe className="size-3.5 text-sky-600" />
              <span>SEO & SERP</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("emergency")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${
                activeTab === "emergency"
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white hover:bg-black/5 text-label border-black/10"
              }`}
            >
              <AlertTriangle className="size-3.5 text-red-600" />
              <span>Emergency</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("customizer")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer shadow-xs ${
                isCustomizerActive && activeTab === "customizer"
                  ? "bg-blue text-white"
                  : "bg-blue hover:bg-blue-600 text-white"
              }`}
            >
              <Sparkles className="size-3.5" />
              <span>Full Studio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Jump Bar for Live Website Content & Contacts */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-blue/5 border border-blue/15 text-xs">
        <div className="flex items-center gap-2.5 text-label font-medium">
          <span className="size-6 rounded-lg bg-blue/10 text-blue flex items-center justify-center shrink-0">
            <Globe className="size-3.5" />
          </span>
          <span className="text-xs text-label font-medium">
            Manage public site contacts, phone, WhatsApp, email, studio address & social accounts
          </span>
        </div>
        <button
          type="button"
          onClick={() => setActiveTab("content")}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs cursor-pointer ${
            isContentActive
              ? "bg-blue text-white"
              : "bg-blue text-white hover:bg-blue-dark"
          }`}
        >
          <Globe className="size-3.5" />
          <span>{isContentActive ? "Editing Site Content Below" : "Edit Site Contacts & Socials"}</span>
        </button>
      </div>
    </div>
  );
}
