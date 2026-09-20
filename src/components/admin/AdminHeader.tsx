import { Link } from "@tanstack/react-router";
import {
  RefreshCw,
  ExternalLink,
  Menu,
  Database,
  Download,
  Activity,
  BarChart3,
  Inbox,
  Link2,
  FileText,
  Star,
  Briefcase,
  Shield,
  Users,
  MessageSquare,
  Globe,
  Sparkles,
  Palette,
  Layout,
  Megaphone,
  AlertTriangle,
} from "lucide-react";
import type { AdminTabKey } from "./AdminSidebar";

interface AdminHeaderProps {
  activeTab: AdminTabKey;
  loading: boolean;
  onRefresh: () => void;
  onOpenMobileSidebar: () => void;
  onOpenHostingerModal: () => void;
  onLogout: () => void;
  onSelectTab?: (tab: AdminTabKey) => void;
}

const tabMeta: Record<AdminTabKey, { label: string; icon: any; subtitle: string }> = {
  customizer: {
    label: "Studio Customizer & Visual Architecture",
    icon: Sparkles,
    subtitle: "Complete visual branding, section order, conversion docks, SEO and emergency controls",
  },
  branding: {
    label: "Visual Branding & Themes",
    icon: Palette,
    subtitle: "Colorways, custom HEX primary accents, corner radius tokens, typography and logos",
  },
  layout: {
    label: "Layout & Sections Builder",
    icon: Layout,
    subtitle: "Reorder homepage sections with up/down controls, toggle visibility, and hero & header styles",
  },
  conversion: {
    label: "Conversion Tools & Floating Docks",
    icon: Megaphone,
    subtitle: "Global announcement bar, WhatsApp floating dock, multi-channel flyout, and lead form qualification",
  },
  seo_studio: {
    label: "SEO & Social Sharing Studio",
    icon: Globe,
    subtitle: "Meta tags with character counters, live Google SERP preview, OpenGraph social card, and GA4 telemetry",
  },
  emergency: {
    label: "Emergency Mode & Snapshots",
    icon: AlertTriangle,
    subtitle: "Public maintenance countdown screen, 1-click SQLite configuration snapshots, and code injection",
  },
  tidio: {
    label: "Tidio Live Chat",
    icon: MessageSquare,
    subtitle: "Live customer chat automation, lead triggers, and visitor conversation desk",
  },
  content: {
    label: "Site Contacts, Socials & Copy",
    icon: Globe,
    subtitle: "Manage live phone numbers, WhatsApp, addresses, header social icons, and site hero copy",
  },
  site_content: {
    label: "Site Contacts, Socials & Copy",
    icon: Globe,
    subtitle: "Manage live phone numbers, WhatsApp, addresses, header social icons, and site hero copy",
  },
  visitors: {
    label: "Live Visitors",
    icon: Activity,
    subtitle: "Real-time traffic telemetry and IP location logging",
  },
  leads: {
    label: "CRM Leads Database",
    icon: Users,
    subtitle: "Qualified prospects from visitor telemetry, contact forms, and blog readers",
  },
  analytics: {
    label: "Analytics & Regions",
    icon: BarChart3,
    subtitle: "Audience demographics, browser share, and device metrics",
  },
  enquiries: {
    label: "Inquiries & Leads",
    icon: Inbox,
    subtitle: "Client project estimates and direct contact submissions",
  },
  backlinks: {
    label: "SEO Backlinks",
    icon: Link2,
    subtitle: "High-authority referring domains and citation tracking",
  },
  blogs: {
    label: "Blogs & Rank Math",
    icon: FileText,
    subtitle: "On-page SEO scoring and search snippet optimization",
  },
  reviews: {
    label: "Client Reviews",
    icon: Star,
    subtitle: "Verified customer testimonials and social proof ratings",
  },
  projects: {
    label: "Portfolio Projects",
    icon: Briefcase,
    subtitle: "Featured production websites and client case studies",
  },
  settings: {
    label: "Security & Database",
    icon: Shield,
    subtitle: "Security credentials, instant lead webhooks, and database backups",
  },
};

export function AdminHeader({
  activeTab,
  loading,
  onRefresh,
  onOpenMobileSidebar,
  onOpenHostingerModal,
  onSelectTab,
}: AdminHeaderProps) {
  const current = tabMeta[activeTab] || tabMeta.visitors;
  const TabIcon = current.icon;
  const isCustomizerActive =
    activeTab === "customizer" ||
    activeTab === "branding" ||
    activeTab === "layout" ||
    activeTab === "conversion" ||
    activeTab === "seo_studio" ||
    activeTab === "emergency";
  const isContentActive = activeTab === "content" || activeTab === "site_content";

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-black/8 px-4 sm:px-6 lg:px-8 py-3.5 transition-colors">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Section Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-subtle hover:text-label hover:bg-fill border border-black/8 transition-colors cursor-pointer shrink-0"
            aria-label="Open sidebar menu"
          >
            <Menu className="size-4 text-label" />
          </button>

          {/* Current Tab Info */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="hidden sm:flex p-1.5 rounded-lg bg-blue/10 text-blue shrink-0">
              <TabIcon className="size-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 text-xs text-subtle font-mono">
                <span className="hidden sm:inline">Codex CRM</span>
                <span className="hidden sm:inline">/</span>
                <span className="text-label font-semibold truncate font-sans text-sm sm:text-xs">
                  {current.label}
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-muted-foreground truncate">
                {current.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {onSelectTab && (
            <>
              <button
                type="button"
                onClick={() => onSelectTab("customizer")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all hover:shadow-xs cursor-pointer ${
                  isCustomizerActive
                    ? "bg-blue text-white border-blue shadow-xs"
                    : "bg-blue/10 hover:bg-blue/20 text-blue border-blue/25"
                }`}
                title="Open Studio Customizer (Branding, Layout, WhatsApp, SEO & Emergency)"
              >
                <Sparkles className="size-3.5" />
                <span>Studio Customizer</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab("content")}
                className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:shadow-xs cursor-pointer ${
                  isContentActive
                    ? "bg-black/90 text-white border-black/90 shadow-xs"
                    : "bg-fill hover:bg-fill-elevated text-label border-black/8"
                }`}
                title="Edit live phone, WhatsApp, email, addresses, header social buttons & site copy"
              >
                <Globe className="size-3.5" />
                <span>Contacts & Copy</span>
              </button>
            </>
          )}

          <button
            type="button"
            onClick={onOpenHostingerModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue/10 hover:bg-blue/15 text-blue text-xs font-semibold border border-blue/20 transition-all hover:shadow-xs cursor-pointer"
            title="Download Hostinger public_html ZIP Package"
          >
            <Download className="size-3.5 text-blue" />
            <span>Hostinger ZIP</span>
          </button>

          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs cursor-pointer disabled:opacity-50"
            title="Sync data with SQLite database"
          >
            <RefreshCw
              className={`size-3.5 text-muted-foreground ${
                loading ? "animate-spin text-blue" : ""
              }`}
            />
            <span className="hidden sm:inline">Sync DB</span>
          </button>

          <Link
            to="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-fill hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs"
            title="Open public website in new tab"
          >
            <ExternalLink className="size-3.5 text-muted-foreground" />
            <span className="hidden sm:inline">Public Site</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

