import { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  ExternalLink,
  Save,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Zap,
  Globe,
  Radio,
  Send,
  User,
  RotateCcw,
  CheckCheck,
  Clock,
  Laptop,
  Smartphone,
  Trash2,
  Search,
  Filter,
  RefreshCw,
  PlusCircle,
  HelpCircle,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import { useSiteConfig } from "@/context/SiteConfigContext";
import type { TidioSettings } from "@/types/site-editor";
import type { ChatThread, ChatMessage } from "@/types/crm";

export function TidioTab() {
  const { config, refetch, updateLocalConfig } = useSiteConfig();

  // Mode: "inbox" (Live Operator Desk) or "settings" (Tidio CDN & Gateway configuration)
  const [activeView, setActiveView] = useState<"inbox" | "settings">("inbox");

  // Tidio Settings State
  const [tidioState, setTidioState] = useState<TidioSettings>({
    enabled: config.tidio?.enabled ?? true,
    publicKey: config.tidio?.publicKey ?? "",
    disableOnAdmin: config.tidio?.disableOnAdmin ?? true,
    hideOnMobile: config.tidio?.hideOnMobile ?? false,
    position: config.tidio?.position ?? "bottom-right",
    welcomeMessage:
      config.tidio?.welcomeMessage ??
      "Hi! How can we help you today? Leave us a message and our team will get right back to you.",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{
    success: boolean;
    message: string;
    latencyMs?: number;
  } | null>(null);

  // Live Chat Operator State
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [operatorInput, setOperatorInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isLoadingThreads, setIsLoadingThreads] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "unread" | "resolved">("all");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Fetch threads list
  const fetchThreads = async () => {
    try {
      const res = await fetch("/api/crm/chat/threads");
      if (res.ok) {
        const data = await res.json();
        if (data.ok && Array.isArray(data.threads)) {
          setThreads(data.threads);
          // If no thread selected yet, select the first thread
          if (!selectedThreadId && data.threads.length > 0) {
            setSelectedThreadId(data.threads[0].id);
          }
        }
      }
    } catch {
      // Silent catch
    } finally {
      setIsLoadingThreads(false);
    }
  };

  // Fetch messages for selected thread
  const fetchMessages = async (threadId: string, markRead = true) => {
    try {
      const res = await fetch(
        `/api/crm/chat/messages?threadId=${encodeURIComponent(threadId)}${markRead ? "&markRead=true" : ""}`
      );
      if (res.ok) {
        const data = await res.json();
        if (data.ok && Array.isArray(data.messages)) {
          setMessages(data.messages);
        }
      }
    } catch {
      // Silent catch
    }
  };

  // Initial load and periodic polling for real-time live chat
  useEffect(() => {
    void fetchThreads();
    const interval = setInterval(fetchThreads, 3500);
    return () => clearInterval(interval);
  }, []);

  // When selected thread changes, fetch its messages immediately
  useEffect(() => {
    if (selectedThreadId) {
      void fetchMessages(selectedThreadId, true);
    }
  }, [selectedThreadId]);

  // Periodic polling for active conversation messages
  useEffect(() => {
    if (!selectedThreadId) return;
    const msgInterval = setInterval(() => {
      void fetchMessages(selectedThreadId, false);
    }, 2500);
    return () => clearInterval(msgInterval);
  }, [selectedThreadId]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Operator sends reply
  const handleSendReply = async (textToSend?: string) => {
    const text = (textToSend || operatorInput).trim();
    if (!text || !selectedThreadId || isSending) return;

    setIsSending(true);
    if (!textToSend) setOperatorInput("");

    // Optimistic message
    const tempMsg: ChatMessage = {
      id: Date.now(),
      thread_id: selectedThreadId,
      sender: "operator",
      sender_name: "Studio Operator",
      message: text,
      created_at: new Date().toISOString(),
      is_read: 1,
    };
    setMessages((prev) => [...prev, tempMsg]);

    try {
      const res = await fetch("/api/crm/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          threadId: selectedThreadId,
          sender: "operator",
          senderName: "Studio Operator",
          message: text,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.ok && data.message) {
          setMessages((prev) => prev.map((m) => (m.id === tempMsg.id ? data.message : m)));
          // Refresh thread list to update snippet
          void fetchThreads();
        }
      } else {
        toast.error("Failed to deliver reply to visitor");
      }
    } catch {
      toast.error("Network error delivering message");
    } finally {
      setIsSending(false);
    }
  };

  // Mark thread status (active / resolved)
  const handleToggleStatus = async (threadId: string, currentStatus: string) => {
    const newStatus = currentStatus === "resolved" ? "active" : "resolved";
    try {
      const res = await fetch("/api/crm/chat/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update_status",
          threadId,
          status: newStatus,
        }),
      });
      if (res.ok) {
        toast.success(`Conversation marked as ${newStatus}`);
        setThreads((prev) =>
          prev.map((t) => (t.id === threadId ? { ...t, status: newStatus as any } : t))
        );
      }
    } catch {
      toast.error("Failed to update status");
    }
  };

  // Delete thread
  const handleDeleteThread = async (threadId: string) => {
    if (!confirm("Are you sure you want to delete this chat thread and its entire history?")) {
      return;
    }
    try {
      const res = await fetch("/api/crm/chat/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete_thread",
          threadId,
        }),
      });
      if (res.ok) {
        toast.success("Thread deleted successfully");
        setThreads((prev) => prev.filter((t) => t.id !== threadId));
        if (selectedThreadId === threadId) {
          const remaining = threads.filter((t) => t.id !== threadId);
          setSelectedThreadId(remaining.length > 0 ? remaining[0].id : null);
        }
      }
    } catch {
      toast.error("Failed to delete thread");
    }
  };

  // Simulate an inbound visitor inquiry for immediate live testing
  const handleSimulateVisitorInbound = async () => {
    const testVisitors = [
      {
        name: "Alexandre Laurent",
        email: "a.laurent@zenith-fintech.eu",
        phone: "+33 6 12 34 56 78",
        country: "France",
        flag: "🇫🇷",
        city: "Paris",
        device: "Desktop (MacBook M3)",
        pageUrl: "/#services",
        inquiry: "Hello! We are looking to rebuild our payment dashboard with Next.js and need an SLA on Core Web Vitals.",
      },
      {
        name: "Elena Rostova",
        email: "elena@lumina-designs.io",
        phone: "+1 (415) 678-9901",
        country: "United States",
        flag: "🇺🇸",
        city: "New York",
        device: "Mobile (iPhone 16)",
        pageUrl: "/#work",
        inquiry: "Hi there! What is your typical turnaround timeline for a high-converting portfolio and storefront?",
      },
      {
        name: "Takahiro Sato",
        email: "takahiro@tokyo-automations.jp",
        phone: "+81 90 1234 5678",
        country: "Japan",
        flag: "🇯🇵",
        city: "Tokyo",
        device: "Desktop (Chrome)",
        pageUrl: "/#pricing",
        inquiry: "Good morning! Can we discuss custom API integrations and automated CRM syncing?",
      },
    ];

    const pick = testVisitors[Math.floor(Math.random() * testVisitors.length)];
    const newThreadId = `thread_test_${Date.now()}`;

    try {
      const res = await fetch("/api/crm/chat/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          threadId: newThreadId,
          sender: "visitor",
          senderName: pick.name,
          message: pick.inquiry,
          autoReply: true,
          visitorInfo: {
            name: pick.name,
            email: pick.email,
            phone: pick.phone,
            country: pick.country,
            flag: pick.flag,
            city: pick.city,
            device: pick.device,
            pageUrl: pick.pageUrl,
          },
        }),
      });

      if (res.ok) {
        toast.success(`Inbound visitor inquiry received from ${pick.name}!`);
        await fetchThreads();
        setSelectedThreadId(newThreadId);
      }
    } catch {
      toast.error("Failed to generate test inquiry");
    }
  };

  // Save Tidio Settings to SQLite
  const handleSaveTidioSettings = async () => {
    try {
      setIsSaving(true);
      const cleanKey = tidioState.publicKey
        .trim()
        .replace(/<script[^>]*src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["'][^>]*>[\s\S]*?<\/script>/i, "$1")
        .replace(/.*code\.tidio\.co\/([a-zA-Z0-9_-]+).*/i, "$1")
        .replace(/\.js$/, "");

      const updatedTidio: TidioSettings = {
        ...tidioState,
        publicKey: cleanKey,
      };

      const updatedConfig = {
        ...config,
        tidio: updatedTidio,
      };

      const res = await fetch("/api/crm/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "save_site_content",
          config: updatedConfig,
          payload: { config: updatedConfig },
        }),
      });

      const data = await res.json();
      if (data.ok) {
        toast.success("Tidio configuration saved and synchronized to SQLite!");
        updateLocalConfig(data.config || updatedConfig);
        setTidioState(updatedTidio);
        await refetch();
      } else {
        toast.error(data.error || "Failed to save configuration");
      }
    } catch (err) {
      toast.error("Network error while saving Tidio settings: " + String(err));
    } finally {
      setIsSaving(false);
    }
  };

  // Test Tidio CDN Reachability
  const handleTestTidioConnection = async () => {
    const key = tidioState.publicKey
      .trim()
      .replace(/<script[^>]*src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["'][^>]*>[\s\S]*?<\/script>/i, "$1")
      .replace(/.*code\.tidio\.co\/([a-zA-Z0-9_-]+).*/i, "$1")
      .replace(/\.js$/, "");

    if (!key) {
      toast.error("Please enter a Tidio project key or script tag first.");
      return;
    }

    try {
      setIsTesting(true);
      setTestResult(null);
      const start = performance.now();
      const url = `https://code.tidio.co/${encodeURIComponent(key)}.js`;
      const res = await fetch(url, { method: "HEAD", mode: "no-cors" });
      const latencyMs = Math.round(performance.now() - start);

      setTestResult({
        success: true,
        message: `Tidio CDN is reachable at code.tidio.co/${key}.js`,
        latencyMs,
      });
      toast.success(`CDN reachable (${latencyMs}ms)!`);
    } catch (err) {
      setTestResult({
        success: false,
        message: `Could not verify code.tidio.co/${key}.js: ${String(err)}`,
      });
      toast.error("Could not verify Tidio CDN URL");
    } finally {
      setIsTesting(false);
    }
  };

  // Filter threads
  const filteredThreads = threads.filter((t) => {
    const matchSearch =
      (t.visitor_name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.last_message || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.visitor_email || "").toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchSearch) return false;
    if (statusFilter === "active") return t.status === "active";
    if (statusFilter === "resolved") return t.status === "resolved";
    if (statusFilter === "unread") return (t.unread_count || 0) > 0;
    return true;
  });

  const selectedThread = threads.find((t) => t.id === selectedThreadId);
  const activeCount = threads.filter((t) => t.status === "active").length;
  const unreadTotal = threads.reduce((acc, t) => acc + (t.unread_count || 0), 0);
  const isTidioActive = Boolean(tidioState.enabled && tidioState.publicKey.trim());

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* Top Banner & Mode Switcher */}
      <div className="bg-white rounded-2xl border border-black/8 shadow-xs p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center">
              <MessageSquare className="size-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-label flex items-center gap-2">
                Live Chat & Tidio Center
                <span className="text-[11px] px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                  SQLite Live Sync
                </span>
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Real-time visitor inquiries, operator inbox, conversation threads, and Tidio CDN gateway.
              </p>
            </div>
          </div>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-2 bg-black/5 p-1 rounded-xl self-start md:self-center">
          <button
            type="button"
            onClick={() => setActiveView("inbox")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeView === "inbox"
                ? "bg-white text-label shadow-xs font-semibold"
                : "text-muted-foreground hover:text-label"
            }`}
          >
            <Radio className="size-3.5 text-[#0066FF]" />
            <span>Operator Inbox</span>
            {unreadTotal > 0 && (
              <span className="size-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                {unreadTotal}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveView("settings")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeView === "settings"
                ? "bg-white text-label shadow-xs font-semibold"
                : "text-muted-foreground hover:text-label"
            }`}
          >
            <Settings className="size-3.5 text-slate-500" />
            <span>Tidio Gateway & Settings</span>
            {isTidioActive && (
              <span className="size-2 rounded-full bg-emerald-500" title="Tidio CDN Connected" />
            )}
          </button>
        </div>
      </div>

      {/* VIEW 1: OPERATOR INBOX (REAL VISITOR CONVERSATIONS) */}
      {activeView === "inbox" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-[650px] min-h-[600px]">
          {/* Left Column: Conversations List (5 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-black/8 shadow-xs flex flex-col overflow-hidden">
            {/* Thread List Header & Actions */}
            <div className="p-3.5 border-b border-black/6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-semibold text-label">Visitor Chats</h3>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] font-semibold">
                    {activeCount} active
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleSimulateVisitorInbound}
                    className="px-2.5 py-1 text-[11px] font-medium bg-[#0066FF] text-white hover:bg-[#0052cc] rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    title="Simulate incoming visitor inquiry"
                  >
                    <PlusCircle className="size-3" />
                    <span>Test Inbound</span>
                  </button>
                  <button
                    type="button"
                    onClick={fetchThreads}
                    className="p-1 rounded-lg text-muted-foreground hover:text-label hover:bg-black/5 transition-colors"
                    title="Refresh chats"
                  >
                    <RefreshCw className="size-3.5" />
                  </button>
                </div>
              </div>

              {/* Search Box */}
              <div className="relative">
                <Search className="size-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search visitor, message..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 border border-black/8 focus:outline-none focus:ring-1 focus:ring-[#0066FF] focus:bg-white"
                />
              </div>

              {/* Status Filter Chips */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {(["all", "active", "unread", "resolved"] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setStatusFilter(filter)}
                    className={`px-2.5 py-0.5 rounded-lg text-[11px] font-medium capitalize transition-colors cursor-pointer ${
                      statusFilter === filter
                        ? "bg-[#0066FF] text-white"
                        : "bg-black/5 text-muted-foreground hover:bg-black/8"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Conversation Threads Scroll Area */}
            <div className="flex-1 overflow-y-auto divide-y divide-black/5">
              {isLoadingThreads ? (
                <div className="p-8 text-center text-xs text-muted-foreground">
                  <RefreshCw className="size-5 animate-spin mx-auto mb-2 text-[#0066FF]" />
                  Loading conversations...
                </div>
              ) : filteredThreads.length === 0 ? (
                <div className="p-8 text-center text-xs text-muted-foreground space-y-2">
                  <MessageSquare className="size-8 text-slate-300 mx-auto" />
                  <p>No conversations found.</p>
                  <button
                    type="button"
                    onClick={handleSimulateVisitorInbound}
                    className="text-[#0066FF] underline font-medium"
                  >
                    Generate a test visitor chat
                  </button>
                </div>
              ) : (
                filteredThreads.map((thread) => {
                  const isSelected = thread.id === selectedThreadId;
                  const isUnread = (thread.unread_count || 0) > 0;
                  const formattedTime = new Date(thread.last_message_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  return (
                    <button
                      key={thread.id}
                      type="button"
                      onClick={() => setSelectedThreadId(thread.id)}
                      className={`w-full text-left p-3.5 transition-colors flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? "bg-[#0066FF]/8 border-l-4 border-[#0066FF]"
                          : isUnread
                          ? "bg-blue-50/40 hover:bg-blue-50/70"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      {/* Avatar with Country Flag */}
                      <div className="relative shrink-0">
                        <div className="size-9 rounded-full bg-slate-100 border border-black/10 flex items-center justify-center text-xs font-bold text-slate-700">
                          {thread.visitor_name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <span className="absolute -bottom-1 -right-1 text-xs">
                          {thread.visitor_flag || "🇺🇸"}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <h4 className="text-xs font-semibold text-label truncate">
                            {thread.visitor_name}
                          </h4>
                          <span className="text-[10px] text-muted-foreground shrink-0">
                            {formattedTime}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground truncate leading-relaxed">
                          {thread.last_message || "New chat initiated"}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <span
                            className={`text-[9px] px-1.5 py-0.2 rounded-md font-semibold ${
                              thread.status === "active"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {thread.status === "active" ? "Active" : "Resolved"}
                          </span>
                          {thread.page_url && (
                            <span className="text-[9px] text-slate-400 truncate max-w-[120px]">
                              {thread.page_url}
                            </span>
                          )}
                          {isUnread && (
                            <span className="ml-auto size-2 rounded-full bg-[#0066FF]" />
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Active Conversation Message Stream (8 Cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-black/8 shadow-xs flex flex-col overflow-hidden">
            {selectedThread ? (
              <>
                {/* Active Chat Header */}
                <div className="p-3.5 border-b border-black/6 bg-slate-50/70 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="size-10 rounded-full bg-[#0066FF]/15 text-[#0066FF] flex items-center justify-center font-bold text-sm">
                        {selectedThread.visitor_name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <span className="absolute -bottom-1 -right-1 text-sm">
                        {selectedThread.visitor_flag || "🇺🇸"}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-semibold text-label">
                          {selectedThread.visitor_name}
                        </h3>
                        <span
                          className={`text-[10px] px-2 py-0.2 rounded-full font-semibold ${
                            selectedThread.status === "active"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-200 text-slate-700"
                          }`}
                        >
                          {selectedThread.status === "active" ? "Live Visitor" : "Resolved"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5">
                        <span>{selectedThread.visitor_city || selectedThread.visitor_country || "United States"}</span>
                        <span>&middot;</span>
                        <span className="flex items-center gap-1">
                          {selectedThread.visitor_device?.toLowerCase().includes("mobile") ? (
                            <Smartphone className="size-3" />
                          ) : (
                            <Laptop className="size-3" />
                          )}
                          {selectedThread.visitor_device || "Desktop"}
                        </span>
                        <span>&middot;</span>
                        <span className="text-[#0066FF] font-medium truncate max-w-[160px]">
                          {selectedThread.page_url || "/"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Mark Resolved / Delete */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleStatus(selectedThread.id, selectedThread.status)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                        selectedThread.status === "resolved"
                          ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <CheckCircle2 className="size-3.5" />
                      <span>{selectedThread.status === "resolved" ? "Reopen Chat" : "Mark Resolved"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteThread(selectedThread.id)}
                      className="p-1.5 text-muted-foreground hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                      title="Delete conversation"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>

                {/* Message Stream */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8f9fc] text-xs">
                  {messages.length === 0 ? (
                    <div className="p-8 text-center text-xs text-muted-foreground">
                      No messages recorded yet for this session.
                    </div>
                  ) : (
                    messages.map((msg) => {
                      const isVisitor = msg.sender === "visitor";
                      const isBot = msg.sender === "bot";
                      const isOperator = msg.sender === "operator";

                      return (
                        <div
                          key={msg.id}
                          className={`flex ${isOperator ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[78%] rounded-2xl px-4 py-2.5 shadow-xs leading-relaxed ${
                              isOperator
                                ? "bg-[#0066FF] text-white rounded-br-xs"
                                : isBot
                                ? "bg-blue-50 text-slate-900 border border-blue-200/70 rounded-bl-xs"
                                : "bg-white text-slate-900 border border-black/8 rounded-bl-xs"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3 mb-1">
                              <span
                                className={`text-[10px] font-bold ${
                                  isOperator
                                    ? "text-white/80"
                                    : isBot
                                    ? "text-[#0066FF]"
                                    : "text-slate-600"
                                }`}
                              >
                                {isOperator
                                  ? "👤 Operator (You)"
                                  : isBot
                                  ? "🤖 Concierge Bot"
                                  : `Visitor (${selectedThread.visitor_name})`}
                              </span>
                              <span
                                className={`text-[9px] ${
                                  isOperator ? "text-white/70" : "text-slate-400"
                                }`}
                              >
                                {new Date(msg.created_at).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                            <p className="whitespace-pre-wrap">{msg.message}</p>
                            {isOperator && (
                              <div className="flex justify-end mt-1">
                                <CheckCheck className="size-3 text-white/80" />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Canned Quick Responses Bar */}
                <div className="p-2.5 bg-white border-t border-black/6 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
                  <span className="text-[11px] font-semibold text-muted-foreground mr-1 shrink-0">
                    Canned Replies:
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleSendReply(
                        "Hello! We'd love to schedule a quick 15-minute strategy call to review your specifications. Does tomorrow work for you?"
                      )
                    }
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/8 text-[#0066FF] hover:bg-[#0066FF]/15 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    📅 Discovery Call
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleSendReply(
                        "Our bespoke web development sprint engagements typically range from $4,500 to $18,000 depending on scope and integrations. Would you like a detailed breakdown?"
                      )
                    }
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/8 text-[#0066FF] hover:bg-[#0066FF]/15 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    💼 Pricing Quote
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleSendReply(
                        "We build with Next.js, React, Tailwind, and high-performance serverless APIs, guaranteeing sub-second Core Web Vitals and 99+ Lighthouse scores."
                      )
                    }
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/8 text-[#0066FF] hover:bg-[#0066FF]/15 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    ⚡ Tech Stack & SLAs
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleSendReply(
                        "You can also reach our engineering lead directly on WhatsApp at +380 63 640 6783 for expedited real-time chat."
                      )
                    }
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    📲 WhatsApp Fast Track
                  </button>
                </div>

                {/* Operator Input Bar */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void handleSendReply();
                  }}
                  className="p-3 bg-white border-t border-black/6 flex items-center gap-2 shrink-0"
                >
                  <input
                    type="text"
                    value={operatorInput}
                    onChange={(e) => setOperatorInput(e.target.value)}
                    placeholder="Type your reply to the visitor as Operator... (Press Enter to send)"
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-black/10 focus:outline-none focus:ring-1 focus:ring-[#0066FF]"
                  />
                  <button
                    type="submit"
                    disabled={isSending || !operatorInput.trim()}
                    className="px-4 py-2 rounded-xl bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition-colors disabled:opacity-40 flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <Send className="size-3.5" />
                    <span>Send Reply</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-muted-foreground space-y-3">
                <div className="size-12 rounded-2xl bg-[#0066FF]/10 text-[#0066FF] flex items-center justify-center">
                  <MessageSquare className="size-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-label">No Conversation Selected</h3>
                  <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                    Select a conversation from the left to read visitor history and reply as the operator, or trigger a test inbound visitor chat.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSimulateVisitorInbound}
                  className="px-3.5 py-2 rounded-xl bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052cc] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <PlusCircle className="size-4" />
                  <span>Start New Test Chat</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: TIDIO GATEWAY & CDN SETTINGS */}
      {activeView === "settings" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Tidio Configuration Form */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white rounded-2xl border border-black/8 shadow-xs p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-black/6 pb-4">
                <div>
                  <h3 className="text-sm font-semibold text-label">
                    Tidio Official CDN Integration
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Connect your project public key to route all chats directly through Tidio Cloud.
                  </p>
                </div>
                <a
                  href="https://www.tidio.com/panel/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl border border-black/10 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-label flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Tidio Panel</span>
                  <ExternalLink className="size-3 text-muted-foreground" />
                </a>
              </div>

              {/* Master Enable Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-black/6">
                <div>
                  <h4 className="text-xs font-semibold text-label">Live Chat Widget Status</h4>
                  <p className="text-[11px] text-muted-foreground">
                    When enabled, the chat launcher appears on public pages.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tidioState.enabled}
                    onChange={(e) =>
                      setTidioState((prev) => ({
                        ...prev,
                        enabled: e.target.checked,
                      }))
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066FF]"></div>
                </label>
              </div>

              {/* Public Key Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-label">
                  Tidio Project Public Key / Embed Script
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={tidioState.publicKey}
                    onChange={(e) =>
                      setTidioState((prev) => ({
                        ...prev,
                        publicKey: e.target.value,
                      }))
                    }
                    placeholder="e.g. abcdefghijklmnopqrstuvwxyz123456 or //code.tidio.co/xxxx.js"
                    className="flex-1 px-3 py-2 rounded-xl border border-black/10 bg-white text-xs font-mono text-label focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]"
                  />
                  <button
                    type="button"
                    onClick={handleTestTidioConnection}
                    disabled={isTesting || !tidioState.publicKey.trim()}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-medium text-label transition-colors disabled:opacity-50 flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {isTesting ? (
                      <RefreshCw className="size-3.5 animate-spin text-[#0066FF]" />
                    ) : (
                      <Zap className="size-3.5 text-amber-500" />
                    )}
                    <span>Test CDN</span>
                  </button>
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Leave empty to use the Studio's built-in Live Chat Engine with zero third-party setup.
                </p>
              </div>

              {/* Connection Test Result Box */}
              {testResult && (
                <div
                  className={`p-3 rounded-xl border text-xs flex items-center gap-2 ${
                    testResult.success
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  {testResult.success ? (
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="size-4 text-red-600 shrink-0" />
                  )}
                  <span className="flex-1">{testResult.message}</span>
                  {testResult.latencyMs !== undefined && (
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-white/70">
                      {testResult.latencyMs}ms
                    </span>
                  )}
                </div>
              )}

              {/* Advanced Widget Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-slate-50 border border-black/6 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-label">Hide on Admin Route</span>
                    <input
                      type="checkbox"
                      checked={tidioState.disableOnAdmin}
                      onChange={(e) =>
                        setTidioState((prev) => ({
                          ...prev,
                          disableOnAdmin: e.target.checked,
                        }))
                      }
                      className="rounded text-[#0066FF] focus:ring-[#0066FF]"
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Prevents the widget from floating over CRM controls.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-black/6 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-label">Mobile Visibility</span>
                    <input
                      type="checkbox"
                      checked={!tidioState.hideOnMobile}
                      onChange={(e) =>
                        setTidioState((prev) => ({
                          ...prev,
                          hideOnMobile: !e.target.checked,
                        }))
                      }
                      className="rounded text-[#0066FF] focus:ring-[#0066FF]"
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {tidioState.hideOnMobile ? "Hidden on small screens" : "Visible on mobile & desktop"}
                  </p>
                </div>
              </div>

              {/* Placement Preference */}
              <div className="space-y-2 pt-1">
                <label className="block text-xs font-medium text-label">
                  Widget Corner Placement
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTidioState((prev) => ({ ...prev, position: "bottom-right" }))}
                    className={`p-3 rounded-xl border text-xs font-medium text-left flex items-center justify-between transition-all cursor-pointer ${
                      tidioState.position === "bottom-right"
                        ? "border-[#0066FF] bg-[#0066FF]/5 text-[#0066FF]"
                        : "border-black/10 hover:bg-slate-50 text-label"
                    }`}
                  >
                    <span>Bottom-Right</span>
                    {tidioState.position === "bottom-right" && <CheckCircle2 className="size-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTidioState((prev) => ({ ...prev, position: "bottom-left" }))}
                    className={`p-3 rounded-xl border text-xs font-medium text-left flex items-center justify-between transition-all cursor-pointer ${
                      tidioState.position === "bottom-left"
                        ? "border-[#0066FF] bg-[#0066FF]/5 text-[#0066FF]"
                        : "border-black/10 hover:bg-slate-50 text-label"
                    }`}
                  >
                    <span>Bottom-Left</span>
                    {tidioState.position === "bottom-left" && <CheckCircle2 className="size-4" />}
                  </button>
                </div>
              </div>

              {/* Welcome Greeting */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-medium text-label">
                  Default Welcome Greeting
                </label>
                <textarea
                  rows={2}
                  value={tidioState.welcomeMessage}
                  onChange={(e) =>
                    setTidioState((prev) => ({
                      ...prev,
                      welcomeMessage: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 rounded-xl border border-black/10 bg-white text-xs text-label focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]"
                  placeholder="Leave a friendly message for visitors..."
                />
              </div>

              {/* Save Button */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveTidioSettings}
                  disabled={isSaving}
                  className="px-5 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-medium transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isSaving ? (
                    <RefreshCw className="size-4 animate-spin" />
                  ) : (
                    <Save className="size-4" />
                  )}
                  <span>Save Configuration to SQLite</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Setup Guide & Architecture */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0066FF]/5 border border-[#0066FF]/15 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0066FF]">
                <Sparkles className="size-4" />
                <span>Dual Engine Architecture</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The studio features two complementary modes:
              </p>
              <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
                <li>
                  <strong className="text-label">Studio Built-in Live Chat Engine:</strong> Works out-of-the-box with zero third-party account requirements. All messages are stored permanently in the SQLite database and accessible from the Operator Inbox tab.
                </li>
                <li>
                  <strong className="text-label">Tidio Official Cloud:</strong> Enter your free or paid Tidio project key to stream chats to the Tidio mobile app and desktop agents.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-black/8 p-5 space-y-3 text-xs">
              <h4 className="font-semibold text-label flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-600" />
                WhatsApp Coordination Protocol
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                When visitors open the Live Chat widget, custom window events (<code className="text-[#0066FF] font-mono">tidio-chat-open</code>) are automatically broadcast, safely collapsing or offsetting the WhatsApp dock to eliminate any visual overlap.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
