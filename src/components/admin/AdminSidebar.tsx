import {
  Activity,
  BarChart3,
  Inbox,
  Link2,
  FileText,
  Star,
  Briefcase,
  LogOut,
  X,
  ChevronRight,
  Shield,
  Users,
  MessageSquare,
  Globe,
  Palette,
  Layout,
  Megaphone,
  AlertTriangle,
  Phone,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { CrmStats } from "@/types/crm";
import { useSiteConfig } from "@/context/SiteConfigContext";

export type AdminTabKey =
  | "customizer"
  | "branding"
  | "layout"
  | "conversion"
  | "seo_studio"
  | "emergency"
  | "content"
  | "site_content"
  | "tidio"
  | "visitors"
  | "leads"
  | "analytics"
  | "backlinks"
  | "blogs"
  | "enquiries"
  | "reviews"
  | "projects"
  | "settings";

interface AdminSidebarProps {
  activeTab: AdminTabKey;
  setActiveTab: (tab: AdminTabKey) => void;
  stats: CrmStats;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onOpenHostingerModal: () => void;
  onSimulateVisitor: () => void;
  onLogout: () => void;
}

export function AdminSidebar({
  activeTab,
  setActiveTab,
  stats,
  isOpenMobile,
  onCloseMobile,
  onOpenHostingerModal: _onOpenHostingerModal,
  onSimulateVisitor: _onSimulateVisitor,
  onLogout,
}: AdminSidebarProps) {
  const { config } = useSiteConfig();
  const isMaintenance = Boolean(config.emergency?.maintenanceMode);

  const navSections = [
    {
      group: "Studio & Site Customizer",
      items: [
        {
          id: "branding" as const,
          label: "Visual Branding & Colors",
          icon: Palette,
          count: null,
          badgeLive: false,
          badgeText: "Theme",
          badgeColor: "bg-purple-50 text-purple-700 border-purple-200/70",
        },
        {
          id: "layout" as const,
          label: "Layout & Sections Builder",
          icon: Layout,
          count: null,
          badgeLive: false,
          badgeText: "Reorder",
          badgeColor: "bg-amber-50 text-amber-700 border-amber-200/70",
        },
        {
          id: "conversion" as const,
          label: "Conversion & Floating Docks",
          icon: Megaphone,
          count: null,
          badgeLive: false,
          badgeText: "WhatsApp",
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
        },
        {
          id: "seo_studio" as const,
          label: "SEO & Social Sharing",
          icon: Globe,
          count: null,
          badgeLive: false,
          badgeText: "SERP & OG",
          badgeColor: "bg-sky-50 text-sky-700 border-sky-200/70",
        },
        {
          id: "emergency" as const,
          label: "Emergency & Snapshots",
          icon: AlertTriangle,
          count: null,
          badgeLive: isMaintenance,
          badgeText: isMaintenance ? "MAINTENANCE" : "Backups",
          badgeColor: isMaintenance
            ? "bg-red-600 text-white border-red-600 animate-pulse"
            : "bg-black/5 text-subtle border-black/5",
        },
        {
          id: "content" as const,
          label: "Site Contacts & Socials",
          icon: Phone,
          count: null,
          badgeLive: false,
          badgeText: "Public Copy",
          badgeColor: "bg-black/5 text-subtle border-black/5",
        },
      ],
    },
    {
      group: "Live Chat & Telemetry",
      items: [
        {
          id: "tidio" as const,
          label: "Live Chat & Tidio",
          icon: MessageSquare,
          count: (stats.unreadChatCount && stats.unreadChatCount > 0) ? stats.unreadChatCount : (stats.activeChatThreads || null),
          badgeLive: Boolean(stats.activeChatThreads && stats.activeChatThreads > 0),
          badgeText: (stats.unreadChatCount && stats.unreadChatCount > 0) ? `${stats.unreadChatCount} new` : null,
          badgeColor: (stats.unreadChatCount && stats.unreadChatCount > 0) ? "bg-red-500 text-white border-red-500" : "bg-[#0066FF]/10 text-[#0066FF] border-[#0066FF]/20",
        },
        {
          id: "visitors" as const,
          label: "Live Visitors",
          icon: Activity,
          count: stats.totalVisitors,
          badgeLive: true,
          badgeText: null,
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
        },
        {
          id: "analytics" as const,
          label: "Analytics & Regions",
          icon: BarChart3,
          count: null,
          badgeLive: false,
          badgeText: null,
          badgeColor: "",
        },
      ],
    },
    {
      group: "Clients & Inquiries",
      items: [
        {
          id: "leads" as const,
          label: "CRM Leads",
          icon: Users,
          count: stats.totalLeads ?? 0,
          badgeLive: (stats.newLeads ?? 0) > 0,
          badgeText: null,
          badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
        },
        {
          id: "enquiries" as const,
          label: "Inquiries",
          icon: Inbox,
          count: stats.totalEnquiries,
          badgeLive: false,
          badgeText: null,
          badgeColor: "bg-blue/10 text-blue border-blue/20",
        },
        {
          id: "reviews" as const,
          label: "Client Reviews",
          icon: Star,
          count: stats.totalReviews,
          badgeLive: false,
          badgeText: null,
          badgeColor: "bg-amber-50 text-amber-700 border-amber-200/70",
        },
      ],
    },
    {
      group: "Content & Optimization",
      items: [
        {
          id: "blogs" as const,
          label: "Rank Math Blogs",
          icon: FileText,
          count: stats.totalBlogs,
          badgeLive: false,
          badgeText: null,
          badgeColor: "bg-blue/10 text-blue border-blue/20",
        },
        {
          id: "backlinks" as const,
          label: "SEO Backlinks",
          icon: Link2,
          count: stats.totalBacklinks,
          badgeLive: false,
          badgeText: null,
          badgeColor: "bg-purple-50 text-purple-700 border-purple-200/70",
        },
        {
          id: "projects" as const,
          label: "Portfolio Projects",
          icon: Briefcase,
          count: stats.totalProjects,
          badgeLive: false,
          badgeText: null,
          badgeColor: "bg-black/5 text-subtle border-black/5",
        },
      ],
    },
    {
      group: "System & Security",
      items: [
        {
          id: "settings" as const,
          label: "Security & Database",
          icon: Shield,
          count: null,
          badgeLive: false,
          badgeText: "SQLite",
          badgeColor: "bg-black/5 text-subtle border-black/5",
        },
      ],
    },
  ];

  const handleSelectTab = (id: AdminTabKey) => {
    setActiveTab(id);
    onCloseMobile();
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#fbfbfd] border-r border-black/8 select-none">
      {/* Brand Header */}
      <div className="p-5 pb-4 border-b border-black/6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={onCloseMobile}
        >
          <span className="relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-blue text-paper shadow-[inset_0_0.5px_0_rgb(255_255_255_/_0.35)] transition-transform duration-200 group-hover:scale-105">
            <span className="text-sm leading-none font-bold tracking-tight">C</span>
          </span>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-semibold text-sm tracking-tight text-label">
                Codex Dynamics
              </span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-blue/10 text-blue border border-blue/20 uppercase">
                Pro
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground font-medium">
              Back Office CRM
            </span>
          </div>
        </Link>

        {/* Mobile close button */}
        <button
          type="button"
          onClick={onCloseMobile}
          className="lg:hidden p-1.5 rounded-full text-subtle hover:text-label hover:bg-fill transition-colors cursor-pointer"
          aria-label="Close sidebar"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 px-3 py-2 space-y-5 overflow-y-auto custom-scrollbar">
        {navSections.map((section) => (
          <div key={section.group} className="space-y-1">
            <div className="px-3 text-[10px] font-semibold tracking-wider uppercase text-subtle font-mono">
              {section.group}
            </div>

            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectTab(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "bg-white text-label font-semibold shadow-xs border border-black/8 ring-1 ring-black/4"
                        : "text-muted-foreground hover:text-label hover:bg-black/[0.03]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon
                        className={`size-4 shrink-0 transition-colors ${
                          isActive ? "text-blue" : "text-subtle"
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {item.badgeLive && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                      )}

                      {item.badgeText && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-medium border ${
                            isActive
                              ? "bg-blue/10 text-blue border-blue/20 font-semibold"
                              : "bg-black/5 text-subtle border-black/5"
                          }`}
                        >
                          {item.badgeText}
                        </span>
                      )}

                      {typeof item.count === "number" && (
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${
                            isActive
                              ? "bg-blue/10 text-blue border-blue/20 font-semibold"
                              : item.badgeColor || "bg-black/5 text-subtle border-black/5"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}

                      {isActive && (
                        <ChevronRight className="size-3 text-blue shrink-0 ml-0.5" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Admin User Footer Card */}
      <div className="p-3 border-t border-black/6 bg-white/60">
        <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-black/6 shadow-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="size-8 rounded-full bg-label text-paper flex items-center justify-center text-xs font-semibold shrink-0 shadow-xs">
              AD
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-label truncate">
                Codex Admin
              </span>
              <span className="text-[10px] text-muted-foreground truncate font-mono">
                admin@codexdynamics.com
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onLogout}
            className="p-1.5 rounded-lg text-subtle hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer shrink-0 ml-1"
            title="Sign Out of Back Office"
            aria-label="Sign Out"
          >
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 xl:w-72 fixed inset-y-0 left-0 z-30 shadow-xs">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] transform transition-transform duration-200 ease-in-out lg:hidden shadow-2xl ${
          isOpenMobile ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </div>
    </>
  );
}
