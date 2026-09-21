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
  const items = [
    {
      id: "visitors" as const,
      title: "Live Visitors",
      value: stats.totalVisitors,
      subValue: `+${stats.todayVisitors} today`,
      icon: Users,
    },
    {
      id: "leads" as const,
      title: "CRM Leads",
      value: stats.totalLeads ?? 0,
      subValue: `${stats.newLeads ?? 0} new active`,
      icon: Contact,
    },
    {
      id: "enquiries" as const,
      title: "Inquiries",
      value: stats.totalEnquiries,
      subValue: "Form inquiries",
      icon: UserPlus,
    },
    {
      id: "backlinks" as const,
      title: "Backlinks",
      value: stats.totalBacklinks,
      subValue: "Indexed domains",
      icon: Link2,
    },
    {
      id: "blogs" as const,
      title: "Blog Posts",
      value: stats.totalBlogs,
      subValue: "Published SEO",
      icon: FileText,
    },
    {
      id: "reviews" as const,
      title: "Reviews",
      value: stats.totalReviews,
      subValue: "5.0 ★ average",
      icon: Star,
    },
    {
      id: "projects" as const,
      title: "Showcase",
      value: stats.totalProjects,
      subValue: "Live projects",
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.03)] p-1.5 sm:p-2">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1 sm:gap-1.5">
        {items.map((item) => {
          const Icon = item.icon;
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`group flex flex-col p-3 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                isSelected
                  ? "bg-[#0071E3] text-white shadow-[0_2px_6px_rgba(0,113,227,0.25)]"
                  : "hover:bg-neutral-100/80 text-neutral-800"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span
                  className={`text-[11px] font-medium tracking-wide truncate ${
                    isSelected ? "text-white/80" : "text-neutral-500 group-hover:text-neutral-700"
                  }`}
                >
                  {item.title}
                </span>
                <Icon
                  className={`size-3.5 shrink-0 ${
                    isSelected ? "text-white" : "text-neutral-400 group-hover:text-neutral-600"
                  }`}
                />
              </div>

              <div className="flex items-baseline gap-1.5">
                <span
                  className={`text-xl sm:text-2xl font-bold tracking-tight ${
                    isSelected ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {item.value}
                </span>
              </div>

              <div
                className={`text-[11px] mt-0.5 truncate font-medium ${
                  isSelected ? "text-white/80" : "text-neutral-400"
                }`}
              >
                {item.subValue}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
