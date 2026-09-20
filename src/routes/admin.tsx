import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import type {
  Visitor,
  Lead,
  Enquiry,
  Backlink,
  BlogPost,
  Review,
  Project,
  CrmStats,
  RegionStat,
  BrowserStat,
  DeviceStat,
} from "@/types/crm";

import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminSidebar, type AdminTabKey } from "@/components/admin/AdminSidebar";
import { AdminMetrics } from "@/components/admin/AdminMetrics";
import { VisitorsTab } from "@/components/admin/VisitorsTab";
import { LeadsTab } from "@/components/admin/LeadsTab";
import { AnalyticsTab } from "@/components/admin/AnalyticsTab";
import { BacklinksTab } from "@/components/admin/BacklinksTab";
import { BlogsTab } from "@/components/admin/BlogsTab";
import { EnquiriesTab } from "@/components/admin/EnquiriesTab";
import { ReviewsTab } from "@/components/admin/ReviewsTab";
import { ProjectsTab } from "@/components/admin/ProjectsTab";
import { SettingsTab } from "@/components/admin/SettingsTab";
import { TidioTab } from "@/components/admin/TidioTab";
import { SiteContentTab } from "@/components/admin/SiteContentTab";
import { HostingerModal } from "@/components/admin/HostingerModal";

export const Route = createFileRoute("/admin")({ component: AdminCRM });

function AdminCRM() {
  const [isAuth, setIsAuth] = useState(false);
  const [emailInput, setEmailInput] = useState("admin@codexdynamics.com");
  const [passwordInput, setPasswordInput] = useState("Admin123!");
  const [authError, setAuthError] = useState("");
  const [isBlogEditing, setIsBlogEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTabKey>("visitors");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (activeTab !== "blogs") {
      setIsBlogEditing(false);
    }
  }, [activeTab]);

  const [loading, setLoading] = useState(true);
  const [isHostingerModalOpen, setIsHostingerModalOpen] = useState(false);

  const [stats, setStats] = useState<CrmStats>({
    totalVisitors: 0,
    todayVisitors: 0,
    totalEnquiries: 0,
    totalBacklinks: 0,
    totalBlogs: 0,
    totalReviews: 0,
    totalProjects: 0,
  });

  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [backlinks, setBacklinks] = useState<Backlink[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [regions, setRegions] = useState<RegionStat[]>([]);
  const [browsers, setBrowsers] = useState<BrowserStat[]>([]);
  const [devices, setDevices] = useState<DeviceStat[]>([]);
  const [webhookUrl, setWebhookUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("codex_admin_auth") === "true";
      if (stored) setIsAuth(true);
    }
  }, []);

  // Fetch CRM Data from SQLite API
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/crm/data");
      if (res.ok) {
        const json = await res.json();
        if (json.ok) {
          setStats(json.stats || {});
          setVisitors(json.visitors || []);
          setLeads(json.leads || []);
          setEnquiries(json.enquiries || []);
          setBacklinks(json.backlinks || []);
          setBlogs(json.blogs || []);
          setReviews(json.reviews || []);
          setProjects(json.projects || []);
          setRegions(json.regions || []);
          setBrowsers(json.browsers || []);
          setDevices(json.devices || []);
          if (json.settings?.webhookUrl !== undefined) {
            setWebhookUrl(json.settings.webhookUrl);
          }
        }
      }
    } catch {
      // Graceful fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuth) {
      void fetchData();
      const interval = setInterval(fetchData, 15000);
      return () => clearInterval(interval);
    }
  }, [isAuth]);

  // Dispatch API action to backend SQLite handler
  const dispatchAction = async (action: string, payload: Record<string, unknown>) => {
    try {
      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, ...payload }),
      });
      const data = await res.json();
      if (data.ok) {
        if (data.stats) setStats(data.stats);
        if (data.visitors) setVisitors(data.visitors);
        if (data.leads) setLeads(data.leads);
        if (data.enquiries) setEnquiries(data.enquiries);
        if (data.backlinks) setBacklinks(data.backlinks);
        if (data.blogs) setBlogs(data.blogs);
        if (data.reviews) setReviews(data.reviews);
        if (data.projects) setProjects(data.projects);
        if (data.regions) setRegions(data.regions);
        if (data.browsers) setBrowsers(data.browsers);
        if (data.devices) setDevices(data.devices);
        if (data.settings?.webhookUrl !== undefined) {
          setWebhookUrl(data.settings.webhookUrl);
        }
        return true;
      }
    } catch {
      toast.error("Failed to execute action.");
    }
    return false;
  };

  // Lead Handlers
  const handleCreateLead = async (leadData: Partial<Lead>) => {
    const ok = await dispatchAction("create_lead", leadData as Record<string, unknown>);
    if (ok) {
      toast.success("Lead created successfully.");
    }
  };

  const handleUpdateLeadStatus = async (id: number, status: string) => {
    const ok = await dispatchAction("update_lead_status", { id, status });
    if (ok) {
      toast.success(`Lead status updated to ${status}.`);
    }
  };

  const handleUpdateLeadNotes = async (id: number, notes: string) => {
    const ok = await dispatchAction("update_lead_notes", { id, notes });
    if (ok) {
      toast.success("Notes saved.");
    }
  };

  const handleDeleteLead = async (id: number) => {
    const ok = await dispatchAction("delete_lead", { id });
    if (ok) {
      toast.success("Lead deleted.");
    }
  };

  const handleAddVisitorToLeads = async (visitor: Visitor, customData?: Record<string, unknown>) => {
    const ok = await dispatchAction("add_visitor_to_leads", {
      visitor_id: visitor.id,
      lead_data: customData,
      ...(customData || {}),
    });
    if (ok) {
      toast.success(`Visitor from ${visitor.city || visitor.country} added to Leads!`);
    }
  };

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "login",
          email: emailInput.trim(),
          password: passwordInput,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        localStorage.setItem("codex_admin_auth", "true");
        setIsAuth(true);
        setAuthError("");
        toast.success("Welcome to Codex Dynamics Back Office!");
        return;
      }
    } catch {
      // Fallback below
    }

    if (
      emailInput.trim().toLowerCase() === "admin@codexdynamics.com" &&
      passwordInput === "Admin123!"
    ) {
      localStorage.setItem("codex_admin_auth", "true");
      setIsAuth(true);
      setAuthError("");
      toast.success("Welcome to Codex Dynamics Back Office!");
    } else {
      setAuthError("Invalid credentials. Please verify your email and password.");
    }
  };

  const handleSaveWebhook = async (url: string) => {
    const ok = await dispatchAction("save_webhook", { url });
    if (ok) {
      setWebhookUrl(url);
      toast.success("Lead alert webhook saved.");
    }
  };

  const handleTestWebhook = async (url: string): Promise<{ ok: boolean; message: string }> => {
    try {
      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "test_webhook", url }),
      });
      const data = await res.json();
      return { ok: data.ok, message: data.message || (data.ok ? "Dispatched" : data.error) };
    } catch (err) {
      return { ok: false, message: String(err) };
    }
  };

  const handleChangePassword = async (currentPassword: string, newPassword: string) => {
    try {
      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "change_password",
          email: "admin@codexdynamics.com",
          currentPassword,
          newPassword,
        }),
      });
      const data = await res.json();
      if (data.ok) {
        toast.success("Admin password changed in SQLite database.");
        return { ok: true, message: data.message };
      }
      return { ok: false, error: data.error || "Password update failed." };
    } catch (err) {
      return { ok: false, error: String(err) };
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("codex_admin_auth");
    setIsAuth(false);
    toast.info("Signed out of back office.");
  };

  // Simulate Visitor for Tidio test
  const handleSimulateVisitor = async () => {
    const countries = [
      { country: "United States", flag: "🇺🇸", ip: "172.56.33.104", browser: "Chrome 125", device: "Desktop (macOS)" },
      { country: "United Kingdom", flag: "🇬🇧", ip: "82.165.197.1", browser: "Safari 17.4", device: "Mobile (iPhone 15)" },
      { country: "Germany", flag: "🇩🇪", ip: "178.62.204.89", browser: "Firefox 126", device: "Desktop (Linux)" },
      { country: "Canada", flag: "🇨🇦", ip: "24.200.180.12", browser: "Edge 125", device: "Desktop (Windows 11)" },
      { country: "Japan", flag: "🇯🇵", ip: "133.242.18.99", browser: "Chrome 125", device: "Mobile (Android)" },
    ];
    const pick = countries[Math.floor(Math.random() * countries.length)];
    const pages = ["/", "/#work", "/#services", "/#contact", "/#studio"];
    const page = pages[Math.floor(Math.random() * pages.length)];

    await dispatchAction("simulate_visitor", {
      sessionId: `live_${Math.random().toString(36).slice(2, 8)}`,
      ip: pick.ip,
      country: pick.country,
      flag: pick.flag,
      browser: pick.browser,
      device: pick.device,
      pageUrl: page,
    });
    toast.success(`Live visitor ping received from ${pick.country} ${pick.flag}!`);
  };

  if (!isAuth) {
    return (
      <AdminLogin
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        authError={authError}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-label flex font-sans selection:bg-blue/15">
      {/* Background Subtle Ambient Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Sidebar Navigation: Desktop persistent + Mobile slide-over drawer */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={stats}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
        onOpenHostingerModal={() => setIsHostingerModalOpen(true)}
        onSimulateVisitor={handleSimulateVisitor}
        onLogout={handleLogout}
      />

      {/* Main Content Area - Shifted on desktop to accommodate the sidebar */}
      <div className="flex-1 lg:pl-64 xl:pl-72 flex flex-col min-w-0 transition-all duration-200">
        {/* Top Header Bar - Replaced by WordPress Editor Bar during editing */}
        {(!isBlogEditing || activeTab !== "blogs") && (
          <AdminHeader
            activeTab={activeTab}
            loading={loading}
            onRefresh={fetchData}
            onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
            onOpenHostingerModal={() => setIsHostingerModalOpen(true)}
            onLogout={handleLogout}
            onSelectTab={setActiveTab}
          />
        )}

        {/* Main Body */}
        <main
          className={`flex-1 w-full ${
            isBlogEditing && activeTab === "blogs"
              ? "max-w-none px-3 sm:px-6 lg:px-8 py-3"
              : "max-w-7xl px-4 sm:px-6 lg:px-8 py-6"
          } mx-auto space-y-6 relative z-10`}
        >
          {/* KPI Metrics - Hidden during blog editing for maximum workspace */}
          {(!isBlogEditing || activeTab !== "blogs") && (
            <AdminMetrics
              stats={stats}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}

          {/* Active Tab View */}
          <div className="pt-1">
            {activeTab === "tidio" && <TidioTab />}

            {(activeTab === "site_content" || activeTab === "content") && (
              <SiteContentTab onSwitchTab={(tab) => setActiveTab(tab)} />
            )}

            {activeTab === "visitors" && (
              <VisitorsTab
                visitors={visitors}
                onSimulate={handleSimulateVisitor}
                onAddToLeads={handleAddVisitorToLeads}
                onDeleteVisitor={(id) => dispatchAction("delete_visitor", { id })}
                onClearVisitors={(olderThanDays) => dispatchAction("clear_visitors", { olderThanDays })}
                leadsSessionIds={
                  new Set(
                    leads
                      .filter((l) => l.notes && l.notes.includes("sess_"))
                      .map((l) => {
                        const m = l.notes?.match(/sess_[a-zA-Z0-9_-]+/);
                        return m ? m[0] : "";
                      })
                      .filter(Boolean)
                  )
                }
              />
            )}

            {activeTab === "leads" && (
              <LeadsTab
                leads={leads}
                onCreateLead={handleCreateLead}
                onUpdateStatus={handleUpdateLeadStatus}
                onUpdateNotes={handleUpdateLeadNotes}
                onDeleteLead={handleDeleteLead}
              />
            )}

            {activeTab === "analytics" && (
              <AnalyticsTab
                stats={stats}
                regions={regions}
                browsers={browsers}
                devices={devices}
                visitors={visitors}
              />
            )}

            {activeTab === "enquiries" && (
              <EnquiriesTab
                enquiries={enquiries}
                onUpdateStatus={(id, status) => dispatchAction("update_enquiry_status", { id, status })}
                onDelete={(id) => dispatchAction("delete_enquiry", { id })}
              />
            )}

            {activeTab === "backlinks" && (
              <BacklinksTab
                backlinks={backlinks}
                onAddBacklink={(data) => dispatchAction("save_backlink", data)}
                onEditBacklink={(id, data) => dispatchAction("update_backlink", { id, ...data })}
                onDeleteBacklink={(id) => dispatchAction("delete_backlink", { id })}
              />
            )}

            {activeTab === "blogs" && (
              <BlogsTab
                blogs={blogs}
                onSaveBlog={(data) => dispatchAction("save_blog", data)}
                onDeleteBlog={(id) => dispatchAction("delete_blog", { id })}
                onToggleStatus={(id, status) => dispatchAction("toggle_blog_status", { id, status })}
                onDuplicateBlog={(id) => dispatchAction("duplicate_blog", { id })}
                onEditorStateChange={(isEditing) => setIsBlogEditing(isEditing)}
              />
            )}

            {activeTab === "reviews" && (
              <ReviewsTab
                reviews={reviews}
                onSaveReview={(data) => dispatchAction("save_review", data)}
                onEditReview={(id, data) => dispatchAction("update_review", { id, ...data })}
                onToggleReview={(id, is_published) => dispatchAction("toggle_review", { id, is_published })}
                onDeleteReview={(id) => dispatchAction("delete_review", { id })}
              />
            )}

            {activeTab === "projects" && (
              <ProjectsTab
                projects={projects}
                onSaveProject={(data) => dispatchAction("save_project", data)}
                onEditProject={(id, data) => dispatchAction("update_project", { id, ...data })}
                onToggleProject={(id, is_published) => dispatchAction("toggle_project", { id, is_published })}
                onDeleteProject={(id) => dispatchAction("delete_project", { id })}
              />
            )}

            {(activeTab === "settings" ||
              activeTab === "customizer" ||
              activeTab === "branding" ||
              activeTab === "layout" ||
              activeTab === "conversion" ||
              activeTab === "seo_studio" ||
              activeTab === "emergency") && (
              <SettingsTab
                stats={stats}
                webhookUrl={webhookUrl}
                onSaveWebhook={handleSaveWebhook}
                onTestWebhook={handleTestWebhook}
                onChangePassword={handleChangePassword}
                onRestoreBackup={(backupData) => dispatchAction("restore_backup", { backupData })}
                onOpenHostingerModal={() => setIsHostingerModalOpen(true)}
                defaultSubTab={
                  activeTab === "branding"
                    ? "branding"
                    : activeTab === "layout"
                    ? "layout"
                    : activeTab === "conversion"
                    ? "conversion"
                    : activeTab === "seo_studio"
                    ? "seo"
                    : activeTab === "emergency"
                    ? "emergency"
                    : activeTab === "customizer"
                    ? "branding"
                    : "system"
                }
                onSubTabChange={(sub) => {
                  if (sub === "branding") setActiveTab("branding");
                  else if (sub === "layout") setActiveTab("layout");
                  else if (sub === "conversion") setActiveTab("conversion");
                  else if (sub === "seo") setActiveTab("seo_studio");
                  else if (sub === "emergency") setActiveTab("emergency");
                  else if (sub === "system") setActiveTab("settings");
                }}
                fullData={{
                  stats,
                  visitors,
                  leads,
                  enquiries,
                  backlinks,
                  blogs,
                  reviews,
                  projects,
                  regions,
                  browsers,
                  devices,
                  settings: { webhook_url: webhookUrl },
                }}
              />
            )}
          </div>
        </main>
      </div>

      {/* Hostinger & SQLite Documentation Modal */}
      <HostingerModal
        isOpen={isHostingerModalOpen}
        onClose={() => setIsHostingerModalOpen(false)}
      />
    </div>
  );
}
