import {
  Users,
  UserPlus,
  Link2,
  FileText,
  Star,
  Briefcase,
  Contact,
} from "lucide-react";
import type { CrmStats } from "@/types/crm";
import type { AdminTabKey } from "./AdminSidebar";

interface AdminMetricsProps {
  stats: CrmStats;
  activeTab: string;
  setActiveTab: (tab: AdminTabKey) => void;
}

export function AdminMetrics({ stats, activeTab, setActiveTab }: AdminMetricsProps) {
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
    </div>
  );
}
