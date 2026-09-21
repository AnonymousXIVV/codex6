import {
  Menu,
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
  RotateCw,
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
    label: "Studio Customizer",
    icon: Sparkles,
    subtitle: "Complete visual branding, section order, conversion docks, and SEO controls",
  },
  branding: {
    label: "Visual Branding & Themes",
    icon: Palette,
    subtitle: "Colorways, custom primary accents, corner radius, typography, and logos",
  },
  layout: {
    label: "Layout & Sections Builder",
    icon: Layout,
    subtitle: "Reorder homepage sections, toggle visibility, and configure header styles",
  },
  conversion: {
    label: "Conversion & Floating Docks",
    icon: Megaphone,
    subtitle: "Global announcement bar, WhatsApp floating dock, and lead qualification",
  },
  seo_studio: {
    label: "SEO & Social Sharing Studio",
    icon: Globe,
    subtitle: "Meta tags, Google SERP preview, OpenGraph social card, and telemetry",
  },
  emergency: {
    label: "Emergency Mode & Backups",
    icon: AlertTriangle,
    subtitle: "Maintenance mode toggle, SQLite database snapshots, and safety settings",
  },
  tidio: {
    label: "Live Chat & Tidio Inbox",
    icon: MessageSquare,
    subtitle: "Real-time client chat automation, lead triggers, and conversation desk",
  },
  content: {
    label: "Site Contacts & Socials",
    icon: Globe,
    subtitle: "Public phone numbers, WhatsApp, addresses, social profiles, and hero copy",
  },
  site_content: {
    label: "Site Contacts & Socials",
    icon: Globe,
    subtitle: "Public phone numbers, WhatsApp, addresses, social profiles, and hero copy",
  },
  visitors: {
    label: "Live Visitors",
    icon: Activity,
    subtitle: "Real-time traffic telemetry, IP geolocation, and clickstream logging",
  },
  leads: {
    label: "CRM Leads & Pipeline",
    icon: Users,
    subtitle: "Qualified prospects from visitor telemetry, contact forms, and inquiries",
  },
  analytics: {
    label: "Analytics & Demographics",
    icon: BarChart3,
    subtitle: "Audience countries, browser distribution, and device metrics",
  },
  enquiries: {
    label: "Inquiries & Submissions",
    icon: Inbox,
    subtitle: "Direct contact form submissions and project estimate requests",
  },
  backlinks: {
    label: "SEO Backlinks",
    icon: Link2,
    subtitle: "Referring domains, authority scores, and indexed citation monitoring",
  },
  blogs: {
    label: "Blogs & Rank Math",
    icon: FileText,
    subtitle: "Published articles, on-page SEO analysis, and search snippets",
  },
  reviews: {
    label: "Client Reviews",
    icon: Star,
    subtitle: "Verified customer testimonials and 5-star rating showcases",
  },
  projects: {
    label: "Portfolio Projects",
    icon: Briefcase,
    subtitle: "Featured client websites, agency case studies, and live deliverables",
  },
  settings: {
    label: "Security & Database",
    icon: Shield,
    subtitle: "Admin credentials, lead alert webhooks, and database backup controls",
  },
};

export function AdminHeader({
  activeTab,
  loading,
  onRefresh,
  onOpenMobileSidebar,
}: AdminHeaderProps) {
  const current = tabMeta[activeTab] || tabMeta.visitors;
  const TabIcon = current.icon;

  return (
    <header className="sticky top-0 z-20 bg-white/85 backdrop-blur-xl border-b border-black/[0.08] px-4 sm:px-6 lg:px-8 py-3 transition-colors">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Section Breadcrumb */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-neutral-600 hover:text-neutral-900 hover:bg-black/5 border border-black/[0.08] transition-colors cursor-pointer shrink-0"
            aria-label="Open sidebar menu"
          >
            <Menu className="size-4" />
          </button>

          {/* Current Tab Info */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex size-8 items-center justify-center rounded-lg bg-[#0071E3]/10 text-[#0071E3] shrink-0">
              <TabIcon className="size-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <h1 className="text-sm sm:text-base font-semibold text-neutral-900 truncate leading-tight tracking-tight">
                {current.label}
              </h1>
              <p className="hidden sm:block text-[11px] text-neutral-500 truncate leading-tight mt-0.5">
                {current.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Status & Refresh */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100/80 border border-black/[0.04] text-[11px] text-neutral-600 font-medium">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SQLite Active</span>
          </div>

          <button
            type="button"
            onClick={onRefresh}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-neutral-100 border border-black/[0.08] text-neutral-700 text-xs font-medium transition-all shadow-2xs cursor-pointer disabled:opacity-50"
            title="Refresh database data"
          >
            <RotateCw className={`size-3.5 text-neutral-500 ${loading ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
        </div>
      </div>
    </header>
  );
}
