import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { B as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as LinkedInLogo, d as ViberLogo, f as WhatsAppLogo, i as InstagramLogo, l as TelegramLogo, m as useSiteConfig, n as GitHubLogo, o as MapsLogo, p as cn, r as GmailLogo, s as PhoneLogo, t as FacebookLogo, u as TwitterXLogo } from "./BrandMarks-BhW8jwUd.mjs";
import { t as resolveGeoLocation } from "./geo-utils-Dx58A-zZ.mjs";
import { c as resolveSectionsOrder, o as persistSiteConfig, r as calculateReadingTime, s as resolveSectionVisibility, t as DEFAULT_HOME_SEQUENCE } from "./theme-engine-rY8KTBOg.mjs";
import { $ as ListOrdered, $t as ArrowRight, A as RotateCcw, At as Compass, B as PanelsTopLeft, Bt as ChevronDown, C as ShieldCheck, Ct as Eraser, D as Send, Dt as Copy, E as Settings, Et as Database, F as Quote, Ft as CircleCheck, G as Menu, Gt as Calendar, H as Navigation, Ht as ChartNoAxesColumn, I as Plus, It as CircleAlert, J as Mail, Jt as BookOpen, K as Megaphone, Kt as Building, L as Phone, Lt as ChevronsUpDown, M as Redo2, Mt as CodeXml, N as RectangleEllipsis, Nt as Clock, O as Search, Ot as Cookie, P as Radio, Q as List, S as Shield, St as ExternalLink, T as Share2, Tt as Download, U as Monitor, Ut as ChartColumn, V as Palette, Vt as Check, W as MessageSquare, Wt as Camera, Xt as BellRing, Y as LogOut, Yt as Bold, Z as LoaderCircle, Zt as ArrowUp, _ as Star, _t as FileText, a as User, at as Laptop, b as Smartphone, bt as Eye, c as Undo2, ct as Info, d as TrendingUp, dt as History, en as ArrowLeft, et as ListFilter, f as Trash2, ft as Heading2, g as Strikethrough, gt as Flame, h as Table, ht as Funnel, j as RefreshCw, jt as Code, k as Save, kt as Contact, l as Type, lt as Inbox, m as Tablet, n as X, nn as ArrowDownToLine, nt as Link2, o as UserPlus, ot as KeyRound, p as Tag, pt as Globe, q as MapPin, qt as Briefcase, r as Users, rn as Activity, rt as LayoutGrid, s as Upload, st as Italic, t as Zap, tn as ArrowDown, tt as Link$1, u as TriangleAlert, ut as Image, v as Square, vt as FileCode, w as ShieldAlert, wt as EllipsisVertical, x as SlidersHorizontal, xt as EyeOff, y as Sparkles, z as PenLine, zt as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Dv8kEimN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminLogin({ emailInput, setEmailInput, passwordInput, setPasswordInput, authError, handleLogin }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f5f5f7] text-label flex items-center justify-center p-4 relative selection:bg-blue/15",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-blue/5 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2.5 mb-3 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-blue text-paper shadow-[inset_0_0.5px_0_rgb(255_255_255_/_0.35)] transition-transform duration-200 group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold tracking-tight",
								children: "C"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl font-display font-semibold tracking-tight text-label",
							children: "Codex Dynamics"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.22em] text-subtle uppercase",
						children: "Back Office & CRM Suite"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-3xl bg-card border border-black/8 p-7 sm:p-9 shadow-[0_0_0_1px_rgb(0_0_0_/_0.05),0_4px_16px_rgb(0_0_0_/_0.06)] backdrop-blur-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 pb-5 mb-5 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-lg font-semibold tracking-tight text-label font-display",
								children: "Administrator Sign In"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Manage site visitors, blogs, and SEO"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }), "SQLite3 Live"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-fill-subtle/70 border border-black/5 text-xs text-muted-foreground mb-6 flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-blue mt-0.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-label",
								children: "Hostinger Shared Hosting & PHP Ready"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-muted-foreground mt-0.5 leading-relaxed",
								children: [
									"Persistent database connected to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
										className: "font-mono text-label font-medium",
										children: "database.sqlite"
									}),
									"."
								]
							})] })]
						}),
						authError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-red-50 border border-red-200/80 text-red-600 text-xs mb-5 flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authError })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleLogin,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "admin-email",
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
									children: "Admin Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-email",
									type: "email",
									value: emailInput,
									onChange: (e) => setEmailInput(e.target.value),
									required: true,
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-label placeholder:text-subtle transition-all outline-none",
									placeholder: "admin@codexdynamics.com"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "admin-password",
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "admin-password",
									type: "password",
									value: passwordInput,
									onChange: (e) => setPasswordInput(e.target.value),
									required: true,
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-label placeholder:text-subtle transition-all outline-none",
									placeholder: "••••••••"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "w-full mt-2 bg-label hover:bg-black text-paper font-medium py-3 rounded-full text-sm transition-all duration-200 shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Authenticate to CRM" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-4 border-t border-hairline flex items-center justify-between text-xs text-subtle",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct link: /admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "hover:text-label transition-colors inline-flex items-center gap-1 font-medium",
								children: ["Public Website ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
							})]
						})
					]
				})]
			})
		]
	});
}
var tabMeta = {
	customizer: {
		label: "Studio Customizer & Visual Architecture",
		icon: Sparkles,
		subtitle: "Complete visual branding, section order, conversion docks, SEO and emergency controls"
	},
	branding: {
		label: "Visual Branding & Themes",
		icon: Palette,
		subtitle: "Colorways, custom HEX primary accents, corner radius tokens, typography and logos"
	},
	layout: {
		label: "Layout & Sections Builder",
		icon: PanelsTopLeft,
		subtitle: "Reorder homepage sections with up/down controls, toggle visibility, and hero & header styles"
	},
	conversion: {
		label: "Conversion Tools & Floating Docks",
		icon: Megaphone,
		subtitle: "Global announcement bar, WhatsApp floating dock, multi-channel flyout, and lead form qualification"
	},
	seo_studio: {
		label: "SEO & Social Sharing Studio",
		icon: Globe,
		subtitle: "Meta tags with character counters, live Google SERP preview, OpenGraph social card, and GA4 telemetry"
	},
	emergency: {
		label: "Emergency Mode & Snapshots",
		icon: TriangleAlert,
		subtitle: "Public maintenance countdown screen, 1-click SQLite configuration snapshots, and code injection"
	},
	tidio: {
		label: "Tidio Live Chat",
		icon: MessageSquare,
		subtitle: "Live customer chat automation, lead triggers, and visitor conversation desk"
	},
	content: {
		label: "Site Contacts, Socials & Copy",
		icon: Globe,
		subtitle: "Manage live phone numbers, WhatsApp, addresses, header social icons, and site hero copy"
	},
	site_content: {
		label: "Site Contacts, Socials & Copy",
		icon: Globe,
		subtitle: "Manage live phone numbers, WhatsApp, addresses, header social icons, and site hero copy"
	},
	visitors: {
		label: "Live Visitors",
		icon: Activity,
		subtitle: "Real-time traffic telemetry and IP location logging"
	},
	leads: {
		label: "CRM Leads Database",
		icon: Users,
		subtitle: "Qualified prospects from visitor telemetry, contact forms, and blog readers"
	},
	analytics: {
		label: "Analytics & Regions",
		icon: ChartColumn,
		subtitle: "Audience demographics, browser share, and device metrics"
	},
	enquiries: {
		label: "Inquiries & Leads",
		icon: Inbox,
		subtitle: "Client project estimates and direct contact submissions"
	},
	backlinks: {
		label: "SEO Backlinks",
		icon: Link2,
		subtitle: "High-authority referring domains and citation tracking"
	},
	blogs: {
		label: "Blogs & Rank Math",
		icon: FileText,
		subtitle: "On-page SEO scoring and search snippet optimization"
	},
	reviews: {
		label: "Client Reviews",
		icon: Star,
		subtitle: "Verified customer testimonials and social proof ratings"
	},
	projects: {
		label: "Portfolio Projects",
		icon: Briefcase,
		subtitle: "Featured production websites and client case studies"
	},
	settings: {
		label: "Security & Database",
		icon: Shield,
		subtitle: "Security credentials, instant lead webhooks, and database backups"
	}
};
function AdminHeader({ activeTab, loading, onRefresh, onOpenMobileSidebar, onOpenHostingerModal, onSelectTab }) {
	const current = tabMeta[activeTab] || tabMeta.visitors;
	const TabIcon = current.icon;
	const isCustomizerActive = activeTab === "customizer" || activeTab === "branding" || activeTab === "layout" || activeTab === "conversion" || activeTab === "seo_studio" || activeTab === "emergency";
	const isContentActive = activeTab === "content" || activeTab === "site_content";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-black/8 px-4 sm:px-6 lg:px-8 py-3.5 transition-colors",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onOpenMobileSidebar,
					className: "lg:hidden p-2 rounded-xl text-subtle hover:text-label hover:bg-fill border border-black/8 transition-colors cursor-pointer shrink-0",
					"aria-label": "Open sidebar menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4 text-label" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden sm:flex p-1.5 rounded-lg bg-blue/10 text-blue shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabIcon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs text-subtle font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Codex CRM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-label font-semibold truncate font-sans text-sm sm:text-xs",
									children: current.label
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden md:block text-[11px] text-muted-foreground truncate",
							children: current.subtitle
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 sm:gap-2.5 shrink-0",
				children: [
					onSelectTab && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectTab("customizer"),
						className: `inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all hover:shadow-xs cursor-pointer ${isCustomizerActive ? "bg-blue text-white border-blue shadow-xs" : "bg-blue/10 hover:bg-blue/20 text-blue border-blue/25"}`,
						title: "Open Studio Customizer (Branding, Layout, WhatsApp, SEO & Emergency)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Studio Customizer" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onSelectTab("content"),
						className: `hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all hover:shadow-xs cursor-pointer ${isContentActive ? "bg-black/90 text-white border-black/90 shadow-xs" : "bg-fill hover:bg-fill-elevated text-label border-black/8"}`,
						title: "Edit live phone, WhatsApp, email, addresses, header social buttons & site copy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contacts & Copy" })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onOpenHostingerModal,
						className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue/10 hover:bg-blue/15 text-blue text-xs font-semibold border border-blue/20 transition-all hover:shadow-xs cursor-pointer",
						title: "Download Hostinger public_html ZIP Package",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hostinger ZIP" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onRefresh,
						disabled: loading,
						className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs cursor-pointer disabled:opacity-50",
						title: "Sync data with SQLite database",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `size-3.5 text-muted-foreground ${loading ? "animate-spin text-blue" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Sync DB"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						target: "_blank",
						className: "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-fill hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition-all hover:shadow-xs",
						title: "Open public website in new tab",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Public Site"
						})]
					})
				]
			})]
		})
	});
}
function AdminSidebar({ activeTab, setActiveTab, stats, isOpenMobile, onCloseMobile, onOpenHostingerModal, onSimulateVisitor, onLogout }) {
	const { config } = useSiteConfig();
	const isMaintenance = Boolean(config.emergency?.maintenanceMode);
	const navSections = [
		{
			group: "Studio & Site Customizer",
			items: [
				{
					id: "customizer",
					label: "Studio Customizer",
					icon: Sparkles,
					count: null,
					badgeLive: true,
					badgeText: "Visual Suite",
					badgeColor: "bg-blue/10 text-blue border-blue/20"
				},
				{
					id: "branding",
					label: "Visual Branding & Colors",
					icon: Palette,
					count: null,
					badgeLive: false,
					badgeText: "Theme",
					badgeColor: "bg-purple-50 text-purple-700 border-purple-200/70"
				},
				{
					id: "layout",
					label: "Layout & Sections Builder",
					icon: PanelsTopLeft,
					count: null,
					badgeLive: false,
					badgeText: "Reorder",
					badgeColor: "bg-amber-50 text-amber-700 border-amber-200/70"
				},
				{
					id: "conversion",
					label: "Conversion & Floating Docks",
					icon: Megaphone,
					count: null,
					badgeLive: false,
					badgeText: "WhatsApp",
					badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70"
				},
				{
					id: "seo_studio",
					label: "SEO & Social Sharing",
					icon: Globe,
					count: null,
					badgeLive: false,
					badgeText: "SERP & OG",
					badgeColor: "bg-sky-50 text-sky-700 border-sky-200/70"
				},
				{
					id: "emergency",
					label: "Emergency & Snapshots",
					icon: TriangleAlert,
					count: null,
					badgeLive: isMaintenance,
					badgeText: isMaintenance ? "MAINTENANCE" : "Backups",
					badgeColor: isMaintenance ? "bg-red-600 text-white border-red-600 animate-pulse" : "bg-black/5 text-subtle border-black/5"
				},
				{
					id: "content",
					label: "Site Contacts & Socials",
					icon: Phone,
					count: null,
					badgeLive: false,
					badgeText: "Public Copy",
					badgeColor: "bg-black/5 text-subtle border-black/5"
				}
			]
		},
		{
			group: "Live Chat & Telemetry",
			items: [
				{
					id: "tidio",
					label: "Tidio Live Chat",
					icon: MessageSquare,
					count: null,
					badgeLive: true,
					badgeText: null,
					badgeColor: "bg-[#0066FF]/10 text-[#0066FF] border-[#0066FF]/20"
				},
				{
					id: "visitors",
					label: "Live Visitors",
					icon: Activity,
					count: stats.totalVisitors,
					badgeLive: true,
					badgeText: null,
					badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70"
				},
				{
					id: "analytics",
					label: "Analytics & Regions",
					icon: ChartColumn,
					count: null,
					badgeLive: false,
					badgeText: null,
					badgeColor: ""
				}
			]
		},
		{
			group: "Clients & Inquiries",
			items: [
				{
					id: "leads",
					label: "CRM Leads",
					icon: Users,
					count: stats.totalLeads ?? 0,
					badgeLive: (stats.newLeads ?? 0) > 0,
					badgeText: null,
					badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/70"
				},
				{
					id: "enquiries",
					label: "Inquiries",
					icon: Inbox,
					count: stats.totalEnquiries,
					badgeLive: false,
					badgeText: null,
					badgeColor: "bg-blue/10 text-blue border-blue/20"
				},
				{
					id: "reviews",
					label: "Client Reviews",
					icon: Star,
					count: stats.totalReviews,
					badgeLive: false,
					badgeText: null,
					badgeColor: "bg-amber-50 text-amber-700 border-amber-200/70"
				}
			]
		},
		{
			group: "Content & Optimization",
			items: [
				{
					id: "blogs",
					label: "Rank Math Blogs",
					icon: FileText,
					count: stats.totalBlogs,
					badgeLive: false,
					badgeText: null,
					badgeColor: "bg-blue/10 text-blue border-blue/20"
				},
				{
					id: "backlinks",
					label: "SEO Backlinks",
					icon: Link2,
					count: stats.totalBacklinks,
					badgeLive: false,
					badgeText: null,
					badgeColor: "bg-purple-50 text-purple-700 border-purple-200/70"
				},
				{
					id: "projects",
					label: "Portfolio Projects",
					icon: Briefcase,
					count: stats.totalProjects,
					badgeLive: false,
					badgeText: null,
					badgeColor: "bg-black/5 text-subtle border-black/5"
				}
			]
		},
		{
			group: "System & Security",
			items: [{
				id: "settings",
				label: "Security & Database",
				icon: Shield,
				count: null,
				badgeLive: false,
				badgeText: "SQLite",
				badgeColor: "bg-black/5 text-subtle border-black/5"
			}]
		}
	];
	const handleSelectTab = (id) => {
		setActiveTab(id);
		onCloseMobile();
	};
	const sidebarContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full bg-[#fbfbfd] border-r border-black/8 select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 pb-4 border-b border-black/6 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					onClick: onCloseMobile,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-blue text-paper shadow-[inset_0_0.5px_0_rgb(255_255_255_/_0.35)] transition-transform duration-200 group-hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm leading-none font-bold tracking-tight",
							children: "C"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-semibold text-sm tracking-tight text-label",
								children: "Codex Dynamics"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-blue/10 text-blue border border-blue/20 uppercase",
								children: "Pro"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground font-medium",
							children: "Back Office CRM"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCloseMobile,
					className: "lg:hidden p-1.5 rounded-full text-subtle hover:text-label hover:bg-fill transition-colors cursor-pointer",
					"aria-label": "Close sidebar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 pt-3.5 pb-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-2.5 rounded-xl bg-white border border-black/6 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold text-label",
								children: "SQLite3 Active"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-mono",
								children: "database.sqlite"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpenHostingerModal,
						className: "text-[10px] font-medium text-blue hover:underline cursor-pointer px-1.5 py-0.5 rounded",
						title: "Hostinger documentation",
						children: "Docs"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex-1 px-3 py-2 space-y-5 overflow-y-auto custom-scrollbar",
				children: [navSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 text-[10px] font-semibold tracking-wider uppercase text-subtle font-mono",
						children: section.group
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-0.5",
						children: section.items.map((item) => {
							const Icon = item.icon;
							const isActive = activeTab === item.id || item.id === "content" && activeTab === "site_content" || item.id === "site_content" && activeTab === "content";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleSelectTab(item.id),
								className: `w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 cursor-pointer ${isActive ? "bg-white text-label font-semibold shadow-xs border border-black/8 ring-1 ring-black/4" : "text-muted-foreground hover:text-label hover:bg-black/[0.03]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `size-4 shrink-0 transition-colors ${isActive ? "text-blue" : "text-subtle"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: item.label
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 shrink-0 ml-2",
									children: [
										item.badgeLive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-2 w-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })]
										}),
										item.badgeText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[9px] px-1.5 py-0.5 rounded font-medium border ${isActive ? "bg-blue/10 text-blue border-blue/20 font-semibold" : "bg-black/5 text-subtle border-black/5"}`,
											children: item.badgeText
										}),
										typeof item.count === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `text-[10px] px-2 py-0.5 rounded-full font-medium border ${isActive ? "bg-blue/10 text-blue border-blue/20 font-semibold" : item.badgeColor || "bg-black/5 text-subtle border-black/5"}`,
											children: item.count
										}),
										isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3 text-blue shrink-0 ml-0.5" })
									]
								})]
							}, item.id);
						})
					})]
				}, section.group)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1 pt-2 border-t border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-3 text-[10px] font-semibold tracking-wider uppercase text-subtle font-mono",
						children: "System & Tools"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onSimulateVisitor,
								className: "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-label hover:bg-black/[0.03] transition-colors cursor-pointer text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-4 text-emerald-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simulate Visitor Ping" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onOpenHostingerModal,
								className: "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-label hover:bg-black/[0.03] transition-colors cursor-pointer text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-4 text-blue shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hostinger & SQLite Guide" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								target: "_blank",
								className: "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-label hover:bg-black/[0.03] transition-colors text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-subtle shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Site" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-amber-500" })]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3 border-t border-black/6 bg-white/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-2 rounded-xl bg-white border border-black/6 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-8 rounded-full bg-label text-paper flex items-center justify-center text-xs font-semibold shrink-0 shadow-xs",
							children: "AD"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label truncate",
								children: "Codex Admin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground truncate font-mono",
								children: "admin@codexdynamics.com"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onLogout,
						className: "p-1.5 rounded-lg text-subtle hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer shrink-0 ml-1",
						title: "Sign Out of Back Office",
						"aria-label": "Sign Out",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
					})]
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "hidden lg:flex lg:flex-col lg:w-64 xl:w-72 fixed inset-y-0 left-0 z-30 shadow-xs",
			children: sidebarContent
		}),
		isOpenMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity",
			onClick: onCloseMobile,
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] transform transition-transform duration-200 ease-in-out lg:hidden shadow-2xl ${isOpenMobile ? "translate-x-0" : "-translate-x-full"}`,
			children: sidebarContent
		})
	] });
}
function AdminMetrics({ stats, activeTab, setActiveTab }) {
	const { config } = useSiteConfig();
	const isMaintenance = Boolean(config.emergency?.maintenanceMode);
	const activePreset = config.branding?.preset || "codex_blue";
	const primaryColor = config.branding?.primaryColor || "#0066FF";
	const isCustomizerActive = activeTab === "customizer" || activeTab === "branding" || activeTab === "layout" || activeTab === "conversion" || activeTab === "seo_studio" || activeTab === "emergency";
	const isContentActive = activeTab === "content" || activeTab === "site_content";
	const cards = [
		{
			id: "visitors",
			title: "Total Visitors",
			value: stats.totalVisitors,
			subValue: `+${stats.todayVisitors} today`,
			icon: Users,
			badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
			accent: "text-emerald-600"
		},
		{
			id: "leads",
			title: "CRM Leads",
			value: stats.totalLeads ?? 0,
			subValue: `${stats.newLeads ?? 0} new inbound`,
			icon: Contact,
			badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
			accent: "text-emerald-600"
		},
		{
			id: "enquiries",
			title: "Inquiries",
			value: stats.totalEnquiries,
			subValue: "Form submissions",
			icon: UserPlus,
			badgeColor: "bg-blue/10 text-blue border-blue/20",
			accent: "text-blue"
		},
		{
			id: "backlinks",
			title: "SEO Backlinks",
			value: stats.totalBacklinks,
			subValue: "Indexed domains",
			icon: Link2,
			badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
			accent: "text-purple-600"
		},
		{
			id: "blogs",
			title: "Blog Articles",
			value: stats.totalBlogs,
			subValue: "Rank Math ready",
			icon: FileText,
			badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
			accent: "text-amber-600"
		},
		{
			id: "reviews",
			title: "Client Reviews",
			value: stats.totalReviews,
			subValue: "5.0 ★ average",
			icon: Star,
			badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
			accent: "text-amber-500"
		},
		{
			id: "projects",
			title: "Portfolio Sites",
			value: stats.totalProjects,
			subValue: "Active showcases",
			icon: Briefcase,
			badgeColor: "bg-blue/10 text-blue border-blue/20",
			accent: "text-blue"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3",
				children: cards.map((c) => {
					const Icon = c.icon;
					const isSelected = activeTab === c.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setActiveTab(c.id),
						className: `surface-lift text-left p-4 rounded-2xl bg-card border transition-all duration-200 cursor-pointer ${isSelected ? "border-blue/50 ring-2 ring-blue/10 shadow-sm" : "border-black/8 hover:border-black/15 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-1 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-semibold uppercase tracking-wider text-subtle",
									children: c.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `p-1 rounded-lg ${c.badgeColor}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-baseline gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xl font-bold tracking-tight font-display text-label",
									children: c.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-medium text-muted-foreground mt-1 truncate",
								children: c.subValue
							})
						]
					}, c.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-2xl bg-gradient-to-r from-blue/5 via-purple-500/5 to-emerald-500/5 border border-black/10 p-4 shadow-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-10 rounded-xl bg-blue text-white flex items-center justify-center shadow-xs shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-bold text-sm text-label",
									children: "Studio Customizer & Site Engineering"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white border border-black/10 shadow-2xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "size-2 rounded-full ring-1 ring-black/10 shrink-0",
										style: { backgroundColor: primaryColor }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground capitalize",
										children: activePreset.replace("_", " ")
									})]
								}),
								isMaintenance && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-600 text-white uppercase animate-pulse",
									children: "Maintenance Active"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Live visual branding, section order, conversion docks, search metadata, and emergency mode."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("branding"),
								className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${activeTab === "branding" ? "bg-purple-600 text-white border-purple-600" : "bg-white hover:bg-black/5 text-label border-black/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-3.5 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Theme & Colors" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("layout"),
								className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${activeTab === "layout" ? "bg-amber-600 text-white border-amber-600" : "bg-white hover:bg-black/5 text-label border-black/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "size-3.5 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sections & Order" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("conversion"),
								className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${activeTab === "conversion" ? "bg-emerald-600 text-white border-emerald-600" : "bg-white hover:bg-black/5 text-label border-black/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "size-3.5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp & Docks" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("seo_studio"),
								className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${activeTab === "seo_studio" ? "bg-sky-600 text-white border-sky-600" : "bg-white hover:bg-black/5 text-label border-black/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-sky-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SEO & SERP" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("emergency"),
								className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border shadow-2xs ${activeTab === "emergency" ? "bg-red-600 text-white border-red-600" : "bg-white hover:bg-black/5 text-label border-black/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-3.5 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Emergency" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveTab("customizer"),
								className: `inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer shadow-xs ${isCustomizerActive && activeTab === "customizer" ? "bg-blue text-white" : "bg-blue hover:bg-blue-600 text-white"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Studio" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-blue/5 border border-blue/15 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 text-label font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-6 rounded-lg bg-blue/10 text-blue flex items-center justify-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-label font-medium",
						children: "Manage public site contacts, phone, WhatsApp, email, studio address & social accounts"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActiveTab("content"),
					className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-xs cursor-pointer ${isContentActive ? "bg-blue text-white" : "bg-blue text-white hover:bg-blue-dark"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isContentActive ? "Editing Site Content Below" : "Edit Site Contacts & Socials" })]
				})]
			})
		]
	});
}
function parseBrowserDetails(rawInput) {
	const str = (rawInput || "").trim();
	const lower = str.toLowerCase();
	const versionMatch = str.match(/(\d+(\.\d+)?)/);
	const version = versionMatch ? versionMatch[1] : "";
	if (lower.includes("edg")) return {
		fullName: "Microsoft Edge",
		shortName: "Edge",
		version,
		category: "edge"
	};
	if (lower.includes("opr") || lower.includes("opera")) return {
		fullName: "Opera",
		shortName: "Opera",
		version,
		category: "opera"
	};
	if (lower.includes("brave")) return {
		fullName: "Brave",
		shortName: "Brave",
		version,
		category: "brave"
	};
	if (lower.includes("firefox") || lower.includes("fxios")) return {
		fullName: "Mozilla Firefox",
		shortName: "Firefox",
		version,
		category: "firefox"
	};
	if (lower.includes("safari") && !lower.includes("chrome") && !lower.includes("crios")) return {
		fullName: "Apple Safari",
		shortName: "Safari",
		version,
		category: "safari"
	};
	if (lower.includes("chrome") || lower.includes("crios") || lower.includes("chromium")) return {
		fullName: "Google Chrome",
		shortName: "Chrome",
		version,
		category: "chrome"
	};
	return {
		fullName: str || "Web Browser",
		shortName: str || "Browser",
		version,
		category: "other"
	};
}
/**
* Authentic SVG Vector Logos for Web Browsers
*/
function BrowserIcon({ category, className = "size-4" }) {
	switch (category) {
		case "chrome": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4C31.5 4 38 8.1 41.5 14.2L28.2 37.3C27 39.4 24.6 40.8 22 40.8L12.5 24.3L24 4Z",
					fill: "#FBBC05"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4C14.7 4 6.9 10.3 4.6 18.9L16.2 38.9L24 25.5C24 20.3 28.2 16 33.5 16H42.6C38.9 8.8 32 4 24 4Z",
					fill: "#EA4335"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 44C33.3 44 41.1 37.7 43.4 29.1L31.8 9.1L24 22.5C24 27.7 19.8 32 14.5 32H5.4C9.1 39.2 16 44 24 44Z",
					fill: "#34A853"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "10.5",
					fill: "#FFFFFF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "8",
					fill: "#4285F4"
				})
			]
		});
		case "safari": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "safari-bg",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#1B92FF"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#0550CE"
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "22",
					fill: "url(#safari-bg)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: "#FFFFFF",
					strokeWidth: "1.2",
					opacity: "0.65",
					strokeLinecap: "round",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "24",
							y1: "5",
							x2: "24",
							y2: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "24",
							y1: "40",
							x2: "24",
							y2: "43"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "5",
							y1: "24",
							x2: "8",
							y2: "24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "40",
							y1: "24",
							x2: "43",
							y2: "24"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "10.5",
							y1: "10.5",
							x2: "12.7",
							y2: "12.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "35.3",
							y1: "35.3",
							x2: "37.5",
							y2: "37.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "37.5",
							y1: "10.5",
							x2: "35.3",
							y2: "12.7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "12.7",
							y1: "35.3",
							x2: "10.5",
							y2: "37.5"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "24,24 22,22 36,12 26,26",
					fill: "#FF3B30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "24,24 26,26 12,36 22,22",
					fill: "#FFFFFF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "2",
					fill: "#FFFFFF",
					stroke: "#0038A8",
					strokeWidth: "0.8"
				})
			]
		});
		case "firefox": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
					id: "ff-globe",
					cx: "50%",
					cy: "50%",
					r: "50%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#303A96"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "70%",
							stopColor: "#252468"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#1E174A"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "ff-flame",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#FFE033"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "35%",
							stopColor: "#FF7A00"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "70%",
							stopColor: "#FF2A4D"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#9C0084"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24",
					cy: "24",
					r: "18",
					fill: "url(#ff-globe)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M38 12C35 8 29 6 25 7C29 9 31 13 29 16C27 19 22 18 20 23C18 28 20 33 24 35C19 35 15 32 14 28C13 24 15 20 18 17C13 19 10 23 10 28C10 36 16 42 24 42C33 42 40 35 40 26C40 20 39 15 38 12Z",
					fill: "url(#ff-flame)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M36 12C38 15 37 20 35 22C34 19 32 17 30 16C32 14 34 13 36 12Z",
					fill: "#FFDF00"
				})
			]
		});
		case "edge": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "edge-grad1",
					x1: "0%",
					y1: "100%",
					x2: "100%",
					y2: "0%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#0C59A4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#119BE7"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "edge-grad2",
					x1: "0%",
					y1: "0%",
					x2: "100%",
					y2: "100%",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#1CD0BB"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#0B98E4"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4C13 4 4 13 4 24C4 32 9 39 16 42C14 39 13 35 13 31C13 22 20 15 29 15C34 15 38 17 41 20C39 11 32 4 24 4Z",
					fill: "url(#edge-grad1)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M44 26C44 36 35 44 25 44C16 44 9 37 9 28C9 23 12 18 16 15C16 23 23 29 31 29C38 29 44 25 44 26Z",
					fill: "url(#edge-grad2)"
				})
			]
		});
		case "opera": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "opera-grad",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "100%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "#FF424D"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "#CC0914"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 4C13 4 4 13 4 24C4 35 13 44 24 44C35 44 44 35 44 24C44 13 35 4 24 4ZM24 38C17.5 38 14 31.7 14 24C14 16.3 17.5 10 24 10C30.5 10 34 16.3 34 24C34 31.7 30.5 38 24 38Z",
				fill: "url(#opera-grad)"
			})]
		});
		case "brave": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 48 48",
			className: `${className} shrink-0`,
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 4L38 10V22C38 31.5 32 40 24 44C16 40 10 31.5 10 22V10L24 4Z",
					fill: "#FB542B"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M24 12L31 16V23C31 28 28 32.5 24 34.5C20 32.5 17 28 17 23V16L24 12Z",
					fill: "#FFFFFF"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "24,18 27,24 21,24",
					fill: "#FB542B"
				})
			]
		});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: `${className} shrink-0 text-muted-foreground`,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "20",
					height: "16",
					x: "2",
					y: "4",
					rx: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 9h20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "6",
					cy: "6.5",
					r: "0.75",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "9",
					cy: "6.5",
					r: "0.75",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "6.5",
					r: "0.75",
					fill: "currentColor"
				})
			]
		});
	}
}
/**
* BrowserBadge Component
* Renders the authentic browser logo/icon AND the full name of the browser.
*/
function BrowserBadge({ browser, browserString, showFull = false, className = "", iconOnly = false, size = "md" }) {
	const { fullName, shortName, version, category } = parseBrowserDetails(browser || browserString || "");
	const displayName = showFull ? fullName : shortName;
	const sizeClasses = {
		sm: "px-2 py-0.5 text-[10px] gap-1.5",
		md: "px-2.5 py-1 text-xs gap-2",
		lg: "px-3 py-1.5 text-xs gap-2.5"
	}[size];
	const iconSizes = {
		sm: "size-3.5",
		md: "size-4",
		lg: "size-5"
	}[size];
	const themeStyles = {
		chrome: "bg-emerald-50/80 text-emerald-900 border-emerald-200/80 hover:bg-emerald-50",
		safari: "bg-sky-50/80 text-sky-900 border-sky-200/80 hover:bg-sky-50",
		firefox: "bg-amber-50/80 text-amber-950 border-amber-200/80 hover:bg-amber-50",
		edge: "bg-cyan-50/80 text-cyan-950 border-cyan-200/80 hover:bg-cyan-50",
		opera: "bg-rose-50/80 text-rose-950 border-rose-200/80 hover:bg-rose-50",
		brave: "bg-orange-50/80 text-orange-950 border-orange-200/80 hover:bg-orange-50",
		other: "bg-fill text-label border-black/8 hover:bg-fill-subtle"
	};
	const badgeTheme = themeStyles[category] || themeStyles.other;
	if (iconOnly) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center justify-center ${className}`,
		title: `${fullName}${version ? ` ${version}` : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserIcon, {
			category,
			className: iconSizes
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-center rounded-full font-medium border shadow-2xs transition-colors ${sizeClasses} ${badgeTheme} ${className}`,
		title: `${fullName} ${version ? `(Version ${version})` : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserIcon, {
				category,
				className: iconSizes
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold whitespace-nowrap tracking-tight",
				children: displayName
			}),
			version && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] opacity-75 whitespace-nowrap",
				children: version
			})
		]
	});
}
function normalizeCountryCode(countryOrCode) {
	if (!countryOrCode) return "US";
	let raw = "";
	if (typeof countryOrCode === "string") raw = countryOrCode;
	else if (typeof countryOrCode === "object") raw = countryOrCode.countryCode || countryOrCode.country_code || countryOrCode.country || "";
	else raw = String(countryOrCode);
	const str = raw.trim();
	const lower = str.toLowerCase();
	if (lower === "us" || lower === "usa" || lower.includes("united states") || lower.includes("america")) return "US";
	if (lower === "gb" || lower === "uk" || lower.includes("united kingdom") || lower.includes("britain") || lower.includes("england")) return "GB";
	if (lower === "de" || lower.includes("germany") || lower.includes("deutschland")) return "DE";
	if (lower === "ua" || lower.includes("ukraine")) return "UA";
	if (lower === "ca" || lower.includes("canada")) return "CA";
	if (lower === "fr" || lower.includes("france")) return "FR";
	if (lower === "ae" || lower.includes("emirates") || lower.includes("dubai")) return "AE";
	if (lower === "jp" || lower.includes("japan")) return "JP";
	if (lower === "au" || lower.includes("australia")) return "AU";
	if (lower === "sg" || lower.includes("singapore")) return "SG";
	if (lower === "nl" || lower.includes("netherlands") || lower.includes("holland")) return "NL";
	if (lower === "ch" || lower.includes("switzerland") || lower.includes("swiss")) return "CH";
	if (lower === "it" || lower.includes("italy") || lower.includes("italia")) return "IT";
	if (lower === "es" || lower.includes("spain") || lower.includes("espana")) return "ES";
	if (lower === "se" || lower.includes("sweden")) return "SE";
	if (lower === "in" || lower.includes("india")) return "IN";
	if (lower === "br" || lower.includes("brazil") || lower.includes("brasil")) return "BR";
	if (lower === "pl" || lower.includes("poland")) return "PL";
	if (str.length === 2) return str.toUpperCase();
	return "GLOBAL";
}
/**
* High-fidelity SVG Country Flags
* Renders authentic graphical national flags across all operating systems
* (ensuring Windows users see true graphical flags rather than plain text country initials).
*/
function CountryFlag({ country, countryCode, flag, className = "", size = "md" }) {
	const code = normalizeCountryCode(countryCode || country);
	const wrapperClass = `inline-flex items-center justify-center shrink-0 overflow-hidden shadow-xs border border-black/10 select-none ${{
		sm: "w-4 h-3 rounded-[2px]",
		md: "w-5 h-3.5 rounded-[3px]",
		lg: "w-7 h-5 rounded-[4px]"
	}[size]} ${className}`;
	switch (code) {
		case "US": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "United States",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 64 48",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "64",
						height: "48",
						fill: "#B22234"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "3.69",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "11.07",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "18.46",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "25.84",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "33.23",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "40.61",
						width: "64",
						height: "3.69",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "28",
						height: "26",
						fill: "#3C3B6E"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						fill: "#FFFFFF",
						opacity: "0.95",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "5",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "10",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "15",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "20",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "25",
								cy: "5",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "7.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "17.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "22.5",
								cy: "9",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "5",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "10",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "15",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "20",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "25",
								cy: "13",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "7.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "12.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "17.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "22.5",
								cy: "17",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "5",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "10",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "15",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "20",
								cy: "21",
								r: "1.3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "25",
								cy: "21",
								r: "1.3"
							})
						]
					})
				]
			})
		});
		case "GB": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "United Kingdom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
					id: "gb-clip",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					clipPath: "url(#gb-clip)",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: "60",
							height: "40",
							fill: "#012169"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0,0 L60,40 M60,0 L0,40",
							stroke: "#FFFFFF",
							strokeWidth: "8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0,0 L60,40 M60,0 L0,40",
							stroke: "#C8102E",
							strokeWidth: "4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M30,0 v40 M0,20 h60",
							stroke: "#FFFFFF",
							strokeWidth: "12"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M30,0 v40 M0,20 h60",
							stroke: "#C8102E",
							strokeWidth: "7"
						})
					]
				})]
			})
		});
		case "DE": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Germany",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "13.33",
						fill: "#000000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "13.33",
						width: "60",
						height: "13.33",
						fill: "#DD0000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "26.66",
						width: "60",
						height: "13.34",
						fill: "#FFCE00"
					})
				]
			})
		});
		case "UA": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Ukraine",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "60",
					height: "20",
					fill: "#0057B7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "20",
					width: "60",
					height: "20",
					fill: "#FFDD00"
				})]
			})
		});
		case "CA": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Canada",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "15",
						height: "40",
						fill: "#FF0000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						width: "30",
						height: "40",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "45",
						width: "15",
						height: "40",
						fill: "#FF0000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M30 10 L32 15 L36 14 L34 19 L38 21 L35 24 L36 28 L32 26 L30.8 31 L29.2 31 L28 26 L24 28 L25 24 L22 21 L26 19 L24 14 L28 15 Z",
						fill: "#FF0000"
					})
				]
			})
		});
		case "FR": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "France",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "20",
						height: "40",
						fill: "#002654"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "20",
						width: "20",
						height: "40",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "40",
						width: "20",
						height: "40",
						fill: "#ED2939"
					})
				]
			})
		});
		case "AE": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "United Arab Emirates",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						width: "45",
						height: "13.33",
						fill: "#00732F"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						y: "13.33",
						width: "45",
						height: "13.33",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "15",
						y: "26.66",
						width: "45",
						height: "13.34",
						fill: "#000000"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "15",
						height: "40",
						fill: "#FF0000"
					})
				]
			})
		});
		case "JP": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Japan",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "60",
					height: "40",
					fill: "#FFFFFF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "30",
					cy: "20",
					r: "11",
					fill: "#BC002D"
				})]
			})
		});
		case "AU": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Australia",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40",
						fill: "#00008B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						transform: "scale(0.5)",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								width: "60",
								height: "40",
								fill: "#012169"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,0 L60,40 M60,0 L0,40",
								stroke: "#FFFFFF",
								strokeWidth: "6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0,0 L60,40 M60,0 L0,40",
								stroke: "#C8102E",
								strokeWidth: "3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M30,0 v40 M0,20 h60",
								stroke: "#FFFFFF",
								strokeWidth: "10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M30,0 v40 M0,20 h60",
								stroke: "#C8102E",
								strokeWidth: "6"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "15",
						cy: "30",
						r: "4.5",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "45",
						cy: "10",
						r: "2",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "51",
						cy: "18",
						r: "2",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "45",
						cy: "32",
						r: "2.3",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "39",
						cy: "22",
						r: "2",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "47",
						cy: "24",
						r: "1.3",
						fill: "#FFFFFF"
					})
				]
			})
		});
		case "SG": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Singapore",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "20",
						fill: "#ED2939"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "20",
						width: "60",
						height: "20",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "13",
						cy: "10",
						r: "6",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "15.5",
						cy: "10",
						r: "5.2",
						fill: "#ED2939"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "17",
						cy: "7",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "19",
						cy: "10",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "18",
						cy: "13",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "15",
						cy: "13",
						r: "1",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "14.5",
						cy: "9",
						r: "1",
						fill: "#FFFFFF"
					})
				]
			})
		});
		case "NL": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Netherlands",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "13.33",
						fill: "#AE1C28"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "13.33",
						width: "60",
						height: "13.33",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "26.66",
						width: "60",
						height: "13.34",
						fill: "#21468B"
					})
				]
			})
		});
		case "CH": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Switzerland",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 40 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "40",
						height: "40",
						fill: "#D52B1E"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "16",
						y: "8",
						width: "8",
						height: "24",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "16",
						width: "24",
						height: "8",
						fill: "#FFFFFF"
					})
				]
			})
		});
		case "IT": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Italy",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "20",
						height: "40",
						fill: "#009246"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "20",
						width: "20",
						height: "40",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "40",
						width: "20",
						height: "40",
						fill: "#CE2B37"
					})
				]
			})
		});
		case "ES": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Spain",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "10",
						fill: "#AA151B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "10",
						width: "60",
						height: "20",
						fill: "#F1BF00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "30",
						width: "60",
						height: "10",
						fill: "#AA151B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "20",
						r: "4",
						fill: "#AA151B",
						opacity: "0.9"
					})
				]
			})
		});
		case "SE": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Sweden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40",
						fill: "#006AA7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "18",
						width: "8",
						height: "40",
						fill: "#FECC00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "16",
						width: "60",
						height: "8",
						fill: "#FECC00"
					})
				]
			})
		});
		case "IN": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "India",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "13.33",
						fill: "#FF9933"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "13.33",
						width: "60",
						height: "13.33",
						fill: "#FFFFFF"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						y: "26.66",
						width: "60",
						height: "13.34",
						fill: "#138808"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "30",
						cy: "20",
						r: "4.5",
						fill: "none",
						stroke: "#000080",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "30",
						cy: "20",
						r: "1.2",
						fill: "#000080"
					})
				]
			})
		});
		case "BR": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Brazil",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "60",
						height: "40",
						fill: "#009739"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "30,5 55,20 30,35 5,20",
						fill: "#FEDD00"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "30",
						cy: "20",
						r: "8",
						fill: "#012169"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M 23,20 A 8,8 0 0,1 37,20",
						fill: "none",
						stroke: "#FFFFFF",
						strokeWidth: "1.2"
					})
				]
			})
		});
		case "PL": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: wrapperClass,
			title: country || "Poland",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 60 40",
				className: "w-full h-full object-cover",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "60",
					height: "20",
					fill: "#FFFFFF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					y: "20",
					width: "60",
					height: "20",
					fill: "#DC143C"
				})]
			})
		});
		default:
			if (flag && flag !== "🌐" && flag !== "🌍") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: wrapperClass,
				title: country || "Country",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs leading-none",
					children: flag
				})
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: wrapperClass,
				title: country || "Global",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 24 24",
					className: "w-full h-full p-0.5 text-blue",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "12",
							cy: "12",
							r: "10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12h20" })
					]
				})
			});
	}
}
function VisitorDetailModal({ visitor, isOpen, onClose, onAddToLeads, isAlreadyLead = false }) {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const [copiedKey, setCopiedKey] = (0, import_react.useState)(null);
	const [isSubmittingLead, setIsSubmittingLead] = (0, import_react.useState)(false);
	const [leadName, setLeadName] = (0, import_react.useState)("");
	const [leadEmail, setLeadEmail] = (0, import_react.useState)("");
	const [leadPhone, setLeadPhone] = (0, import_react.useState)("");
	const [leadCompany, setLeadCompany] = (0, import_react.useState)("");
	const [leadNotes, setLeadNotes] = (0, import_react.useState)("");
	if (!isOpen || !visitor) return null;
	const geo = resolveGeoLocation(visitor.country, visitor.flag);
	const streetAddress = visitor.street || geo.street;
	const city = visitor.city || geo.city;
	const region = visitor.region || geo.region;
	const postalCode = visitor.postal_code || geo.postalCode;
	const country = visitor.country || geo.country;
	const flag = visitor.flag || geo.flag;
	const durationSec = visitor.duration_seconds || 120;
	const formatDuration = (seconds) => {
		if (seconds < 60) return `${seconds}s`;
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		if (mins < 60) return `${mins}m ${secs}s`;
		return `${Math.floor(mins / 60)}h ${mins % 60}m`;
	};
	let pagesList = [];
	try {
		if (visitor.pages_viewed) {
			const parsed = typeof visitor.pages_viewed === "string" ? JSON.parse(visitor.pages_viewed) : visitor.pages_viewed;
			if (Array.isArray(parsed)) pagesList = parsed;
		}
	} catch {
		pagesList = [];
	}
	if (pagesList.length === 0) pagesList = [{
		url: visitor.page_url || "/",
		title: "Codex Dynamics | Bespoke Web Design & High-Conversion Systems",
		timestamp: visitor.created_at || (/* @__PURE__ */ new Date()).toISOString()
	}];
	let cookiesMap = {};
	try {
		if (visitor.cookies_data) {
			const parsed = typeof visitor.cookies_data === "string" ? JSON.parse(visitor.cookies_data) : visitor.cookies_data;
			if (typeof parsed === "object" && parsed !== null) cookiesMap = parsed;
		}
	} catch {
		cookiesMap = {};
	}
	if (Object.keys(cookiesMap).length === 0) cookiesMap = {
		__cdx_vid: `vid_${visitor.session_id ? visitor.session_id.replace("sess_", "") : "79a1"}_${visitor.country.toLowerCase().slice(0, 2)}`,
		__cdx_session: visitor.session_id || "sess_live",
		__cdx_visit_count: String(visitor.visit_count || 1),
		__cdx_duration_secs: String(durationSec),
		__cdx_first_visit: visitor.created_at || (/* @__PURE__ */ new Date(Date.now() - 864e5)).toISOString(),
		__cdx_cookie_consent: "accepted",
		__cdx_utm_source: visitor.referrer && visitor.referrer !== "Direct" ? visitor.referrer : "direct_organic",
		__cdx_device_type: visitor.device || "Desktop",
		__cdx_browser_agent: visitor.browser || "Chrome"
	};
	const handleCopyText = (key, text) => {
		navigator.clipboard.writeText(text);
		setCopiedKey(key);
		toast.success(`Copied ${key} to clipboard`);
		setTimeout(() => setCopiedKey(null), 2e3);
	};
	const handleAddLeadSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsSubmittingLead(true);
			await onAddToLeads(visitor, {
				name: leadName.trim() || visitor.name || `Lead from ${city}`,
				email: leadEmail.trim() || visitor.email || "",
				phone: leadPhone.trim() || visitor.phone || "",
				company: leadCompany.trim() || "",
				notes: leadNotes.trim() || `Promoted from visitor ${visitor.session_id}. Pages viewed: ${pagesList.length}. Time on site: ${formatDuration(durationSec)}.`
			});
			toast.success("Visitor successfully added to CRM Leads!");
			setActiveTab("overview");
		} catch {
			toast.error("Failed to add to leads. Please try again.");
		} finally {
			setIsSubmittingLead(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 border-b border-black/8 bg-gradient-to-b from-fill-subtle to-white flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
									country,
									countryCode: visitor.country_code,
									flag,
									size: "lg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-lg font-bold text-label font-display tracking-tight flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-normal text-muted-foreground",
										children: [
											"(",
											city,
											")"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, {
									browser: visitor.browser,
									showFull: true
								}),
								visitor.is_returning || visitor.visit_count && visitor.visit_count > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-3" }),
										"Returning (",
										visitor.visit_count || 2,
										"x)"
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), "First Time Visitor"]
								}),
								visitor.is_lead || isAlreadyLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue/10 text-blue border border-blue/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3" }), "In CRM Leads"]
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-subtle",
											children: "IP:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-label",
											children: visitor.ip_address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleCopyText("ip", visitor.ip_address),
											className: "hover:text-label transition-colors cursor-pointer ml-0.5",
											title: "Copy IP",
											children: copiedKey === "ip" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-subtle",
										children: "Session:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-label",
										children: visitor.session_id
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-subtle" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-subtle",
											children: "Time on site:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-emerald-600",
											children: formatDuration(durationSec)
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-2 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
						"aria-label": "Close modal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 px-6 border-b border-black/8 bg-fill-subtle/30 overflow-x-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("overview"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${activeTab === "overview" ? "border-label text-label" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Overview & Location" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("pages"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${activeTab === "pages" ? "border-label text-label" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Pages Visited (",
								pagesList.length,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("cookies"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${activeTab === "cookies" ? "border-label text-label" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								"Cookie Telemetry (",
								Object.keys(cookiesMap).length,
								")"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("lead"),
							className: `px-4 py-3 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ml-auto ${activeTab === "lead" ? "border-blue text-blue" : "border-transparent text-blue hover:text-blue-700"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add to Leads" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 overflow-y-auto flex-1 space-y-6",
					children: [
						activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-2xl bg-fill-subtle/50 border border-black/8 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Granular Geographic Location" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue/10 text-blue",
											children: "GPS / IP Resolved"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Street Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: streetAddress
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "City & Region"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: [
														city,
														", ",
														region
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Postal / ZIP Code"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-mono font-bold text-label mt-1",
													children: postalCode
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Country"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs font-semibold text-label mt-1 flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
														country,
														countryCode: visitor.country_code,
														flag,
														size: "md"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country })]
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-2xl bg-fill-subtle/50 border border-black/8 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit History & Session Engagement" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-white border border-black/6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground uppercase font-medium",
															children: "Visitor Type"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs font-bold text-label mt-1 flex items-center gap-1.5",
															children: visitor.is_returning || visitor.visit_count && visitor.visit_count > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-purple-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Returning Visitor" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "First Time Visitor" })] })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[11px] text-subtle mt-0.5",
															children: ["Total sessions recorded: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: visitor.visit_count || 1 })]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-white border border-black/6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground uppercase font-medium",
															children: "Time Spent on Site"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-mono font-bold text-emerald-600 mt-1",
															children: formatDuration(durationSec)
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[11px] text-subtle mt-0.5",
															children: "Active heartbeat recorded via cookie telemetry"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-3.5 rounded-xl bg-white border border-black/6",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[11px] text-muted-foreground uppercase font-medium",
															children: "Pages Clicked / Visited"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-sm font-mono font-bold text-blue mt-1",
															children: [pagesList.length, " page(s)"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[11px] text-subtle mt-0.5",
															children: ["Initial route: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
																className: "text-[10px] bg-fill px-1 py-0.5 rounded",
																children: visitor.page_url || "/"
															})]
														})
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Traffic Acquisition / Referrer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: visitor.referrer || "Direct / Organic Search"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "First Recorded Visit"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-mono text-label mt-1",
													children: visitor.created_at || "Recent active session"
												})]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 rounded-2xl bg-fill-subtle/50 border border-black/8 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Browser & Hardware Fingerprint" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Browser Client"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1.5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, {
														browser: visitor.browser,
														showFull: true
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "Device Category"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-semibold text-label mt-1",
													children: visitor.device || "Desktop"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3.5 rounded-xl bg-white border border-black/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground uppercase font-medium",
													children: "User Agent String"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-mono text-subtle truncate mt-1",
													title: visitor.user_agent,
													children: visitor.user_agent || "Mozilla/5.0"
												})]
											})
										]
									})]
								})
							]
						}),
						activeTab === "pages" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-label",
									children: "Clickstream & Navigation Journey"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Chronological audit of routes and sections clicked by this visitor during their session."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-fill border border-black/8",
									children: [pagesList.length, " pages recorded"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border border-black/8 rounded-2xl overflow-hidden divide-y divide-black/8 bg-white",
								children: pagesList.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 flex items-start gap-3.5 hover:bg-fill-subtle/40 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-6 rounded-full bg-blue/10 text-blue font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5",
										children: idx + 1
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-label",
												children: p.title || "Codex Dynamics"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-mono text-subtle",
												children: p.timestamp ? new Date(p.timestamp).toLocaleTimeString() : `Step ${idx + 1}`
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
												className: "text-xs font-mono font-medium text-blue bg-blue/5 px-2 py-0.5 rounded border border-blue/15",
												children: p.url
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: p.url,
												target: "_blank",
												rel: "noreferrer",
												className: "text-subtle hover:text-label transition-colors p-1",
												title: "Open route",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
											})]
										})]
									})]
								}, idx))
							})]
						}),
						activeTab === "cookies" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-label",
									children: "Collected Cookie Vault"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Inspect every cookie, local storage key, and tracking token collected from this client's browser."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cookie Consent Active" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-3",
								children: Object.entries(cookiesMap).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3.5 rounded-xl bg-fill-subtle/50 border border-black/8 hover:border-black/20 transition-all flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-xs font-bold text-label",
											children: k
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleCopyText(k, v),
											className: "text-subtle hover:text-label p-1 rounded transition-colors cursor-pointer",
											title: "Copy value",
											children: copiedKey === k ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] font-mono text-muted-foreground break-all mt-1 bg-white p-2 rounded border border-black/5",
										children: v
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 pt-2 border-t border-black/5 text-[10px] text-subtle",
										children: k.includes("vid") ? "Unique persistent visitor identifier" : k.includes("session") ? "Active browsing session ID" : k.includes("duration") ? "Recorded time duration (seconds)" : k.includes("visit_count") ? "Total visits count" : k.includes("utm") ? "Marketing attribution channel" : "Client telemetry attribute"
									})]
								}, k))
							})]
						}),
						activeTab === "lead" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleAddLeadSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-blue/5 border border-blue/20 flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-5 text-blue shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-bold text-label uppercase tracking-wide",
										children: "Promote Visitor to CRM Lead"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: [
											"Converts this visitor session into a qualified prospect inside your CRM Leads pipeline. Their location (",
											city,
											", ",
											country,
											"), street address, and engagement history will automatically attach."
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lead Full Name *" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												value: leadName,
												onChange: (e) => setLeadName(e.target.value),
												placeholder: `e.g. Lead from ${city || country}`,
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact Email Address *" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												required: true,
												value: leadEmail,
												onChange: (e) => setLeadEmail(e.target.value),
												placeholder: "prospect@company.com",
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone Number (Optional)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "tel",
												value: leadPhone,
												onChange: (e) => setLeadPhone(e.target.value),
												placeholder: "+1 (555) 000-0000",
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "text-xs font-semibold text-label flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Company Name (Optional)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: leadCompany,
												onChange: (e) => setLeadCompany(e.target.value),
												placeholder: "Acme Corp",
												className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Internal Notes & Sales Strategy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 3,
										value: leadNotes,
										onChange: (e) => setLeadNotes(e.target.value),
										placeholder: `High-interest visitor spent ${formatDuration(durationSec)} browsing ${pagesList.length} page(s).`,
										className: "w-full px-3.5 py-2.5 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 flex items-center justify-end gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setActiveTab("overview"),
										className: "px-4 py-2 rounded-full border border-black/10 text-xs font-medium text-label hover:bg-black/5 transition-colors cursor-pointer",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: isSubmittingLead,
										className: "inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer disabled:opacity-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSubmittingLead ? "Adding to CRM..." : "Confirm & Add to Leads" })]
									})]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 px-6 border-t border-black/8 bg-fill-subtle/40 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-subtle",
						children: [
							"Session: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-label",
								children: visitor.session_id
							}),
							" • Location: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-label",
								children: [
									city,
									", ",
									country
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-4 py-2 rounded-full border border-black/10 text-xs font-medium text-label hover:bg-black/5 transition-colors cursor-pointer",
							children: "Close"
						}), visitor.is_lead || isAlreadyLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Already in Leads" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("lead"),
							className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add to Leads" })]
						})]
					})]
				})
			]
		})
	});
}
function VisitorsTab({ visitors, onSimulate, onAddToLeads, onDeleteVisitor, onClearVisitors, leadsSessionIds = /* @__PURE__ */ new Set() }) {
	const [filter, setFilter] = (0, import_react.useState)("");
	const [browserFilter, setBrowserFilter] = (0, import_react.useState)("all");
	const [copiedIp, setCopiedIp] = (0, import_react.useState)(null);
	const [selectedVisitor, setSelectedVisitor] = (0, import_react.useState)(null);
	const [isPruneOpen, setIsPruneOpen] = (0, import_react.useState)(false);
	const handleCopyIp = (ip) => {
		navigator.clipboard.writeText(ip);
		setCopiedIp(ip);
		toast.success(`Copied IP ${ip} to clipboard`);
		setTimeout(() => setCopiedIp(null), 2e3);
	};
	const getDeviceIcon = (deviceStr) => {
		const d = (deviceStr || "").toLowerCase();
		if (d.includes("mobile") || d.includes("phone")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5 text-blue" });
		if (d.includes("tablet") || d.includes("ipad")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablet, { className: "size-3.5 text-purple-600" });
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-3.5 text-muted-foreground" });
	};
	const formatDuration = (seconds) => {
		const s = seconds || 60;
		if (s < 60) return `${s}s`;
		return `${Math.floor(s / 60)}m ${s % 60}s`;
	};
	const handlePrune = async (days) => {
		setIsPruneOpen(false);
		const promptText = days === null ? "Are you sure you want to clear ALL visitor telemetry logs from SQLite?" : `Are you sure you want to delete visitor logs older than ${days} days?`;
		if (!window.confirm(promptText)) return;
		if (onClearVisitors) {
			if (await onClearVisitors(days)) toast.success(days === null ? "All visitor logs purged." : `Pruned logs older than ${days} days.`);
		} else toast.error("Prune handler not configured.");
	};
	const handleDeleteOne = async (id) => {
		if (!window.confirm(`Delete visitor session #${id}?`)) return;
		if (onDeleteVisitor) {
			if (await onDeleteVisitor(id)) toast.info("Visitor session deleted.");
		}
	};
	const filteredVisitors = visitors.filter((v) => {
		const q = filter.toLowerCase();
		if (!(!q || v.ip_address.toLowerCase().includes(q) || v.country && v.country.toLowerCase().includes(q) || v.city && v.city.toLowerCase().includes(q) || v.browser && v.browser.toLowerCase().includes(q) || v.page_url && v.page_url.toLowerCase().includes(q) || v.session_id && v.session_id.toLowerCase().includes(q))) return false;
		if (browserFilter !== "all") {
			if (!(v.browser || "").toLowerCase().includes(browserFilter.toLowerCase())) return false;
		}
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2.5 w-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold text-label font-display tracking-tight",
							children: "Live Visitor & Client Stream"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase",
							children: "Tidio & Analytics Mode"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Real-time client telemetry, flags, browser badges, cookie tracking, visit durations, and clickstream paths."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsPruneOpen(!isPruneOpen),
							className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground hover:text-label text-xs font-medium transition cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eraser, { className: "size-3.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Prune Logs" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3" })
							]
						}), isPruneOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-0 mt-2 w-48 rounded-2xl bg-card border border-black/10 shadow-lg p-1.5 z-30 space-y-1 animate-in fade-in",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handlePrune(30),
									className: "w-full text-left px-3 py-1.5 text-xs text-label hover:bg-fill rounded-xl transition cursor-pointer",
									children: "Delete older than 30 days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handlePrune(7),
									className: "w-full text-left px-3 py-1.5 text-xs text-label hover:bg-fill rounded-xl transition cursor-pointer",
									children: "Delete older than 7 days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-hairline my-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handlePrune(null),
									className: "w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-xl transition font-medium cursor-pointer",
									children: "Purge All Visitor Records"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onSimulate,
						className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simulate Visitor Ping" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-fill-subtle/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 max-w-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search IP, country, city, browser, route...",
								value: filter,
								onChange: (e) => setFilter(e.target.value),
								className: "w-full bg-white border border-black/8 focus:border-blue rounded-full pl-9 pr-4 py-2 text-xs text-label placeholder:text-subtle transition-all outline-none"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: browserFilter,
								onChange: (e) => setBrowserFilter(e.target.value),
								className: "bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "all",
										children: "All Browsers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "chrome",
										children: "Chrome"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "safari",
										children: "Safari"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "firefox",
										children: "Firefox"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "edge",
										children: "Edge"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "opera",
										children: "Opera"
									})
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3 text-xs text-subtle",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							filteredVisitors.length,
							" of ",
							visitors.length,
							" sessions"
						] })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs text-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Time & Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Client IP"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Location (Flag + Country)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Browser Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Device"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Duration & Visits"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Active Route"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 text-right",
									children: "Details & Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-hairline",
							children: filteredVisitors.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 8,
								className: "py-12 text-center text-subtle",
								children: "No visitor records match your filter."
							}) }) : filteredVisitors.map((v) => {
								const geo = resolveGeoLocation({
									country: v.country,
									country_code: v.country_code,
									flag: v.flag,
									city: v.city,
									region: v.region,
									postal_code: v.postal_code,
									street: v.street,
									ip_address: v.ip_address
								});
								const isLead = Boolean(v.is_lead || leadsSessionIds.has(v.session_id));
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-fill-subtle/50 transition-colors group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 font-mono text-[11px]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-subtle font-medium",
													children: v.created_at ? v.created_at.slice(11, 19) : "Just now"
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 font-mono text-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-label",
													children: v.ip_address
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleCopyIp(v.ip_address),
													className: "text-subtle hover:text-label p-1 rounded-md transition-colors cursor-pointer",
													title: "Copy IP",
													children: copiedIp === v.ip_address ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
													flag: geo.flag,
													countryCode: geo.country_code || geo.countryCode,
													country: geo.country
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-medium text-label text-xs",
													children: geo.city ? `${geo.city}, ${geo.country}` : geo.country
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] text-subtle font-mono truncate max-w-[160px]",
													title: geo.street,
													children: geo.street
												})] })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, { browser: v.browser })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 text-xs text-muted-foreground",
												children: [getDeviceIcon(v.device), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.device || "Desktop" })]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5 text-xs",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-subtle" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium text-label",
														children: formatDuration(v.duration_seconds)
													}),
													(v.visit_count ?? 0) > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] px-1.5 py-0.2 rounded-md bg-blue/10 text-blue font-semibold",
														children: [v.visit_count, "x"]
													})
												]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-1.5 max-w-[140px] truncate text-[11px] font-mono text-muted-foreground",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-1.5 py-0.5 rounded bg-fill border border-black/5",
													children: v.page_url || "/"
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3.5 px-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "inline-flex items-center justify-end gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => setSelectedVisitor(v),
														className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fill hover:bg-black/8 text-label text-xs font-semibold border border-black/10 transition-all cursor-pointer shadow-xs active:scale-[0.98]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View More" })]
													}),
													isLead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "p-1.5 rounded-full text-emerald-600 bg-emerald-50 border border-emerald-200",
														title: "Already added to CRM Leads",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" })
													}) : onAddToLeads ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setSelectedVisitor(v),
														className: "p-1.5 rounded-full text-blue hover:text-white hover:bg-blue bg-blue/5 border border-blue/20 transition-all cursor-pointer",
														title: "Add to Leads",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-3.5" })
													}) : null,
													onDeleteVisitor && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleDeleteOne(v.id),
														className: "p-1.5 rounded-full text-subtle hover:text-red-600 hover:bg-red-50 transition cursor-pointer",
														title: "Delete log",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
													})
												]
											})
										})
									]
								}, v.id);
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitorDetailModal, {
				visitor: selectedVisitor,
				isOpen: !!selectedVisitor,
				onClose: () => setSelectedVisitor(null),
				onAddToLeads: async (vis, custom) => {
					if (onAddToLeads) await onAddToLeads(vis, custom);
				},
				isAlreadyLead: selectedVisitor ? Boolean(selectedVisitor.is_lead || leadsSessionIds.has(selectedVisitor.session_id)) : false
			})
		]
	});
}
function LeadsTab({ leads, onCreateLead, onUpdateStatus, onUpdateNotes, onDeleteLead }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [sourceFilter, setSourceFilter] = (0, import_react.useState)("all");
	const [isCreateModalOpen, setIsCreateModalOpen] = (0, import_react.useState)(false);
	const [newName, setNewName] = (0, import_react.useState)("");
	const [newEmail, setNewEmail] = (0, import_react.useState)("");
	const [newPhone, setNewPhone] = (0, import_react.useState)("");
	const [newCompany, setNewCompany] = (0, import_react.useState)("");
	const [newSource, setNewSource] = (0, import_react.useState)("website_contact");
	const [newNotes, setNewNotes] = (0, import_react.useState)("");
	const [newCountry] = (0, import_react.useState)("United States");
	const [newCity, setNewCity] = (0, import_react.useState)("San Francisco");
	const [newScore] = (0, import_react.useState)(75);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [editingLead, setEditingLead] = (0, import_react.useState)(null);
	const [editNotesText, setEditNotesText] = (0, import_react.useState)("");
	const filteredLeads = leads.filter((l) => {
		const q = search.toLowerCase();
		if (!(!q || l.name.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) || l.company && l.company.toLowerCase().includes(q) || l.city && l.city.toLowerCase().includes(q) || l.country && l.country.toLowerCase().includes(q) || l.notes && l.notes.toLowerCase().includes(q))) return false;
		if (statusFilter !== "all" && l.status !== statusFilter) return false;
		if (sourceFilter !== "all" && l.source !== sourceFilter) return false;
		return true;
	});
	const totalCount = leads.length;
	const newCount = leads.filter((l) => l.status === "new").length;
	const blogReaderCount = leads.filter((l) => l.source === "blog_reader").length;
	const qualifiedCount = leads.filter((l) => l.status === "qualified" || l.status === "won").length;
	const avgScore = totalCount > 0 ? Math.round(leads.reduce((acc, l) => acc + (l.score || 50), 0) / totalCount) : 70;
	const formatDuration = (seconds) => {
		const s = seconds || 120;
		if (s < 60) return `${s}s`;
		return `${Math.floor(s / 60)}m ${s % 60}s`;
	};
	const getStatusBadge = (status) => {
		switch (status) {
			case "new": return "bg-emerald-50 text-emerald-700 border-emerald-200";
			case "contacted": return "bg-blue/10 text-blue border-blue/20";
			case "qualified": return "bg-purple-50 text-purple-700 border-purple-200";
			case "proposal": return "bg-amber-50 text-amber-700 border-amber-200";
			case "won": return "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold";
			default: return "bg-fill text-muted-foreground border-black/10";
		}
	};
	const getSourceBadge = (source) => {
		switch (source) {
			case "blog_reader": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-2.5" }), "Blog Reader"]
			});
			case "website_contact": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue/10 text-blue border border-blue/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-2.5" }), "Website Contact"]
			});
			case "visitor_promotion": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-2.5" }), "Promoted Visitor"]
			});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-fill text-muted-foreground border border-black/10",
				children: "Direct Lead"
			});
		}
	};
	const handleExportCsv = () => {
		if (leads.length === 0) {
			toast.error("No leads to export.");
			return;
		}
		const headers = [
			"ID",
			"Name",
			"Email",
			"Phone",
			"Company",
			"Source",
			"Status",
			"Score",
			"Country",
			"City",
			"Postal Code",
			"Street",
			"Pages Viewed",
			"Duration (s)",
			"Notes",
			"Created At"
		];
		const rows = leads.map((l) => [
			l.id,
			`"${(l.name || "").replace(/"/g, "\"\"")}"`,
			`"${(l.email || "").replace(/"/g, "\"\"")}"`,
			`"${(l.phone || "").replace(/"/g, "\"\"")}"`,
			`"${(l.company || "").replace(/"/g, "\"\"")}"`,
			l.source,
			l.status,
			l.score || 50,
			`"${(l.country || "").replace(/"/g, "\"\"")}"`,
			`"${(l.city || "").replace(/"/g, "\"\"")}"`,
			`"${(l.postal_code || "").replace(/"/g, "\"\"")}"`,
			`"${(l.street || "").replace(/"/g, "\"\"")}"`,
			l.pages_viewed_count || 1,
			l.duration_seconds || 0,
			`"${(l.notes || "").replace(/"/g, "\"\"")}"`,
			l.created_at || ""
		]);
		const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", `codex_crm_leads_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		toast.success("Leads exported to CSV successfully!");
	};
	const handleCreateSubmit = async (e) => {
		e.preventDefault();
		if (!newEmail.trim() || !newName.trim()) {
			toast.error("Name and Email are required.");
			return;
		}
		try {
			setIsSubmitting(true);
			await onCreateLead({
				name: newName.trim(),
				email: newEmail.trim(),
				phone: newPhone.trim(),
				company: newCompany.trim(),
				source: newSource,
				status: "new",
				score: Number(newScore) || 75,
				notes: newNotes.trim(),
				country: newCountry,
				city: newCity,
				pages_viewed_count: 2,
				duration_seconds: 180
			});
			toast.success("New lead created successfully!");
			setIsCreateModalOpen(false);
			setNewName("");
			setNewEmail("");
			setNewPhone("");
			setNewCompany("");
			setNewNotes("");
		} catch {
			toast.error("Failed to create lead.");
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleSaveNotes = async () => {
		if (!editingLead) return;
		try {
			await onUpdateNotes(editingLead.id, editNotesText);
			toast.success("Notes updated successfully.");
			setEditingLead(null);
		} catch {
			toast.error("Failed to update notes.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "p-2 rounded-xl bg-blue/10 text-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-bold text-label font-display tracking-tight",
							children: "Qualified CRM Leads & Contact Database"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Prospects collected from visitor promotions, contact forms, and engaged blog readers."
						})] })]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleExportCsv,
							className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-black/10 hover:bg-black/5 text-xs font-semibold text-label transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Export CSV" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setIsCreateModalOpen(true),
							className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm active:scale-[0.99] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Lead" })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 lg:grid-cols-4 gap-3 pt-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Total Leads"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold font-mono text-label",
									children: totalCount
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-emerald-600 font-medium",
									children: [newCount, " new"]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Blog Readers"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold font-mono text-rose-600",
									children: blogReaderCount
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "Content Inbound"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Qualified Pipeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-bold font-mono text-purple-600",
									children: qualifiedCount
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "High Value"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-xl bg-fill-subtle/60 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-muted-foreground uppercase font-semibold",
								children: "Avg Intent Score"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-2 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xl font-bold font-mono text-emerald-600",
									children: [avgScore, " / 100"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3.5 text-amber-500" })]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 border-b border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-fill-subtle/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1 max-w-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search leads by name, email, company, city...",
									value: search,
									onChange: (e) => setSearch(e.target.value),
									className: "w-full bg-white border border-black/8 focus:border-blue rounded-full pl-9 pr-4 py-2 text-xs text-label placeholder:text-subtle transition-all outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: statusFilter,
									onChange: (e) => setStatusFilter(e.target.value),
									className: "bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All Statuses"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "new",
											children: "New"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "contacted",
											children: "Contacted"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "qualified",
											children: "Qualified"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "proposal",
											children: "Proposal"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "won",
											children: "Won"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1.5 text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: sourceFilter,
									onChange: (e) => setSourceFilter(e.target.value),
									className: "bg-white border border-black/8 rounded-full px-3 py-1.5 text-xs text-label outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All Sources"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "blog_reader",
											children: "Blog Readers"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "website_contact",
											children: "Website Contacts"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "visitor_promotion",
											children: "Promoted Visitors"
										})
									]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-subtle",
						children: [
							"Showing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: filteredLeads.length }),
							" of ",
							leads.length,
							" leads"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs text-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Lead Name & Company"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Contact Details"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Source Channel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Location & Address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Engagement & Intent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Pipeline Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-hairline",
							children: filteredLeads.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								colSpan: 8,
								className: "py-16 text-center text-subtle",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-8 mx-auto text-subtle/60 mb-2" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-label",
										children: "No leads found"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-0.5",
										children: "Promote visitors from the Visitor Stream or capture inquiries from contact forms and blog readers."
									})
								]
							}) }) : filteredLeads.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-fill-subtle/40 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-bold text-label text-xs flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.name }), l.score && l.score >= 85 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "p-0.5 text-amber-500",
												title: "High Intent Lead",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3" })
											}) : null]
										}), l.company ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.company })]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-subtle",
											children: "Private Individual"
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-0.5",
											children: [l.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `mailto:${l.email}`,
												className: "text-xs text-blue hover:underline font-mono flex items-center gap-1",
												title: "Send email",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.email })]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-subtle",
												children: "No email"
											}), l.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `tel:${l.phone}`,
												className: "text-[11px] text-muted-foreground hover:text-label font-mono flex items-center gap-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.phone })]
											}) : null]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: getSourceBadge(l.source)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-semibold text-label",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
												country: l.country,
												flag: l.flag,
												size: "sm"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.country || "Global" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-2.5 text-subtle" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.street || l.city || "Corporate HQ" }),
												l.postal_code ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-[10px]",
													children: [
														"(",
														l.postal_code,
														")"
													]
												}) : null
											]
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono text-xs font-bold text-label",
												children: [l.score || 70, "/100"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-muted-foreground",
												children: "score"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-[10px] text-subtle mt-0.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [l.pages_viewed_count || 1, " pages"] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDuration(l.duration_seconds) })
											]
										})] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: l.status,
											onChange: (e) => onUpdateStatus(l.id, e.target.value),
											className: `text-xs font-semibold px-2.5 py-1 rounded-full border outline-none cursor-pointer transition-colors ${getStatusBadge(l.status)}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "new",
													children: "New"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "contacted",
													children: "Contacted"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "qualified",
													children: "Qualified"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "proposal",
													children: "Proposal"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "won",
													children: "Won"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "archived",
													children: "Archived"
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 max-w-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 group/note",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground truncate",
												title: l.notes,
												children: l.notes || "No notes attached"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													setEditingLead(l);
													setEditNotesText(l.notes || "");
												},
												className: "opacity-0 group-hover/note:opacity-100 p-1 text-subtle hover:text-label transition-opacity cursor-pointer",
												title: "Edit notes",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3" })
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3.5 px-4 whitespace-nowrap text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1.5",
											children: [
												l.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `mailto:${l.email}`,
													className: "p-1.5 rounded-full text-blue hover:bg-blue/10 transition-colors",
													title: "Send Email",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" })
												}) : null,
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														setEditingLead(l);
														setEditNotesText(l.notes || "");
													},
													className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
													title: "Edit Notes",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => {
														if (confirm(`Are you sure you want to remove lead "${l.name}"?`)) onDeleteLead(l.id);
													},
													className: "p-1.5 rounded-full text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer",
													title: "Delete Lead",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
												})
											]
										})
									})
								]
							}, l.id))
						})]
					})
				})]
			}),
			isCreateModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 p-4 sm:p-6 overflow-hidden flex flex-col max-h-[92dvh]",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-black/8 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-base font-bold text-label font-display flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Lead to CRM" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIsCreateModalOpen(false),
							className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleCreateSubmit,
						className: "space-y-4 overflow-y-auto flex-1 py-2 pr-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Full Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: newName,
										onChange: (e) => setNewName(e.target.value),
										placeholder: "e.g. John Doe",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Email Address *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										value: newEmail,
										onChange: (e) => setNewEmail(e.target.value),
										placeholder: "john@company.com",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Phone Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										value: newPhone,
										onChange: (e) => setNewPhone(e.target.value),
										placeholder: "+1 (555) 000-0000",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Company"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newCompany,
										onChange: (e) => setNewCompany(e.target.value),
										placeholder: "Acme Systems",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "Source Channel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: newSource,
										onChange: (e) => setNewSource(e.target.value),
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "website_contact",
												children: "Website Contact Form"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "blog_reader",
												children: "Blog Reader Subscription"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "visitor_promotion",
												children: "Visitor Promotion"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "direct_referral",
												children: "Direct Referral"
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-label",
										children: "City & Country"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: newCity,
										onChange: (e) => setNewCity(e.target.value),
										placeholder: "City, Country",
										className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-label",
									children: "Strategic Notes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 3,
									value: newNotes,
									onChange: (e) => setNewNotes(e.target.value),
									placeholder: "Key requirements, budget, timeline, or notes...",
									className: "w-full px-3 py-2 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-2.5 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsCreateModalOpen(false),
									className: "px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-label hover:bg-black/5 transition-colors cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: isSubmitting,
									className: "px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer disabled:opacity-50",
									children: isSubmitting ? "Saving..." : "Create Lead"
								})]
							})
						]
					})]
				})
			}),
			editingLead && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 p-4 sm:p-6 overflow-hidden flex flex-col max-h-[92dvh] space-y-4",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-black/8 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-bold text-label flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Notes for ", editingLead.name] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditingLead(null),
							className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-y-auto flex-1 space-y-4 pr-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							value: editNotesText,
							onChange: (e) => setEditNotesText(e.target.value),
							placeholder: "Enter notes about requirements, calls, proposals...",
							className: "w-full p-3 text-xs bg-white border border-black/15 rounded-xl focus:border-blue outline-none resize-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEditingLead(null),
								className: "px-4 py-2 rounded-full border border-black/10 text-xs font-semibold text-label hover:bg-black/5 transition-colors cursor-pointer",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: handleSaveNotes,
								className: "px-5 py-2 rounded-full bg-blue hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer",
								children: "Save Notes"
							})]
						})]
					})]
				})
			})
		]
	});
}
function AnalyticsTab({ stats, regions: initialRegions, browsers: initialBrowsers, devices: initialDevices, visitors = [] }) {
	const [timeRange, setTimeRange] = (0, import_react.useState)("all");
	const filteredVisitors = (0, import_react.useMemo)(() => {
		if (visitors.length === 0 || timeRange === "all") return visitors;
		const now = (/* @__PURE__ */ new Date()).getTime();
		return visitors.filter((v) => {
			if (!v.created_at) return true;
			const created = new Date(v.created_at).getTime();
			if (isNaN(created)) return true;
			const diffHours = (now - created) / 36e5;
			if (timeRange === "today") return diffHours <= 24;
			if (timeRange === "7d") return diffHours <= 168;
			if (timeRange === "30d") return diffHours <= 720;
			return true;
		});
	}, [visitors, timeRange]);
	const regions = (0, import_react.useMemo)(() => {
		if (timeRange === "all" || filteredVisitors.length === 0) return initialRegions;
		const map = /* @__PURE__ */ new Map();
		for (const v of filteredVisitors) {
			const c = v.country || "United States";
			const f = v.flag || "🇺🇸";
			const curr = map.get(c) || {
				country: c,
				flag: f,
				count: 0
			};
			curr.count += 1;
			map.set(c, curr);
		}
		return Array.from(map.values()).sort((a, b) => b.count - a.count);
	}, [
		filteredVisitors,
		initialRegions,
		timeRange
	]);
	const browsers = (0, import_react.useMemo)(() => {
		if (timeRange === "all" || filteredVisitors.length === 0) return initialBrowsers;
		const map = /* @__PURE__ */ new Map();
		for (const v of filteredVisitors) {
			const b = v.browser || "Chrome";
			map.set(b, (map.get(b) || 0) + 1);
		}
		return Array.from(map.entries()).map(([browser, count]) => ({
			browser,
			count
		})).sort((a, b) => b.count - a.count);
	}, [
		filteredVisitors,
		initialBrowsers,
		timeRange
	]);
	const devices = (0, import_react.useMemo)(() => {
		if (timeRange === "all" || filteredVisitors.length === 0) return initialDevices;
		const map = /* @__PURE__ */ new Map();
		for (const v of filteredVisitors) {
			const d = v.device || "Desktop";
			map.set(d, (map.get(d) || 0) + 1);
		}
		return Array.from(map.entries()).map(([device, count]) => ({
			device,
			count
		})).sort((a, b) => b.count - a.count);
	}, [
		filteredVisitors,
		initialDevices,
		timeRange
	]);
	const referrers = (0, import_react.useMemo)(() => {
		const list = filteredVisitors.length > 0 ? filteredVisitors : visitors;
		const map = /* @__PURE__ */ new Map();
		for (const v of list) {
			let ref = v.referrer || "Direct";
			if (ref.includes("google")) ref = "Google Search";
			else if (ref.includes("linkedin") || ref.includes("t.co") || ref.includes("x.com") || ref.includes("instagram")) ref = "Social Acquisition";
			else if (ref.includes("github")) ref = "GitHub Reference";
			else if (ref !== "Direct") ref = "Web Referral";
			map.set(ref, (map.get(ref) || 0) + 1);
		}
		if (map.size === 0) {
			map.set("Direct Navigation", 68);
			map.set("Google Search", 24);
			map.set("Social Acquisition", 14);
		}
		const total = Array.from(map.values()).reduce((a, b) => a + b, 0) || 1;
		return Array.from(map.entries()).map(([source, count]) => ({
			source,
			count,
			pct: Math.round(count / total * 100)
		})).sort((a, b) => b.count - a.count);
	}, [filteredVisitors, visitors]);
	const topPages = (0, import_react.useMemo)(() => {
		const list = filteredVisitors.length > 0 ? filteredVisitors : visitors;
		const map = /* @__PURE__ */ new Map();
		for (const v of list) {
			const p = v.page_url || "/";
			map.set(p, (map.get(p) || 0) + 1);
		}
		if (map.size === 0) {
			map.set("/", 84);
			map.set("/#work", 46);
			map.set("/#services", 32);
			map.set("/#contact", 28);
		}
		const total = Array.from(map.values()).reduce((a, b) => a + b, 0) || 1;
		return Array.from(map.entries()).map(([page, count]) => ({
			page,
			count,
			pct: Math.round(count / total * 100)
		})).sort((a, b) => b.count - a.count);
	}, [filteredVisitors, visitors]);
	const totalRegionCount = regions.reduce((acc, r) => acc + r.count, 0) || 1;
	const totalBrowserCount = browsers.reduce((acc, b) => acc + b.count, 0) || 1;
	const totalDeviceCount = devices.reduce((acc, d) => acc + d.count, 0) || 1;
	const currentCount = timeRange === "all" ? stats.totalVisitors : filteredVisitors.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col md:flex-row md:items-center md:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumn, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "Traffic Intelligence & Regional Demographics"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Analyzing telemetry across geographic locations, client hardware profiles, and digital channels."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 p-1 bg-fill/70 rounded-xl border border-black/5 self-start md:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5 text-subtle ml-2 mr-1" }), [
						{
							key: "today",
							label: "Today"
						},
						{
							key: "7d",
							label: "7 Days"
						},
						{
							key: "30d",
							label: "30 Days"
						},
						{
							key: "all",
							label: "All Time"
						}
					].map(({ key, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTimeRange(key),
						className: `px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${timeRange === key ? "bg-card text-label shadow-sm font-semibold" : "text-subtle hover:text-label"}`,
						children: label
					}, key))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Audited Sessions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-blue" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-bold font-display text-label tabular-nums",
								children: currentCount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: timeRange === "all" ? "Total recorded" : `In selected window`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Global Regions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-emerald-600" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl font-bold font-display text-label tabular-nums",
								children: regions.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: "Countries represented"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Top Channel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-3.5 text-purple-600" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-lg font-bold font-display text-label truncate",
								children: referrers[0]?.source || "Direct Navigation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: [referrers[0]?.pct || 65, "% of inbound visitors"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-subtle text-xs mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mobile Share" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5 text-amber-600" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-2xl font-bold font-display text-label tabular-nums",
								children: [Math.round((devices.find((d) => d.device.toLowerCase().includes("mobile"))?.count || 0) / totalDeviceCount * 100), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: "Handheld viewports"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Top Regions"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-subtle font-medium",
								children: [regions.length, " Countries"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3.5",
							children: regions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-8 text-center text-xs text-subtle",
								children: "No regional data recorded in this range."
							}) : regions.slice(0, 7).map((r, i) => {
								const pct = Math.round(r.count / totalRegionCount * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
												country: r.country,
												flag: r.flag,
												size: "sm"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-label",
												children: r.country
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: r.count
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: [
													"(",
													pct,
													"%)"
												]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-blue h-1.5 rounded-full transition-all duration-500",
											style: { width: `${Math.max(pct, 4)}%` }
										})
									})]
								}, r.country || i);
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 mt-4 border-t border-hairline text-[11px] text-subtle text-center",
							children: "Updated continuously via SQLite telemetry"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Browser Share"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle font-medium",
								children: "Engine Audit"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3.5",
							children: browsers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-8 text-center text-xs text-subtle",
								children: "No browser data recorded yet."
							}) : browsers.map((b, i) => {
								const pct = Math.round(b.count / totalBrowserCount * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrowserBadge, {
											browser: b.browser,
											showFull: true,
											size: "sm"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: b.count
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: [
													"(",
													pct,
													"%)"
												]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-purple-600 h-1.5 rounded-full transition-all duration-500",
											style: { width: `${Math.max(pct, 4)}%` }
										})
									})]
								}, b.browser || i);
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 mt-4 border-t border-hairline text-[11px] text-subtle text-center",
							children: "Web standards compliant tracking"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Device Hardware"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle font-medium",
								children: "Responsive Viewports"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3.5",
							children: devices.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "py-8 text-center text-xs text-subtle",
								children: "No device data recorded yet."
							}) : devices.map((d, i) => {
								const pct = Math.round(d.count / totalDeviceCount * 100);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: d.device
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-mono text-[11px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: d.count
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-subtle",
												children: [
													"(",
													pct,
													"%)"
												]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "bg-emerald-600 h-1.5 rounded-full transition-all duration-500",
											style: { width: `${Math.max(pct, 4)}%` }
										})
									})]
								}, d.device || i);
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4 mt-4 border-t border-hairline text-[11px] text-subtle text-center",
							children: "Optimized for Desktop & Mobile"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold uppercase tracking-wider text-label",
								children: "Traffic Acquisition Channels"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-subtle font-medium",
							children: "Referrer Headers"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3.5",
						children: referrers.map((ref, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-label",
									children: ref.source
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: ref.count
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-subtle",
										children: [
											"(",
											ref.pct,
											"%)"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-blue h-1.5 rounded-full transition-all duration-500",
									style: { width: `${Math.max(ref.pct, 4)}%` }
								})
							})]
						}, ref.source || i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xs font-semibold uppercase tracking-wider text-label",
								children: "Top Requested Pages & Anchors"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-subtle font-medium",
							children: "Page Views"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3.5",
						children: topPages.map((tp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-label bg-fill px-1.5 py-0.5 rounded",
									children: tp.page
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-mono text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: tp.count
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-subtle",
										children: [
											"(",
											tp.pct,
											"%)"
										]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full bg-fill rounded-full h-1.5 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "bg-emerald-600 h-1.5 rounded-full transition-all duration-500",
									style: { width: `${Math.max(tp.pct, 4)}%` }
								})
							})]
						}, tp.page || i))
					})]
				})]
			})
		]
	});
}
function BacklinksTab({ backlinks, onAddBacklink, onEditBacklink, onDeleteBacklink }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingBacklink, setEditingBacklink] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		url: "",
		notes: ""
	});
	const [editForm, setEditForm] = (0, import_react.useState)({
		name: "",
		url: "",
		notes: ""
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.name || !form.url) return;
		if (await onAddBacklink(form)) {
			setForm({
				name: "",
				url: "",
				notes: ""
			});
			setIsOpen(false);
			toast.success("SEO backlink saved to SQLite database.");
		}
	};
	const handleStartEdit = (b) => {
		setEditingBacklink(b);
		setEditForm({
			name: b.name || "",
			url: b.url || "",
			notes: b.notes || ""
		});
	};
	const handleUpdate = async (e) => {
		e.preventDefault();
		if (!editingBacklink || !editForm.name || !editForm.url) return;
		if (onEditBacklink) {
			if (await onEditBacklink(editingBacklink.id, editForm)) {
				setEditingBacklink(null);
				toast.success("Backlink updated in SQLite.");
			}
		} else toast.error("Edit handler not configured.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-5 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "SEO Backlink Registry & Link Building"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Track referring domains, guest posts, media coverage, and indexation status to boost Google domain authority."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setIsOpen(!isOpen);
						setEditingBacklink(null);
					},
					className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isOpen ? "Close Form" : "Add Backlink" })]
				})]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-purple-200 p-6 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold uppercase tracking-wider text-label mb-4",
					children: "Register New Backlink / Media Mention"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Publisher / Platform Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Forbes Tech Council / GitHub",
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Target Live URL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "url",
							required: true,
							placeholder: "https://forbes.com/article/codex-dynamics-review",
							value: form.url,
							onChange: (e) => setForm({
								...form,
								url: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all font-mono"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
								children: "Anchor Text & SEO Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "e.g. DoFollow link on 'Custom Engineering Studio', DA: 84",
								value: form.notes,
								onChange: (e) => setForm({
									...form,
									notes: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex items-center justify-end gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsOpen(false),
								className: "px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer",
								children: "Save Backlink"
							})]
						})
					]
				})]
			}),
			editingBacklink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift w-full max-w-lg rounded-3xl bg-card border border-black/10 p-6 sm:p-8 shadow-xl space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-semibold text-label",
								children: ["Edit Backlink #", editingBacklink.id]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditingBacklink(null),
							className: "p-1.5 text-subtle hover:text-label rounded-full hover:bg-fill transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleUpdate,
						className: "space-y-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Publisher / Source Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editForm.name,
								onChange: (e) => setEditForm({
									...editForm,
									name: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Live URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "url",
								required: true,
								value: editForm.url,
								onChange: (e) => setEditForm({
									...editForm,
									url: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition font-mono"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Anchor Text & SEO Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								value: editForm.notes,
								onChange: (e) => setEditForm({
									...editForm,
									notes: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-purple-600 focus:bg-white rounded-xl p-2.5 text-xs text-label outline-none transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-2 pt-3 border-t border-hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setEditingBacklink(null),
									className: "px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-paper text-xs font-medium transition shadow-sm cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Changes" })]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 overflow-hidden shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs text-label",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-fill-subtle/80 text-subtle text-[11px] uppercase font-semibold tracking-wider border-b border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Publisher / Source"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Live URL"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Anchor Text & SEO Notes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4",
									children: "Date Indexed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3 px-4 text-right",
									children: "Actions"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-hairline",
							children: backlinks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 5,
								className: "py-12 text-center text-subtle",
								children: "No backlinks registered yet. Click \"Add Backlink\" to record one."
							}) }) : backlinks.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-fill-subtle/50 transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-semibold text-label",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-3.5 text-purple-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.name })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: b.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1 font-mono text-[11px] text-blue hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.url.length > 40 ? b.url.slice(0, 40) + "..." : b.url }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 text-muted-foreground",
										children: b.notes || "High authority referring domain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 font-mono text-[11px] text-subtle",
										children: b.created_at ? b.created_at.slice(0, 10) : "Active"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleStartEdit(b),
												className: "p-1.5 text-subtle hover:text-purple-600 rounded-full hover:bg-purple-50 transition-colors cursor-pointer",
												title: "Edit backlink",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: async () => {
													await onDeleteBacklink(b.id);
													toast.info("Backlink removed.");
												},
												className: "p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer",
												title: "Delete backlink",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
											})]
										})
									})
								]
							}, b.id))
						})]
					})
				})
			})
		]
	});
}
var POWER_WORDS_DICTIONARY = {
	authority: {
		name: "Authority & Prestige",
		description: "Builds instant credibility, trust, and enterprise-grade prestige.",
		words: [
			"proven",
			"definitive",
			"blueprint",
			"architect",
			"architecture",
			"enterprise",
			"elite",
			"master",
			"masterclass",
			"benchmark",
			"industry-leading",
			"gold-standard",
			"certified",
			"verified",
			"authoritative",
			"unrivaled",
			"premier",
			"bespoke",
			"principled",
			"foundational",
			"rigorous",
			"battle-tested",
			"mission-critical"
		]
	},
	urgency: {
		name: "Speed & Velocity",
		description: "Communicates zero-latency, high performance, and rapid execution.",
		words: [
			"accelerate",
			"breakthrough",
			"instant",
			"instantly",
			"high-velocity",
			"zero-latency",
			"sub-second",
			"rapid",
			"lightning",
			"real-time",
			"immediate",
			"critical",
			"crucial",
			"fast-track",
			"turbocharge",
			"streamlined",
			"next-generation",
			"frictionless"
		]
	},
	transformation: {
		name: "Impact & Transformation",
		description: "Highlights tangible business outcomes, conversion lift, and scale.",
		words: [
			"transform",
			"transformative",
			"revolutionize",
			"unleash",
			"skyrocket",
			"exponential",
			"paradigm",
			"game-changer",
			"pioneering",
			"radical",
			"uncompromising",
			"monumental",
			"surge",
			"lift",
			"overhaul",
			"reimagined",
			"unprecedented"
		]
	},
	clarity: {
		name: "Clarity & Mastery",
		description: "Promises actionable, step-by-step comprehension without fluff.",
		words: [
			"effortless",
			"comprehensive",
			"step-by-step",
			"simplified",
			"seamless",
			"demystified",
			"handbook",
			"framework",
			"playbook",
			"cheat-sheet",
			"essential",
			"actionable",
			"uncovered",
			"revealed",
			"deep-dive",
			"teardown",
			"anatomy"
		]
	},
	curiosity: {
		name: "Curiosity & Exclusivity",
		description: "Draws readers into clicking by revealing insider techniques.",
		words: [
			"secret",
			"secrets",
			"untold",
			"insider",
			"unveiled",
			"unmasked",
			"behind-the-scenes",
			"hidden",
			"under-the-hood",
			"surprising",
			"counter-intuitive",
			"truth",
			"myth",
			"confidential",
			"proprietary"
		]
	}
};
Array.from(new Set(Object.values(POWER_WORDS_DICTIONARY).flatMap((category) => category.words)));
/**
* Analyzes headline and article text for power words and copywriting effectiveness
*/
function analyzePowerWords(headline = "", content = "") {
	const normHeadline = ` ${headline.toLowerCase().replace(/[^a-z0-9\s-]/g, " ")} `;
	const normContent = ` ${content.toLowerCase().replace(/[^a-z0-9\s-]/g, " ")} `;
	const headlineMatches = [];
	const contentMatches = [];
	const categoryDistribution = {};
	Object.entries(POWER_WORDS_DICTIONARY).forEach(([catKey, catObj]) => {
		categoryDistribution[catKey] = 0;
		catObj.words.forEach((pw) => {
			const regex = new RegExp(`\\b${pw}\\b`, "gi");
			const headMatches = normHeadline.match(regex);
			if (headMatches && headMatches.length > 0) {
				headlineMatches.push({
					word: pw,
					category: catKey,
					categoryName: catObj.name,
					count: headMatches.length
				});
				categoryDistribution[catKey] += headMatches.length;
			}
			const bodyMatches = normContent.match(regex);
			if (bodyMatches && bodyMatches.length > 0) {
				contentMatches.push({
					word: pw,
					category: catKey,
					categoryName: catObj.name,
					count: bodyMatches.length
				});
				categoryDistribution[catKey] += bodyMatches.length;
			}
		});
	});
	const headlineHasPowerWord = headlineMatches.length > 0;
	const headlineHasNumber = /\d+/.test(headline);
	const headlineLength = headline.trim().length;
	let headlineLengthStatus = "optimal";
	if (headlineLength < 35) headlineLengthStatus = "short";
	else if (headlineLength > 65) headlineLengthStatus = "long";
	let headlineScore = 40;
	if (headlineHasPowerWord) headlineScore += Math.min(30, headlineMatches.length * 15);
	if (headlineHasNumber) headlineScore += 15;
	if (headlineLengthStatus === "optimal") headlineScore += 15;
	else if (headlineLengthStatus === "short") headlineScore -= 10;
	else headlineScore -= 10;
	headlineScore = Math.min(100, Math.max(10, headlineScore));
	const totalPowerWordsFound = headlineMatches.reduce((a, b) => a + b.count, 0) + contentMatches.reduce((a, b) => a + b.count, 0);
	const recommendations = [];
	if (!headlineHasPowerWord) recommendations.push("Add at least 1 high-converting Power Word (e.g. 'Architect', 'Proven', 'Zero-Latency', 'Blueprint') to your headline.");
	if (!headlineHasNumber) recommendations.push("Headlines with specific metrics or numbers (e.g. 'Sub-50ms', '42% Lift', '3 Architectural Rules') generate 36% higher CTR.");
	if (headlineLengthStatus === "short") recommendations.push("Your headline is under 35 characters. Expand it to articulate clear value.");
	else if (headlineLengthStatus === "long") recommendations.push("Your headline is over 65 characters and may truncate on Google SERP pages.");
	if (contentMatches.length < 3) recommendations.push("Incorporate more authoritative and transformative terminology into your body subsections.");
	return {
		headlineScore,
		headlineMatches,
		contentMatches,
		totalPowerWordsFound,
		headlineHasPowerWord,
		headlineHasNumber,
		headlineLengthStatus,
		categoryDistribution,
		recommendations
	};
}
var DEFAULT_CATEGORIES$1 = [
	{
		id: "engineering",
		name: "Engineering",
		slug: "engineering"
	},
	{
		id: "design-systems",
		name: "Design Systems",
		slug: "design-systems"
	},
	{
		id: "performance",
		name: "Performance",
		slug: "performance"
	},
	{
		id: "architecture",
		name: "Architecture",
		slug: "architecture"
	},
	{
		id: "case-study",
		name: "Case Study",
		slug: "case-study"
	},
	{
		id: "strategy",
		name: "Strategy",
		slug: "strategy"
	},
	{
		id: "product-updates",
		name: "Product Updates",
		slug: "product-updates"
	}
];
var STORAGE_KEY = "codex_blog_custom_categories";
function getStoredCategories() {
	if (typeof window === "undefined") return DEFAULT_CATEGORIES$1;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return DEFAULT_CATEGORIES$1;
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed) && parsed.length > 0) {
			const existingNames = new Set(parsed.map((c) => c.name.toLowerCase()));
			const missingDefaults = DEFAULT_CATEGORIES$1.filter((d) => !existingNames.has(d.name.toLowerCase()));
			return [...parsed, ...missingDefaults];
		}
		return DEFAULT_CATEGORIES$1;
	} catch {
		return DEFAULT_CATEGORIES$1;
	}
}
function saveStoredCategories(categories) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
	} catch {}
}
function addCategory(name, parent) {
	const trimmed = name.trim();
	const slug = trimmed.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
	const current = getStoredCategories();
	const existing = current.find((c) => c.name.toLowerCase() === trimmed.toLowerCase() || c.slug === slug);
	if (existing) return existing;
	const newCat = {
		id: slug || `cat-${Date.now()}`,
		name: trimmed,
		slug: slug || `cat-${Date.now()}`,
		parent: parent || void 0
	};
	saveStoredCategories([newCat, ...current]);
	return newCat;
}
var LOCAL_PRESETS = [
	{
		url: "/hero/studio.jpg",
		label: "Studio Aerial",
		group: "Hero"
	},
	{
		url: "/hero/web-apps.jpg",
		label: "Web Applications (Apple)",
		group: "Hero"
	},
	{
		url: "/hero/web-dev.jpg",
		label: "Web Development",
		group: "Hero"
	},
	{
		url: "/hero/design.jpg",
		label: "Design Workspace",
		group: "Hero"
	},
	{
		url: "/hero/social.jpg",
		label: "Social Media Campaign",
		group: "Hero"
	},
	{
		url: "/studio/interior.jpg",
		label: "Studio Loft Interior",
		group: "Studio"
	},
	{
		url: "/studio/headquarters.jpg",
		label: "Studio Architecture Exterior",
		group: "Studio"
	},
	{
		url: "/studio/code.jpg",
		label: "Code Terminal",
		group: "Studio"
	},
	{
		url: "/studio/design.jpg",
		label: "Interface Design Desk",
		group: "Studio"
	},
	{
		url: "/studio/wireframes.jpg",
		label: "Product Wireframes",
		group: "Studio"
	},
	{
		url: "/studio/social.jpg",
		label: "Social Feed Mockup",
		group: "Studio"
	},
	{
		url: "/studio/analytics.jpg",
		label: "Telemetry & Analytics",
		group: "Studio"
	},
	{
		url: "/work/ecommerce-storefront.jpg",
		label: "Luxury E-Commerce Storefront",
		group: "Portfolio"
	},
	{
		url: "/work/nordic-goods.jpg",
		label: "Nordic Goods Storefront",
		group: "Portfolio"
	},
	{
		url: "/work/krypton-horology.jpg",
		label: "Krypton Horology Watches",
		group: "Portfolio"
	},
	{
		url: "/work/northline-logistics.jpg",
		label: "Northline Global Logistics",
		group: "Portfolio"
	},
	{
		url: "/work/crm-telephony.jpg",
		label: "Custom CRM & VoIP Dialer",
		group: "Portfolio"
	},
	{
		url: "/work/omnicall-sales.jpg",
		label: "OmniCall Sales Desk",
		group: "Portfolio"
	},
	{
		url: "/work/apex-sales.jpg",
		label: "Apex Sales Floor",
		group: "Portfolio"
	},
	{
		url: "/work/brand-identity.jpg",
		label: "Brand Identity & Design System",
		group: "Portfolio"
	},
	{
		url: "/work/ads-growth.jpg",
		label: "Paid Ad Analytics & Funnel",
		group: "Portfolio"
	},
	{
		url: "/work/aura-growth.jpg",
		label: "Aura Growth Engine",
		group: "Portfolio"
	},
	{
		url: "/work/kinetic-fitness.jpg",
		label: "Kinetic Fitness Ads",
		group: "Portfolio"
	},
	{
		url: "/work/email-funnel.jpg",
		label: "Email Marketing Flow",
		group: "Portfolio"
	},
	{
		url: "/work/flow-retain-email.jpg",
		label: "Aura Premium Email Sequences",
		group: "Portfolio"
	},
	{
		url: "/work/developer-portal.jpg",
		label: "iOS-Style Client Portal",
		group: "Portfolio"
	},
	{
		url: "/services/web-apps.jpg",
		label: "Custom Web Applications",
		group: "Services"
	},
	{
		url: "/services/acquisition-retention.jpg",
		label: "Ads & Email Retention",
		group: "Services"
	},
	{
		url: "/services/crm-calling.jpg",
		label: "CRM Calling System",
		group: "Services"
	},
	{
		url: "/work/storefront.jpg",
		label: "Storefront Mockup",
		group: "Portfolio"
	},
	{
		url: "/work/social.jpg",
		label: "Social Ad Campaign",
		group: "Portfolio"
	},
	{
		url: "/work/system.jpg",
		label: "Design System",
		group: "Portfolio"
	}
];
var CURATED_TECH_PRESETS = [
	{
		url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
		label: "Server Hardware & Cloud Infrastructure",
		alt: "Data center server racks with blue illumination",
		group: "Infrastructure"
	},
	{
		url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
		label: "Clean Code & Software Architecture",
		alt: "Dual display workstation showing clean code syntax",
		group: "Engineering"
	},
	{
		url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
		label: "Minimalist Engineering Workstation",
		alt: "Minimalist workspace with laptop and mechanical keyboard",
		group: "Studio"
	},
	{
		url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
		label: "Conversion Analytics & Telemetry",
		alt: "High-level performance and conversion rate charts",
		group: "Analytics"
	},
	{
		url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
		label: "Silicon Microprocessor & Low Latency",
		alt: "Macro photography of high-performance integrated circuit chip",
		group: "Hardware"
	},
	{
		url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
		label: "Design Systems & Prototyping",
		alt: "Interface wireframe components laid out systematically",
		group: "Design"
	},
	{
		url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
		label: "System Metrics & Live Observability",
		alt: "Dashboard monitoring uptime, memory throughput, and TTFB",
		group: "Observability"
	},
	{
		url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
		label: "Cybersecurity & Cryptographic Architecture",
		alt: "Cryptographic cipher matrix on terminal display",
		group: "Security"
	}
];
function ImagePickerModal({ isOpen, onClose, currentValue, onSelect, title = "Select or Upload Picture", showMetaOptions = true }) {
	const [selectedUrl, setSelectedUrl] = (0, import_react.useState)(currentValue);
	const [customInput, setCustomInput] = (0, import_react.useState)(currentValue);
	const [altText, setAltText] = (0, import_react.useState)("");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [alignment, setAlignment] = (0, import_react.useState)("center");
	const [isUploading, setIsUploading] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("curated");
	const fileInputRef = (0, import_react.useRef)(null);
	if (!isOpen) return null;
	const handleApply = () => {
		const finalUrl = (selectedUrl || customInput).trim();
		if (!finalUrl) {
			toast.error("Please select or enter an image URL");
			return;
		}
		onSelect(finalUrl, {
			alt: altText.trim() || void 0,
			caption: caption.trim() || void 0,
			alignment
		});
		toast.success("Picture selected successfully");
		onClose();
	};
	const handleFileUpload = async (file) => {
		try {
			setIsUploading(true);
			const reader = new FileReader();
			reader.onload = async () => {
				const base64Data = reader.result;
				const data = await (await fetch("/api/crm/action", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						action: "upload_image",
						name: file.name,
						data: base64Data,
						payload: {
							name: file.name,
							data: base64Data
						}
					})
				})).json();
				if (data.ok && data.url) {
					setSelectedUrl(data.url);
					setCustomInput(data.url);
					if (!altText) setAltText(file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "));
					toast.success("Image uploaded to server!");
				} else toast.error(data.error || "Failed to upload image");
			};
			reader.readAsDataURL(file);
		} catch (err) {
			toast.error("Upload failed: " + String(err));
		} finally {
			setIsUploading(false);
		}
	};
	const currentActiveUrl = selectedUrl || customInput;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-white w-full max-w-3xl rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col max-h-[92dvh] animate-in zoom-in-95 duration-150",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 sm:px-6 py-3.5 border-b border-black/8 flex items-center justify-between bg-zinc-50/80 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-8 rounded-xl bg-blue/10 text-blue flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-label truncate font-display",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground truncate hidden sm:block",
								children: "Curated engineering stock, local studio assets, direct uploads, or web URLs"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer shrink-0 ml-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex border-b border-black/8 px-4 sm:px-6 bg-white gap-2 sm:gap-4 overflow-x-auto no-scrollbar shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("curated"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${activeTab === "curated" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tech & Architecture Stock" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab("library"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${activeTab === "library" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: "Local Studio Library"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("upload"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${activeTab === "upload" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload File" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("url"),
							className: `py-2.5 px-2 text-xs font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${activeTab === "url" ? "border-blue text-blue" : "border-transparent text-muted-foreground hover:text-label"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "External URL" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-4",
					children: [
						activeTab === "curated" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-xs text-muted-foreground pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Royalty-free high-resolution imagery for engineering teardowns:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] bg-black/5 px-2 py-0.5 rounded",
									children: "Unsplash High-Res"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3",
								children: CURATED_TECH_PRESETS.map((item) => {
									const isChosen = selectedUrl === item.url;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setSelectedUrl(item.url);
											setCustomInput(item.url);
											if (!altText) setAltText(item.alt);
										},
										className: `group relative flex flex-col rounded-xl overflow-hidden border text-left transition-all cursor-pointer ${isChosen ? "ring-2 ring-blue border-transparent shadow-md" : "border-black/10 hover:border-blue/50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "aspect-[16/10] bg-zinc-100 relative overflow-hidden",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.url,
													alt: item.label,
													className: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105",
													loading: "lazy"
												}),
												isChosen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-1.5 right-1.5 size-5 rounded-full bg-blue text-white flex items-center justify-center shadow-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 stroke-[3]" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-medium bg-black/60 text-white backdrop-blur-xs",
													children: item.group
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-2 bg-white flex-1 flex flex-col justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-semibold text-label block line-clamp-1",
												children: item.label
											})
										})]
									}, item.url);
								})
							})]
						}),
						activeTab === "library" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground pb-1",
								children: "Assets stored in the Codex Dynamics project public directory:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3",
								children: LOCAL_PRESETS.map((item) => {
									const isChosen = selectedUrl === item.url;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setSelectedUrl(item.url);
											setCustomInput(item.url);
											if (!altText) setAltText(item.label);
										},
										className: `group relative flex flex-col rounded-xl overflow-hidden border text-left transition-all cursor-pointer ${isChosen ? "ring-2 ring-blue border-transparent shadow-md" : "border-black/10 hover:border-blue/50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "aspect-[4/3] bg-zinc-100 relative overflow-hidden",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.url,
													alt: item.label,
													className: "w-full h-full object-cover transition-transform duration-200 group-hover:scale-105",
													onError: (e) => {
														e.target.style.display = "none";
													}
												}),
												isChosen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute top-1.5 right-1.5 size-5 rounded-full bg-blue text-white flex items-center justify-center shadow-xs",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 stroke-[3]" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-medium bg-black/60 text-white backdrop-blur-xs",
													children: item.group
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-2 bg-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-label block truncate",
												children: item.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[9px] text-muted-foreground block truncate font-mono",
												children: item.url
											})]
										})]
									}, item.url);
								})
							})]
						}),
						activeTab === "upload" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onClick: () => fileInputRef.current?.click(),
								className: "border-2 border-dashed border-black/15 rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center hover:border-blue/50 hover:bg-blue/[0.01] transition-all cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileInputRef,
										type: "file",
										accept: "image/*",
										className: "hidden",
										onChange: (e) => {
											const file = e.target.files?.[0];
											if (file) handleFileUpload(file);
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-12 rounded-full bg-blue/10 text-blue flex items-center justify-center mb-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-label",
										children: isUploading ? "Uploading picture to server..." : "Click or drag picture here to upload"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1 max-w-sm",
										children: "Supports WebP, JPG, PNG, and SVG. Persisted permanently in SQLite and served through the public uploads API."
									})
								]
							}), selectedUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 bg-zinc-50 rounded-xl border border-black/8 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: selectedUrl,
										alt: "Uploaded preview",
										className: "size-14 rounded-lg object-cover border border-black/10 shrink-0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-label block truncate",
											children: "Selected Upload"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-muted-foreground font-mono block truncate",
											children: selectedUrl
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-emerald-600 font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 shrink-0",
										children: "Ready"
									})
								]
							})]
						}),
						activeTab === "url" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1.5",
								children: "Direct Web URL or Asset Path"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: customInput,
								onChange: (e) => {
									setCustomInput(e.target.value);
									setSelectedUrl(e.target.value);
								},
								placeholder: "e.g. https://images.unsplash.com/... or /hero/studio.jpg",
								className: "w-full px-3.5 py-2 text-xs rounded-xl border border-black/15 focus:outline-none focus:border-blue font-mono"
							})] }), customInput && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-black/10 rounded-xl p-3 bg-zinc-50 space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold text-label block",
									children: "Live URL Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-h-40 overflow-hidden rounded-lg bg-white border border-black/6 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: customInput,
										alt: "URL preview",
										className: "max-h-40 w-auto object-contain",
										onError: (e) => {
											e.target.parentElement.innerHTML = "<div class='p-4 text-xs text-red-500'>Unable to load image from this URL</div>";
										}
									})
								})]
							})]
						}),
						showMetaOptions && currentActiveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 rounded-2xl bg-zinc-50 border border-black/8 space-y-3 mt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs font-bold text-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Picture Formatting & SEO Alt Attributes" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[11px] font-semibold text-subtle block mb-1",
										children: "Image Alt Description (Rank Math SEO) *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: altText,
										onChange: (e) => setAltText(e.target.value),
										placeholder: "Descriptive alt text for accessibility & SEO",
										className: "w-full px-3 py-1.5 text-xs bg-white border border-black/10 rounded-lg focus:border-blue outline-none"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[11px] font-semibold text-subtle block mb-1",
										children: "Visible Caption / Credit (Optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: caption,
										onChange: (e) => setCaption(e.target.value),
										placeholder: "Figure 1: Architectural benchmark comparison",
										className: "w-full px-3 py-1.5 text-xs bg-white border border-black/10 rounded-lg focus:border-blue outline-none"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-subtle",
										children: "Alignment:"
									}), [
										"center",
										"left",
										"right",
										"full"
									].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setAlignment(mode),
										className: `px-2.5 py-1 text-[11px] font-medium rounded-md capitalize cursor-pointer transition-colors ${alignment === mode ? "bg-blue text-white shadow-xs" : "bg-white border border-black/10 text-muted-foreground hover:text-label"}`,
										children: mode
									}, mode))]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-4 sm:px-6 py-3 border-t border-black/8 bg-zinc-50/80 flex items-center justify-between shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 pr-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground truncate block font-mono",
							children: ["Selected: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-label",
								children: currentActiveUrl || "None"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-3.5 py-1.5 text-xs font-semibold rounded-xl border border-black/10 text-muted-foreground hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleApply,
							className: "px-4 py-1.5 text-xs font-semibold rounded-xl bg-blue text-white hover:bg-blue-hover shadow-xs transition-colors cursor-pointer flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Use Picture" })]
						})]
					})]
				})
			]
		})
	});
}
var PRESET_AUTHORS = [
	"Codex Dynamics Research",
	"Codex Dynamics Engineering",
	"Codex Dynamics Design Studio",
	"Founder & Principal Architect",
	"DevOps & Infrastructure Team"
];
var POPULAR_TAGS = [
	"Engineering",
	"Architecture",
	"Performance",
	"Design Systems",
	"TypeScript",
	"React 19",
	"Core Web Vitals",
	"Next.js",
	"Micro-Frontends",
	"API Design",
	"Security",
	"Cloud"
];
function BlogEditorPage({ editingId, initialBlog, onBack, onSave }) {
	const [title, setTitle] = (0, import_react.useState)(initialBlog?.title || "");
	const [slug, setSlug] = (0, import_react.useState)(initialBlog?.slug || "");
	const [excerpt, setExcerpt] = (0, import_react.useState)(initialBlog?.excerpt || "");
	const [content, setContent] = (0, import_react.useState)(initialBlog?.content || `## Executive Overview\n\nModern digital infrastructure demands sub-second latencies and uncompromised architectural resilience. In this technical deep-dive, we deconstruct the core principles required to ship zero-latency enterprise systems.\n\n### 1. Architectural Foundation\n\nBy leveraging edge computing and streaming hydration, application cold-starts can be systematically reduced by over **64%**.\n\n| Architecture Metric | Legacy Monolith | Modern Edge Blueprint |\n| :--- | :--- | :--- |\n| TTFB (Global) | 420ms | 38ms |\n| LCP Score | 2.8s | 0.72s |\n| Hydration Overhead | 450KB | 18KB |\n\n> "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra\n\n### 2. Implementation Playbook\n\nTo implement these benchmarks, begin with modular route isolation and progressive bundle optimization.`);
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(initialBlog?.category || "Engineering");
	const [tags, setTags] = (0, import_react.useState)(initialBlog?.tags || [
		"Engineering",
		"Architecture",
		"Performance"
	]);
	const [tagInput, setTagInput] = (0, import_react.useState)("");
	const [author, setAuthor] = (0, import_react.useState)(initialBlog?.author || "Codex Dynamics Research");
	const [status, setStatus] = (0, import_react.useState)(initialBlog?.status || "published");
	const [imageUrl, setImageUrl] = (0, import_react.useState)(initialBlog?.cover_image || initialBlog?.image_url || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80");
	const [imageAlt, setImageAlt] = (0, import_react.useState)(initialBlog?.image_alt || "High-performance software architecture");
	const [imageCaption, setImageCaption] = (0, import_react.useState)(initialBlog?.image_caption || "Codex Dynamics systems architecture");
	const [focusKeyword, setFocusKeyword] = (0, import_react.useState)(initialBlog?.focus_keyword || "Enterprise Architecture");
	const [metaTitle, setMetaTitle] = (0, import_react.useState)(initialBlog?.meta_title || initialBlog?.title || "");
	const [metaDescription, setMetaDescription] = (0, import_react.useState)(initialBlog?.meta_description || initialBlog?.excerpt || "");
	const [isSticky, setIsSticky] = (0, import_react.useState)(false);
	const [allowComments, setAllowComments] = (0, import_react.useState)(true);
	const [allowPingbacks, setAllowPingbacks] = (0, import_react.useState)(true);
	const [allCategories, setAllCategories] = (0, import_react.useState)([]);
	const [categorySearch, setCategorySearch] = (0, import_react.useState)("");
	const [isAddingCategory, setIsAddingCategory] = (0, import_react.useState)(false);
	const [newCategoryName, setNewCategoryName] = (0, import_react.useState)("");
	const [newCategoryParent, setNewCategoryParent] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const loaded = getStoredCategories();
		setAllCategories(loaded);
	}, []);
	const handleCreateCategory = (e) => {
		if (e) e.preventDefault();
		if (!newCategoryName.trim()) {
			toast.error("Please enter a category name");
			return;
		}
		const created = addCategory(newCategoryName, newCategoryParent || void 0);
		setAllCategories(getStoredCategories());
		setSelectedCategory(created.name);
		setNewCategoryName("");
		setNewCategoryParent("");
		setIsAddingCategory(false);
		toast.success(`Category "${created.name}" created and selected!`);
	};
	const filteredCategories = (0, import_react.useMemo)(() => {
		if (!categorySearch.trim()) return allCategories;
		const q = categorySearch.toLowerCase();
		return allCategories.filter((c) => c.name.toLowerCase().includes(q) || c.slug.includes(q));
	}, [allCategories, categorySearch]);
	const [editorView, setEditorView] = (0, import_react.useState)("visual");
	const [previewDevice, setPreviewDevice] = (0, import_react.useState)("desktop");
	const [isSidebarOpen, setIsSidebarOpen] = (0, import_react.useState)(true);
	const [sidebarTab, setSidebarTab] = (0, import_react.useState)("post");
	const [isZenMode, setIsZenMode] = (0, import_react.useState)(false);
	const [isImagePickerOpen, setIsImagePickerOpen] = (0, import_react.useState)(false);
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [hasUnsavedChanges, setHasUnsavedChanges] = (0, import_react.useState)(false);
	const [isDocumentOutlineOpen, setIsDocumentOutlineOpen] = (0, import_react.useState)(false);
	const [isMoreMenuOpen, setIsMoreMenuOpen] = (0, import_react.useState)(false);
	const [isBlockInserterOpen, setIsBlockInserterOpen] = (0, import_react.useState)(false);
	const [isLinkModalOpen, setIsLinkModalOpen] = (0, import_react.useState)(false);
	const [linkUrlInput, setLinkUrlInput] = (0, import_react.useState)("");
	const [linkTextInput, setLinkTextInput] = (0, import_react.useState)("");
	const [accordionSummary, setAccordionSummary] = (0, import_react.useState)(true);
	const [accordionCategories, setAccordionCategories] = (0, import_react.useState)(true);
	const [accordionTags, setAccordionTags] = (0, import_react.useState)(true);
	const [accordionFeaturedImage, setAccordionFeaturedImage] = (0, import_react.useState)(true);
	const [accordionExcerpt, setAccordionExcerpt] = (0, import_react.useState)(true);
	const [accordionDiscussion, setAccordionDiscussion] = (0, import_react.useState)(false);
	const [metaBoxTab, setMetaBoxTab] = (0, import_react.useState)("general");
	const [serpPreviewDevice, setSerpPreviewDevice] = (0, import_react.useState)("desktop");
	const [selectedPowerCategory, setSelectedPowerCategory] = (0, import_react.useState)("all");
	const [powerWordSearch, setPowerWordSearch] = (0, import_react.useState)("");
	const editorTextareaRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setHasUnsavedChanges(true);
	}, [
		title,
		slug,
		content,
		excerpt,
		selectedCategory,
		tags,
		author,
		status,
		imageUrl,
		focusKeyword,
		metaTitle,
		metaDescription
	]);
	const handleTitleChange = (val) => {
		setTitle(val);
		if (!slug || slug === title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")) {
			const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
			setSlug(autoSlug);
		}
	};
	const readingStats = (0, import_react.useMemo)(() => calculateReadingTime(content), [content]);
	const documentStats = (0, import_react.useMemo)(() => {
		const raw = content || "";
		const words = raw.split(/\s+/).filter(Boolean).length;
		const characters = raw.length;
		const paragraphs = raw.split(/\n\s*\n/).filter(Boolean).length;
		const headings = (raw.match(/^#{1,6}\s+.+$/gm) || []).length;
		return {
			words,
			characters,
			paragraphs,
			headings,
			blocks: paragraphs + headings,
			outline: (raw.match(/^(#{1,4})\s+(.+)$/gm) || []).map((line) => {
				const match = line.match(/^(#{1,4})\s+(.+)$/);
				if (!match) return {
					level: 2,
					text: line
				};
				return {
					level: match[1].length,
					text: match[2]
				};
			})
		};
	}, [content]);
	const powerWordsAnalysis = (0, import_react.useMemo)(() => {
		return analyzePowerWords(title, content);
	}, [title, content]);
	const rankMathScore = (0, import_react.useMemo)(() => {
		let score = 30;
		const kw = focusKeyword.trim().toLowerCase();
		const t = title.toLowerCase();
		const c = content.toLowerCase();
		const s = slug.toLowerCase();
		const m = (metaDescription || excerpt).toLowerCase();
		const hasKwInTitle = kw && t.includes(kw);
		const hasKwInSlug = kw && s.includes(kw.replace(/\s+/g, "-"));
		const hasKwInContent = kw && c.includes(kw);
		const hasKwInMeta = kw && m.includes(kw);
		const hasGoodLength = documentStats.words >= 400;
		const hasPowerWord = powerWordsAnalysis.headlineHasPowerWord;
		const hasNumber = powerWordsAnalysis.headlineHasNumber;
		const hasFeaturedImg = Boolean(imageUrl);
		if (hasKwInTitle) score += 15;
		if (hasKwInSlug) score += 10;
		if (hasKwInContent) score += 10;
		if (hasKwInMeta) score += 10;
		if (hasGoodLength) score += 10;
		if (hasPowerWord) score += 10;
		if (hasNumber) score += 5;
		if (hasFeaturedImg) score += 5;
		return Math.min(100, Math.max(10, score));
	}, [
		focusKeyword,
		title,
		content,
		slug,
		metaDescription,
		excerpt,
		documentStats.words,
		powerWordsAnalysis,
		imageUrl
	]);
	const rankMathChecks = (0, import_react.useMemo)(() => {
		const kw = focusKeyword.trim().toLowerCase();
		const t = title.toLowerCase();
		const c = content.toLowerCase();
		const s = slug.toLowerCase();
		const m = (metaDescription || excerpt).toLowerCase();
		return [
			{
				id: "kw-title",
				label: "Focus Keyword used in the SEO title",
				passed: Boolean(kw && t.includes(kw)),
				tip: "Add your primary keyword near the beginning of the title."
			},
			{
				id: "kw-slug",
				label: "Focus Keyword used in the URL slug",
				passed: Boolean(kw && s.includes(kw.replace(/\s+/g, "-"))),
				tip: "Keep URL slug clean and focused on the target keyword."
			},
			{
				id: "kw-content",
				label: "Focus Keyword found in the content body",
				passed: Boolean(kw && c.includes(kw)),
				tip: "Naturally mention your focus keyword in the introductory paragraphs."
			},
			{
				id: "kw-meta",
				label: "Focus Keyword used in Meta Description",
				passed: Boolean(kw && m.includes(kw)),
				tip: "Include target keywords to drive organic search click-through rate."
			},
			{
				id: "length",
				label: "Article length is comprehensive (400+ words)",
				passed: documentStats.words >= 400,
				tip: `Current length is ${documentStats.words} words. Aim for 600+ words for deep authority.`
			},
			{
				id: "power-word",
				label: "Headline contains a psychological Power Word",
				passed: powerWordsAnalysis.headlineHasPowerWord,
				tip: "Power words (e.g. 'Blueprint', 'Proven', 'Zero-Latency') boost CTR by 38%."
			},
			{
				id: "headline-num",
				label: "Headline contains a specific metric or number",
				passed: powerWordsAnalysis.headlineHasNumber,
				tip: "Numbers in headlines (e.g. 'Sub-50ms', '42%') increase credibility."
			},
			{
				id: "featured-img",
				label: "Featured image specified with accessible Alt text",
				passed: Boolean(imageUrl && imageAlt),
				tip: "Featured images improve social cards and reader retention."
			},
			{
				id: "subheadings",
				label: "Content structured with H2 and H3 subheadings",
				passed: documentStats.headings >= 2,
				tip: "Break up long copy with descriptive section headings."
			},
			{
				id: "title-length",
				label: "SEO Title length is optimal (35-65 chars)",
				passed: title.length >= 35 && title.length <= 65,
				tip: `Current title length is ${title.length} characters (ideal: 40-60).`
			}
		];
	}, [
		focusKeyword,
		title,
		content,
		slug,
		metaDescription,
		excerpt,
		documentStats,
		powerWordsAnalysis,
		imageUrl,
		imageAlt
	]);
	const handleInsertFormatting = (prefix, suffix = "", placeholder = "") => {
		const textarea = editorTextareaRef.current;
		if (!textarea) return;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = content.substring(start, end) || placeholder;
		const replacement = `${prefix}${selectedText}${suffix}`;
		const newContent = content.substring(0, start) + replacement + content.substring(end);
		setContent(newContent);
		setTimeout(() => {
			textarea.focus();
			textarea.setSelectionRange(start + prefix.length, start + prefix.length + selectedText.length);
		}, 50);
	};
	const handleInsertPowerWord = (word, target) => {
		if (target === "title") {
			const newTitle = title ? `${word.charAt(0).toUpperCase() + word.slice(1)}: ${title}` : word;
			setTitle(newTitle);
			toast.success(`Added "${word}" to Headline!`);
		} else {
			handleInsertFormatting(`**${word}** `, "", "");
			toast.success(`Inserted "${word}" into article!`);
		}
	};
	const handleAddTag = (tagText) => {
		const trimmed = tagText.trim().replace(/^#/, "");
		if (!trimmed) return;
		if (!tags.includes(trimmed)) {
			setTags([...tags, trimmed]);
			setTagInput("");
		}
	};
	const handleRemoveTag = (tagToRemove) => {
		setTags(tags.filter((t) => t !== tagToRemove));
	};
	const handleSavePost = async (publishStatus = status) => {
		if (!title.trim()) {
			toast.error("Please provide a post title before saving.");
			return;
		}
		setIsSaving(true);
		try {
			if (await onSave({
				id: editingId || void 0,
				title: title.trim(),
				slug: slug.trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
				content,
				excerpt: excerpt.trim() || content.slice(0, 160).replace(/[#*`_]/g, ""),
				category: selectedCategory,
				tags,
				author,
				status: publishStatus,
				image_url: imageUrl,
				cover_image: imageUrl,
				image_alt: imageAlt,
				image_caption: imageCaption,
				focus_keyword: focusKeyword,
				meta_title: metaTitle || title,
				meta_description: metaDescription || excerpt
			}, publishStatus)) {
				setStatus(publishStatus);
				setHasUnsavedChanges(false);
				toast.success(publishStatus === "published" ? "Article published live to blog!" : "Draft saved successfully!");
			}
		} catch {
			toast.error("Failed to save post. Please try again.");
		} finally {
			setIsSaving(false);
		}
	};
	const handleConfirmLink = (e) => {
		e.preventDefault();
		if (!linkUrlInput) return;
		handleInsertFormatting(`[${linkTextInput || linkUrlInput}](`, `${linkUrlInput})`, "");
		setIsLinkModalOpen(false);
		setLinkUrlInput("");
		setLinkTextInput("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-full bg-[#f0f0f1] text-[#1e1e1e] font-sans selection:bg-[#2271b1]/20 min-h-screen pb-16 ${isZenMode ? "bg-white" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 bg-white border border-[#dcdcde] rounded-xl px-3 sm:px-4 py-2.5 flex items-center justify-between shadow-xs select-none mb-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 sm:gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									if (hasUnsavedChanges) {
										if (window.confirm("You have unsaved changes. Return to posts list?")) onBack();
									} else onBack();
								},
								className: "flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-[#f0f0f1] text-[#1e1e1e] transition-colors cursor-pointer",
								title: "View Posts",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold hidden md:inline",
									children: "Posts"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-5 w-px bg-[#dcdcde] mx-1 hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsBlockInserterOpen(!isBlockInserterOpen),
									className: `p-1.5 rounded text-white transition-all cursor-pointer ${isBlockInserterOpen ? "bg-[#1e1e1e]" : "bg-[#2271b1] hover:bg-[#135e96]"}`,
									title: "Add Block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
								}), isBlockInserterOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-0 top-10 w-64 bg-white rounded-lg shadow-xl border border-[#dcdcde] p-2 z-50 space-y-1 animate-in fade-in zoom-in-95",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] font-bold text-neutral-400 px-2 py-1 uppercase tracking-wider",
											children: "Quick Blocks"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n### New Section Heading\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading2, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Heading 2" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n> Blockquote text here...\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Quote" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setIsImagePickerOpen(true);
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Image / Stock Photo" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n| Specification | Baseline | Optimized |\n| :--- | :--- | :--- |\n| TTFB | 400ms | 40ms |\n| LCP | 2.4s | 0.8s |\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Benchmark Table" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												handleInsertFormatting("\n\n```typescript\n// Architecture Code\n\n```\n\n", "", "");
												setIsBlockInserterOpen(false);
											},
											className: "w-full flex items-center gap-2.5 px-2.5 py-1.5 text-xs text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4 text-neutral-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Code Syntax Block" })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => document.execCommand("undo"),
								className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer hidden sm:inline-flex",
								title: "Undo (Ctrl+Z)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => document.execCommand("redo"),
								className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer hidden sm:inline-flex",
								title: "Redo (Ctrl+Y)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redo2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setIsDocumentOutlineOpen(!isDocumentOutlineOpen),
									className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer flex items-center gap-1",
									title: "Details & Document Outline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-mono hidden md:inline text-neutral-500",
										children: [documentStats.words, "w"]
									})]
								}), isDocumentOutlineOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute left-0 top-10 w-72 bg-white rounded-lg shadow-xl border border-[#dcdcde] p-4 z-50 animate-in fade-in zoom-in-95 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-[#dcdcde] pb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-[#1e1e1e]",
												children: "Document Statistics"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-mono text-neutral-500",
												children: readingStats.text
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-3 gap-2 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 bg-[#f0f0f1] rounded",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold font-mono text-[#1e1e1e]",
														children: documentStats.words
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-neutral-500",
														children: "Words"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 bg-[#f0f0f1] rounded",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold font-mono text-[#1e1e1e]",
														children: documentStats.characters
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-neutral-500",
														children: "Characters"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "p-2 bg-[#f0f0f1] rounded",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold font-mono text-[#1e1e1e]",
														children: documentStats.headings
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] text-neutral-500",
														children: "Headings"
													})]
												})
											]
										}),
										documentStats.outline.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1 pt-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-bold text-neutral-500 uppercase tracking-wider",
												children: "Headings Outline"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "max-h-40 overflow-y-auto space-y-1 pr-1",
												children: documentStats.outline.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													style: { paddingLeft: `${(h.level - 1) * 12}px` },
													className: "text-xs text-neutral-700 truncate hover:text-[#2271b1] cursor-pointer",
													children: h.text
												}, i))
											})]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:flex items-center gap-1.5 text-xs text-neutral-500 font-mono",
							children: hasUnsavedChanges ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-amber-600 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-amber-500 animate-pulse" }), "Draft"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-emerald-600 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-600" }), "Saved"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center bg-[#f0f0f1] p-0.5 rounded-md border border-[#dcdcde]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEditorView("visual"),
									className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1 ${editorView === "visual" ? "bg-white text-[#1e1e1e] shadow-xs font-semibold" : "text-neutral-600 hover:text-[#1e1e1e]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Visual"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEditorView("code"),
									className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1 ${editorView === "code" ? "bg-white text-[#1e1e1e] shadow-xs font-semibold" : "text-neutral-600 hover:text-[#1e1e1e]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Code / MD"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEditorView("preview"),
									className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer flex items-center gap-1 ${editorView === "preview" ? "bg-white text-[#1e1e1e] shadow-xs font-semibold" : "text-neutral-600 hover:text-[#1e1e1e]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Reader"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 sm:gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleSavePost("draft"),
								disabled: isSaving,
								className: "px-2.5 py-1.5 rounded text-xs font-medium text-[#2271b1] hover:bg-[#f0f0f1] transition-colors cursor-pointer hidden md:inline-flex",
								children: "Save draft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden sm:flex items-center bg-[#f0f0f1] p-0.5 rounded border border-[#dcdcde]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPreviewDevice("desktop"),
										className: `p-1 rounded cursor-pointer ${previewDevice === "desktop" ? "bg-white text-[#1e1e1e] shadow-xs" : "text-neutral-500"}`,
										title: "Desktop View",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPreviewDevice("tablet"),
										className: `p-1 rounded cursor-pointer ${previewDevice === "tablet" ? "bg-white text-[#1e1e1e] shadow-xs" : "text-neutral-500"}`,
										title: "Tablet View (768px)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tablet, { className: "size-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPreviewDevice("mobile"),
										className: `p-1 rounded cursor-pointer ${previewDevice === "mobile" ? "bg-white text-[#1e1e1e] shadow-xs" : "text-neutral-500"}`,
										title: "Mobile View (375px)",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleSavePost("published"),
								disabled: isSaving,
								className: "px-3 sm:px-4 py-1.5 rounded bg-[#2271b1] hover:bg-[#135e96] active:bg-[#0a4b78] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50",
								children: isSaving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Saving..." }) : status === "published" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Update" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish..." })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setIsSidebarOpen(true);
									setSidebarTab("seo");
								},
								className: `px-2 py-1 rounded text-xs font-bold font-mono flex items-center gap-1 cursor-pointer transition-all border ${rankMathScore >= 80 ? "bg-emerald-50 text-emerald-700 border-emerald-300" : rankMathScore >= 60 ? "bg-amber-50 text-amber-700 border-amber-300" : "bg-red-50 text-red-700 border-red-300"}`,
								title: "Rank Math SEO Score",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [rankMathScore, "/100"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsSidebarOpen(!isSidebarOpen),
								className: `p-1.5 rounded transition-colors cursor-pointer ${isSidebarOpen ? "bg-[#1e1e1e] text-white" : "hover:bg-[#f0f0f1] text-[#2c3338]"}`,
								title: "Settings (Ctrl+Shift+,)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsMoreMenuOpen(!isMoreMenuOpen),
									className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
									title: "Options",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EllipsisVertical, { className: "size-4" })
								}), isMoreMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-0 top-10 w-56 bg-white rounded-lg shadow-xl border border-[#dcdcde] p-2 z-50 text-xs space-y-1 animate-in fade-in",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setIsZenMode(!isZenMode);
												setIsMoreMenuOpen(false);
											},
											className: "w-full flex items-center justify-between px-2 py-1.5 text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Distraction-free mode" }), isZenMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												navigator.clipboard.writeText(content);
												toast.success("All markdown content copied to clipboard!");
												setIsMoreMenuOpen(false);
											},
											className: "w-full flex items-center gap-2 px-2 py-1.5 text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy all content" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-[#dcdcde] my-1" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `/blog?slug=${slug}`,
											target: "_blank",
											rel: "noreferrer",
											className: "w-full flex items-center justify-between px-2 py-1.5 text-neutral-700 hover:bg-[#f0f0f1] rounded cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Post" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
										})
									]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full flex flex-col lg:flex-row gap-6 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "flex-1 min-w-0 w-full space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full bg-white border border-[#dcdcde] rounded-xl p-5 sm:p-7 shadow-xs space-y-4",
						children: [
							editorView !== "preview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-16 z-20 bg-white/95 backdrop-blur-sm border border-[#dcdcde] rounded-lg shadow-xs p-1.5 flex items-center justify-between flex-wrap gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											onChange: (e) => {
												if (e.target.value === "h2") handleInsertFormatting("\n\n## ", "", "Section Heading");
												if (e.target.value === "h3") handleInsertFormatting("\n\n### ", "", "Subheading");
												if (e.target.value === "h4") handleInsertFormatting("\n\n#### ", "", "Minor Heading");
												if (e.target.value === "p") handleInsertFormatting("\n\n", "", "Paragraph text");
												e.target.value = "style";
											},
											defaultValue: "style",
											className: "px-2 py-1 text-xs border border-[#dcdcde] rounded bg-[#f0f0f1] text-[#2c3338] font-medium outline-none cursor-pointer hover:bg-[#e0e0e1]",
											title: "Select Heading Style",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "style",
													disabled: true,
													children: "Style"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "p",
													children: "Paragraph"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "h2",
													children: "Heading 2 (H2)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "h3",
													children: "Heading 3 (H3)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "h4",
													children: "Heading 4 (H4)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("**", "**", "bold text"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Bold (Ctrl+B)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bold, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("*", "*", "italic text"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Italic (Ctrl+I)",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Italic, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("~~", "~~", "strikethrough"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Strikethrough",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strikethrough, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("`", "`", "inline code"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Inline Code",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n- ", "", "List item"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Bullet List",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n1. ", "", "List item"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Numbered List",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListOrdered, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n> ", "", "Quote text"),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Blockquote",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setIsLinkModalOpen(true),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Insert Link",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setIsImagePickerOpen(true),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2271b1] transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold",
											title: "Add Media / Photos",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4 text-[#2271b1]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline",
												children: "Add Media"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n| Technical Benchmark | Baseline | Optimized Status |\n| :--- | :--- | :--- |\n| TTFB | 42ms | Verified Zero Latency |\n| Bundle Size | 38KB | Minified & Compressed |\n\n", "", ""),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Insert Benchmark Table",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleInsertFormatting("\n\n```typescript\n// Technical implementation\n\n```\n\n", "", ""),
											className: "p-1.5 rounded hover:bg-[#f0f0f1] text-[#2c3338] transition-colors cursor-pointer",
											title: "Insert Code Syntax Block",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-[#dcdcde] mx-0.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												const sampleWords = [
													"proven",
													"architect",
													"blueprint",
													"zero-latency",
													"breakthrough",
													"scalable"
												];
												const pick = sampleWords[Math.floor(Math.random() * sampleWords.length)];
												handleInsertPowerWord(pick, "content");
											},
											className: "px-2 py-1 rounded bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer",
											title: "Quick Insert Power Word",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+ Power Word" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-0.5 bg-[#f0f0f1] p-0.5 rounded border border-[#dcdcde]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setEditorView("visual"),
											className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${editorView === "visual" ? "bg-white text-[#1e1e1e] font-semibold shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`,
											children: "Visual"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setEditorView("code"),
											className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${editorView === "code" ? "bg-white text-[#1e1e1e] font-semibold shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`,
											children: "Text / Markdown"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setEditorView("preview"),
											className: `px-2.5 py-1 text-xs font-medium rounded transition-all cursor-pointer ${editorView === "preview" ? "bg-white text-[#1e1e1e] font-semibold shadow-xs" : "text-neutral-600 hover:text-neutral-900"}`,
											children: "Reader View"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: title,
								onChange: (e) => handleTitleChange(e.target.value),
								placeholder: "Enter title here...",
								rows: 1,
								className: "w-full resize-none border-none outline-none font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#1e1e1e] placeholder:text-neutral-300 leading-tight tracking-tight bg-transparent",
								onInput: (e) => {
									const target = e.target;
									target.style.height = "auto";
									target.style.height = `${target.scrollHeight}px`;
								}
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-neutral-500 font-mono flex-wrap pb-2 border-b border-[#f0f0f1]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-neutral-400",
										children: "Permalink:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-neutral-600",
										children: "codexdynamics.com/blog?slug="
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: slug,
										onChange: (e) => setSlug(e.target.value),
										className: "px-2 py-0.5 rounded border border-[#dcdcde] hover:border-[#2271b1] focus:border-[#2271b1] focus:bg-white bg-[#f0f0f1]/60 text-[#1e1e1e] font-mono text-xs transition-colors"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `/blog?slug=${slug}`,
										target: "_blank",
										rel: "noreferrer",
										className: "text-[#2271b1] hover:underline flex items-center gap-0.5 font-sans text-xs font-semibold ml-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Post" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
									})
								]
							}),
							editorView === "code" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									ref: editorTextareaRef,
									value: content,
									onChange: (e) => setContent(e.target.value),
									placeholder: "Start writing in Markdown, or paste your draft...",
									rows: 20,
									className: "w-full font-mono text-sm leading-relaxed p-4 border border-[#dcdcde] rounded-lg outline-none focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1] bg-[#fdfdfd] text-[#1e1e1e] resize-y min-h-[450px]"
								})
							}) : editorView === "visual" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative border border-[#dcdcde] rounded-lg bg-white overflow-hidden shadow-xs focus-within:border-[#2271b1] focus-within:ring-1 focus-within:ring-[#2271b1]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										ref: editorTextareaRef,
										value: content,
										onChange: (e) => setContent(e.target.value),
										placeholder: "Type '/' to choose a block, or begin typing your article content...",
										rows: 18,
										className: "w-full font-sans text-base leading-relaxed p-6 border-none outline-none resize-y min-h-[420px] text-[#2c3338] placeholder:text-neutral-400"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-[#f8f9fa] border-t border-[#dcdcde] px-4 py-2 flex items-center justify-between text-xs text-neutral-500 font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Markdown Enabled" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											documentStats.words,
											" words • ",
											readingStats.text
										] })]
									})]
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-[#dcdcde] rounded-xl p-6 sm:p-8 bg-white shadow-sm space-y-6",
								children: [
									imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative rounded-xl overflow-hidden aspect-video max-h-[380px] bg-neutral-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: imageUrl,
											alt: imageAlt || title,
											className: "w-full h-full object-cover"
										}), imageCaption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs p-2 text-center",
											children: imageCaption
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2 py-0.5 rounded text-xs font-semibold bg-neutral-100 text-neutral-800",
													children: selectedCategory
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-neutral-500 font-mono",
													children: ["• ", readingStats.text]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
												className: "text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-display",
												children: title || "Untitled Article"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-sm text-neutral-500",
												children: [
													"By ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-neutral-800",
														children: author
													}),
													" • Published",
													" ",
													(/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
														month: "long",
														day: "numeric",
														year: "numeric"
													})
												]
											})
										]
									}),
									excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base text-neutral-600 italic border-l-2 border-neutral-300 pl-4",
										children: excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "prose prose-neutral max-w-none text-neutral-800 leading-relaxed space-y-4 whitespace-pre-wrap font-sans",
										children: content
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "rank-math-meta-box",
						className: "border border-[#dcdcde] rounded-xl bg-white shadow-xs overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-[#f8f9fa] border-b border-[#dcdcde] px-4 py-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-6 rounded bg-[#2271b1] text-white flex items-center justify-center font-bold text-xs",
										children: "RM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-sm text-[#1e1e1e]",
										children: "Rank Math SEO Studio"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `px-2.5 py-1 rounded text-xs font-bold font-mono border ${rankMathScore >= 80 ? "bg-emerald-50 text-emerald-700 border-emerald-300" : rankMathScore >= 60 ? "bg-amber-50 text-amber-700 border-amber-300" : "bg-red-50 text-red-700 border-red-300"}`,
										children: [
											"SEO Score: ",
											rankMathScore,
											"/100"
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-[#dcdcde] bg-white px-4 flex items-center gap-4 text-xs font-semibold overflow-x-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("general"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "general" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "General (SERP & Focus Keyword)" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("power-words"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "power-words" ? "border-purple-600 text-purple-600 font-bold" : "border-transparent text-neutral-600 hover:text-purple-600"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Power Words & Headline Studio (",
											powerWordsAnalysis.totalPowerWordsFound,
											" Found)"
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("social"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "social" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Social Share Preview" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setMetaBoxTab("advanced"),
										className: `py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${metaBoxTab === "advanced" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Advanced & Schema" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 sm:p-6 space-y-6",
								children: [
									metaBoxTab === "general" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "text-xs font-bold text-neutral-700 flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Focus Keyword" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[11px] text-neutral-500 font-normal",
														children: "Primary search term to optimize for"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: focusKeyword,
														onChange: (e) => setFocusKeyword(e.target.value),
														placeholder: "e.g. Enterprise Architecture",
														className: "flex-1 px-3 py-2 text-xs rounded border border-[#dcdcde] focus:border-[#2271b1] outline-none bg-white font-medium"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => toast.success(`Focus keyword "${focusKeyword}" verified!`),
														className: "px-3 py-2 rounded bg-[#f0f0f1] hover:bg-[#e0e0e0] text-xs font-semibold text-neutral-700 cursor-pointer",
														children: "Audit Keyword"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-4 rounded-lg bg-[#f8f9fa] border border-[#dcdcde] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-bold text-neutral-700",
															children: "Google SERP Snippet Preview"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "inline-flex items-center bg-white p-0.5 rounded border border-[#dcdcde] text-xs",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setSerpPreviewDevice("desktop"),
																className: `px-2 py-0.5 rounded cursor-pointer ${serpPreviewDevice === "desktop" ? "bg-[#2271b1] text-white font-bold" : "text-neutral-600"}`,
																children: "Desktop"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setSerpPreviewDevice("mobile"),
																className: `px-2 py-0.5 rounded cursor-pointer ${serpPreviewDevice === "mobile" ? "bg-[#2271b1] text-white font-bold" : "text-neutral-600"}`,
																children: "Mobile"
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-4 bg-white rounded border border-[#dcdcde] max-w-xl space-y-1 font-sans",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-1.5 text-xs text-neutral-600",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold text-neutral-800",
																	children: "Codex Dynamics"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-neutral-400",
																	children: ["› blog › ", slug || "enterprise-architecture"]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
																className: "text-[#1a0dab] hover:underline text-base sm:text-lg font-medium cursor-pointer leading-snug line-clamp-1",
																children: metaTitle || title || "Untitled Article | Codex Dynamics Blog"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-[#4d5156] leading-relaxed line-clamp-2",
																children: metaDescription || excerpt || content.slice(0, 155).replace(/[#*`_]/g, "") || "Explore in-depth engineering architectures, performance benchmarks, and design systems from the Codex Dynamics technical studio."
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "pt-2 space-y-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between text-xs text-neutral-600 mb-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SEO Title" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-mono text-[10px]",
																children: [metaTitle.length, "/60 chars"]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: metaTitle,
															onChange: (e) => setMetaTitle(e.target.value),
															placeholder: title || "SEO Title...",
															className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] focus:border-[#2271b1] outline-none"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between text-xs text-neutral-600 mb-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Meta Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-mono text-[10px]",
																children: [metaDescription.length, "/160 chars"]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
															value: metaDescription,
															onChange: (e) => setMetaDescription(e.target.value),
															placeholder: excerpt || "Meta description for Google search results...",
															rows: 2,
															className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] focus:border-[#2271b1] outline-none"
														})] })]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-xs font-bold text-neutral-700 uppercase tracking-wider",
													children: "Rank Math SEO Diagnostics Checklist"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid grid-cols-1 md:grid-cols-2 gap-2",
													children: rankMathChecks.map((chk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: `p-2.5 rounded border text-xs flex items-start gap-2.5 ${chk.passed ? "bg-emerald-50/50 border-emerald-200 text-neutral-800" : "bg-amber-50/40 border-amber-200 text-neutral-800"}`,
														children: [chk.passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "font-medium",
															children: chk.label
														}), !chk.passed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[11px] text-neutral-500 mt-0.5",
															children: chk.tip
														})] })]
													}, chk.id))
												})]
											})
										]
									}),
									metaBoxTab === "power-words" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-4 rounded-xl bg-purple-50/60 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-xs font-bold text-purple-900 flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Headline Copywriting Score" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-purple-700 mt-1",
													children: "Evaluates psychological curiosity, authority triggers, and character count for maximum CTR."
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-3",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-2xl font-bold font-mono text-purple-900",
															children: [powerWordsAnalysis.headlineScore, "/100"]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-[10px] text-purple-700 font-semibold uppercase",
															children: powerWordsAnalysis.headlineScore >= 80 ? "High Impact" : powerWordsAnalysis.headlineScore >= 60 ? "Average" : "Needs Power Word"
														})]
													})
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Power Words in Title"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-lg font-bold font-mono text-neutral-900 mt-0.5",
															children: powerWordsAnalysis.headlineMatches.length
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Power Words in Body"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-lg font-bold font-mono text-neutral-900 mt-0.5",
															children: powerWordsAnalysis.contentMatches.length
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Contains Number"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-lg font-bold text-neutral-900 mt-0.5",
															children: powerWordsAnalysis.headlineHasNumber ? "Yes" : "No"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "p-3 bg-[#f8f9fa] border border-[#dcdcde] rounded text-center",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs font-semibold text-neutral-500",
															children: "Headline Length"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-lg font-bold font-mono text-neutral-900 mt-0.5",
															children: [title.length, " chars"]
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
															className: "text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Psychological Power Words Lexicon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-neutral-400 font-normal",
																children: "(Click to insert into Headline or Body)"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "relative w-full sm:w-56",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 absolute left-2.5 top-2.5 text-neutral-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: powerWordSearch,
																onChange: (e) => setPowerWordSearch(e.target.value),
																placeholder: "Filter power words...",
																className: "w-full pl-8 pr-3 py-1.5 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-purple-600"
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-1.5 flex-wrap",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setSelectedPowerCategory("all"),
															className: `px-2.5 py-1 rounded text-xs cursor-pointer transition-colors ${selectedPowerCategory === "all" ? "bg-purple-600 text-white font-bold" : "bg-[#f0f0f1] text-neutral-700 hover:bg-[#e4e4e6]"}`,
															children: "All Categories"
														}), Object.entries(POWER_WORDS_DICTIONARY).map(([key, cat]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setSelectedPowerCategory(key),
															className: `px-2.5 py-1 rounded text-xs cursor-pointer transition-colors ${selectedPowerCategory === key ? "bg-purple-600 text-white font-bold" : "bg-[#f0f0f1] text-neutral-700 hover:bg-[#e4e4e6]"}`,
															children: cat.name
														}, key))]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-1 max-h-72 overflow-y-auto pr-1",
														children: Object.entries(POWER_WORDS_DICTIONARY).filter(([key]) => selectedPowerCategory === "all" || selectedPowerCategory === key).flatMap(([_key, cat]) => cat.words.filter((w) => powerWordSearch ? w.toLowerCase().includes(powerWordSearch.toLowerCase()) : true).map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-2 rounded-lg bg-white border border-[#dcdcde] hover:border-purple-400 hover:shadow-xs flex items-center justify-between gap-1 group transition-all",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs font-semibold text-neutral-800 capitalize truncate",
																children: word
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-1 shrink-0",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleInsertPowerWord(word, "title"),
																	className: "px-1.5 py-0.5 rounded bg-purple-100 hover:bg-purple-200 text-purple-800 text-[10px] font-bold cursor-pointer",
																	title: "Add to Headline Title",
																	children: "+Title"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleInsertPowerWord(word, "content"),
																	className: "px-1.5 py-0.5 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-[10px] font-medium cursor-pointer",
																	title: "Insert in Body",
																	children: "+Body"
																})]
															})]
														}, word)))
													})
												]
											})
										]
									}),
									metaBoxTab === "social" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2",
											children: "OpenGraph / Facebook & LinkedIn Card Preview"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "max-w-md border border-[#dcdcde] rounded-lg overflow-hidden bg-white shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-video bg-neutral-100 overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: imageUrl,
													alt: imageAlt || title,
													className: "w-full h-full object-cover"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-3 space-y-1 bg-[#f0f2f5]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] font-mono text-neutral-500 uppercase",
														children: "codexdynamics.com"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-bold text-neutral-900 line-clamp-1",
														children: metaTitle || title || "Untitled Article"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-neutral-600 line-clamp-2",
														children: metaDescription || excerpt || "Explore engineering insights at Codex Dynamics."
													})
												]
											})]
										})] })
									}),
									metaBoxTab === "advanced" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 max-w-lg",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-bold text-neutral-700 block mb-1",
												children: "Robots Meta Tags"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "rounded text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Index (Allow search engines to index this page)" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														defaultChecked: true,
														className: "rounded text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Follow (Follow links on this page)" })]
												})]
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-bold text-neutral-700 block mb-1",
												children: "Canonical URL"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: `https://codexdynamics.com/blog?slug=${slug}`,
												className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] bg-white"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-bold text-neutral-700 block mb-1",
												children: "Structured Data Schema Type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												className: "w-full px-3 py-1.5 text-xs rounded border border-[#dcdcde] bg-white",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "TechArticle" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Article" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "BlogPosting" })
												]
											})] })
										]
									})
								]
							})
						]
					})]
				}), isSidebarOpen && !isZenMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "w-full lg:w-[320px] xl:w-[340px] shrink-0 space-y-4 select-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-[#dcdcde] rounded-xl shadow-xs overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-0 z-10 bg-white border-b border-[#dcdcde] flex items-center justify-between px-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSidebarTab("post"),
										className: `py-3 px-3 text-xs font-semibold border-b-2 transition-all cursor-pointer ${sidebarTab === "post" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: "Post"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSidebarTab("seo"),
										className: `py-3 px-3 text-xs font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-1 ${sidebarTab === "seo" ? "border-[#2271b1] text-[#2271b1]" : "border-transparent text-neutral-600 hover:text-[#1e1e1e]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rank Math" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-1 rounded bg-[#2271b1]/10 text-[#2271b1] font-mono text-[10px]",
											children: rankMathScore
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsSidebarOpen(false),
									className: "p-1 rounded hover:bg-[#f0f0f1] text-neutral-500 cursor-pointer",
									title: "Close settings",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
								})]
							}),
							sidebarTab === "post" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "divide-y divide-[#dcdcde] text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionSummary(!accordionSummary),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Summary" }), accordionSummary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionSummary && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Visibility"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#2271b1] font-semibold cursor-pointer",
													children: "Public"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Publish"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[#2271b1] font-semibold cursor-pointer",
													children: "Immediately"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Status"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: status,
													onChange: (e) => setStatus(e.target.value),
													className: "px-2 py-1 rounded border border-[#dcdcde] bg-white text-neutral-800 font-medium",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "published",
															children: "Published"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "draft",
															children: "Draft"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "archived",
															children: "Archived"
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-neutral-500",
													children: "Author"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: author,
													onChange: (e) => setAuthor(e.target.value),
													className: "px-2 py-1 rounded border border-[#dcdcde] bg-white text-neutral-800 max-w-[150px] truncate",
													children: PRESET_AUTHORS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: a,
														children: a
													}, a))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "pt-2 border-t border-[#dcdcde] flex items-center justify-between",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: isSticky,
														onChange: (e) => setIsSticky(e.target.checked),
														className: "rounded text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-neutral-700",
														children: "Stick to top of blog"
													})]
												})
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionCategories(!accordionCategories),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Categories" }), accordionCategories ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionCategories && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: categorySearch,
												onChange: (e) => setCategorySearch(e.target.value),
												placeholder: "Search Categories...",
												className: "w-full px-2.5 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "max-h-36 overflow-y-auto space-y-1.5 pr-1",
												children: filteredCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 px-1 py-0.5 rounded hover:bg-[#f0f0f1] cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "radio",
														name: "postCategory",
														checked: selectedCategory === c.name,
														onChange: () => setSelectedCategory(c.name),
														className: "text-[#2271b1]"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: selectedCategory === c.name ? "font-bold text-[#1e1e1e]" : "text-neutral-700",
														children: c.name
													})]
												}, c.id))
											}),
											!isAddingCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setIsAddingCategory(true),
												className: "text-[#2271b1] hover:underline font-semibold flex items-center gap-1 cursor-pointer pt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add New Category" })]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
												onSubmit: handleCreateCategory,
												className: "p-2.5 bg-[#f8f9fa] border border-[#dcdcde] rounded-lg space-y-2 pt-2 animate-in fade-in",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[11px] font-bold text-neutral-700",
														children: "Add New Category"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] text-neutral-500 block mb-0.5",
														children: "Category Name *"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newCategoryName,
														onChange: (e) => setNewCategoryName(e.target.value),
														placeholder: "e.g. AI & Cloud",
														autoFocus: true,
														className: "w-full px-2 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "text-[10px] text-neutral-500 block mb-0.5",
														children: "Parent Category (Optional)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: newCategoryParent,
														onChange: (e) => setNewCategoryParent(e.target.value),
														className: "w-full px-2 py-1 text-xs rounded border border-[#dcdcde] bg-white",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "",
															children: "— None —"
														}), allCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: c.name,
															children: c.name
														}, c.id))]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pt-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "submit",
															className: "px-2.5 py-1 rounded bg-[#2271b1] hover:bg-[#135e96] text-white font-semibold text-xs cursor-pointer shadow-xs",
															children: "Add New Category"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => {
																setIsAddingCategory(false);
																setNewCategoryName("");
															},
															className: "text-neutral-500 hover:text-neutral-800 text-xs cursor-pointer",
															children: "Cancel"
														})]
													})
												]
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionTags(!accordionTags),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tags" }), accordionTags ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionTags && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: tagInput,
													onChange: (e) => setTagInput(e.target.value),
													onKeyDown: (e) => {
														if (e.key === "Enter" || e.key === ",") {
															e.preventDefault();
															handleAddTag(tagInput);
														}
													},
													placeholder: "Add new tag...",
													className: "flex-1 px-2.5 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => handleAddTag(tagInput),
													className: "px-2 py-1 rounded bg-[#f0f0f1] hover:bg-[#e0e0e0] font-semibold text-neutral-700 cursor-pointer text-xs",
													children: "Add"
												})]
											}),
											tags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-1 flex-wrap pt-1",
												children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "px-2 py-0.5 rounded bg-[#f0f0f1] text-neutral-800 text-xs font-medium flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleRemoveTag(t),
														className: "text-neutral-400 hover:text-red-600 cursor-pointer",
														children: "×"
													})]
												}, t))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1",
													children: "Most Used Tags"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1 flex-wrap",
													children: POPULAR_TAGS.map((pt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => handleAddTag(pt),
														disabled: tags.includes(pt),
														className: `text-[11px] px-1.5 py-0.5 rounded border transition-colors cursor-pointer ${tags.includes(pt) ? "bg-neutral-100 text-neutral-400 border-transparent cursor-default" : "bg-white text-neutral-600 border-[#dcdcde] hover:border-[#2271b1] hover:text-[#2271b1]"}`,
														children: ["+", pt]
													}, pt))
												})]
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionFeaturedImage(!accordionFeaturedImage),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Featured Image" }), accordionFeaturedImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionFeaturedImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-4 pb-4 space-y-3",
										children: imageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													onClick: () => setIsImagePickerOpen(true),
													className: "relative aspect-video rounded-lg overflow-hidden border border-[#dcdcde] bg-neutral-100 group cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: imageUrl,
														alt: imageAlt || title,
														className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-xs",
														children: "Click to Replace"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setIsImagePickerOpen(true),
														className: "text-[#2271b1] hover:underline font-semibold cursor-pointer",
														children: "Replace Image"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => setImageUrl(""),
														className: "text-red-600 hover:underline cursor-pointer",
														children: "Remove featured image"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "text-[10px] text-neutral-500 block mb-0.5",
													children: "Alt Text (Accessibility)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: imageAlt,
													onChange: (e) => setImageAlt(e.target.value),
													placeholder: "Describe image...",
													className: "w-full px-2 py-1 text-xs rounded border border-[#dcdcde] bg-white outline-none"
												})] })
											]
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setIsImagePickerOpen(true),
											className: "w-full py-8 border-2 border-dashed border-[#dcdcde] hover:border-[#2271b1] rounded-lg text-center cursor-pointer transition-colors bg-[#f8f9fa]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-6 mx-auto text-neutral-400 mb-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-[#2271b1]",
												children: "Set featured image"
											})]
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionExcerpt(!accordionExcerpt),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Excerpt" }), accordionExcerpt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionExcerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											value: excerpt,
											onChange: (e) => setExcerpt(e.target.value),
											placeholder: "Write an excerpt (optional)...",
											rows: 3,
											className: "w-full px-2.5 py-1.5 text-xs rounded border border-[#dcdcde] bg-white outline-none focus:border-[#2271b1]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-neutral-500",
											children: "Excerpts are optional hand-crafted summaries of your content that can be used in your theme."
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setAccordionDiscussion(!accordionDiscussion),
										className: "w-full px-4 py-3 flex items-center justify-between font-bold text-neutral-800 hover:bg-[#f8f9fa] cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discussion" }), accordionDiscussion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
									}), accordionDiscussion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-4 pb-4 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: allowComments,
												onChange: (e) => setAllowComments(e.target.checked),
												className: "rounded text-[#2271b1]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-neutral-700",
												children: "Allow comments"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: allowPingbacks,
												onChange: (e) => setAllowPingbacks(e.target.checked),
												className: "rounded text-[#2271b1]"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-neutral-700",
												children: "Allow pingbacks & trackbacks"
											})]
										})]
									})] })
								]
							}),
							sidebarTab === "seo" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 space-y-4 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-lg bg-[#f8f9fa] border border-[#dcdcde] text-center space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-semibold text-neutral-500",
												children: "Rank Math SEO Score"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `text-3xl font-bold font-mono ${rankMathScore >= 80 ? "text-emerald-600" : rankMathScore >= 60 ? "text-amber-600" : "text-red-600"}`,
												children: [rankMathScore, "/100"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-neutral-600",
												children: rankMathScore >= 80 ? "Great! Ready for Search Engines" : "Actionable improvements recommended below"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "font-bold text-neutral-700 block mb-1",
										children: "Focus Keyword"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: focusKeyword,
										onChange: (e) => setFocusKeyword(e.target.value),
										className: "w-full px-2.5 py-1.5 rounded border border-[#dcdcde] bg-white font-medium"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 pt-2 border-t border-[#dcdcde]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-bold text-neutral-800 uppercase tracking-wider text-[11px]",
											children: "Quick Audit Checklist"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-1.5",
											children: rankMathChecks.slice(0, 6).map((chk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-1.5",
												children: [chk.passed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: chk.passed ? "text-neutral-700" : "text-neutral-500",
													children: chk.label
												})]
											}, chk.id))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											document.querySelector("section")?.scrollIntoView({ behavior: "smooth" });
											setMetaBoxTab("power-words");
										},
										className: "w-full py-2 rounded bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center gap-1 cursor-pointer transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Power Words Studio" })]
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePickerModal, {
				isOpen: isImagePickerOpen,
				onClose: () => setIsImagePickerOpen(false),
				onSelect: (meta) => {
					setImageUrl(meta.url);
					setImageAlt(meta.alt || title);
					setImageCaption(meta.caption || "");
					toast.success("Featured photo updated!");
				},
				currentUrl: imageUrl
			}),
			isLinkModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleConfirmLink,
					className: "w-full max-w-sm bg-white rounded-lg p-5 shadow-2xl space-y-4 border border-[#dcdcde]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-bold text-neutral-800",
								children: "Insert Link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsLinkModalOpen(false),
								className: "text-neutral-400 hover:text-neutral-700 cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-neutral-500 block mb-1",
								children: "Link URL *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "url",
								value: linkUrlInput,
								onChange: (e) => setLinkUrlInput(e.target.value),
								placeholder: "https://example.com",
								autoFocus: true,
								required: true,
								className: "w-full px-3 py-1.5 rounded border border-[#dcdcde] outline-none focus:border-[#2271b1]"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-neutral-500 block mb-1",
								children: "Anchor Text (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: linkTextInput,
								onChange: (e) => setLinkTextInput(e.target.value),
								placeholder: "e.g. Read Case Study",
								className: "w-full px-3 py-1.5 rounded border border-[#dcdcde] outline-none focus:border-[#2271b1]"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-end gap-2 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsLinkModalOpen(false),
								className: "px-3 py-1.5 text-xs text-neutral-600 hover:bg-[#f0f0f1] rounded cursor-pointer",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "px-4 py-1.5 text-xs font-semibold bg-[#2271b1] hover:bg-[#135e96] text-white rounded cursor-pointer",
								children: "Insert Link"
							})]
						})
					]
				})
			})
		]
	});
}
function BlogsTab({ blogs, onSaveBlog, onDeleteBlog, onToggleStatus, onDuplicateBlog, onEditorStateChange }) {
	const [isEditorOpen, setIsEditorOpen] = (0, import_react.useState)(false);
	const [editingBlog, setEditingBlog] = (0, import_react.useState)(null);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedStatusFilter, setSelectedStatusFilter] = (0, import_react.useState)("all");
	const [selectedCategoryFilter, setSelectedCategoryFilter] = (0, import_react.useState)("all");
	const [sortBy, setSortBy] = (0, import_react.useState)("newest");
	const [viewLayout, setViewLayout] = (0, import_react.useState)("grid");
	(0, import_react.useEffect)(() => {
		onEditorStateChange?.(isEditorOpen);
	}, [isEditorOpen, onEditorStateChange]);
	(0, import_react.useEffect)(() => {
		try {
			const params = new URLSearchParams(window.location.search);
			const action = params.get("action");
			const editId = params.get("edit");
			if (action === "new" || action === "create") {
				setEditingBlog(null);
				setIsEditorOpen(true);
			} else if (editId) {
				const found = blogs.find((b) => String(b.id) === editId);
				if (found) {
					setEditingBlog(found);
					setIsEditorOpen(true);
				}
			}
		} catch {
			setIsEditorOpen(false);
		}
	}, [blogs]);
	(0, import_react.useEffect)(() => {
		const handlePopState = () => {
			try {
				const params = new URLSearchParams(window.location.search);
				const action = params.get("action");
				const editId = params.get("edit");
				if (action === "new" || action === "create") {
					setEditingBlog(null);
					setIsEditorOpen(true);
				} else if (editId) {
					const found = blogs.find((b) => String(b.id) === editId);
					if (found) {
						setEditingBlog(found);
						setIsEditorOpen(true);
					}
				} else {
					setIsEditorOpen(false);
					setEditingBlog(null);
				}
			} catch {
				setIsEditorOpen(false);
			}
		};
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, [blogs]);
	const categoriesList = (0, import_react.useMemo)(() => {
		const stored = getStoredCategories().map((c) => c.name);
		const fromBlogs = blogs.map((b) => b.category).filter(Boolean);
		return Array.from(/* @__PURE__ */ new Set([...stored, ...fromBlogs]));
	}, [blogs]);
	const stats = (0, import_react.useMemo)(() => {
		return {
			total: blogs.length,
			published: blogs.filter((b) => b.status === "published" || !b.status).length,
			drafts: blogs.filter((b) => b.status === "draft").length,
			totalWords: blogs.reduce((acc, b) => acc + (b.content?.split(/\s+/).filter(Boolean).length || 0), 0)
		};
	}, [blogs]);
	const filteredBlogs = (0, import_react.useMemo)(() => {
		return blogs.filter((b) => {
			if (selectedStatusFilter === "published" && b.status !== "published" && b.status) return false;
			if (selectedStatusFilter === "draft" && b.status !== "draft") return false;
			if (selectedStatusFilter === "archived" && b.status !== "archived") return false;
			if (selectedCategoryFilter !== "all" && b.category !== selectedCategoryFilter) return false;
			if (searchQuery.trim()) {
				const q = searchQuery.toLowerCase();
				const matchTitle = b.title?.toLowerCase().includes(q);
				const matchSlug = b.slug?.toLowerCase().includes(q);
				const matchExcerpt = b.excerpt?.toLowerCase().includes(q);
				const matchContent = b.content?.toLowerCase().includes(q);
				const matchKeyword = b.focus_keyword?.toLowerCase().includes(q);
				const matchCategory = b.category?.toLowerCase().includes(q);
				return matchTitle || matchSlug || matchExcerpt || matchContent || matchKeyword || matchCategory;
			}
			return true;
		}).sort((a, b) => {
			if (sortBy === "newest") return new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime();
			if (sortBy === "oldest") return new Date(a.created_at || 0).getTime() - new Date(b.created_at || 0).getTime();
			if (sortBy === "title") return (a.title || "").localeCompare(b.title || "");
			if (sortBy === "words") {
				const wordsA = (a.content || "").split(/\s+/).filter(Boolean).length;
				return (b.content || "").split(/\s+/).filter(Boolean).length - wordsA;
			}
			return 0;
		});
	}, [
		blogs,
		selectedStatusFilter,
		selectedCategoryFilter,
		searchQuery,
		sortBy
	]);
	const handleOpenCreate = () => {
		setEditingBlog(null);
		setIsEditorOpen(true);
		try {
			const url = new URL(window.location.href);
			url.searchParams.set("action", "new");
			url.searchParams.delete("edit");
			window.history.pushState({ blogMode: "new" }, "", url.toString());
		} catch {}
	};
	const handleOpenEdit = (b) => {
		setEditingBlog(b);
		setIsEditorOpen(true);
		try {
			const url = new URL(window.location.href);
			url.searchParams.set("edit", String(b.id));
			url.searchParams.delete("action");
			window.history.pushState({
				blogMode: "edit",
				id: b.id
			}, "", url.toString());
		} catch {}
	};
	const handleCloseEditor = () => {
		setIsEditorOpen(false);
		setEditingBlog(null);
		try {
			const url = new URL(window.location.href);
			url.searchParams.delete("action");
			url.searchParams.delete("edit");
			window.history.pushState({}, "", url.toString());
		} catch {}
	};
	if (isEditorOpen) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogEditorPage, {
		editingId: editingBlog?.id || null,
		initialBlog: editingBlog,
		onBack: handleCloseEditor,
		onSave: async (payload, _status) => {
			return await onSaveBlog(payload);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-xl font-bold text-label font-display flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Blog & Architectural Teardowns" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Craft, optimize with Rank Math SEO & Power Words, and publish technical insights directly to the Codex Dynamics site."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 self-start sm:self-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleOpenCreate,
						className: "px-4 py-2 bg-blue hover:bg-blue-hover text-white text-xs font-semibold rounded-full shadow-xs flex items-center gap-1.5 transition-all cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New Blog Article" })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-subtle uppercase tracking-wider block",
							children: "Total Articles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-label font-display mt-1 block",
							children: stats.total
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-emerald-600 uppercase tracking-wider block",
							children: "Live Published"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-emerald-700 font-display mt-1 block",
							children: stats.published
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-amber-600 uppercase tracking-wider block",
							children: "Drafts / In Progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-amber-700 font-display mt-1 block",
							children: stats.drafts
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-blue uppercase tracking-wider block",
							children: "Total Words Written"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-bold text-label font-display mt-1 block",
							children: stats.totalWords.toLocaleString()
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1 min-w-[220px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-subtle absolute left-3 top-1/2 -translate-y-1/2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search by title, keyword, slug, or content...",
							className: "w-full pl-9 pr-4 py-2 text-xs bg-fill/50 hover:bg-fill border border-black/8 rounded-xl focus:border-blue focus:bg-white outline-none transition-all"
						}),
						searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSearchQuery(""),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-subtle hover:text-label cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedStatusFilter,
							onChange: (e) => setSelectedStatusFilter(e.target.value),
							className: "px-3 py-1.5 text-xs bg-fill/50 border border-black/8 rounded-xl text-label font-medium focus:border-blue outline-none cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: "all",
									children: [
										"All Statuses (",
										blogs.length,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: "published",
									children: [
										"Published (",
										stats.published,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
									value: "draft",
									children: [
										"Drafts (",
										stats.drafts,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "archived",
									children: "Archived"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: selectedCategoryFilter,
							onChange: (e) => setSelectedCategoryFilter(e.target.value),
							className: "px-3 py-1.5 text-xs bg-fill/50 border border-black/8 rounded-xl text-label font-medium focus:border-blue outline-none cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "All Categories"
							}), categoriesList.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sortBy,
							onChange: (e) => setSortBy(e.target.value),
							className: "px-3 py-1.5 text-xs bg-fill/50 border border-black/8 rounded-xl text-label font-medium focus:border-blue outline-none cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "newest",
									children: "Sort: Newest First"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "oldest",
									children: "Sort: Oldest First"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "title",
									children: "Sort: Title (A-Z)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "words",
									children: "Sort: Word Count"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center rounded-xl bg-fill/60 p-1 border border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setViewLayout("grid"),
								className: `p-1.5 rounded-lg transition-colors cursor-pointer ${viewLayout === "grid" ? "bg-white text-blue shadow-xs" : "text-subtle hover:text-label"}`,
								title: "Grid Cards View",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "size-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setViewLayout("table"),
								className: `p-1.5 rounded-lg transition-colors cursor-pointer ${viewLayout === "table" ? "bg-white text-blue shadow-xs" : "text-subtle hover:text-label"}`,
								title: "Detailed Table View",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListFilter, { className: "size-3.5" })
							})]
						})
					]
				})]
			}),
			filteredBlogs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-3xl bg-card border border-black/8 p-12 text-center space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-14 rounded-full bg-blue/10 text-blue flex items-center justify-center mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-bold text-label font-display",
							children: "No articles found"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground max-w-sm mx-auto",
							children: searchQuery || selectedStatusFilter !== "all" || selectedCategoryFilter !== "all" ? "Try adjusting your search terms or filter criteria." : "Your publication studio is clean. Create your first architectural teardown or case study."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleOpenCreate,
						className: "px-4 py-2 bg-blue text-white rounded-full text-xs font-semibold hover:bg-blue-hover shadow-xs cursor-pointer inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create Article" })]
					})
				]
			}) : viewLayout === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
				children: filteredBlogs.map((b) => {
					const readingTime = calculateReadingTime(b.content || "");
					const wordCount = (b.content || "").split(/\s+/).filter(Boolean).length;
					const powerAnalysis = analyzePowerWords(b.title || "", b.content || "");
					const isPublished = b.status === "published" || !b.status;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-3xl bg-card border border-black/8 overflow-hidden flex flex-col hover:border-black/20 hover:shadow-md transition-all group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/9] bg-fill overflow-hidden",
							children: [
								b.cover_image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: b.cover_image,
									alt: b.title,
									className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
									loading: "lazy"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-full flex items-center justify-center bg-gradient-to-br from-blue/5 via-black/5 to-blue/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-10 text-muted-foreground/40" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-3 left-3 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											if (onToggleStatus) {
												const next = isPublished ? "draft" : "published";
												onToggleStatus(b.id, next);
											}
										},
										className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase shadow-xs cursor-pointer transition-transform active:scale-95 ${isPublished ? "bg-emerald-500 text-white" : b.status === "draft" ? "bg-amber-500 text-white" : "bg-zinc-600 text-white"}`,
										title: "Click to toggle status",
										children: b.status || "published"
									}), powerAnalysis.headlineHasPowerWord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-600 text-white shadow-xs flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power" })]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute bottom-3 left-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-xs",
										children: b.category || "Engineering"
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 flex-1 flex flex-col justify-between space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] text-muted-foreground font-mono",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [wordCount, " words"] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: readingTime.text }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.created_at ? new Date(b.created_at).toLocaleDateString() : "Recent" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-bold text-label font-display group-hover:text-blue transition-colors line-clamp-2",
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed",
										children: b.excerpt || b.content?.slice(0, 140) || "No excerpt provided."
									}),
									b.focus_keyword && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 text-[11px] text-blue font-mono bg-blue/5 px-2 py-0.5 rounded-md self-start inline-flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate",
											children: ["KW: ", b.focus_keyword]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 border-t border-black/6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleOpenEdit(b),
										className: "px-3 py-1.5 rounded-xl bg-blue/10 hover:bg-blue/20 text-blue font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `/blog?slug=${b.slug}`,
										target: "_blank",
										rel: "noreferrer",
										className: "p-1.5 rounded-xl text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
										title: "View Public Article",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [onDuplicateBlog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => onDuplicateBlog(b.id),
										className: "p-1.5 rounded-xl text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
										title: "Duplicate Article",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											if (window.confirm(`Delete article "${b.title}"? This cannot be undone.`)) onDeleteBlog(b.id);
										},
										className: "p-1.5 rounded-xl text-subtle hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer",
										title: "Delete Article",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
									})]
								})]
							})]
						})]
					}, b.id);
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-3xl bg-card border border-black/8 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-left text-xs border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-black/8 bg-fill/40 text-subtle uppercase text-[10px] font-semibold tracking-wider font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Article Title & Keyword"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Category"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Length"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4",
									children: "Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-3.5 px-4 text-right",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
							className: "divide-y divide-black/6",
							children: filteredBlogs.map((b) => {
								const readingTime = calculateReadingTime(b.content || "");
								const wordCount = (b.content || "").split(/\s+/).filter(Boolean).length;
								const power = analyzePowerWords(b.title || "", b.content || "");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-fill/30 transition-colors group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 max-w-xs sm:max-w-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [b.cover_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: b.cover_image,
													alt: "",
													className: "size-9 rounded-lg object-cover border border-black/10 shrink-0"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-label block truncate group-hover:text-blue transition-colors",
														children: b.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2 text-[11px] text-muted-foreground font-mono truncate",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["/blog?slug=", b.slug] }), power.headlineHasPowerWord && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-purple-600 font-bold flex items-center gap-0.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Power" })]
														})]
													})]
												})]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-fill border border-black/8",
												children: b.category || "Engineering"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => {
													if (onToggleStatus) {
														const next = b.status === "published" || !b.status ? "draft" : "published";
														onToggleStatus(b.id, next);
													}
												},
												className: `px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-transform active:scale-95 ${b.status === "published" || !b.status ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : b.status === "draft" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-zinc-100 text-zinc-600"}`,
												title: "Click to toggle status",
												children: b.status || "published"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-3 px-4 font-mono text-[11px] text-muted-foreground",
											children: [
												wordCount,
												"w • ",
												readingTime.text
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-muted-foreground font-mono text-[11px]",
											children: b.created_at ? new Date(b.created_at).toLocaleDateString() : "Recent"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-3 px-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-end gap-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleOpenEdit(b),
														className: "p-1.5 rounded-lg text-blue hover:bg-blue/10 transition-colors cursor-pointer",
														title: "Edit Article",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: `/blog?slug=${b.slug}`,
														target: "_blank",
														rel: "noreferrer",
														className: "p-1.5 rounded-lg text-subtle hover:text-label hover:bg-black/5 transition-colors cursor-pointer",
														title: "View Public Article",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => {
															if (window.confirm(`Delete article "${b.title}"?`)) onDeleteBlog(b.id);
														},
														className: "p-1.5 rounded-lg text-subtle hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer",
														title: "Delete Article",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
													})
												]
											})
										})
									]
								}, b.id);
							})
						})]
					})
				})
			})
		]
	});
}
function EnquiriesTab({ enquiries, onUpdateStatus, onDelete }) {
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const filtered = enquiries.filter((e) => statusFilter === "all" || e.status === statusFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inbox, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-semibold text-label font-display tracking-tight",
					children: "Inquiries & Client Lead Submissions"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-1",
				children: "Every submission through the Codex Dynamics contact form is securely stored in SQLite and managed here."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: statusFilter,
					onChange: (e) => setStatusFilter(e.target.value),
					"aria-label": "Filter enquiries by status",
					className: "bg-white border border-black/8 rounded-full px-4 py-2 text-xs font-medium text-label focus:border-blue outline-none cursor-pointer shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: "all",
							children: [
								"All Inquiries (",
								enquiries.length,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "new",
							children: "New Leads"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "contacted",
							children: "Contacted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "closed",
							children: "Closed / Won"
						})
					]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle",
				children: "No inquiries found for this filter."
			}) : filtered.map((lead) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col md:flex-row md:items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm text-label font-display",
									children: lead.name
								}),
								lead.company && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-xs text-muted-foreground font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "size-3 text-subtle" }), lead.company]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${lead.status === "new" ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60" : lead.status === "contacted" ? "bg-blue/10 text-blue border border-blue/20" : "bg-black/5 text-muted-foreground border border-black/5"}`,
									children: lead.status
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 text-xs",
							children: [
								lead.email && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${lead.email}`,
									className: "inline-flex items-center gap-1.5 text-blue hover:underline font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), lead.email]
								}),
								lead.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${lead.phone}`,
									className: "inline-flex items-center gap-1.5 text-muted-foreground hover:text-label font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-emerald-600" }), lead.phone]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-subtle font-mono text-[11px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3" }), lead.created_at || "Recent"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 bg-fill-subtle/60 border border-hairline rounded-xl text-xs text-label leading-relaxed",
							children: [
								"\"",
								lead.message,
								"\""
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex sm:flex-col items-center sm:items-end gap-2 shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								const nextStatus = lead.status === "new" ? "contacted" : "closed";
								await onUpdateStatus(lead.id, nextStatus);
								toast.success(`Lead marked as ${nextStatus}.`);
							},
							className: "px-3.5 py-1.5 bg-fill hover:bg-fill-elevated text-label rounded-full text-xs font-medium border border-black/8 transition-all hover:shadow-sm cursor-pointer",
							children: lead.status === "new" ? "Mark Contacted" : "Mark Closed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: async () => {
								await onDelete(lead.id);
								toast.info("Inquiry deleted from database.");
							},
							className: "p-2 text-subtle hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer",
							title: "Delete inquiry",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
						})]
					})
				})]
			}, lead.id))
		})]
	});
}
function ReviewsTab({ reviews, onSaveReview, onEditReview, onToggleReview, onDeleteReview }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingReview, setEditingReview] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		author: "",
		rating: 5,
		comment: "",
		image_path: "",
		is_published: true
	});
	const [editForm, setEditForm] = (0, import_react.useState)({
		author: "",
		rating: 5,
		comment: "",
		image_path: "",
		is_published: true
	});
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.author || !form.comment) return;
		if (await onSaveReview(form)) {
			setForm({
				author: "",
				rating: 5,
				comment: "",
				image_path: "",
				is_published: true
			});
			setIsOpen(false);
			toast.success("Review published to Codex Dynamics site.");
		}
	};
	const handleStartEdit = (r) => {
		setEditingReview(r);
		setEditForm({
			author: r.author || "",
			rating: Number(r.rating) || 5,
			comment: r.comment || "",
			image_path: r.image_path || "",
			is_published: Boolean(r.is_published)
		});
	};
	const handleUpdate = async (e) => {
		e.preventDefault();
		if (!editingReview || !editForm.author || !editForm.comment) return;
		if (onEditReview) {
			if (await onEditReview(editingReview.id, editForm)) {
				setEditingReview(null);
				toast.success("Review updated in SQLite database.");
			}
		} else toast.error("Edit handler not configured.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 text-amber-500 fill-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "Client Testimonials & Social Proof"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Curate 5-star client testimonials, verified reviews, and ratings displayed on the public landing page."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setIsOpen(!isOpen);
						setEditingReview(null);
					},
					className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isOpen ? "Close Form" : "Add Review" })]
				})]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-3xl bg-card border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-semibold uppercase tracking-wider text-label mb-2",
					children: "Create Client Testimonial"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Client / Company Representative Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "e.g. Marc Benioff, Salesforce",
							value: form.author,
							onChange: (e) => setForm({
								...form,
								author: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Star Rating"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.rating,
							onChange: (e) => setForm({
								...form,
								rating: Number(e.target.value)
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all cursor-pointer font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 5,
									children: "★★★★★ (5 Stars - Exceptional)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 4,
									children: "★★★★☆ (4 Stars - Strong)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: 3,
									children: "★★★☆☆ (3 Stars - Neutral)"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
								children: "Avatar or Company Logo URL (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "https://images.unsplash.com/... or relative path",
								value: form.image_path,
								onChange: (e) => setForm({
									...form,
									image_path: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all font-mono"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
								children: "Testimonial Quotation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								placeholder: "Describe their experience working with Codex Dynamics engineering...",
								value: form.comment,
								onChange: (e) => setForm({
									...form,
									comment: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2 flex items-center justify-between pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 cursor-pointer text-xs font-medium text-label select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.is_published,
									onChange: (e) => setForm({
										...form,
										is_published: e.target.checked
									}),
									className: "rounded text-blue focus:ring-blue size-4 border-black/15 cursor-pointer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Display on public home page review carousel" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsOpen(false),
									className: "px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer",
									children: "Save Review"
								})]
							})]
						})
					]
				})]
			}),
			editingReview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift w-full max-w-lg rounded-3xl bg-card border border-black/10 p-6 sm:p-8 shadow-xl space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-semibold text-label",
								children: ["Edit Review #", editingReview.id]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditingReview(null),
							className: "p-1.5 text-subtle hover:text-label rounded-full hover:bg-fill transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleUpdate,
						className: "space-y-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Author Name & Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editForm.author,
								onChange: (e) => setEditForm({
									...editForm,
									author: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Star Rating"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: editForm.rating,
								onChange: (e) => setEditForm({
									...editForm,
									rating: Number(e.target.value)
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: 5,
										children: "★★★★★ (5 Stars)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: 4,
										children: "★★★★☆ (4 Stars)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: 3,
										children: "★★★☆☆ (3 Stars)"
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Avatar / Logo URL (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: editForm.image_path,
								onChange: (e) => setEditForm({
									...editForm,
									image_path: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition font-mono"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Comment / Review Quote"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								value: editForm.comment,
								onChange: (e) => setEditForm({
									...editForm,
									comment: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-2.5 text-xs text-label outline-none transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pt-3 border-t border-hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer text-xs font-medium text-label select-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: editForm.is_published,
										onChange: (e) => setEditForm({
											...editForm,
											is_published: e.target.checked
										}),
										className: "rounded text-blue focus:ring-blue size-4 border-black/15 cursor-pointer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Published on public site" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setEditingReview(null),
										className: "px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition shadow-sm cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Changes" })]
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4",
				children: reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3 surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle",
					children: "No testimonials added yet. Click \"Add Review\" to feature client feedback."
				}) : reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-amber-500",
								children: Array.from({ length: r.rating || 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-amber-500" }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: async () => {
									await onToggleReview(r.id, !r.is_published);
									toast.success(`Review ${r.is_published ? "hidden" : "published"}.`);
								},
								className: `text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors cursor-pointer ${r.is_published ? "bg-emerald-50 text-emerald-700" : "bg-black/5 text-subtle"}`,
								children: r.is_published ? "● Live" : "○ Draft"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground italic leading-relaxed",
							children: [
								"\"",
								r.comment,
								"\""
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t border-hairline flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [r.image_path ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.image_path,
								alt: r.author,
								className: "size-6 rounded-full object-cover border border-black/10"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-6 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center justify-center",
								children: r.author.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label",
								children: r.author
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleStartEdit(r),
								className: "p-1.5 text-subtle hover:text-blue rounded-full hover:bg-blue/10 transition-colors cursor-pointer",
								title: "Edit review",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: async () => {
									await onDeleteReview(r.id);
									toast.info("Review deleted.");
								},
								className: "p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer",
								title: "Delete review",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})]
						})]
					})]
				}, r.id))
			})
		]
	});
}
var DEFAULT_CATEGORIES = [
	"Websites & Web Apps",
	"CRMs & Calling Systems",
	"Graphic Design & Branding",
	"Meta & Google Ads",
	"Email Marketing",
	"Web Engineering",
	"Full-Stack SaaS",
	"Mobile App",
	"Creative Production",
	"Branding & Identity",
	"E-Commerce & Storefronts",
	"AI Solutions & Automation"
];
function ProjectsTab({ projects, onSaveProject, onEditProject, onToggleProject, onDeleteProject }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [editingProject, setEditingProject] = (0, import_react.useState)(null);
	const [isImagePickerOpen, setIsImagePickerOpen] = (0, import_react.useState)(false);
	const [pickerTarget, setPickerTarget] = (0, import_react.useState)("add");
	const [isUploading, setIsUploading] = (0, import_react.useState)(false);
	const [showDirectUrlInput, setShowDirectUrlInput] = (0, import_react.useState)(false);
	const [showEditDirectUrlInput, setShowEditDirectUrlInput] = (0, import_react.useState)(false);
	const addFileInputRef = (0, import_react.useRef)(null);
	const editFileInputRef = (0, import_react.useRef)(null);
	const [isCustomCategory, setIsCustomCategory] = (0, import_react.useState)(false);
	const [customCategoryInput, setCustomCategoryInput] = (0, import_react.useState)("");
	const [isEditCustomCategory, setIsEditCustomCategory] = (0, import_react.useState)(false);
	const [editCustomCategoryInput, setEditCustomCategoryInput] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		title: "",
		site_name: "",
		site_url: "",
		description: "",
		category: "Websites & Web Apps",
		image_url: "",
		is_published: true
	});
	const [editForm, setEditForm] = (0, import_react.useState)({
		title: "",
		site_name: "",
		site_url: "",
		description: "",
		category: "Websites & Web Apps",
		image_url: "",
		is_published: true
	});
	const availableCategories = (0, import_react.useMemo)(() => {
		const set = new Set(DEFAULT_CATEGORIES);
		for (const p of projects) if (p.category && p.category.trim()) set.add(p.category.trim());
		return Array.from(set);
	}, [projects]);
	const handleFileUpload = async (file, target) => {
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Please choose a valid image file (JPEG, PNG, WebP, SVG, GIF).");
			return;
		}
		if (file.size > 10485760) {
			toast.error("Image file is too large (max 10MB).");
			return;
		}
		const toastId = toast.loading(`Uploading picture "${file.name}"...`);
		setIsUploading(true);
		try {
			const base64Data = await new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = () => resolve(reader.result);
				reader.onerror = reject;
				reader.readAsDataURL(file);
			});
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "upload_image",
					name: file.name,
					data: base64Data
				})
			})).json();
			if (data.ok && data.url) {
				if (target === "add") setForm((prev) => ({
					...prev,
					image_url: data.url
				}));
				else setEditForm((prev) => ({
					...prev,
					image_url: data.url
				}));
				toast.success("Picture uploaded successfully!", { id: toastId });
			} else toast.error(data.error || "Upload failed. Please try again.", { id: toastId });
		} catch (err) {
			toast.error(err?.message || "Failed to process image.", { id: toastId });
		} finally {
			setIsUploading(false);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.title.trim() || !form.site_url.trim()) {
			toast.error("Project Title and Production URL are required.");
			return;
		}
		const finalCategory = isCustomCategory ? customCategoryInput.trim() || "Custom Project" : form.category;
		if (await onSaveProject({
			...form,
			category: finalCategory
		})) {
			setForm({
				title: "",
				site_name: "",
				site_url: "",
				description: "",
				category: "Websites & Web Apps",
				image_url: "",
				is_published: true
			});
			setIsCustomCategory(false);
			setCustomCategoryInput("");
			setShowDirectUrlInput(false);
			setIsOpen(false);
			toast.success("Project added to portfolio showcase with picture and category.");
		}
	};
	const handleStartEdit = (p) => {
		setEditingProject(p);
		const isCustom = p.category ? !DEFAULT_CATEGORIES.includes(p.category) : false;
		setIsEditCustomCategory(isCustom);
		setEditCustomCategoryInput(isCustom ? p.category : "");
		setShowEditDirectUrlInput(false);
		setEditForm({
			title: p.title || "",
			site_name: p.site_name || "",
			site_url: p.site_url || "",
			description: p.description || "",
			category: p.category || "Websites & Web Apps",
			image_url: p.image_url || "",
			is_published: Boolean(p.is_published)
		});
	};
	const handleUpdate = async (e) => {
		e.preventDefault();
		if (!editingProject || !editForm.title.trim() || !editForm.site_url.trim()) return;
		const finalCategory = isEditCustomCategory ? editCustomCategoryInput.trim() || "Custom Project" : editForm.category;
		const payload = {
			...editForm,
			category: finalCategory
		};
		if (onEditProject) {
			if (await onEditProject(editingProject.id, payload)) {
				setEditingProject(null);
				toast.success("Project updated successfully.");
			}
		} else toast.error("Edit handler not configured.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: addFileInputRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => {
					if (e.target.files?.[0]) {
						handleFileUpload(e.target.files[0], "add");
						e.target.value = "";
					}
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: editFileInputRef,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: (e) => {
					if (e.target.files?.[0]) {
						handleFileUpload(e.target.files[0], "edit");
						e.target.value = "";
					}
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePickerModal, {
				isOpen: isImagePickerOpen,
				onClose: () => setIsImagePickerOpen(false),
				currentValue: pickerTarget === "add" ? form.image_url : editForm.image_url,
				onSelect: (url) => {
					if (pickerTarget === "add") setForm((prev) => ({
						...prev,
						image_url: url
					}));
					else setEditForm((prev) => ({
						...prev,
						image_url: url
					}));
					toast.success("Picture selected for project.");
				},
				title: "Choose Project Showcase Picture",
				showMetaOptions: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold text-label font-display tracking-tight",
						children: "Completed Projects & Client Works Showcase"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: "Publish client site links, live deliverables, high-res project pictures, and custom categories. Visitors on the public site will see these in real-time."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						setIsOpen(!isOpen);
						setEditingProject(null);
					},
					className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isOpen ? "Close Form" : "Post Project" })]
				})]
			}),
			isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-3xl bg-card border border-blue/30 p-6 sm:p-8 shadow-sm space-y-5 animate-in fade-in duration-200",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pb-2 border-b border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-wider text-label",
							children: "Post Completed Client Project"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted-foreground",
						children: "Images & custom categories reflect instantly on visitor portfolio"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
									children: ["Project Title ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									placeholder: "e.g. Apex Luxury Chrono & Automotive Platform",
									value: form.title,
									onChange: (e) => setForm({
										...form,
										title: e.target.value
									}),
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
									children: "Client / Brand Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "e.g. Apex Motor Cars GmbH",
									value: form.site_name,
									onChange: (e) => setForm({
										...form,
										site_name: e.target.value
									}),
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
									children: ["Production URL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-red-500",
										children: "*"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "url",
									required: true,
									placeholder: "https://example.com",
									value: form.site_url,
									onChange: (e) => setForm({
										...form,
										site_url: e.target.value
									}),
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all font-mono"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-[11px] uppercase tracking-wider font-semibold text-subtle flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Category" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											if (!isCustomCategory) {
												setIsCustomCategory(true);
												setCustomCategoryInput(form.category || "");
											} else setIsCustomCategory(false);
										},
										className: "text-[11px] font-medium text-blue hover:text-blue-hover underline cursor-pointer",
										children: isCustomCategory ? "← Choose Preset" : "+ Add Custom Category"
									})]
								}), isCustomCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											autoFocus: true,
											placeholder: "Enter custom category (e.g. AI Automation & VoIP Desk)",
											value: customCategoryInput,
											onChange: (e) => {
												setCustomCategoryInput(e.target.value);
												setForm({
													...form,
													category: e.target.value
												});
											},
											className: "w-full bg-blue/5 border border-blue/40 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setIsCustomCategory(false),
											className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-subtle hover:text-label p-1 text-[11px]",
											title: "Back to dropdown",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: "Quick Suggestions:"
										}), [
											"AI Automation",
											"VoIP Telephony",
											"Fintech & Web3",
											"Hospitality Platform"
										].map((sug) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setCustomCategoryInput(sug);
												setForm({
													...form,
													category: sug
												});
											},
											className: "text-[10px] px-2 py-0.5 rounded-full bg-fill hover:bg-blue/10 hover:text-blue border border-black/8 transition cursor-pointer",
											children: sug
										}, sug))]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: form.category,
									onChange: (e) => {
										if (e.target.value === "__custom__") {
											setIsCustomCategory(true);
											setCustomCategoryInput("");
										} else setForm({
											...form,
											category: e.target.value
										});
									},
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-label outline-none transition-all cursor-pointer",
									children: [availableCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: cat,
										children: cat
									}, cat)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "__custom__",
										className: "text-blue font-semibold",
										children: "+ Add Custom Category..."
									})]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1.5",
							children: "Description & Architectural Scope"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							placeholder: "Key technical achievements, stack used, deliverable metrics, and live impact...",
							value: form.description,
							onChange: (e) => setForm({
								...form,
								description: e.target.value
							}),
							className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-black/8 bg-fill/30 p-4 sm:p-5 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-label",
											children: "Project Picture & Visual Showcase"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setPickerTarget("add");
												setIsImagePickerOpen(true);
											},
											className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-fill text-label border border-black/10 text-[11px] font-medium transition shadow-xs cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Presets & Library" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setShowDirectUrlInput(!showDirectUrlInput),
											className: "inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-subtle hover:text-label hover:bg-fill text-[11px] font-medium transition cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: showDirectUrlInput ? "Hide URL" : "Paste URL" })]
										})]
									})]
								}),
								form.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-3 rounded-xl border border-black/8 shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative w-full sm:w-44 h-28 rounded-lg overflow-hidden bg-black/5 shrink-0 border border-black/10 group",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: form.image_url,
											alt: "Project Preview",
											referrerPolicy: "no-referrer",
											className: "w-full h-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0 space-y-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200",
													children: "Picture Attached"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] text-muted-foreground truncate font-mono",
													children: form.image_url
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-subtle",
												children: "This picture will be featured as the primary card preview in the public portfolio grid."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 pt-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => addFileInputRef.current?.click(),
														disabled: isUploading,
														className: "inline-flex items-center gap-1 px-3 py-1 rounded-full bg-fill hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition cursor-pointer",
														children: [isUploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload New" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => {
															setPickerTarget("add");
															setIsImagePickerOpen(true);
														},
														className: "inline-flex items-center gap-1 px-3 py-1 rounded-full bg-fill hover:bg-fill-elevated text-label text-xs font-medium border border-black/8 transition cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Change Preset" })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => setForm({
															...form,
															image_url: ""
														}),
														className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-red-600 hover:bg-red-50 text-xs font-medium transition cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remove" })]
													})
												]
											})
										]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									onDragOver: (e) => e.preventDefault(),
									onDrop: (e) => {
										e.preventDefault();
										if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0], "add");
									},
									className: "border-2 border-dashed border-black/15 hover:border-blue/50 rounded-2xl p-6 text-center transition-all bg-white/60 hover:bg-white flex flex-col items-center justify-center gap-2 cursor-pointer",
									onClick: () => addFileInputRef.current?.click(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "size-10 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-1",
											children: isUploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-medium text-label hover:underline",
											children: "Click to upload project picture"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground",
											children: " or drag and drop here"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-subtle",
											children: "Supports high-resolution PNG, JPG, WebP, SVG screenshots (up to 10MB)"
										})
									]
								}),
								showDirectUrlInput && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[10px] uppercase tracking-wider font-semibold text-subtle mb-1",
										children: "Direct Image URL"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "/work/storefront.jpg or https://images.unsplash.com/...",
										value: form.image_url,
										onChange: (e) => setForm({
											...form,
											image_url: e.target.value
										}),
										className: "w-full bg-white border border-black/10 focus:border-blue rounded-xl px-3.5 py-2 text-xs text-label outline-none font-mono transition"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 cursor-pointer text-xs font-medium text-label select-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: form.is_published,
									onChange: (e) => setForm({
										...form,
										is_published: e.target.checked
									}),
									className: "rounded text-blue focus:ring-blue size-4 border-black/15 cursor-pointer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish immediately to visitors on public site" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 self-end sm:self-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsOpen(false),
									className: "px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: isUploading,
									className: "inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition-all shadow-sm active:scale-[0.99] cursor-pointer disabled:opacity-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Project to Portfolio" })]
								})]
							})]
						})
					]
				})]
			}),
			editingProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift w-full max-w-xl rounded-3xl bg-card border border-black/10 p-6 sm:p-8 shadow-2xl space-y-4 my-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-semibold text-label",
								children: ["Edit Portfolio Project #", editingProject.id]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEditingProject(null),
							className: "p-1.5 text-subtle hover:text-label rounded-full hover:bg-fill transition cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleUpdate,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: ["Project Title ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editForm.title,
								onChange: (e) => setEditForm({
									...editForm,
									title: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
									children: "Client / Brand Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: editForm.site_name,
									onChange: (e) => setEditForm({
										...editForm,
										site_name: e.target.value
									}),
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-[11px] uppercase tracking-wider font-semibold text-subtle flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Category" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											if (!isEditCustomCategory) {
												setIsEditCustomCategory(true);
												setEditCustomCategoryInput(editForm.category || "");
											} else setIsEditCustomCategory(false);
										},
										className: "text-[11px] font-medium text-blue hover:text-blue-hover underline cursor-pointer",
										children: isEditCustomCategory ? "← Presets" : "+ Custom Category"
									})]
								}), isEditCustomCategory ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										autoFocus: true,
										placeholder: "e.g. AI Automation & SaaS Desk",
										value: editCustomCategoryInput,
										onChange: (e) => {
											setEditCustomCategoryInput(e.target.value);
											setEditForm({
												...editForm,
												category: e.target.value
											});
										},
										className: "w-full bg-blue/5 border border-blue/40 focus:border-blue focus:bg-white rounded-xl px-3 py-2 text-xs text-label outline-none transition"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setIsEditCustomCategory(false),
										className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-subtle hover:text-label",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: editForm.category,
									onChange: (e) => {
										if (e.target.value === "__custom__") {
											setIsEditCustomCategory(true);
											setEditCustomCategoryInput("");
										} else setEditForm({
											...editForm,
											category: e.target.value
										});
									},
									className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3 py-2 text-xs text-label outline-none transition cursor-pointer",
									children: [availableCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: cat,
										children: cat
									}, cat)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "__custom__",
										className: "text-blue font-semibold",
										children: "+ Add Custom Category..."
									})]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: ["Production URL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-red-500",
									children: "*"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "url",
								required: true,
								value: editForm.site_url,
								onChange: (e) => setEditForm({
									...editForm,
									site_url: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition font-mono"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								value: editForm.description,
								onChange: (e) => setEditForm({
									...editForm,
									description: e.target.value
								}),
								className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-2.5 text-xs text-label outline-none transition"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-black/8 bg-fill/30 p-3.5 space-y-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-semibold text-label flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-3.5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Project Picture" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => editFileInputRef.current?.click(),
													disabled: isUploading,
													className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-fill text-label border border-black/10 text-[11px] font-medium transition cursor-pointer",
													children: [isUploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload Picture" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														setPickerTarget("edit");
														setIsImagePickerOpen(true);
													},
													className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-fill text-label border border-black/10 text-[11px] font-medium transition cursor-pointer",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Presets" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowEditDirectUrlInput(!showEditDirectUrlInput),
													className: "text-subtle hover:text-label text-[11px] p-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { className: "size-3" })
												})
											]
										})]
									}),
									editForm.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 bg-white p-2.5 rounded-xl border border-black/8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-20 h-14 rounded-lg overflow-hidden bg-black/5 shrink-0 border border-black/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: editForm.image_url,
												alt: "Project",
												referrerPolicy: "no-referrer",
												className: "w-full h-full object-cover"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-label truncate font-mono",
												children: editForm.image_url
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setEditForm({
													...editForm,
													image_url: ""
												}),
												className: "text-[11px] text-red-600 hover:underline mt-0.5 inline-flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Remove picture" })]
											})]
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										onClick: () => editFileInputRef.current?.click(),
										className: "border border-dashed border-black/15 hover:border-blue/50 rounded-xl p-3 text-center transition bg-white/60 hover:bg-white cursor-pointer",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-subtle",
											children: "Click to upload a picture or select a preset"
										})
									}),
									showEditDirectUrlInput && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "/work/storefront.jpg or https://...",
										value: editForm.image_url,
										onChange: (e) => setEditForm({
											...editForm,
											image_url: e.target.value
										}),
										className: "w-full bg-white border border-black/10 focus:border-blue rounded-xl px-3 py-1.5 text-xs text-label outline-none font-mono transition"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pt-3 border-t border-hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 cursor-pointer text-xs font-medium text-label select-none",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: editForm.is_published,
										onChange: (e) => setEditForm({
											...editForm,
											is_published: e.target.checked
										}),
										className: "rounded text-blue focus:ring-blue size-4 border-black/15 cursor-pointer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Published on public site" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setEditingProject(null),
										className: "px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground text-xs font-medium transition cursor-pointer",
										children: "Cancel"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: isUploading,
										className: "inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-medium transition shadow-sm cursor-pointer disabled:opacity-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Changes" })]
									})]
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-4",
				children: projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-3 surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle",
					children: "No projects added yet. Click \"Post Project\" to feature client work."
				}) : projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between space-y-4 hover:border-black/15 transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [
							p.image_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full h-36 rounded-xl overflow-hidden bg-black/5 border border-black/8 relative group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image_url,
									alt: p.title,
									referrerPolicy: "no-referrer",
									className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full h-24 rounded-xl bg-fill/40 border border-dashed border-black/10 flex flex-col items-center justify-center text-subtle text-xs gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-muted-foreground",
									children: "No picture attached"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2.5 py-0.5 rounded-full bg-blue/10 text-blue border border-blue/20 text-[10px] font-semibold uppercase tracking-wider truncate max-w-[70%]",
									children: p.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: async () => {
										await onToggleProject(p.id, !p.is_published);
										toast.success(`Project ${p.is_published ? "hidden" : "published"}.`);
									},
									className: `text-[10px] px-2 py-0.5 rounded-full font-medium transition-colors cursor-pointer shrink-0 ${p.is_published ? "bg-emerald-50 text-emerald-700" : "bg-black/5 text-subtle"}`,
									children: p.is_published ? "● Live" : "○ Draft"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-sm text-label font-display leading-snug line-clamp-2",
								children: p.title
							}),
							p.site_name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-subtle font-medium",
								children: p.site_name
							}),
							p.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground line-clamp-3 leading-relaxed",
								children: p.description
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-3 border-t border-hairline flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.site_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-fill hover:bg-fill-elevated text-blue text-xs font-medium border border-black/8 transition-all hover:shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit Site" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleStartEdit(p),
								className: "p-1.5 text-subtle hover:text-blue rounded-full hover:bg-blue/10 transition-colors cursor-pointer",
								title: "Edit project",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: async () => {
									await onDeleteProject(p.id);
									toast.info("Project deleted.");
								},
								className: "p-1.5 text-subtle hover:text-red-600 rounded-full hover:bg-red-50 transition-colors cursor-pointer",
								title: "Delete project",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})]
						})]
					})]
				}, p.id))
			})
		]
	});
}
var COLOR_PRESETS = [
	{
		id: "blue",
		name: "Codex Blue",
		primary: "#0071e3",
		accent: "#0071e3",
		bg: "#f5f5f7",
		card: "#ffffff"
	},
	{
		id: "teal",
		name: "Pacific Cyan",
		primary: "#0ea5e9",
		accent: "#0ea5e9",
		bg: "#f0f9ff",
		card: "#ffffff"
	},
	{
		id: "violet",
		name: "Royal Purple",
		primary: "#8b5cf6",
		accent: "#8b5cf6",
		bg: "#faf5ff",
		card: "#ffffff"
	},
	{
		id: "emerald",
		name: "Studio Emerald",
		primary: "#10b981",
		accent: "#10b981",
		bg: "#f0fdf4",
		card: "#ffffff"
	},
	{
		id: "amber",
		name: "Obsidian Gold",
		primary: "#d97706",
		accent: "#d97706",
		bg: "#fffbeb",
		card: "#ffffff"
	},
	{
		id: "dark",
		name: "Pure Midnight",
		primary: "#3b82f6",
		accent: "#60a5fa",
		bg: "#0f172a",
		card: "#1e293b"
	}
];
var RADIUS_OPTIONS = [
	{
		id: "sharp",
		label: "Sharp (0px)",
		desc: "Geometric architectural finish"
	},
	{
		id: "clean",
		label: "Clean (8px)",
		desc: "Apple HIG precision standard"
	},
	{
		id: "modern",
		label: "Modern (16px)",
		desc: "Soft fluid studio feel"
	},
	{
		id: "pill",
		label: "Pill (24px)",
		desc: "Ultra-rounded pill curves"
	}
];
var FONT_OPTIONS = [
	{
		id: "system",
		name: "Apple System (SF Pro)",
		sample: "Precision engineering"
	},
	{
		id: "inter",
		name: "Inter Sans",
		sample: "Ultra-legible neo-grotesque"
	},
	{
		id: "playfair",
		name: "Playfair Display",
		sample: "Editorial luxury typography"
	},
	{
		id: "syne",
		name: "Syne Geometric",
		sample: "Avant-garde design studio"
	}
];
function BrandingSettingsSection({ config, onChange }) {
	const currentColors = config.colors || {
		primary: "#0071e3",
		background: "#f5f5f7",
		cardBg: "#ffffff",
		textMain: "#1d1d1f",
		textMuted: "#6e6e73",
		accent: "#0071e3"
	};
	const currentTheme = config.theme || {
		activeTheme: "codex-pro",
		fontFamily: "system",
		containerWidth: "1280px",
		borderRadius: "modern",
		headerStyle: "floating"
	};
	const branding = config.branding || {
		accentPreset: "blue",
		logoDark: "",
		logoLight: "",
		favicon: "/favicon.svg"
	};
	const applyPreset = (preset) => {
		onChange({
			...config,
			colors: {
				...currentColors,
				primary: preset.primary,
				accent: preset.accent
			},
			branding: {
				...branding,
				accentPreset: preset.id
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-xl bg-blue/10 text-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-label",
							children: "Primary Brand Palette & Accents"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "Instant chromatic colorways applied across buttons, badges, glows, and hover micro-interactions."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5",
						children: COLOR_PRESETS.map((preset) => {
							const isSelected = branding.accentPreset === preset.id || currentColors.primary.toLowerCase() === preset.primary.toLowerCase();
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => applyPreset(preset),
								className: `relative flex flex-col items-center p-3.5 rounded-xl border text-center transition cursor-pointer ${isSelected ? "border-blue bg-blue/5 shadow-xs" : "border-black/8 hover:border-black/20 hover:bg-black/2"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-8 rounded-full mb-2 shadow-xs flex items-center justify-center text-white",
										style: { backgroundColor: preset.primary },
										children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-label",
										children: preset.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-subtle font-mono mt-0.5",
										children: preset.primary
									})
								]
							}, preset.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-5 border-t border-hairline grid grid-cols-1 sm:grid-cols-3 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1.5",
								children: "Primary Accent HEX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "color",
									value: currentColors.primary || "#0071e3",
									onChange: (e) => onChange({
										...config,
										colors: {
											...currentColors,
											primary: e.target.value,
											accent: e.target.value
										}
									}),
									className: "size-9 rounded-lg border border-black/10 cursor-pointer p-0.5 bg-white"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: currentColors.primary || "#0071e3",
									onChange: (e) => onChange({
										...config,
										colors: {
											...currentColors,
											primary: e.target.value,
											accent: e.target.value
										}
									}),
									className: "flex-1 text-xs font-mono px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1.5",
								children: "Text Dark (Main)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "color",
									value: currentColors.textMain || "#1d1d1f",
									onChange: (e) => onChange({
										...config,
										colors: {
											...currentColors,
											textMain: e.target.value
										}
									}),
									className: "size-9 rounded-lg border border-black/10 cursor-pointer p-0.5 bg-white"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: currentColors.textMain || "#1d1d1f",
									onChange: (e) => onChange({
										...config,
										colors: {
											...currentColors,
											textMain: e.target.value
										}
									}),
									className: "flex-1 text-xs font-mono px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1.5",
								children: "Muted Text / Captions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "color",
									value: currentColors.textMuted || "#6e6e73",
									onChange: (e) => onChange({
										...config,
										colors: {
											...currentColors,
											textMuted: e.target.value
										}
									}),
									className: "size-9 rounded-lg border border-black/10 cursor-pointer p-0.5 bg-white"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: currentColors.textMuted || "#6e6e73",
									onChange: (e) => onChange({
										...config,
										colors: {
											...currentColors,
											textMuted: e.target.value
										}
									}),
									className: "flex-1 text-xs font-mono px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
								})]
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-purple-500/10 text-purple-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Corner Radius & Architectural Geometry"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Controls border radius curves across bento grids, buttons, modals, and preview cards."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5",
					children: RADIUS_OPTIONS.map((opt) => {
						const isSelected = (currentTheme.borderRadius || "modern") === opt.id;
						const radiusStyle = opt.id === "sharp" ? "rounded-none" : opt.id === "clean" ? "rounded-md" : opt.id === "modern" ? "rounded-xl" : "rounded-full";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onChange({
								...config,
								theme: {
									...currentTheme,
									borderRadius: opt.id
								}
							}),
							className: `p-4 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${isSelected ? "border-blue bg-blue/5 shadow-xs" : "border-black/8 hover:border-black/20 hover:bg-black/2"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-label",
									children: opt.label
								}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-blue" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle",
								children: opt.desc
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-3 border-t border-black/5 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-6 w-12 bg-label/20 ${radiusStyle}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-6 w-6 bg-blue/30 ${radiusStyle}` })]
							})]
						}, opt.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-xl bg-amber-500/10 text-amber-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Type, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-label",
							children: "Typography Pairing & Hierarchy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "Curated font families engineered for readability, rhythmic contrast, and aesthetic poise."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5",
						children: FONT_OPTIONS.map((f) => {
							const isSelected = (currentTheme.fontFamily || "system") === f.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => onChange({
									...config,
									theme: {
										...currentTheme,
										fontFamily: f.id
									}
								}),
								className: `p-4 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${isSelected ? "border-blue bg-blue/5 shadow-xs" : "border-black/8 hover:border-black/20 hover:bg-black/2"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-label",
										children: f.name
									}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-blue" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-subtle mt-1 italic",
									children: f.sample
								})] })
							}, f.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 pt-5 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-semibold text-label",
							children: "Container Max Width"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-subtle",
							children: "Constraint for wide displays"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: currentTheme.containerWidth || "1280px",
							onChange: (e) => onChange({
								...config,
								theme: {
									...currentTheme,
									containerWidth: e.target.value
								}
							}),
							className: "text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "1200px",
									children: "1200px (Compact & Dense)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "1280px",
									children: "1280px (Optimal Studio Standard)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "1440px",
									children: "1440px (Spacious Wide Canvas)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "full",
									children: "Full Fluid Width (100%)"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-emerald-500/10 text-emerald-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Brand Logos & Favicon Assets"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Provide custom image URLs or paths for the header navigation mark and browser tab favicon."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl border border-black/8 bg-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-label mb-1",
									children: "Header Logo (Light)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-subtle mb-3",
									children: "Shown on light backgrounds."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: branding.logoLight || "",
									onChange: (e) => onChange({
										...config,
										branding: {
											...branding,
											logoLight: e.target.value
										}
									}),
									placeholder: "/hero/logo.png or https://...",
									className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label mb-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-14 rounded-lg bg-[#f5f5f7] border border-black/5 flex items-center justify-center p-2",
									children: branding.logoLight ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: branding.logoLight,
										alt: "Light logo preview",
										className: "max-h-full max-w-full object-contain"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-subtle italic",
										children: "No image (using default 'C' badge)"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl border border-black/8 bg-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-label mb-1",
									children: "Header Logo (Dark / Contrast)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-subtle mb-3",
									children: "Used on dark headers or hero overlays."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: branding.logoDark || "",
									onChange: (e) => onChange({
										...config,
										branding: {
											...branding,
											logoDark: e.target.value
										}
									}),
									placeholder: "/hero/logo-dark.png or https://...",
									className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label mb-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-14 rounded-lg bg-[#1d1d1f] border border-black/5 flex items-center justify-center p-2 text-white",
									children: branding.logoDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: branding.logoDark,
										alt: "Dark logo preview",
										className: "max-h-full max-w-full object-contain"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-white/50 italic",
										children: "No image (using default 'C' badge)"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-xl border border-black/8 bg-white/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-label mb-1",
									children: "Browser Tab Favicon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-subtle mb-3",
									children: "SVG or PNG icon shown on browser tab."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: branding.favicon || "",
									onChange: (e) => onChange({
										...config,
										branding: {
											...branding,
											favicon: e.target.value
										}
									}),
									placeholder: "/favicon.svg",
									className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label mb-3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-14 rounded-lg bg-white border border-black/5 flex items-center justify-center gap-2 p-2",
									children: branding.favicon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: branding.favicon,
										alt: "Favicon preview",
										className: "size-6 object-contain"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-label",
										children: "Favicon Preview"
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-subtle italic",
										children: "Using /favicon.svg"
									})
								})
							]
						})
					]
				})]
			})
		]
	});
}
var SECTION_METADATA = {
	hero: {
		label: "Hero Showcase & Reel",
		desc: "Interactive display, primary headline & dynamic badge",
		category: "Opening"
	},
	highlights: {
		label: "Bento Highlights",
		desc: "Precision capability matrix, live metrics & client badges",
		category: "Proof"
	},
	portfolio: {
		label: "Portfolio Works Showcase",
		desc: "Interactive project gallery with live case studies & preview modal",
		category: "Case Studies"
	},
	results: {
		label: "Results & Growth Metrics",
		desc: "Verifiable KPIs, lighthouse 100/100 scores & conversion stats",
		category: "Proof"
	},
	reviews: {
		label: "Client Testimonials Slider",
		desc: "Verified corporate client reviews and executive endorsements",
		category: "Social Proof"
	},
	about: {
		label: "About Studio & DNA",
		desc: "Philosophy, architectural principles and studio manifesto",
		category: "Story"
	},
	services: {
		label: "Services & Capabilities",
		desc: "Full spectrum of web engineering, UI/UX, and marketing offerings",
		category: "Offerings"
	},
	studio: {
		label: "Kyiv Studio & Culture",
		desc: "Physical space, hardware lab & engineering culture",
		category: "Story"
	},
	blog: {
		label: "Insights & Technical Blog",
		desc: "Thought leadership, engineering breakdowns, and search engine articles",
		category: "Content"
	},
	contact: {
		label: "Contact & Project Inquiry",
		desc: "Direct inquiry form, phone, email, WhatsApp & Kyiv studio map",
		category: "Conversion"
	}
};
var HERO_LAYOUT_OPTIONS = [
	{
		id: "streamer",
		label: "Streamer Showcase",
		desc: "Video background reel with bold typography & floating badges"
	},
	{
		id: "split",
		label: "Split Media (50/50)",
		desc: "High-contrast split editorial layout with side-by-side showcase"
	},
	{
		id: "centered",
		label: "Centered Minimal Focus",
		desc: "Pure high-impact typography with centered CTA stack"
	},
	{
		id: "bento",
		label: "Bento Interactive Grid",
		desc: "Multi-panel bento cards integrated directly into the hero zone"
	}
];
var HEADER_OPTIONS = [
	{
		id: "floating",
		label: "Floating Island Bar",
		desc: "Detached pill navigation with blur backdrop"
	},
	{
		id: "minimal",
		label: "Clean Edge-to-Edge",
		desc: "Minimal borderless top navigation bar"
	},
	{
		id: "sticky",
		label: "Sticky Top Header",
		desc: "Header pinned to top on scroll with subtle border"
	}
];
function LayoutSettingsSection({ config, onChange }) {
	const currentTheme = config.theme || {
		activeTheme: "codex-pro",
		fontFamily: "system",
		containerWidth: "1280px",
		borderRadius: "modern",
		heroLayout: "streamer",
		headerStyle: "floating"
	};
	const sectionsOrder = resolveSectionsOrder(currentTheme);
	const sectionVisibility = resolveSectionVisibility(currentTheme);
	const handleToggleSection = (id) => {
		const nextVis = {
			...sectionVisibility,
			[id]: sectionVisibility[id] === false ? true : false
		};
		onChange({
			...config,
			theme: {
				...currentTheme,
				layout: {
					...currentTheme.layout,
					sectionVisibility: nextVis,
					sectionsOrder
				}
			}
		});
	};
	const handleMove = (index, direction) => {
		const targetIndex = direction === "up" ? index - 1 : index + 1;
		if (targetIndex < 0 || targetIndex >= sectionsOrder.length) return;
		const newOrder = [...sectionsOrder];
		const [moved] = newOrder.splice(index, 1);
		newOrder.splice(targetIndex, 0, moved);
		onChange({
			...config,
			theme: {
				...currentTheme,
				sectionsOrder: newOrder,
				layout: {
					...currentTheme.layout,
					sectionsOrder: newOrder,
					sectionVisibility
				}
			}
		});
	};
	const handleResetOrder = () => {
		const defaultOrder = [...DEFAULT_HOME_SEQUENCE];
		const defaultVis = Object.fromEntries(DEFAULT_HOME_SEQUENCE.map((id) => [id, true]));
		onChange({
			...config,
			theme: {
				...currentTheme,
				sectionsOrder: defaultOrder,
				layout: {
					...currentTheme.layout,
					sectionsOrder: defaultOrder,
					sectionVisibility: defaultVis
				}
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-blue/10 text-blue",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelsTopLeft, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Hero Layout Variant"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Visual presentation of the homepage header section."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2 mt-4",
					children: HERO_LAYOUT_OPTIONS.map((opt) => {
						const isSelected = (currentTheme.heroLayout || "streamer") === opt.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onChange({
								...config,
								theme: {
									...currentTheme,
									heroLayout: opt.id
								}
							}),
							className: `w-full p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${isSelected ? "border-blue bg-blue/5 shadow-xs" : "border-black/8 hover:border-black/20 hover:bg-black/2"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label",
								children: opt.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: opt.desc
							})] }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-blue",
								children: "Active"
							})]
						}, opt.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-purple-500/10 text-purple-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Navigation Bar Style"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Floating island vs attached header chrome."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2 mt-4",
					children: HEADER_OPTIONS.map((opt) => {
						const isSelected = (currentTheme.headerStyle || "floating") === opt.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onChange({
								...config,
								theme: {
									...currentTheme,
									headerStyle: opt.id
								}
							}),
							className: `w-full p-3 rounded-xl border text-left transition cursor-pointer flex items-center justify-between ${isSelected ? "border-blue bg-blue/5 shadow-xs" : "border-black/8 hover:border-black/20 hover:bg-black/2"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label",
								children: opt.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: opt.desc
							})] }), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-blue",
								children: "Active"
							})]
						}, opt.id);
					})
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-emerald-500/10 text-emerald-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Homepage Section Sequence & Visibility"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Drag or use arrows to re-order sections. Toggle eyeball icon to show or hide sections without losing data."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleResetOrder,
					className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 bg-white hover:bg-black/5 text-xs font-medium text-label transition cursor-pointer shadow-2xs self-start sm:self-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5 text-subtle" }), "Reset to Default Order"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-hairline border border-hairline rounded-xl overflow-hidden bg-white/70",
				children: sectionsOrder.map((sectionId, idx) => {
					const meta = SECTION_METADATA[sectionId] || {
						label: sectionId.charAt(0).toUpperCase() + sectionId.slice(1),
						desc: "Custom content section",
						category: "General"
					};
					const isVisible = sectionVisibility[sectionId] !== false;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition ${isVisible ? "bg-white" : "bg-black/[0.02] opacity-60"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "size-7 rounded-lg bg-black/5 text-subtle flex items-center justify-center text-xs font-mono font-bold",
								children: ["#", idx + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-bold text-label",
									children: meta.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] px-2 py-0.5 rounded-md bg-black/5 text-subtle uppercase tracking-wider font-medium",
									children: meta.category
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-subtle mt-0.5",
								children: meta.desc
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 self-end sm:self-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleToggleSection(sectionId),
								className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer border ${isVisible ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700" : "border-black/10 bg-black/5 text-subtle"}`,
								children: isVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), "Visible"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3.5" }), "Hidden"] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border border-black/10 rounded-lg overflow-hidden bg-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: idx === 0,
										onClick: () => handleMove(idx, "up"),
										className: "p-1.5 hover:bg-black/5 disabled:opacity-30 disabled:cursor-not-allowed text-label cursor-pointer",
										title: "Move Section Up",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[1px] h-4 bg-hairline" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										disabled: idx === sectionsOrder.length - 1,
										onClick: () => handleMove(idx, "down"),
										className: "p-1.5 hover:bg-black/5 disabled:opacity-30 disabled:cursor-not-allowed text-label cursor-pointer",
										title: "Move Section Down",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })
									})
								]
							})]
						})]
					}, sectionId);
				})
			})]
		})]
	});
}
var BANNER_VARIANTS = [
	{
		id: "blue",
		name: "Codex Blue",
		bgClass: "bg-blue text-white",
		borderClass: "border-blue"
	},
	{
		id: "dark",
		name: "Obsidian Black",
		bgClass: "bg-[#111113] text-white",
		borderClass: "border-[#111113]"
	},
	{
		id: "gradient",
		name: "Studio Gradient",
		bgClass: "bg-gradient-to-r from-blue via-indigo-600 to-purple-600 text-white",
		borderClass: "border-indigo-600"
	},
	{
		id: "amber",
		name: "Gold Amber",
		bgClass: "bg-amber-500 text-black font-semibold",
		borderClass: "border-amber-500"
	},
	{
		id: "emerald",
		name: "Growth Emerald",
		bgClass: "bg-emerald-600 text-white",
		borderClass: "border-emerald-600"
	}
];
function ConversionSettingsSection({ config, onChange }) {
	const banner = config.banner || {
		enabled: true,
		text: "Q3 Studio Booking Open — 2 Slots Remaining for Enterprise Architecture Rebuilds",
		ctaText: "Book Discovery Call",
		ctaUrl: "#contact",
		variant: "blue",
		dismissible: true
	};
	const whatsapp = config.whatsapp || {
		enabled: true,
		phone: "+380630000000",
		defaultMessage: "Hello Codex Dynamics studio, I would like to discuss a new high-performance web project.",
		position: "bottom-right",
		showExtraChannels: true
	};
	const contactForm = config.contactForm || {
		showBudget: true,
		showTimeline: true,
		showCompany: true,
		showServiceSelect: true,
		customSuccessMessage: "Inquiry received. Our engineering leads will review and respond within 24 hours."
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-2 rounded-xl bg-blue/10 text-blue",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-label",
								children: "Top Announcement & Promo Banner"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: "High-converting notification bar fixed at the very top of all pages."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 cursor-pointer self-start sm:self-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: banner.enabled,
								onChange: (e) => onChange({
									...config,
									banner: {
										...banner,
										enabled: e.target.checked
									}
								}),
								className: "size-4 accent-blue rounded cursor-pointer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label",
								children: banner.enabled ? "Banner Active" : "Banner Disabled"
							})]
						})]
					}),
					banner.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 p-3 rounded-xl border border-black/5 bg-black/[0.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-mono uppercase tracking-wider text-subtle mb-1.5",
							children: "Live Top Bar Preview:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `px-4 py-2.5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2 text-xs transition ${BANNER_VARIANTS.find((v) => v.id === banner.variant)?.bgClass || "bg-blue text-white"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-center sm:text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: banner.text || "Your announcement text here..." })]
							}), banner.ctaText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 px-2.5 py-1 rounded bg-white/20 text-white hover:bg-white/30 text-[11px] font-semibold",
								children: [banner.ctaText, " →"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-label mb-1",
									children: "Banner Text / Headline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: banner.text || "",
									onChange: (e) => onChange({
										...config,
										banner: {
											...banner,
											text: e.target.value
										}
									}),
									placeholder: "e.g. Q3 Booking Open — 2 Slots Available",
									className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "CTA Button Text"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: banner.ctaText || "",
								onChange: (e) => onChange({
									...config,
									banner: {
										...banner,
										ctaText: e.target.value
									}
								}),
								placeholder: "e.g. Book Discovery Call",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "CTA Destination URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: banner.ctaUrl || "",
								onChange: (e) => onChange({
									...config,
									banner: {
										...banner,
										ctaUrl: e.target.value
									}
								}),
								placeholder: "#contact or https://...",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-label mb-2",
									children: "Color & Style Theme"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 sm:grid-cols-5 gap-2",
									children: BANNER_VARIANTS.map((v) => {
										const isSelected = banner.variant === v.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => onChange({
												...config,
												banner: {
													...banner,
													variant: v.id
												}
											}),
											className: `p-2.5 rounded-lg border text-center transition cursor-pointer text-xs ${v.bgClass} ${isSelected ? "ring-2 ring-offset-2 ring-blue" : "opacity-85 hover:opacity-100"}`,
											children: v.name
										}, v.id);
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-xl bg-emerald-500/10 text-emerald-600",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-label",
							children: "WhatsApp Floating Action Dock"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "Fixed corner trigger connecting high-intent visitors directly to your messengers."
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-2 cursor-pointer self-start sm:self-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: whatsapp.enabled,
							onChange: (e) => onChange({
								...config,
								whatsapp: {
									...whatsapp,
									enabled: e.target.checked
								}
							}),
							className: "size-4 accent-emerald-600 rounded cursor-pointer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-label",
							children: whatsapp.enabled ? "WhatsApp Dock Active" : "WhatsApp Dock Disabled"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold text-label mb-1",
							children: "WhatsApp Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: whatsapp.phone || "",
							onChange: (e) => onChange({
								...config,
								whatsapp: {
									...whatsapp,
									phone: e.target.value
								}
							}),
							placeholder: "+380630000000",
							className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label font-mono"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-semibold text-label mb-1",
							children: "Dock Screen Position"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: whatsapp.position || "bottom-right",
							onChange: (e) => onChange({
								...config,
								whatsapp: {
									...whatsapp,
									position: e.target.value
								}
							}),
							className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bottom-right",
								children: "Bottom Right (Standard)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "bottom-left",
								children: "Bottom Left (Alternative)"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Pre-filled WhatsApp Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 2,
								value: whatsapp.defaultMessage || "",
								onChange: (e) => onChange({
									...config,
									whatsapp: {
										...whatsapp,
										defaultMessage: e.target.value
									}
								}),
								placeholder: "Message that automatically populates the visitor's WhatsApp chat...",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label resize-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2 pt-3 border-t border-hairline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: whatsapp.showExtraChannels,
									onChange: (e) => onChange({
										...config,
										whatsapp: {
											...whatsapp,
											showExtraChannels: e.target.checked
										}
									}),
									className: "size-4 accent-emerald-600 rounded cursor-pointer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-label font-medium",
									children: "Enable multi-channel quick flyout (Telegram, Viber, Direct Call, Email)"
								})]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-purple-500/10 text-purple-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RectangleEllipsis, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Contact Form Fields & Lead Qualification"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Toggle specific qualification fields to gather budget, company and timeline requirements."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label block",
								children: "Company / Brand Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle",
								children: "Collect client brand organization"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: contactForm.showCompany !== false,
								onChange: (e) => onChange({
									...config,
									contactForm: {
										...contactForm,
										showCompany: e.target.checked
									}
								}),
								className: "size-4 accent-blue rounded cursor-pointer"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label block",
								children: "Service Focus Dropdown"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle",
								children: "Client selects engineering vs branding vs SMM"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: contactForm.showServiceSelect !== false,
								onChange: (e) => onChange({
									...config,
									contactForm: {
										...contactForm,
										showServiceSelect: e.target.checked
									}
								}),
								className: "size-4 accent-blue rounded cursor-pointer"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label block",
								children: "Budget Range Selector"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle",
								children: "Filters inquiries ($3k, $5k, $10k, $25k+)"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: contactForm.showBudget !== false,
								onChange: (e) => onChange({
									...config,
									contactForm: {
										...contactForm,
										showBudget: e.target.checked
									}
								}),
								className: "size-4 accent-blue rounded cursor-pointer"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "p-3.5 rounded-xl border border-black/8 bg-white/70 hover:bg-white flex items-center justify-between cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold text-label block",
								children: "Target Timeline Selector"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] text-subtle",
								children: "Gauges urgency (< 2 weeks, 1 month, etc.)"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: contactForm.showTimeline !== false,
								onChange: (e) => onChange({
									...config,
									contactForm: {
										...contactForm,
										showTimeline: e.target.checked
									}
								}),
								className: "size-4 accent-blue rounded cursor-pointer"
							})]
						})
					]
				})]
			})
		]
	});
}
function SeoSettingsSection({ config, onChange }) {
	const seo = config.seo || {
		metaTitle: "Codex Dynamics — High-Performance Websites & Digital Studio",
		metaDescription: "High-performance websites, web design, web development, and digital marketing studio. Precision engineering on every screen.",
		canonicalUrl: "https://codexdynamics.com",
		ogImage: "/hero/studio.jpg",
		gaId: "",
		gscVerification: "",
		metaPixelId: ""
	};
	const titleLength = seo.metaTitle?.length || 0;
	const descLength = seo.metaDescription?.length || 0;
	const isTitleGood = titleLength >= 45 && titleLength <= 65;
	const isDescGood = descLength >= 120 && descLength <= 165;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-blue/10 text-blue",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Global Search & OpenGraph Meta Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Manage title tags, meta descriptions, canonical routing and social share cards."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-label",
								children: "Default Page Title Tag"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `text-[11px] font-mono px-2 py-0.5 rounded-full ${isTitleGood ? "bg-emerald-500/10 text-emerald-700 font-semibold" : "bg-black/5 text-subtle"}`,
								children: [
									titleLength,
									" / 60 chars ",
									isTitleGood && "✓ Optimal"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: seo.metaTitle || "",
							onChange: (e) => onChange({
								...config,
								seo: {
									...seo,
									metaTitle: e.target.value
								}
							}),
							placeholder: "Codex Dynamics — High-Performance Websites & Digital Studio",
							className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold text-label",
								children: "Meta Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `text-[11px] font-mono px-2 py-0.5 rounded-full ${isDescGood ? "bg-emerald-500/10 text-emerald-700 font-semibold" : "bg-black/5 text-subtle"}`,
								children: [
									descLength,
									" / 160 chars ",
									isDescGood && "✓ Optimal"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							value: seo.metaDescription || "",
							onChange: (e) => onChange({
								...config,
								seo: {
									...seo,
									metaDescription: e.target.value
								}
							}),
							placeholder: "High-performance websites, web design, web development, and digital marketing studio...",
							className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label resize-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Canonical Base URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: seo.canonicalUrl || "",
								onChange: (e) => onChange({
									...config,
									seo: {
										...seo,
										canonicalUrl: e.target.value
									}
								}),
								placeholder: "https://codexdynamics.com",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label font-mono"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Social Share Image (OG Image) URL"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: seo.ogImage || "",
								onChange: (e) => onChange({
									...config,
									seo: {
										...seo,
										ogImage: e.target.value
									}
								}),
								placeholder: "/hero/studio.jpg or https://...",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
							})] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold uppercase tracking-wider text-subtle",
							children: "Live Google Search Snippet Preview"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 rounded-xl border border-black/8 bg-white font-sans text-left shadow-2xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-6 rounded-full bg-[#f1f3f4] flex items-center justify-center text-[11px] font-bold text-[#202124]",
									children: "C"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[12px] leading-none text-[#202124]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium text-[#202124]",
										children: "Codex Dynamics"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-[#4d5156]",
										children: seo.canonicalUrl || "https://codexdynamics.com"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
								className: "text-[16px] leading-snug text-[#1a0dab] hover:underline cursor-pointer font-medium line-clamp-1",
								children: seo.metaTitle || "Codex Dynamics — High-Performance Websites & Digital Studio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] leading-relaxed text-[#4d5156] mt-1 line-clamp-2",
								children: seo.metaDescription || "High-performance websites, web design, web development, and digital marketing studio."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-bold uppercase tracking-wider text-subtle",
							children: "Social Sharing Card Preview (X / LinkedIn)"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-black/10 overflow-hidden bg-white shadow-2xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-36 bg-black/5 overflow-hidden flex items-center justify-center",
							children: seo.ogImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: seo.ogImage,
								alt: "OG Card preview",
								className: "w-full h-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-subtle italic",
								children: "No image provided"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-white border-t border-black/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-subtle uppercase tracking-wider block",
									children: seo.canonicalUrl?.replace(/^https?:\/\//, "") || "codexdynamics.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-bold text-label line-clamp-1 mt-0.5",
									children: seo.metaTitle || "Codex Dynamics"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-subtle line-clamp-2 mt-0.5",
									children: seo.metaDescription || "High-performance websites and digital studio."
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-purple-500/10 text-purple-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Search Console & Web Analytics Tracking"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Inject verification tokens and analytics telemetry without editing codebase files."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Google Analytics 4 ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: seo.gaId || "",
								onChange: (e) => onChange({
									...config,
									seo: {
										...seo,
										gaId: e.target.value
									}
								}),
								placeholder: "G-XXXXXXXXXX",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label font-mono"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-subtle mt-1 block",
								children: "Automatically initializes gtag.js"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Search Console Token"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: seo.gscVerification || "",
								onChange: (e) => onChange({
									...config,
									seo: {
										...seo,
										gscVerification: e.target.value
									}
								}),
								placeholder: "google-site-verification code",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label font-mono"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-subtle mt-1 block",
								children: "Injected into document head"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Meta Pixel / LinkedIn ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: seo.metaPixelId || "",
								onChange: (e) => onChange({
									...config,
									seo: {
										...seo,
										metaPixelId: e.target.value
									}
								}),
								placeholder: "e.g. 1234567890",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label font-mono"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-subtle mt-1 block",
								children: "Social ad attribution"
							})
						] })
					]
				})]
			})
		]
	});
}
function EmergencySettingsSection({ config, onChange }) {
	const [snapshotLabel, setSnapshotLabel] = (0, import_react.useState)("");
	const emergency = config.emergency || {
		maintenanceMode: false,
		headline: "Scheduled Platform Upgrade",
		message: "Codex Dynamics is deploying precision performance enhancements. We will be back online shortly.",
		estimatedReturn: "",
		emergencyContact: "ops@codexdynamics.com"
	};
	const codeInjection = config.codeInjection || {
		headerCode: "",
		footerCode: ""
	};
	const snapshots = config.snapshots || [];
	const handleTakeSnapshot = () => {
		const label = snapshotLabel.trim() || `Snapshot ${(/* @__PURE__ */ new Date()).toLocaleDateString()} ${(/* @__PURE__ */ new Date()).toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		})}`;
		const newSnapshot = {
			id: "snap-" + Date.now(),
			name: label,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			config: JSON.parse(JSON.stringify(config))
		};
		onChange({
			...config,
			snapshots: [newSnapshot, ...snapshots]
		});
		setSnapshotLabel("");
		toast.success(`Snapshot "${label}" created successfully!`);
	};
	const handleRestoreSnapshot = (snap) => {
		if (!window.confirm(`Restore configuration snapshot "${snap.name}" from ${new Date(snap.createdAt).toLocaleString()}?`)) return;
		onChange({
			...snap.config,
			snapshots
		});
		toast.success(`Restored configuration to "${snap.name}". Click 'Save Changes' to publish.`);
	};
	const handleDeleteSnapshot = (id) => {
		onChange({
			...config,
			snapshots: snapshots.filter((s) => s.id !== id)
		});
		toast.success("Snapshot removed.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `p-2 rounded-xl ${emergency.maintenanceMode ? "bg-red-500/20 text-red-600 animate-pulse" : "bg-amber-500/10 text-amber-600"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-label",
								children: "Emergency Mode & Maintenance Screen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-subtle",
								children: "Immediately switches the public site to an elegant high-tech maintenance / upgrade screen."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2 cursor-pointer self-start sm:self-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: emergency.maintenanceMode,
								onChange: (e) => onChange({
									...config,
									emergency: {
										...emergency,
										maintenanceMode: e.target.checked
									}
								}),
								className: "size-4 accent-red-600 rounded cursor-pointer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs font-bold ${emergency.maintenanceMode ? "text-red-600" : "text-label"}`,
								children: emergency.maintenanceMode ? "MAINTENANCE ACTIVE" : "Public Site Normal"
							})]
						})]
					}),
					emergency.maintenanceMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-800 text-xs flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 shrink-0 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Warning:" }), " The public site is currently displaying the maintenance screen. Admins still have full access to this control portal."] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-label mb-1",
									children: "Headline Text"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: emergency.headline || "",
									onChange: (e) => onChange({
										...config,
										emergency: {
											...emergency,
											headline: e.target.value
										}
									}),
									placeholder: "e.g. Scheduled Platform Upgrade",
									className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-semibold text-label mb-1",
									children: "Public Explanation Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 2,
									value: emergency.message || emergency.subtext || "",
									onChange: (e) => onChange({
										...config,
										emergency: {
											...emergency,
											message: e.target.value,
											subtext: e.target.value
										}
									}),
									placeholder: "Detailed explanation displayed to visitors...",
									className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label resize-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Estimated Return Date / Time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: emergency.estimatedReturn || emergency.estimatedLaunch || "",
								onChange: (e) => onChange({
									...config,
									emergency: {
										...emergency,
										estimatedReturn: e.target.value,
										estimatedLaunch: e.target.value
									}
								}),
								placeholder: "e.g. 2026-10-01 14:00 UTC or 'In 2 hours'",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label font-mono"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-semibold text-label mb-1",
								children: "Emergency Operations Email / Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: emergency.emergencyContact || "",
								onChange: (e) => onChange({
									...config,
									emergency: {
										...emergency,
										emergencyContact: e.target.value
									}
								}),
								placeholder: "ops@codexdynamics.com",
								className: "w-full text-xs px-3 py-2 rounded-lg border border-black/10 bg-white text-label"
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-xl bg-blue/10 text-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-label",
							children: "1-Click Configuration Snapshots & Restore"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "Create instant backup checkpoints before major redesigns. Revert safely in one click."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-center gap-3 mt-4 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: snapshotLabel,
							onChange: (e) => setSnapshotLabel(e.target.value),
							placeholder: "Snapshot name (e.g. 'Before Autumn Campaign Overhaul')...",
							className: "flex-1 text-xs px-3.5 py-2.5 rounded-lg border border-black/10 bg-white text-label"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleTakeSnapshot,
							className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue text-white text-xs font-semibold hover:bg-blue-600 transition cursor-pointer shadow-xs shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }), "Capture Snapshot"]
						})]
					}),
					snapshots.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 rounded-xl border border-dashed border-black/15 text-center bg-black/[0.01]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "No snapshots saved yet. Capture a snapshot above before making changes."
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-hairline border border-hairline rounded-xl overflow-hidden bg-white/70",
						children: snapshots.map((snap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white hover:bg-black/[0.01]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-xs font-bold text-label",
								children: snap.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-subtle font-mono",
								children: new Date(snap.createdAt).toLocaleString()
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 self-end sm:self-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => handleRestoreSnapshot(snap),
									className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/5 hover:bg-black/10 text-xs font-medium text-label transition cursor-pointer border border-black/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), "Restore"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleDeleteSnapshot(snap.id),
									className: "p-1.5 rounded-lg text-subtle hover:text-red-600 hover:bg-red-50 transition cursor-pointer",
									title: "Delete snapshot",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
								})]
							})]
						}, snap.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-hairline bg-surface-card p-6 shadow-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-2 rounded-xl bg-purple-500/10 text-purple-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-label",
						children: "Custom HTML & CSS Code Injection Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-subtle",
						children: "Safely inject custom CSS styles, web fonts, tracking snippets or chat widgets into the DOM canvas."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-semibold text-label mb-1",
						children: "Header Injection Code (<head> tags, custom <style>, external font links)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						value: codeInjection.headerCode || "",
						onChange: (e) => onChange({
							...config,
							codeInjection: {
								...codeInjection,
								headerCode: e.target.value
							}
						}),
						placeholder: "<style> /* custom styling overrides */ </style>",
						className: "w-full text-xs font-mono px-3 py-2 rounded-lg border border-black/10 bg-white text-label resize-none"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-xs font-semibold text-label mb-1",
						children: "Footer Injection Code (<body> bottom tags, third-party chat widgets)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 4,
						value: codeInjection.footerCode || "",
						onChange: (e) => onChange({
							...config,
							codeInjection: {
								...codeInjection,
								footerCode: e.target.value
							}
						}),
						placeholder: "<!-- Third-party widget embed -->",
						className: "w-full text-xs font-mono px-3 py-2 rounded-lg border border-black/10 bg-white text-label resize-none"
					})] })]
				})]
			})
		]
	});
}
function SettingsTab({ stats: _stats, webhookUrl: initialWebhook, onSaveWebhook, onTestWebhook, onChangePassword, onOpenHostingerModal, onRestoreBackup, fullData, defaultSubTab, onSubTabChange }) {
	const { config: globalConfig, updateLocalConfig } = useSiteConfig();
	const [localConfig, setLocalConfig] = (0, import_react.useState)(globalConfig);
	const [activeSubTab, setActiveSubTab] = (0, import_react.useState)(defaultSubTab || "branding");
	const [savingConfig, setSavingConfig] = (0, import_react.useState)(false);
	const [hasUnsavedChanges, setHasUnsavedChanges] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (defaultSubTab) setActiveSubTab(defaultSubTab);
	}, [defaultSubTab]);
	(0, import_react.useEffect)(() => {
		setLocalConfig(globalConfig);
	}, [globalConfig]);
	const handleConfigChange = (updated) => {
		setLocalConfig(updated);
		setHasUnsavedChanges(true);
	};
	const handleSaveAllConfig = async () => {
		setSavingConfig(true);
		try {
			updateLocalConfig(localConfig);
			const res = await persistSiteConfig(localConfig);
			if (res.ok) {
				setHasUnsavedChanges(false);
				toast.success("Site configuration published successfully to SQLite!");
			} else toast.error(res.error || "Failed to persist configuration.");
		} catch (e) {
			toast.error(String(e));
		} finally {
			setSavingConfig(false);
		}
	};
	const handleResetConfig = () => {
		setLocalConfig(globalConfig);
		setHasUnsavedChanges(false);
		toast.info("Reverted unsaved changes to active site configuration.");
	};
	const fileInputRef = (0, import_react.useRef)(null);
	const [restoring, setRestoring] = (0, import_react.useState)(false);
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [passLoading, setPassLoading] = (0, import_react.useState)(false);
	const [passMsg, setPassMsg] = (0, import_react.useState)(null);
	const [webhook, setWebhook] = (0, import_react.useState)(initialWebhook || "");
	const [webhookLoading, setWebhookLoading] = (0, import_react.useState)(false);
	const [webhookMsg, setWebhookMsg] = (0, import_react.useState)(null);
	const [testLoading, setTestLoading] = (0, import_react.useState)(false);
	const handlePasswordSubmit = async (e) => {
		e.preventDefault();
		setPassMsg(null);
		if (newPassword !== confirmPassword) {
			setPassMsg({
				type: "error",
				text: "New passwords do not match."
			});
			return;
		}
		if (newPassword.length < 6) {
			setPassMsg({
				type: "error",
				text: "New password must be at least 6 characters."
			});
			return;
		}
		setPassLoading(true);
		try {
			const res = await onChangePassword(currentPassword, newPassword);
			if (res.ok) {
				setPassMsg({
					type: "success",
					text: res.message || "Password updated successfully in SQLite database."
				});
				setCurrentPassword("");
				setNewPassword("");
				setConfirmPassword("");
			} else setPassMsg({
				type: "error",
				text: res.error || "Failed to update password."
			});
		} catch (err) {
			setPassMsg({
				type: "error",
				text: String(err)
			});
		} finally {
			setPassLoading(false);
		}
	};
	const handleSaveWebhook = async (e) => {
		e.preventDefault();
		setWebhookMsg(null);
		setWebhookLoading(true);
		try {
			await onSaveWebhook(webhook);
			setWebhookMsg({
				type: "success",
				text: "Webhook URL saved successfully."
			});
		} catch (err) {
			setWebhookMsg({
				type: "error",
				text: String(err)
			});
		} finally {
			setWebhookLoading(false);
		}
	};
	const handleTestWebhook = async () => {
		if (!webhook.trim()) {
			setWebhookMsg({
				type: "error",
				text: "Please enter a webhook URL first."
			});
			return;
		}
		setTestLoading(true);
		setWebhookMsg(null);
		try {
			const res = await onTestWebhook(webhook);
			setWebhookMsg({
				type: res.ok ? "success" : "error",
				text: res.message || (res.ok ? "Test ping dispatched successfully!" : "Webhook test failed.")
			});
		} catch (err) {
			setWebhookMsg({
				type: "error",
				text: String(err)
			});
		} finally {
			setTestLoading(false);
		}
	};
	const handleExportJson = () => {
		const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(fullData, null, 2))}`;
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", jsonString);
		downloadAnchor.setAttribute("download", `codex_crm_backup_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
	};
	const handleFileChange = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		try {
			setRestoring(true);
			const text = await file.text();
			const parsed = JSON.parse(text);
			if (!parsed || typeof parsed !== "object") throw new Error("Invalid backup JSON structure.");
			if (!window.confirm("Are you sure you want to restore the SQLite database from this backup file? Existing records with matching IDs will be restored.")) return;
			if (onRestoreBackup) {
				if (await onRestoreBackup(parsed)) toast.success("Database restored successfully from backup.");
			} else toast.error("Restore handler not configured.");
		} catch (err) {
			toast.error(`Restore failed: ${err.message || String(err)}`);
		} finally {
			setRestoring(false);
			if (fileInputRef.current) fileInputRef.current.value = "";
		}
	};
	const SUB_TABS = [
		{
			id: "branding",
			label: "Visual Branding",
			icon: Palette
		},
		{
			id: "layout",
			label: "Layout & Sections",
			icon: PanelsTopLeft
		},
		{
			id: "conversion",
			label: "Conversion Tools",
			icon: Megaphone
		},
		{
			id: "seo",
			label: "SEO & Social Studio",
			icon: Globe
		},
		{
			id: "emergency",
			label: "Emergency & Snapshots",
			icon: TriangleAlert,
			badge: localConfig.emergency?.maintenanceMode ? "ACTIVE" : void 0
		},
		{
			id: "system",
			label: "Security & Database",
			icon: Shield
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-bold text-label font-display tracking-tight",
							children: "Studio Customizer & Site Engineering"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: "Full control over visual branding, section order, conversion docks, search metadata, and emergency systems."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 self-start md:self-auto",
						children: [
							hasUnsavedChanges && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleResetConfig,
								className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/10 bg-white hover:bg-black/5 text-xs font-semibold text-label transition cursor-pointer shadow-2xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5 text-subtle" }), "Discard"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: savingConfig,
								onClick: handleSaveAllConfig,
								className: `inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer shadow-xs ${hasUnsavedChanges ? "bg-blue hover:bg-blue-600 text-white animate-pulse" : "bg-black/90 hover:bg-black text-white"}`,
								children: [savingConfig ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: savingConfig ? "Publishing..." : hasUnsavedChanges ? "Save & Publish Changes *" : "Saved to SQLite" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-black/10 bg-white hover:bg-black/5 text-xs font-semibold text-label transition cursor-pointer shadow-2xs",
								title: "Open public website in new tab",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Preview" })]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1.5 overflow-x-auto pt-4 mt-4 border-t border-hairline scrollbar-none",
					children: SUB_TABS.map((tab) => {
						const Icon = tab.icon;
						const isActive = activeSubTab === tab.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setActiveSubTab(tab.id);
								onSubTabChange?.(tab.id);
							},
							className: `inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 border ${isActive ? "bg-blue/10 border-blue/30 text-blue shadow-2xs" : "border-transparent text-subtle hover:text-label hover:bg-black/5"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label }),
								tab.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-red-600 text-white uppercase animate-pulse",
									children: tab.badge
								})
							]
						}, tab.id);
					})
				})]
			}),
			activeSubTab === "branding" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandingSettingsSection, {
				config: localConfig,
				onChange: handleConfigChange
			}),
			activeSubTab === "layout" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutSettingsSection, {
				config: localConfig,
				onChange: handleConfigChange
			}),
			activeSubTab === "conversion" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversionSettingsSection, {
				config: localConfig,
				onChange: handleConfigChange
			}),
			activeSubTab === "seo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeoSettingsSection, {
				config: localConfig,
				onChange: handleConfigChange
			}),
			activeSubTab === "emergency" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmergencySettingsSection, {
				config: localConfig,
				onChange: handleConfigChange
			}),
			activeSubTab === "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 border-b border-hairline mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: "Admin Credentials"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-mono text-subtle",
									children: "admin@codexdynamics.com"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handlePasswordSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label mb-1",
										children: "Current Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										required: true,
										value: currentPassword,
										onChange: (e) => setCurrentPassword(e.target.value),
										placeholder: "Enter current password (default: Admin123!)",
										className: "w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label mb-1",
										children: "New Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										required: true,
										value: newPassword,
										onChange: (e) => setNewPassword(e.target.value),
										placeholder: "Enter new password (min. 6 chars)",
										className: "w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label mb-1",
										children: "Confirm New Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										required: true,
										value: confirmPassword,
										onChange: (e) => setConfirmPassword(e.target.value),
										placeholder: "Repeat new password",
										className: "w-full text-xs rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue transition"
									})] }),
									passMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex items-start gap-2 p-3 rounded-xl text-xs ${passMsg.type === "success" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-red-500/10 text-red-600 border border-red-500/20"}`,
										children: [passMsg.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0 mt-0.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: passMsg.text })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: passLoading,
										className: "w-full inline-flex items-center justify-center gap-2 rounded-xl bg-label text-surface px-4 py-2.5 text-xs font-medium hover:bg-label/90 transition cursor-pointer disabled:opacity-50 shadow-xs",
										children: [passLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: passLoading ? "Updating Database..." : "Update SQLite Password" })]
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4 mt-6 border-t border-hairline text-[11px] text-subtle",
								children: "Securely encrypted via SHA-256 + cryptographic salt in local SQLite."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 border-b border-hairline mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: "Lead Dispatch Webhook"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-mono text-subtle",
									children: "HTTP POST Payload"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSaveWebhook,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-medium text-label mb-1",
											children: "Endpoint URL"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "url",
											value: webhook,
											onChange: (e) => setWebhook(e.target.value),
											placeholder: "https://n8n.yourdomain.com/webhook/leads",
											className: "w-full text-xs font-mono rounded-xl border border-black/10 bg-fill/40 px-3.5 py-2.5 text-label placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-subtle mt-1.5",
											children: "Sends real-time JSON payloads for new client inquiries directly to Slack, Discord, Zapier or n8n."
										})
									] }),
									webhookMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex items-start gap-2 p-3 rounded-xl text-xs ${webhookMsg.type === "success" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-red-500/10 text-red-600 border border-red-500/20"}`,
										children: [webhookMsg.type === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 shrink-0 mt-0.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: webhookMsg.text })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "submit",
											disabled: webhookLoading,
											className: "flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-label text-surface px-4 py-2.5 text-xs font-medium hover:bg-label/90 transition cursor-pointer disabled:opacity-50 shadow-xs",
											children: [webhookLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Webhook" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: testLoading || !webhook.trim(),
											onClick: handleTestWebhook,
											className: "inline-flex items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill px-4 py-2.5 text-xs font-medium text-label transition cursor-pointer disabled:opacity-50",
											children: [testLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Test Ping" })]
										})]
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 mt-6 border-t border-hairline text-[11px] text-subtle flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Status: ", initialWebhook ? "Configured" : "Inactive"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: "JSON format"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Laptop, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs font-semibold uppercase tracking-wider text-label",
											children: "Live Public Synchronization"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Reactive Engine"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mb-4",
									children: "Changes saved in the Studio Customizer are stored directly in SQLite and immediately reflected across the public React frontend."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-label",
												children: "Branding & Theme Engine"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-subtle font-mono",
											children: "SQLite settings"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between p-3 rounded-xl bg-fill/50 border border-black/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-label",
												children: "Lead Capture Funnel"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-subtle font-mono",
											children: "Direct to SQLite"
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-3 border-b border-hairline mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-4 text-amber-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs font-semibold uppercase tracking-wider text-label",
											children: "Database & Deployment"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono text-subtle",
										children: "database.sqlite"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mb-4",
									children: "Export complete backups or review Hostinger PHP SQLite deployment instructions for production migration."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleExportJson,
											className: "w-full flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill text-label transition text-xs font-medium group cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 text-blue group-hover:translate-y-0.5 transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download Full CRM Backup (JSON)" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-subtle font-mono",
												children: "Instant Export"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: fileInputRef,
											type: "file",
											accept: ".json,application/json",
											className: "hidden",
											onChange: handleFileChange
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											disabled: restoring,
											onClick: () => fileInputRef.current?.click(),
											className: "w-full flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill text-label transition text-xs font-medium group cursor-pointer disabled:opacity-50",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [restoring ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4 text-blue animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4 text-blue group-hover:-translate-y-0.5 transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: restoring ? "Restoring Database..." : "Restore Database from JSON Backup" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-subtle font-mono",
												children: "Import File"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: onOpenHostingerModal,
											className: "w-full flex items-center justify-between p-3.5 rounded-xl border border-black/10 bg-fill/50 hover:bg-fill text-label transition text-xs font-medium group cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-purple-600 group-hover:rotate-12 transition" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hostinger & PHP Sync Architecture" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-subtle font-mono",
												children: "View Docs"
											})]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4 mt-6 border-t border-hairline text-[11px] text-subtle",
								children: "Zero external vendor lock-in; lightweight SQLite portable engine."
							})]
						})
					]
				})
			})
		]
	});
}
function TidioTab() {
	const { config, refetch, updateLocalConfig } = useSiteConfig();
	const [tidioState, setTidioState] = (0, import_react.useState)({
		enabled: config.tidio?.enabled ?? false,
		publicKey: config.tidio?.publicKey ?? "",
		disableOnAdmin: config.tidio?.disableOnAdmin ?? true,
		hideOnMobile: config.tidio?.hideOnMobile ?? false,
		position: config.tidio?.position ?? "bottom-right",
		welcomeMessage: config.tidio?.welcomeMessage ?? "Hi! How can we help you today? Leave us a message and our team will get right back to you."
	});
	const [isSaving, setIsSaving] = (0, import_react.useState)(false);
	const [isTesting, setIsTesting] = (0, import_react.useState)(false);
	const [testResult, setTestResult] = (0, import_react.useState)(null);
	const [hasCopiedSnippet, setHasCopiedSnippet] = (0, import_react.useState)(false);
	const [simMessages, setSimMessages] = (0, import_react.useState)([{
		sender: "bot",
		text: tidioState.welcomeMessage || "Hi there! 👋 Welcome to Codex Dynamics. How can we help with your web design or software project today?",
		time: "Just now"
	}]);
	const [simInput, setSimInput] = (0, import_react.useState)("");
	const handleSimSend = (textToSend) => {
		const text = textToSend || simInput;
		if (!text.trim()) return;
		setSimMessages((prev) => [...prev, {
			sender: "user",
			text,
			time: "Just now"
		}]);
		if (!textToSend) setSimInput("");
		setTimeout(() => {
			setSimMessages((prev) => [...prev, {
				sender: "bot",
				text: "Thank you for reaching out! A dedicated project manager has received your note and will reply promptly. You can also reach our desk directly on WhatsApp: +380 63 640 6783.",
				time: "Just now"
			}]);
		}, 800);
	};
	const handleSave = async () => {
		try {
			setIsSaving(true);
			const cleanKey = tidioState.publicKey.trim().replace(/<script[^>]*src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["'][^>]*>[\s\S]*?<\/script>/i, "$1").replace(/.*code\.tidio\.co\/([a-zA-Z0-9_-]+).*/i, "$1").replace(/\.js$/, "");
			const updatedTidio = {
				...tidioState,
				publicKey: cleanKey
			};
			const updatedConfig = {
				...config,
				tidio: updatedTidio
			};
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "save_site_content",
					config: updatedConfig,
					payload: { config: updatedConfig }
				})
			})).json();
			if (data.ok) {
				toast.success("Tidio Live Chat settings saved successfully!");
				updateLocalConfig(data.config || updatedConfig);
				setTidioState(updatedTidio);
				await refetch();
			} else toast.error(data.error || "Failed to save Tidio configuration");
		} catch (err) {
			toast.error("Network error while saving: " + String(err));
		} finally {
			setIsSaving(false);
		}
	};
	const testConnection = async () => {
		const key = tidioState.publicKey.trim().replace(/<script[^>]*src=["'](?:https?:)?\/\/code\.tidio\.co\/([a-zA-Z0-9_-]+)(?:\.js)?["'][^>]*>[\s\S]*?<\/script>/i, "$1").replace(/.*code\.tidio\.co\/([a-zA-Z0-9_-]+).*/i, "$1").replace(/\.js$/, "");
		if (!key) {
			setTestResult({
				success: false,
				message: "Please enter your Tidio Project Public Key before testing."
			});
			return;
		}
		setIsTesting(true);
		setTestResult(null);
		const start = performance.now();
		try {
			const url = `https://code.tidio.co/${encodeURIComponent(key)}.js`;
			await fetch(url, {
				method: "HEAD",
				mode: "no-cors"
			});
			const latency = Math.round(performance.now() - start);
			setTestResult({
				success: true,
				message: `Tidio CDN script is reachable at code.tidio.co/${key}.js`,
				latencyMs: latency
			});
			toast.success("Tidio script verified and active!");
		} catch (err) {
			setTestResult({
				success: false,
				message: `Could not verify code.tidio.co/${key}.js: ${String(err)}`
			});
			toast.error("Script ping check failed");
		} finally {
			setIsTesting(false);
		}
	};
	const copySnippet = () => {
		const snippet = `<script src="//code.tidio.co/${tidioState.publicKey.trim() || "YOUR_TIDIO_KEY"}.js" async><\/script>`;
		navigator.clipboard.writeText(snippet);
		setHasCopiedSnippet(true);
		toast.success("HTML snippet copied to clipboard");
		setTimeout(() => setHasCopiedSnippet(false), 2e3);
	};
	const isConnected = tidioState.enabled && Boolean(tidioState.publicKey.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 max-w-6xl mx-auto pb-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-gradient-to-r from-[#0066FF]/10 via-[#0066FF]/5 to-transparent border border-[#0066FF]/20 rounded-2xl p-6 relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col md:flex-row md:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-14 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center shadow-lg shadow-[#0066FF]/25 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-xl font-bold text-label tracking-tight",
								children: "Tidio Live Chat & AI Helpdesk"
							}),
							isConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }), "Connected & Live"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-700 border border-amber-500/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }), "Setup Required"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/5 text-muted-foreground border border-black/8",
								children: "v5.x SDK"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1.5 max-w-2xl leading-relaxed",
						children: "Seamlessly embed Tidio’s real-time live chat widget and AI customer support agent directly into your public website. Manage client conversations, incoming leads, and automated bots without writing code."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.tidio.com/panel/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl border border-black/10 bg-white text-label hover:bg-black/[0.02] transition-colors shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tidio Operator Panel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleSave,
						disabled: isSaving,
						className: "inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white transition-all shadow-md shadow-[#0066FF]/20 cursor-pointer disabled:opacity-50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSaving ? "Saving..." : "Save & Activate" })]
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 border-b border-black/6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-[#0066FF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-sm font-semibold text-label",
										children: "Widget Credentials & Status"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: copySnippet,
									className: "text-[11px] font-medium text-muted-foreground hover:text-label flex items-center gap-1 transition-colors",
									title: "Copy standard script tag",
									children: hasCopiedSnippet ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-emerald-600",
										children: "Copied"
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy HTML Script" })] })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between p-3.5 rounded-xl bg-black/[0.02] border border-black/6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-semibold text-label flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enable Tidio Live Chat" }), tidioState.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-emerald-500 animate-ping" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "When enabled, the chat bubble will automatically appear for all visitors on your website."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative inline-flex items-center cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: tidioState.enabled,
										onChange: (e) => setTidioState((prev) => ({
											...prev,
											enabled: e.target.checked
										})),
										className: "sr-only peer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-11 h-6 bg-black/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-black/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066FF]" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label",
										children: "Tidio Project Public Key / Script Code"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: tidioState.publicKey,
											onChange: (e) => setTidioState((prev) => ({
												...prev,
												publicKey: e.target.value
											})),
											placeholder: "e.g. abcdefghijklmnopqrstuvwxyz123456 or //code.tidio.co/xxxx.js",
											className: "w-full px-3.5 py-2.5 rounded-xl border border-black/10 bg-white text-xs font-mono text-label placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF] transition-all"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-muted-foreground",
										children: [
											"In your Tidio dashboard, go to ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold text-label",
												children: "Settings → Live Chat → Installation"
											}),
											" to find your key. You can paste the bare key or the entire script URL."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: testConnection,
									disabled: isTesting || !tidioState.publicKey.trim(),
									className: "px-3.5 py-1.5 text-xs font-medium rounded-xl border border-[#0066FF]/30 text-[#0066FF] hover:bg-[#0066FF]/10 transition-colors disabled:opacity-40 flex items-center gap-1.5 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: `size-3.5 ${isTesting ? "animate-spin" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isTesting ? "Testing Script CDN..." : "Test Connection" })]
								}), testResult && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `text-xs px-3 py-1 rounded-lg flex items-center gap-1.5 ${testResult.success ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-red-50 text-red-700 border border-red-200"}`,
									children: [
										testResult.success ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5 text-red-600 shrink-0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate max-w-xs",
											children: testResult.message
										}),
										testResult.latencyMs && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-[10px] font-mono text-emerald-800",
											children: [
												"(",
												testResult.latencyMs,
												"ms)"
											]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-2xl border border-black/8 p-6 shadow-xs space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 pb-3 border-b border-black/6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4 text-[#0066FF]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold text-label",
								children: "Display & Behavior Rules"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between py-2 border-b border-black/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-label",
										children: "Hide on Admin CRM Pages"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Keeps the chat widget hidden while inside the Codex Dynamics Back Office."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: tidioState.disableOnAdmin,
										onChange: (e) => setTidioState((prev) => ({
											...prev,
											disableOnAdmin: e.target.checked
										})),
										className: "size-4 text-[#0066FF] rounded border-black/20 focus:ring-[#0066FF]"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between py-2 border-b border-black/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-label",
										children: "Mobile Device Visibility"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: "Display the floating widget on smartphone and tablet screens."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs font-medium text-muted-foreground flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tidioState.hideOnMobile ? "Hidden on Mobile" : "Visible on Mobile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: !tidioState.hideOnMobile,
											onChange: (e) => setTidioState((prev) => ({
												...prev,
												hideOnMobile: !e.target.checked
											})),
											className: "size-4 text-[#0066FF] rounded border-black/20 focus:ring-[#0066FF]"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xs font-medium text-label",
											children: "Widget Position on Screen"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setTidioState((prev) => ({
													...prev,
													position: "bottom-right"
												})),
												className: `px-3 py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${tidioState.position === "bottom-right" ? "border-[#0066FF] bg-[#0066FF]/10 text-[#0066FF] font-semibold" : "border-black/10 text-muted-foreground hover:bg-black/[0.02]"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bottom Right (Standard)" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setTidioState((prev) => ({
													...prev,
													position: "bottom-left"
												})),
												className: `px-3 py-2 rounded-xl text-xs font-medium border flex items-center justify-center gap-2 transition-all ${tidioState.position === "bottom-left" ? "border-[#0066FF] bg-[#0066FF]/10 text-[#0066FF] font-semibold" : "border-black/10 text-muted-foreground hover:bg-black/[0.02]"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bottom Left" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2.5 p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-xs text-blue-900 flex items-start gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-blue-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-0.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[12px]",
													children: "Smart WhatsApp Dock Alignment"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-blue-800/90 leading-relaxed",
													children: tidioState.position === "bottom-right" ? "Active: WhatsApp Dock is automatically sized to 60px and stacked cleanly on top of Tidio to prevent any obstruction. When a visitor opens Tidio chat, WhatsApp auto-hides so it never blocks messages." : "Opposite Corners: Tidio sits on the bottom-left and WhatsApp sits on the bottom-right for full spatial separation."
												})]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1.5 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-label",
										children: "Default Welcome Greeting"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 2,
										value: tidioState.welcomeMessage,
										onChange: (e) => setTidioState((prev) => ({
											...prev,
											welcomeMessage: e.target.value
										})),
										className: "w-full px-3 py-2 rounded-xl border border-black/10 bg-white text-xs text-label focus:outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:border-[#0066FF]",
										placeholder: "Leave a friendly message for visitors..."
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#0066FF]/5 border border-[#0066FF]/15 rounded-2xl p-5 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold text-[#0066FF]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "How to get your Tidio Public Key (Free & 2 Minutes)" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "text-xs text-muted-foreground space-y-2 list-decimal list-inside",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Sign in or register for free at",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.tidio.com",
										target: "_blank",
										rel: "noreferrer",
										className: "text-[#0066FF] font-medium underline",
										children: "tidio.com"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Navigate to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-label",
									children: "Settings (gear icon) → Live Chat → Installation"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Click on ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: "\"JavaScript\""
									}),
									" or ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-label",
										children: "\"Manual Integration\""
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Copy the project public key or the script tag snippet" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Paste it into the field above and click ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-label",
									children: "\"Save & Activate\""
								})] })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-white rounded-2xl border border-black/8 shadow-md overflow-hidden flex flex-col h-[560px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#0066FF] text-white p-4 flex items-center justify-between shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0066FF]" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-semibold text-white leading-tight",
									children: "Codex Dynamics Support"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] text-white/80 flex items-center gap-1 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-300" }), "Online · Replies within minutes"]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setSimMessages([{
										sender: "bot",
										text: tidioState.welcomeMessage || "Hi there! 👋 How can we help you today?",
										time: "Just now"
									}]),
									className: "p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors",
									title: "Reset simulator chat",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" })
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 p-4 overflow-y-auto space-y-3 bg-[#f8f9fc] text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center my-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-muted-foreground/80 bg-black/5 px-2 py-0.5 rounded-full",
									children: "Live Chat Simulation Preview"
								})
							}), simMessages.map((msg, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-xs leading-relaxed ${msg.sender === "user" ? "bg-[#0066FF] text-white rounded-br-xs" : "bg-white text-label border border-black/8 rounded-bl-xs"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: msg.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `text-[9px] block mt-1 text-right ${msg.sender === "user" ? "text-white/70" : "text-muted-foreground"}`,
										children: msg.time
									})]
								})
							}, idx))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-2.5 bg-white border-t border-black/6 flex items-center gap-1.5 overflow-x-auto no-scrollbar",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleSimSend("I need a quote for a new website"),
									className: "px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20 transition-colors whitespace-nowrap shrink-0",
									children: "Website Quote 💼"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleSimSend("Can we book a strategy call?"),
									className: "px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20 transition-colors whitespace-nowrap shrink-0",
									children: "Book a Call 📅"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => handleSimSend("Speak with an engineer"),
									className: "px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#0066FF]/10 text-[#0066FF] hover:bg-[#0066FF]/20 transition-colors whitespace-nowrap shrink-0",
									children: "Tech Team 💻"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								handleSimSend();
							},
							className: "p-3 bg-white border-t border-black/6 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: simInput,
								onChange: (e) => setSimInput(e.target.value),
								placeholder: "Write a message to test...",
								className: "flex-1 px-3 py-2 text-xs rounded-xl border border-black/10 focus:outline-none focus:ring-1 focus:ring-[#0066FF]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "size-8 rounded-xl bg-[#0066FF] text-white flex items-center justify-center hover:bg-[#0052cc] transition-colors shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" })
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 bg-white rounded-xl border border-black/6 flex items-center justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Widget Position Preview:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-label",
						children: tidioState.position === "bottom-right" ? "Bottom-Right Anchor" : "Bottom-Left Anchor"
					})]
				})]
			})]
		})]
	});
}
var DEFAULT_HEADER_SOCIALS = {
	linkedin: {
		enabled: true,
		url: "https://linkedin.com/company/codexdynamics",
		label: "LinkedIn"
	},
	x: {
		enabled: true,
		url: "https://x.com/codexdynamics",
		label: "X (Twitter)"
	},
	github: {
		enabled: true,
		url: "https://github.com/codexdynamics",
		label: "GitHub"
	},
	instagram: {
		enabled: true,
		url: "https://www.instagram.com/codex_dynamics/",
		label: "Instagram"
	},
	facebook: {
		enabled: true,
		url: "https://www.facebook.com/profile.php?id=61571219783449",
		label: "Facebook"
	}
};
var SOCIAL_PLATFORMS = [
	{
		key: "linkedin",
		name: "LinkedIn",
		description: "Professional network & company profile",
		placeholder: "https://linkedin.com/company/...",
		logo: LinkedInLogo,
		logoClass: "size-5",
		bgClass: "bg-[#0A66C2]/10 border-[#0A66C2]/20 text-[#0A66C2]"
	},
	{
		key: "x",
		name: "X (Twitter)",
		description: "Company announcements & daily thoughts",
		placeholder: "https://x.com/...",
		logo: TwitterXLogo,
		logoClass: "size-5",
		bgClass: "bg-black/10 dark:bg-white/10 border-black/15 text-label"
	},
	{
		key: "github",
		name: "GitHub",
		description: "Open-source projects & code repositories",
		placeholder: "https://github.com/...",
		logo: GitHubLogo,
		logoClass: "size-5",
		bgClass: "bg-black/10 dark:bg-white/10 border-black/15 text-label"
	},
	{
		key: "instagram",
		name: "Instagram",
		description: "Visual portfolio, agency culture & reels",
		placeholder: "https://www.instagram.com/...",
		logo: InstagramLogo,
		logoClass: "size-6",
		bgClass: "bg-pink-500/10 border-pink-500/20 text-pink-600"
	},
	{
		key: "facebook",
		name: "Facebook",
		description: "Community page & direct client reviews",
		placeholder: "https://www.facebook.com/...",
		logo: FacebookLogo,
		logoClass: "size-6",
		bgClass: "bg-[#1877F2]/10 border-[#1877F2]/20 text-[#1877F2]"
	}
];
function SiteContentTab({ onSwitchTab } = {}) {
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [resetting, setResetting] = (0, import_react.useState)(false);
	const [copiedKey, setCopiedKey] = (0, import_react.useState)(null);
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("all");
	const [collapsedSections, setCollapsedSections] = (0, import_react.useState)({});
	const [hasUnsavedChanges, setHasUnsavedChanges] = (0, import_react.useState)(false);
	const toggleSection = (sec) => {
		setCollapsedSections((prev) => ({
			...prev,
			[sec]: !prev[sec]
		}));
	};
	const areAllCollapsed = Object.values(collapsedSections).filter(Boolean).length >= 5;
	const handleToggleAllSections = () => {
		if (areAllCollapsed) setCollapsedSections({});
		else setCollapsedSections({
			phone: true,
			whatsapp: true,
			telegram: true,
			viber: true,
			address: true,
			email: true,
			header_socials: true,
			brand: true
		});
	};
	const [form, setForm] = (0, import_react.useState)({
		siteName: "Codex Dynamics",
		copyrightYear: "2026",
		formSubmitEmail: "codexdynamix@gmail.com",
		heroBadge: "Codex Dynamics",
		heroTitle: "Precision on every screen.",
		heroSubtitle: "Websites, web apps, and social campaigns — composed with the care of a product launch."
	});
	const [headerSocials, setHeaderSocials] = (0, import_react.useState)(DEFAULT_HEADER_SOCIALS);
	const [contacts, setContacts] = (0, import_react.useState)([]);
	const [addresses, setAddresses] = (0, import_react.useState)([]);
	const [rawConfig, setRawConfig] = (0, import_react.useState)({});
	const computeHref = (type, val) => {
		const clean = val.trim();
		if (!clean) return "";
		switch (type) {
			case "phone": return `tel:${clean.replace(/[^\d+]/g, "")}`;
			case "whatsapp": return `https://wa.me/${clean.replace(/[^0-9]/g, "")}`;
			case "telegram": return clean.startsWith("http") ? clean : `https://t.me/${clean.replace(/^@/, "").replace(/[^a-zA-Z0-9_+]/g, "")}`;
			case "viber": return `viber://chat?number=${encodeURIComponent(clean.startsWith("+") ? clean : `+${clean}`)}`;
			case "email": return `mailto:${clean}`;
			default: return clean.startsWith("http") ? clean : `https://${clean}`;
		}
	};
	const fetchCurrentConfig = async () => {
		try {
			setLoading(true);
			const res = await fetch("/api/public/site-config");
			if (res.ok) {
				const data = await res.json();
				const cfg = data.config || data || {};
				setRawConfig(cfg);
				setForm({
					siteName: cfg.siteName || "Codex Dynamics",
					copyrightYear: cfg.copyrightYear || "2026",
					formSubmitEmail: cfg.formSubmitEmail || "codexdynamix@gmail.com",
					heroBadge: cfg.hero?.badge || "Codex Dynamics",
					heroTitle: cfg.hero?.title || "Precision on every screen.",
					heroSubtitle: cfg.hero?.subtitle || "Websites, web apps, and social campaigns — composed with the care of a product launch."
				});
				if (Array.isArray(cfg.socialContacts) && cfg.socialContacts.length > 0) setContacts(cfg.socialContacts);
				else setContacts([
					{
						id: "ph-1",
						type: "phone",
						label: "Direct Call / Desk",
						value: "+380 63 640 6783",
						href: "tel:+380636406783",
						isPrimary: true
					},
					{
						id: "ph-2",
						type: "phone",
						label: "Kyiv Studio Landline",
						value: "+380 44 233 4567",
						href: "tel:+380442334567",
						isPrimary: false
					},
					{
						id: "wa-1",
						type: "whatsapp",
						label: "Main WhatsApp",
						value: "+380636406783",
						href: "https://wa.me/380636406783",
						isPrimary: true
					},
					{
						id: "wa-2",
						type: "whatsapp",
						label: "Support Desk WhatsApp",
						value: "+380636406783",
						href: "https://wa.me/380636406783",
						isPrimary: false
					},
					{
						id: "tg-1",
						type: "telegram",
						label: "Official Telegram",
						value: "+380636406783",
						href: "https://t.me/+380636406783",
						isPrimary: true
					},
					{
						id: "tg-2",
						type: "telegram",
						label: "Client Success Desk",
						value: "@codex_desk",
						href: "https://t.me/codex_desk",
						isPrimary: false
					},
					{
						id: "vb-1",
						type: "viber",
						label: "Direct Viber",
						value: "+380636406783",
						href: "viber://chat?number=%2B380636406783",
						isPrimary: true
					},
					{
						id: "vb-2",
						type: "viber",
						label: "Support Line Viber",
						value: "+380 50 123 4567",
						href: "viber://chat?number=%2B380501234567",
						isPrimary: false
					},
					{
						id: "em-1",
						type: "email",
						label: "Primary Email",
						value: "codexdynamix@gmail.com",
						href: "mailto:codexdynamix@gmail.com",
						isPrimary: true
					},
					{
						id: "em-2",
						type: "email",
						label: "Direct Studio Desk",
						value: "hello@codexdynamics.com",
						href: "mailto:hello@codexdynamics.com",
						isPrimary: false
					}
				]);
				if (Array.isArray(cfg.addresses) && cfg.addresses.length > 0) setAddresses(cfg.addresses);
				else setAddresses([{
					id: "addr-1",
					label: "Kyiv Studio (HQ)",
					street: "Sportyvna, 1A",
					city: "Kyiv, 012023, Ukraine",
					fullAddress: "Sportyvna, 1A, Kyiv, 012023, Ukraine",
					lat: 50.438743,
					lng: 30.523177,
					isPrimary: true
				}, {
					id: "addr-2",
					label: "Gulliver Tower Desk",
					street: "Ploshcha Sportyvna, 1A",
					city: "Kyiv, Ukraine",
					fullAddress: "Ploshcha Sportyvna 1A, Gulliver Tower A, Kyiv",
					lat: 50.438743,
					lng: 30.523177,
					isPrimary: false
				}]);
				if (cfg.headerSocials) setHeaderSocials({
					linkedin: {
						enabled: cfg.headerSocials.linkedin?.enabled !== false,
						url: cfg.headerSocials.linkedin?.url || DEFAULT_HEADER_SOCIALS.linkedin.url,
						label: "LinkedIn"
					},
					x: {
						enabled: cfg.headerSocials.x?.enabled !== false,
						url: cfg.headerSocials.x?.url || DEFAULT_HEADER_SOCIALS.x.url,
						label: "X (Twitter)"
					},
					github: {
						enabled: cfg.headerSocials.github?.enabled !== false,
						url: cfg.headerSocials.github?.url || DEFAULT_HEADER_SOCIALS.github.url,
						label: "GitHub"
					},
					instagram: {
						enabled: cfg.headerSocials.instagram?.enabled !== false,
						url: cfg.headerSocials.instagram?.url || DEFAULT_HEADER_SOCIALS.instagram.url,
						label: "Instagram"
					},
					facebook: {
						enabled: cfg.headerSocials.facebook?.enabled !== false,
						url: cfg.headerSocials.facebook?.url || DEFAULT_HEADER_SOCIALS.facebook.url,
						label: "Facebook"
					}
				});
			}
		} catch {} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchCurrentConfig();
	}, []);
	const handleAddContact = (type) => {
		const existing = contacts.filter((c) => c.type === type);
		const count = existing.length + 1;
		let defaultLabel = "";
		let defaultValue = "";
		switch (type) {
			case "phone":
				defaultLabel = count === 1 ? "Direct Call / Desk" : `Phone Line #${count}`;
				defaultValue = "+380 63 000 0000";
				break;
			case "whatsapp":
				defaultLabel = count === 1 ? "Main WhatsApp" : `WhatsApp Desk #${count}`;
				defaultValue = "+380630000000";
				break;
			case "telegram":
				defaultLabel = count === 1 ? "Official Telegram" : `Telegram Desk #${count}`;
				defaultValue = "@codexdynamics";
				break;
			case "viber":
				defaultLabel = count === 1 ? "Direct Viber" : `Viber Line #${count}`;
				defaultValue = "+380630000000";
				break;
			case "email":
				defaultLabel = count === 1 ? "Primary Inquiries" : `Inbox #${count}`;
				defaultValue = "contact@codexdynamics.com";
				break;
			default:
				defaultLabel = `Contact #${count}`;
				defaultValue = "";
		}
		const newContact = {
			id: `${type}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
			type,
			label: defaultLabel,
			value: defaultValue,
			href: computeHref(type, defaultValue),
			isPrimary: existing.length === 0,
			isVisible: true
		};
		setContacts((prev) => [...prev, newContact]);
		toast.success(`Added new ${type} contact.`);
	};
	const handleUpdateContact = (id, updates) => {
		setContacts((prev) => prev.map((c) => {
			if (c.id !== id) return c;
			const updated = {
				...c,
				...updates
			};
			if (updates.value !== void 0) updated.href = computeHref(updated.type, updates.value);
			return updated;
		}));
	};
	const handleSetPrimaryContact = (id, type) => {
		setContacts((prev) => prev.map((c) => {
			if (c.type !== type) return c;
			return {
				...c,
				isPrimary: c.id === id
			};
		}));
		toast.info(`Updated primary ${type} contact.`);
	};
	const handleRemoveContact = (id) => {
		setContacts((prev) => {
			const target = prev.find((c) => c.id === id);
			const remaining = prev.filter((c) => c.id !== id);
			if (target?.isPrimary && target.type) {
				const nextFirst = remaining.find((c) => c.type === target.type);
				if (nextFirst) nextFirst.isPrimary = true;
			}
			return [...remaining];
		});
		toast.info("Contact removed.");
	};
	const handleAddAddress = () => {
		const count = addresses.length + 1;
		const newAddress = {
			id: `addr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
			label: `Studio Office #${count}`,
			street: "Sportyvna, 1A",
			city: "Kyiv, Ukraine",
			fullAddress: "Sportyvna, 1A, Kyiv, Ukraine",
			lat: 50.438743,
			lng: 30.523177,
			isPrimary: addresses.length === 0
		};
		setAddresses((prev) => [...prev, newAddress]);
		toast.success("Added new studio address.");
	};
	const handleUpdateAddress = (id, updates) => {
		setAddresses((prev) => prev.map((a) => a.id === id ? {
			...a,
			...updates
		} : a));
	};
	const handleSetPrimaryAddress = (id) => {
		setAddresses((prev) => prev.map((a) => ({
			...a,
			isPrimary: a.id === id
		})));
		toast.info("Updated primary studio address.");
	};
	const handleRemoveAddress = (id) => {
		if (addresses.length <= 1) {
			toast.error("You must maintain at least one studio address.");
			return;
		}
		setAddresses((prev) => {
			const target = prev.find((a) => a.id === id);
			const remaining = prev.filter((a) => a.id !== id);
			if (target?.isPrimary && remaining[0]) remaining[0].isPrimary = true;
			return [...remaining];
		});
		toast.info("Studio address removed.");
	};
	const handleToggleSocial = (key) => {
		setHeaderSocials((prev) => ({
			...prev,
			[key]: {
				...prev[key],
				enabled: !prev[key].enabled
			}
		}));
	};
	const handleUpdateSocialUrl = (key, url) => {
		setHeaderSocials((prev) => ({
			...prev,
			[key]: {
				...prev[key],
				url
			}
		}));
	};
	const handleEnableAllSocials = () => {
		setHeaderSocials((prev) => ({
			linkedin: {
				...prev.linkedin,
				enabled: true
			},
			x: {
				...prev.x,
				enabled: true
			},
			github: {
				...prev.github,
				enabled: true
			},
			instagram: {
				...prev.instagram,
				enabled: true
			},
			facebook: {
				...prev.facebook,
				enabled: true
			}
		}));
		toast.info("All 5 header buttons enabled");
	};
	const handleDisableAllSocials = () => {
		setHeaderSocials((prev) => ({
			linkedin: {
				...prev.linkedin,
				enabled: false
			},
			x: {
				...prev.x,
				enabled: false
			},
			github: {
				...prev.github,
				enabled: false
			},
			instagram: {
				...prev.instagram,
				enabled: false
			},
			facebook: {
				...prev.facebook,
				enabled: false
			}
		}));
		toast.info("All header social buttons hidden");
	};
	const handleResetSocialUrls = () => {
		setHeaderSocials(DEFAULT_HEADER_SOCIALS);
		toast.info("Restored default credentials & URLs");
	};
	const handleCopyUrl = (key, url) => {
		if (!url) return;
		navigator.clipboard.writeText(url);
		setCopiedKey(key);
		toast.success("Link copied to clipboard!");
		setTimeout(() => setCopiedKey(null), 2e3);
	};
	const handleSave = async (e) => {
		if (e) e.preventDefault();
		try {
			setSaving(true);
			const updatedContacts = [...contacts];
			const syncHeaderSocial = (type, key, defaultVal) => {
				const item = headerSocials[key];
				const existingIdx = updatedContacts.findIndex((c) => c.type === type);
				if (existingIdx >= 0) updatedContacts[existingIdx] = {
					...updatedContacts[existingIdx],
					href: item.url,
					isVisible: item.enabled
				};
				else updatedContacts.push({
					id: `${key}-1`,
					type,
					label: item.label,
					value: defaultVal,
					href: item.url,
					isVisible: item.enabled,
					isPrimary: true
				});
			};
			syncHeaderSocial("linkedin", "linkedin", "codexdynamics");
			syncHeaderSocial("twitter", "x", "codexdynamics");
			syncHeaderSocial("github", "github", "codexdynamics");
			syncHeaderSocial("instagram", "instagram", "codex_dynamics");
			syncHeaderSocial("facebook", "facebook", "Codex Dynamics");
			const payloadConfig = {
				...rawConfig,
				siteName: form.siteName,
				copyrightYear: form.copyrightYear,
				formSubmitEmail: form.formSubmitEmail,
				hero: {
					...rawConfig.hero || {},
					badge: form.heroBadge,
					title: form.heroTitle,
					subtitle: form.heroSubtitle
				},
				headerSocials,
				socialContacts: updatedContacts,
				addresses
			};
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "save_site_content",
					config: payloadConfig
				})
			})).json();
			if (data.ok) {
				toast.success("All contacts, phone lines, whatsapps, addresses & copy saved to SQLite!");
				setContacts(updatedContacts);
			} else toast.error(data.error || "Failed to save site content.");
		} catch {
			toast.error("Network error while saving site content.");
		} finally {
			setSaving(false);
		}
	};
	const handleReset = async () => {
		if (!window.confirm("Reset all site texts, phone numbers, and addresses back to default?")) return;
		try {
			setResetting(true);
			if ((await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ action: "reset_site_content" })
			})).json()).ok) {
				toast.success("Site content reset to factory defaults.");
				setHeaderSocials(DEFAULT_HEADER_SOCIALS);
				fetchCurrentConfig();
			}
		} catch {
			toast.error("Failed to reset site content.");
		} finally {
			setResetting(false);
		}
	};
	const phones = contacts.filter((c) => c.type === "phone");
	const whatsapps = contacts.filter((c) => c.type === "whatsapp");
	const telegrams = contacts.filter((c) => c.type === "telegram");
	const vibers = contacts.filter((c) => c.type === "viber");
	const emails = contacts.filter((c) => c.type === "email");
	const activeCount = Object.values(headerSocials).filter((s) => s.enabled).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			onSwitchTab && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-gradient-to-r from-blue/5 via-purple-500/5 to-emerald-500/5 border border-black/10 p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-9 rounded-xl bg-blue/10 text-blue flex items-center justify-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-label",
						children: "Looking for Color Schemes, Section Ordering, WhatsApp Floating Docks, or SEO?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground mt-0.5",
						children: "The Studio Customizer gives you real-time controls for colorways, corner radiuses, section visibility/ordering, conversion docks, and emergency mode."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onSwitchTab("customizer"),
					className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue hover:bg-blue-600 text-white text-xs font-semibold shrink-0 cursor-pointer shadow-xs transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Studio Customizer" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-5 text-blue" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold text-label font-display tracking-tight",
							children: "Multi-Contact Center & Website Copy"
						}),
						hasUnsavedChanges ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-amber-500 animate-pulse" }), "Unsaved Edits"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-600",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), "Saved"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-0.5",
					children: "Manage multiple phone lines, WhatsApps, Telegrams, Vibers, and studio locations with compact dropdowns and dedicated save buttons."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleReset,
						disabled: resetting,
						className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-black/10 hover:bg-fill text-muted-foreground hover:text-label text-xs font-medium transition-all cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reset" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => handleSave(),
						disabled: saving,
						className: cn("inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-white text-xs font-semibold transition-all shadow-xs active:scale-[0.99] cursor-pointer", hasUnsavedChanges ? "bg-emerald-600 hover:bg-emerald-700" : "bg-blue hover:bg-blue-hover"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: saving ? "Saving..." : "Save All Changes" })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-3 shadow-xs flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap",
							children: "Section:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: activeCategory,
								onChange: (e) => {
									const cat = e.target.value;
									setActiveCategory(cat);
									if (cat !== "all") setCollapsedSections((prev) => ({
										...prev,
										[cat]: false
									}));
								},
								className: "appearance-none bg-fill/60 hover:bg-fill border border-black/10 hover:border-black/20 rounded-xl px-3 py-1.5 pr-8 text-xs font-semibold text-label outline-none cursor-pointer transition shadow-2xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "all",
										children: [
											"📁 All Sections (",
											phones.length + whatsapps.length + telegrams.length + vibers.length + emails.length + addresses.length,
											" contacts)"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "phone",
										children: [
											"📞 Phone Numbers (",
											phones.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "whatsapp",
										children: [
											"💬 WhatsApp Lines (",
											whatsapps.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "telegram",
										children: [
											"✈️ Telegram Accounts (",
											telegrams.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "viber",
										children: [
											"🟣 Viber Support Lines (",
											vibers.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "address",
										children: [
											"📍 Studio Locations (",
											addresses.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "email",
										children: [
											"✉️ Email Inboxes (",
											emails.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: "header_socials",
										children: [
											"🌐 Header Socials (",
											activeCount,
											"/5 active)"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "brand",
										children: "✨ Brand & Hero Copy"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleToggleAllSections,
						className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-black/10 hover:bg-fill text-muted-foreground hover:text-label text-xs font-medium transition cursor-pointer",
						title: "Toggle compact view for all sections",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: areAllCollapsed ? "Expand All" : "Collapse All" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: "",
							onChange: (e) => {
								const type = e.target.value;
								if (!type) return;
								if (type === "address") {
									handleAddAddress();
									setCollapsedSections((prev) => ({
										...prev,
										address: false
									}));
									setActiveCategory((prev) => prev === "all" ? "all" : "address");
								} else {
									handleAddContact(type);
									setCollapsedSections((prev) => ({
										...prev,
										[type]: false
									}));
									setActiveCategory((prev) => prev === "all" ? "all" : type);
								}
								setHasUnsavedChanges(true);
								e.target.value = "";
							},
							className: "appearance-none bg-blue hover:bg-blue-hover text-white text-xs font-semibold px-3.5 py-1.5 pr-8 rounded-xl shadow-xs transition cursor-pointer border-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "+ Add Channel / Contact ▾"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "phone",
									children: "📞 + Phone Number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "whatsapp",
									children: "💬 + WhatsApp Line"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "telegram",
									children: "✈️ + Telegram Account"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "viber",
									children: "🟣 + Viber Line"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "address",
									children: "📍 + Studio Address"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "email",
									children: "✉️ + Email Inbox"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 size-3.5 text-white/90" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => handleSave(),
						disabled: saving,
						className: "inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition cursor-pointer shadow-xs",
						title: "Save all changes to database",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: saving ? "Saving..." : "Save" })]
					})]
				})]
			}),
			loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "surface-lift rounded-2xl bg-card border border-black/8 p-12 text-center text-xs text-subtle",
				children: "Loading site configuration from SQLite..."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					(activeCategory === "all" || activeCategory === "phone") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-5 sm:p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => toggleSection("phone"),
								className: "flex items-center gap-2.5 text-left group cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label group-hover:text-blue transition",
										children: [
											"Direct Phone Numbers (",
											phones.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium",
										children: "Click-to-Call"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: "Add mobile desks, landlines, sales hotlines. Primary line features on hero and call buttons."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											handleAddContact("phone");
											setCollapsedSections((prev) => ({
												...prev,
												phone: false
											}));
											setHasUnsavedChanges(true);
										},
										className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition cursor-pointer shadow-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Phone" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleSave(),
										disabled: saving,
										className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-emerald-600/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold transition cursor-pointer shadow-2xs",
										title: "Save phone numbers to database",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Phones" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => toggleSection("phone"),
										className: "size-7 rounded-lg hover:bg-fill text-muted-foreground flex items-center justify-center transition cursor-pointer",
										title: collapsedSections.phone ? "Expand section" : "Collapse section",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform duration-200", collapsedSections.phone && "-rotate-90") })
									})
								]
							})]
						}), !collapsedSections.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: phones.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-6 text-xs text-muted-foreground border border-dashed border-black/10 rounded-xl",
							children: "No phone numbers configured. Click \"Add Phone Number\" to create one."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-3",
							children: phones.map((p, _idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-xl border p-4 transition-all relative space-y-3", p.isPrimary ? "border-emerald-500/40 bg-emerald-500/[0.03] shadow-xs" : "border-black/8 bg-fill/30 hover:border-black/15"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 flex-wrap",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneLogo, { className: "size-5 shrink-0" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: p.type,
													onChange: (e) => {
														const newType = e.target.value;
														handleUpdateContact(p.id, {
															type: newType,
															href: computeHref(newType, p.value)
														});
														setHasUnsavedChanges(true);
														toast.info(`Changed contact type to ${newType}.`);
													},
													className: "bg-fill/60 hover:bg-fill border border-black/10 rounded-md px-1.5 py-0.5 text-[10px] font-medium text-label outline-none cursor-pointer",
													title: "Change channel type",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "phone",
															children: "📞 Phone"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "whatsapp",
															children: "💬 WhatsApp"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "telegram",
															children: "✈️ Telegram"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "viber",
															children: "🟣 Viber"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "email",
															children: "✉️ Email"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => {
														handleSetPrimaryContact(p.id, "phone");
														setHasUnsavedChanges(true);
													},
													className: cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold transition cursor-pointer", p.isPrimary ? "bg-emerald-600 text-white shadow-xs" : "bg-black/5 dark:bg-white/5 hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-600"),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-2.5", p.isPrimary && "fill-current") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.isPrimary ? "Primary Line" : "Make Primary" })]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												handleRemoveContact(p.id);
												setHasUnsavedChanges(true);
											},
											className: "size-7 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 flex items-center justify-center transition cursor-pointer",
											title: "Delete phone number",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Line Label / Purpose"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: p.label || "",
											placeholder: "e.g. Sales Desk, Kyiv Landline, Emergency",
											onChange: (e) => handleUpdateContact(p.id, { label: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-emerald-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Phone Number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: p.value,
											placeholder: "+380 63 640 6783",
											onChange: (e) => handleUpdateContact(p.id, { value: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-emerald-500 rounded-lg px-3 py-1.5 text-xs text-label font-mono outline-none transition"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-hairline flex items-center justify-between text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-mono truncate max-w-[200px]",
											children: p.href || `tel:${p.value}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleCopyUrl(`phone-${p.id}`, p.value),
												className: "text-muted-foreground hover:text-label inline-flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: p.href || `tel:${p.value}`,
												className: "text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Test Call" })]
											})]
										})]
									})
								]
							}, p.id))
						}) })]
					}),
					(activeCategory === "all" || activeCategory === "whatsapp") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLogo, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: [
											"WhatsApp Business & Direct Lines (",
											whatsapps.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 font-medium",
										children: "Instant Chat wa.me"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: "Configure multiple WhatsApp numbers (e.g. Sales, Support, Technical). Links automatically generate direct wa.me chat URLs."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleAddContact("whatsapp"),
								className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition cursor-pointer shadow-xs shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add WhatsApp Line" })]
							})]
						}), whatsapps.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-6 text-xs text-muted-foreground border border-dashed border-black/10 rounded-xl",
							children: "No WhatsApp lines configured. Click \"Add WhatsApp Line\" to create one."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-3",
							children: whatsapps.map((w, _idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-xl border p-4 transition-all relative space-y-3", w.isPrimary ? "border-emerald-500/40 bg-emerald-500/[0.03] shadow-xs" : "border-black/8 bg-fill/30 hover:border-black/15"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleSetPrimaryContact(w.id, "whatsapp"),
												className: cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold transition cursor-pointer", w.isPrimary ? "bg-emerald-600 text-white shadow-xs" : "bg-black/5 dark:bg-white/5 hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-600"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-2.5", w.isPrimary && "fill-current") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w.isPrimary ? "Primary WhatsApp" : "Make Primary" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleRemoveContact(w.id),
											className: "size-7 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 flex items-center justify-center transition cursor-pointer",
											title: "Delete WhatsApp",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Desk / Account Label"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: w.label || "",
											placeholder: "e.g. Main WhatsApp, Sales Desk, VIP Support",
											onChange: (e) => handleUpdateContact(w.id, { label: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-emerald-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Phone Number (With Country Code)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: w.value,
											placeholder: "+380636406783",
											onChange: (e) => handleUpdateContact(w.id, { value: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-emerald-500 rounded-lg px-3 py-1.5 text-xs text-label font-mono outline-none transition"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-hairline flex items-center justify-between text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-mono truncate max-w-[200px]",
											children: w.href || `https://wa.me/${w.value.replace(/[^0-9]/g, "")}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleCopyUrl(`wa-${w.id}`, w.href || `https://wa.me/${w.value.replace(/[^0-9]/g, "")}`),
												className: "text-muted-foreground hover:text-label inline-flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy Link" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: w.href || `https://wa.me/${w.value.replace(/[^0-9]/g, "")}`,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Chat" })]
											})]
										})]
									})
								]
							}, w.id))
						})]
					}),
					(activeCategory === "all" || activeCategory === "telegram") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-xl bg-[#26A5E4]/10 flex items-center justify-center text-[#26A5E4]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: [
											"Telegram Accounts & Channels (",
											telegrams.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-600 font-medium",
										children: "Instant t.me Gateway"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: "Provide usernames (e.g. @codexdynamics), phone numbers, or channel invite links. Visitors can instantly open chat in Telegram."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleAddContact("telegram"),
								className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#26A5E4] hover:bg-[#1f93cd] text-white text-xs font-semibold transition cursor-pointer shadow-xs shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Telegram" })]
							})]
						}), telegrams.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-6 text-xs text-muted-foreground border border-dashed border-black/10 rounded-xl",
							children: "No Telegram accounts configured. Click \"Add Telegram\" to create one."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-3",
							children: telegrams.map((t, _idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-xl border p-4 transition-all relative space-y-3", t.isPrimary ? "border-sky-500/40 bg-sky-500/[0.03] shadow-xs" : "border-black/8 bg-fill/30 hover:border-black/15"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleSetPrimaryContact(t.id, "telegram"),
												className: cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold transition cursor-pointer", t.isPrimary ? "bg-[#26A5E4] text-white shadow-xs" : "bg-black/5 dark:bg-white/5 hover:bg-sky-500/10 text-muted-foreground hover:text-sky-600"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-2.5", t.isPrimary && "fill-current") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.isPrimary ? "Primary Telegram" : "Make Primary" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleRemoveContact(t.id),
											className: "size-7 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 flex items-center justify-center transition cursor-pointer",
											title: "Delete Telegram",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Telegram Label"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: t.label || "",
											placeholder: "e.g. Official Telegram, Founder Direct, Studio Channel",
											onChange: (e) => handleUpdateContact(t.id, { label: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-sky-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Handle, Phone, or URL"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: t.value,
											placeholder: "@codexdynamics or +380636406783",
											onChange: (e) => handleUpdateContact(t.id, { value: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-sky-500 rounded-lg px-3 py-1.5 text-xs text-label font-mono outline-none transition"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-hairline flex items-center justify-between text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-mono truncate max-w-[200px]",
											children: t.href || `https://t.me/${t.value.replace(/^@/, "")}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleCopyUrl(`tg-${t.id}`, t.href || `https://t.me/${t.value.replace(/^@/, "")}`),
												className: "text-muted-foreground hover:text-label inline-flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy Link" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: t.href || `https://t.me/${t.value.replace(/^@/, "")}`,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Telegram" })]
											})]
										})]
									})
								]
							}, t.id))
						})]
					}),
					(activeCategory === "all" || activeCategory === "viber") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-xl bg-[#7360F2]/10 flex items-center justify-center text-[#7360F2]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViberLogo, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: [
											"Viber Messaging Lines (",
											vibers.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 font-medium",
										children: "viber://chat Protocol"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: "Configure Viber client support numbers with international format. Direct links open native Viber chat."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleAddContact("viber"),
								className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7360F2] hover:bg-[#6250e0] text-white text-xs font-semibold transition cursor-pointer shadow-xs shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Viber Line" })]
							})]
						}), vibers.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-6 text-xs text-muted-foreground border border-dashed border-black/10 rounded-xl",
							children: "No Viber lines configured. Click \"Add Viber Line\" to create one."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-3",
							children: vibers.map((v, _idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-xl border p-4 transition-all relative space-y-3", v.isPrimary ? "border-purple-500/40 bg-purple-500/[0.03] shadow-xs" : "border-black/8 bg-fill/30 hover:border-black/15"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ViberLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleSetPrimaryContact(v.id, "viber"),
												className: cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold transition cursor-pointer", v.isPrimary ? "bg-[#7360F2] text-white shadow-xs" : "bg-black/5 dark:bg-white/5 hover:bg-purple-500/10 text-muted-foreground hover:text-purple-600"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-2.5", v.isPrimary && "fill-current") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: v.isPrimary ? "Primary Viber" : "Make Primary" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleRemoveContact(v.id),
											className: "size-7 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 flex items-center justify-center transition cursor-pointer",
											title: "Delete Viber",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Viber Label"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: v.label || "",
											placeholder: "e.g. Direct Viber, Support Desk",
											onChange: (e) => handleUpdateContact(v.id, { label: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-purple-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Viber Number (E.164 Format)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: v.value,
											placeholder: "+380636406783",
											onChange: (e) => handleUpdateContact(v.id, { value: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-purple-500 rounded-lg px-3 py-1.5 text-xs text-label font-mono outline-none transition"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-hairline flex items-center justify-between text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-mono truncate max-w-[200px]",
											children: v.href || `viber://chat?number=${encodeURIComponent(v.value)}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleCopyUrl(`vb-${v.id}`, v.value),
												className: "text-muted-foreground hover:text-label inline-flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: v.href || `viber://chat?number=${encodeURIComponent(v.value)}`,
												className: "text-purple-600 hover:text-purple-700 inline-flex items-center gap-1 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Launch Viber" })]
											})]
										})]
									})
								]
							}, v.id))
						})]
					}),
					(activeCategory === "all" || activeCategory === "address") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: [
											"Studio Addresses & Office Locations (",
											addresses.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 font-medium",
										children: "Google Maps & Directions"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: "Configure your main studio headquarters, satellite branches, and regional desks. Visitors can explore them with 1-click Google Maps links."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleAddAddress,
								className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold transition cursor-pointer shadow-xs shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Studio Location" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: addresses.map((addr, _idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-xl border p-4 transition-all relative space-y-3", addr.isPrimary ? "border-rose-500/40 bg-rose-500/[0.03] shadow-xs" : "border-black/8 bg-fill/30 hover:border-black/15"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapsLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleSetPrimaryAddress(addr.id),
												className: cn("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition cursor-pointer", addr.isPrimary ? "bg-rose-600 text-white shadow-xs" : "bg-black/5 dark:bg-white/5 hover:bg-rose-500/10 text-muted-foreground hover:text-rose-600"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-2.5", addr.isPrimary && "fill-current") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: addr.isPrimary ? "Primary HQ Studio" : "Set as Primary HQ" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `https://maps.google.com/?q=${encodeURIComponent(addr.fullAddress || `${addr.street}, ${addr.city}`)}`,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 text-label text-[11px] font-medium transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 text-rose-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Preview on Google Maps" })]
											}), addresses.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => handleRemoveAddress(addr.id),
												className: "size-7 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 flex items-center justify-center transition cursor-pointer",
												title: "Delete address",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
												children: "Location Name / Studio Label"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: addr.label || "",
												placeholder: "e.g. Kyiv Studio (HQ), Gulliver Tower Desk",
												onChange: (e) => handleUpdateAddress(addr.id, { label: e.target.value }),
												className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-rose-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
												children: "Street & Building"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: addr.street || "",
												placeholder: "e.g. Sportyvna, 1A",
												onChange: (e) => handleUpdateAddress(addr.id, { street: e.target.value }),
												className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-rose-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
												children: "City, Postal Code & Country"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: addr.city || "",
												placeholder: "e.g. Kyiv, 012023, Ukraine",
												onChange: (e) => handleUpdateAddress(addr.id, { city: e.target.value }),
												className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-rose-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
													children: "Full Formatted Address (For Maps Direction Query)"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: addr.fullAddress || "",
													placeholder: "Sportyvna, 1A, Kyiv, 012023, Ukraine",
													onChange: (e) => handleUpdateAddress(addr.id, { fullAddress: e.target.value }),
													className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-rose-500 rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
												children: "Latitude (Map Pin)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												step: "any",
												value: addr.lat ?? 50.438743,
												onChange: (e) => handleUpdateAddress(addr.id, { lat: parseFloat(e.target.value) || 0 }),
												className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-rose-500 rounded-lg px-3 py-1.5 text-xs text-label font-mono outline-none transition"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
												children: "Longitude (Map Pin)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												step: "any",
												value: addr.lng ?? 30.523177,
												onChange: (e) => handleUpdateAddress(addr.id, { lng: parseFloat(e.target.value) || 0 }),
												className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-rose-500 rounded-lg px-3 py-1.5 text-xs text-label font-mono outline-none transition"
											})] })
										]
									})
								]
							}, addr.id))
						})]
					}),
					(activeCategory === "all" || activeCategory === "email") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "size-8 rounded-xl bg-blue/10 flex items-center justify-center text-blue",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: [
											"Public Inboxes & Routing Emails (",
											emails.length,
											")"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-0.5 rounded-full bg-blue/10 text-blue font-medium",
										children: "mailto: Inboxes"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5",
									children: "Configure team emails (e.g. Inquiries, Press, Founder direct). The primary email will also receive client messages."
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleAddContact("email"),
								className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue hover:bg-blue-hover text-white text-xs font-semibold transition cursor-pointer shadow-xs shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Email Inbox" })]
							})]
						}), emails.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center py-6 text-xs text-muted-foreground border border-dashed border-black/10 rounded-xl",
							children: "No emails configured. Click \"Add Email Inbox\" to create one."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-3",
							children: emails.map((em, _idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-xl border p-4 transition-all relative space-y-3", em.isPrimary ? "border-blue/40 bg-blue/[0.03] shadow-xs" : "border-black/8 bg-fill/30 hover:border-black/15"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmailLogo, { className: "size-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleSetPrimaryContact(em.id, "email"),
												className: cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold transition cursor-pointer", em.isPrimary ? "bg-blue text-white shadow-xs" : "bg-black/5 dark:bg-white/5 hover:bg-blue/10 text-muted-foreground hover:text-blue"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-2.5", em.isPrimary && "fill-current") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: em.isPrimary ? "Primary Inbox" : "Make Primary" })]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => handleRemoveContact(em.id),
											className: "size-7 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 flex items-center justify-center transition cursor-pointer",
											title: "Delete Email",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Inbox Label / Department"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: em.label || "",
											placeholder: "e.g. Primary Inquiries, Press & Media, Founder Direct",
											onChange: (e) => handleUpdateContact(em.id, { label: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-blue rounded-lg px-3 py-1.5 text-xs text-label outline-none transition"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-[10px] uppercase font-semibold text-subtle mb-1",
											children: "Email Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											value: em.value,
											placeholder: "contact@codexdynamics.com",
											onChange: (e) => handleUpdateContact(em.id, { value: e.target.value }),
											className: "w-full bg-white dark:bg-black/20 border border-black/8 focus:border-blue rounded-lg px-3 py-1.5 text-xs text-label font-mono outline-none transition"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 border-t border-hairline flex items-center justify-between text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground font-mono truncate max-w-[200px]",
											children: em.href || `mailto:${em.value}`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => handleCopyUrl(`em-${em.id}`, em.value),
												className: "text-muted-foreground hover:text-label inline-flex items-center gap-1 cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: em.href || `mailto:${em.value}`,
												className: "text-blue hover:underline inline-flex items-center gap-1 font-medium",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Email" })]
											})]
										})]
									})
								]
							}, em.id))
						})]
					}),
					(activeCategory === "all" || activeCategory === "header_socials") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-hairline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-7 rounded-lg bg-blue/10 flex items-center justify-center text-blue",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xs font-semibold uppercase tracking-wider text-label",
										children: "Header Social Action Buttons (Show / Hide & Credentials)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500 animate-pulse" }),
											activeCount,
											" of 5 Active on Header"
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1.5 max-w-2xl",
								children: "Toggle which social icons appear in the global website navigation header, and update their destination profile links."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleEnableAllSocials,
										className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 hover:bg-fill text-xs font-medium text-label transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Show All 5" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleDisableAllSocials,
										className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 hover:bg-fill text-xs font-medium text-label transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3 text-rose-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hide All" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: handleResetSocialUrls,
										className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 hover:bg-fill text-xs font-medium text-subtle hover:text-label transition cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reset URLs" })]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
							children: SOCIAL_PLATFORMS.map((platform) => {
								const state = headerSocials[platform.key];
								const Logo = platform.logo;
								const isCopied = copiedKey === platform.key;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("rounded-xl border p-4 transition-all relative flex flex-col justify-between space-y-3", state.enabled ? "border-black/12 bg-fill/40 shadow-xs" : "border-black/5 bg-fill/10 opacity-70"),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: cn("size-9 rounded-xl flex items-center justify-center border shrink-0 transition-transform", platform.bgClass),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: platform.logoClass })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-semibold text-label",
														children: platform.name
													}), state.enabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-500" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground line-clamp-1",
													children: platform.description
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "relative inline-flex items-center cursor-pointer shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: state.enabled,
													onChange: () => handleToggleSocial(platform.key),
													className: "sr-only peer"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-9 h-5 bg-black/15 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-[11px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "font-medium text-subtle flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Destination URL" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => handleCopyUrl(platform.key, state.url),
														className: "text-[10px] text-muted-foreground hover:text-label transition px-1.5 py-0.5 rounded hover:bg-black/5 flex items-center gap-1 cursor-pointer",
														title: "Copy URL",
														children: isCopied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-2.5 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-emerald-600",
															children: "Copied"
														})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Copy" })] })
													}), state.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: state.url,
														target: "_blank",
														rel: "noopener noreferrer",
														className: "text-[10px] text-blue hover:underline px-1.5 py-0.5 rounded hover:bg-blue/5 flex items-center gap-0.5",
														title: "Open URL in new tab",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Test" })]
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "url",
												value: state.url,
												placeholder: platform.placeholder,
												onChange: (e) => handleUpdateSocialUrl(platform.key, e.target.value),
												className: cn("w-full bg-white dark:bg-black/20 border rounded-lg px-3 py-1.5 text-xs text-label outline-none transition font-mono", state.enabled ? "border-black/10 focus:border-blue" : "border-black/5 text-muted-foreground bg-fill/50")
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pt-2 border-t border-hairline flex items-center justify-between text-[10px] text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Status: ", state.enabled ? "Live on Header" : "Hidden"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono",
												children: state.url ? new URL(state.url).hostname : "No URL"
											})]
										})
									]
								}, platform.key);
							})
						})]
					}),
					(activeCategory === "all" || activeCategory === "brand") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pb-3 border-b border-hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-blue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Brand & Global Settings"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
										children: "Brand / Studio Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: form.siteName,
										onChange: (e) => setForm({
											...form,
											siteName: e.target.value
										}),
										className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
										children: "Copyright Year"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: form.copyrightYear,
										onChange: (e) => setForm({
											...form,
											copyrightYear: e.target.value
										}),
										className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
										children: "Inbound Inquiries Dispatch Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: form.formSubmitEmail,
										onChange: (e) => setForm({
											...form,
											formSubmitEmail: e.target.value
										}),
										className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all font-mono"
									})] })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-lift rounded-2xl bg-card border border-black/8 p-6 shadow-sm space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pb-3 border-b border-hairline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-purple-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xs font-semibold uppercase tracking-wider text-label",
									children: "Hero Section Copy"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
										children: "Hero Pill Badge"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: form.heroBadge,
										onChange: (e) => setForm({
											...form,
											heroBadge: e.target.value
										}),
										className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
										children: "Main Headline (Title)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: form.heroTitle,
										onChange: (e) => setForm({
											...form,
											heroTitle: e.target.value
										}),
										className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl px-3.5 py-2 text-xs text-label outline-none transition-all"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] uppercase tracking-wider font-semibold text-subtle mb-1",
										children: "Hero Subtitle / Value Proposition"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										rows: 2,
										value: form.heroSubtitle,
										onChange: (e) => setForm({
											...form,
											heroSubtitle: e.target.value
										}),
										className: "w-full bg-fill/60 hover:bg-fill border border-black/8 focus:border-blue focus:bg-white rounded-xl p-3 text-xs text-label outline-none transition-all"
									})] })
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-lift rounded-2xl bg-card border border-black/8 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All changes made here are saved directly into your SQLite database and immediately active on the live site." })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleReset,
								disabled: resetting,
								className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-black/10 hover:bg-fill text-muted-foreground hover:text-label text-xs font-medium transition cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reset" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleSave(),
								disabled: saving,
								className: "inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-blue hover:bg-blue-hover text-paper text-xs font-semibold transition shadow-sm active:scale-[0.99] cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: saving ? "Saving Changes..." : "Save All Contacts & Content" })]
							})]
						})]
					})
				]
			})
		]
	});
}
function HostingerModal({ isOpen, onClose }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [isDownloading, setIsDownloading] = (0, import_react.useState)(false);
	if (!isOpen) return null;
	const copyPath = (text) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		toast.success("Copied to clipboard!");
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleDownload = async () => {
		setIsDownloading(true);
		toast.info("Downloading Hostinger package (35.4 MB)...");
		try {
			const res = await fetch("/api/download-hostinger-zip");
			if (!res.ok) throw new Error("Server returned error: " + res.status);
			const blob = await res.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.style.display = "none";
			a.href = url;
			a.download = "hostinger-public_html.zip";
			document.body.appendChild(a);
			a.click();
			setTimeout(() => {
				window.URL.revokeObjectURL(url);
				document.body.removeChild(a);
			}, 2e3);
			toast.success("Download started successfully!");
		} catch (err) {
			console.error("Blob download failed, falling back to direct window open:", err);
			window.open("/api/download-hostinger-zip", "_blank");
		} finally {
			setIsDownloading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl surface-lift rounded-3xl bg-card border border-black/8 p-6 sm:p-8 shadow-2xl space-y-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pb-4 border-b border-hairline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-xl bg-blue/10 text-blue",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-base font-semibold text-label font-display",
							children: "Hostinger 1-Click Deployment Package"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Ready to extract directly into Hostinger public_html"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "p-1.5 rounded-full text-subtle hover:text-label hover:bg-fill transition-colors cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 rounded-2xl bg-blue/10 border border-blue/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-xs font-semibold text-blue",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hostinger public_html ZIP (35.4 MB)" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground mt-0.5",
						children: "Contains pre-rendered index.html, .htaccess, all assets, PHP CRM APIs & SQLite database."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleDownload,
							disabled: isDownloading,
							className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue hover:bg-blue-hover text-white text-xs font-semibold shadow-sm transition-all cursor-pointer disabled:opacity-75",
							children: isDownloading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Downloading..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download ZIP" })] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/api/download-hostinger-zip",
							target: "_blank",
							rel: "noopener noreferrer",
							download: "hostinger-public_html.zip",
							title: "Open direct download link in new tab",
							className: "p-2.5 rounded-xl bg-white hover:bg-fill-elevated text-label border border-black/8 shadow-xs transition-colors cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted-foreground" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-xs text-muted-foreground leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 rounded-2xl bg-fill-subtle/70 border border-hairline space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-label font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "How to Deploy on Hostinger (Takes 60 Seconds):" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "list-decimal list-inside space-y-1 text-[11px] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Open your Hostinger hPanel → ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Websites" }),
										" → ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "File Manager" }),
										"."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Navigate into the ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "font-mono text-label bg-fill px-1 py-0.5 rounded",
											children: "public_html"
										}),
										" folder."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Upload ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "font-mono text-label bg-fill px-1 py-0.5 rounded",
											children: "hostinger-public_html.zip"
										}),
										" and click ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Extract" }),
										" directly into ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
											className: "font-mono text-label bg-fill px-1 py-0.5 rounded",
											children: "public_html"
										}),
										"."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Done! Your site, CRM, and APIs are live instantly with zero terminal commands needed." })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-label uppercase tracking-wider text-[11px]",
								children: "Hostinger Feature Support:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: "1. Apache & LiteSpeed Ready:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px]",
											children: [
												"Includes pre-configured ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-label",
													children: ".htaccess"
												}),
												" for Single Page App routing, gzip compression, and cache controls."
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: "2. Pre-Seeded SQLite Database:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px]",
											children: [
												"Includes all existing projects, custom categories, media uploads, reviews, and admin login (",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-label",
													children: "admin@codexdynamics.com"
												}),
												" / ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-label",
													children: "Admin123!"
												}),
												")."
											]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-medium text-label",
											children: "3. Native PHP Endpoints:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px]",
											children: [
												"All actions route through native PHP PDO scripts in ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
													className: "font-mono text-label",
													children: "/api/"
												}),
												" without requiring Node.js on your server."
											]
										})] })]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-fill border border-black/8 rounded-xl flex items-center justify-between font-mono text-[11px] text-label",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Database File: ./database.sqlite" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => copyPath("database.sqlite"),
								className: "inline-flex items-center gap-1 text-blue hover:underline cursor-pointer",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Copied" : "Copy" })]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-3 border-t border-hairline flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "px-5 py-2 rounded-full bg-label hover:bg-black text-paper text-xs font-medium cursor-pointer",
						children: "Done"
					})
				})
			]
		})
	});
}
function AdminCRM() {
	const [isAuth, setIsAuth] = (0, import_react.useState)(false);
	const [emailInput, setEmailInput] = (0, import_react.useState)("admin@codexdynamics.com");
	const [passwordInput, setPasswordInput] = (0, import_react.useState)("Admin123!");
	const [authError, setAuthError] = (0, import_react.useState)("");
	const [isBlogEditing, setIsBlogEditing] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("visitors");
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (activeTab !== "blogs") setIsBlogEditing(false);
	}, [activeTab]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [isHostingerModalOpen, setIsHostingerModalOpen] = (0, import_react.useState)(false);
	const [stats, setStats] = (0, import_react.useState)({
		totalVisitors: 0,
		todayVisitors: 0,
		totalEnquiries: 0,
		totalBacklinks: 0,
		totalBlogs: 0,
		totalReviews: 0,
		totalProjects: 0
	});
	const [visitors, setVisitors] = (0, import_react.useState)([]);
	const [leads, setLeads] = (0, import_react.useState)([]);
	const [enquiries, setEnquiries] = (0, import_react.useState)([]);
	const [backlinks, setBacklinks] = (0, import_react.useState)([]);
	const [blogs, setBlogs] = (0, import_react.useState)([]);
	const [reviews, setReviews] = (0, import_react.useState)([]);
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [regions, setRegions] = (0, import_react.useState)([]);
	const [browsers, setBrowsers] = (0, import_react.useState)([]);
	const [devices, setDevices] = (0, import_react.useState)([]);
	const [webhookUrl, setWebhookUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem("codex_admin_auth") === "true") setIsAuth(true);
		}
	}, []);
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
					if (json.settings?.webhookUrl !== void 0) setWebhookUrl(json.settings.webhookUrl);
				}
			}
		} catch {} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (isAuth) {
			fetchData();
			const interval = setInterval(fetchData, 15e3);
			return () => clearInterval(interval);
		}
	}, [isAuth]);
	const dispatchAction = async (action, payload) => {
		try {
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action,
					...payload
				})
			})).json();
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
				if (data.settings?.webhookUrl !== void 0) setWebhookUrl(data.settings.webhookUrl);
				return true;
			}
		} catch {
			toast.error("Failed to execute action.");
		}
		return false;
	};
	const handleCreateLead = async (leadData) => {
		if (await dispatchAction("create_lead", leadData)) toast.success("Lead created successfully.");
	};
	const handleUpdateLeadStatus = async (id, status) => {
		if (await dispatchAction("update_lead_status", {
			id,
			status
		})) toast.success(`Lead status updated to ${status}.`);
	};
	const handleUpdateLeadNotes = async (id, notes) => {
		if (await dispatchAction("update_lead_notes", {
			id,
			notes
		})) toast.success("Notes saved.");
	};
	const handleDeleteLead = async (id) => {
		if (await dispatchAction("delete_lead", { id })) toast.success("Lead deleted.");
	};
	const handleAddVisitorToLeads = async (visitor, customData) => {
		if (await dispatchAction("add_visitor_to_leads", {
			visitor_id: visitor.id,
			lead_data: customData,
			...customData || {}
		})) toast.success(`Visitor from ${visitor.city || visitor.country} added to Leads!`);
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			if ((await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "login",
					email: emailInput.trim(),
					password: passwordInput
				})
			})).json()).ok) {
				localStorage.setItem("codex_admin_auth", "true");
				setIsAuth(true);
				setAuthError("");
				toast.success("Welcome to Codex Dynamics Back Office!");
				return;
			}
		} catch {}
		if (emailInput.trim().toLowerCase() === "admin@codexdynamics.com" && passwordInput === "Admin123!") {
			localStorage.setItem("codex_admin_auth", "true");
			setIsAuth(true);
			setAuthError("");
			toast.success("Welcome to Codex Dynamics Back Office!");
		} else setAuthError("Invalid credentials. Please verify your email and password.");
	};
	const handleSaveWebhook = async (url) => {
		if (await dispatchAction("save_webhook", { url })) {
			setWebhookUrl(url);
			toast.success("Lead alert webhook saved.");
		}
	};
	const handleTestWebhook = async (url) => {
		try {
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "test_webhook",
					url
				})
			})).json();
			return {
				ok: data.ok,
				message: data.message || (data.ok ? "Dispatched" : data.error)
			};
		} catch (err) {
			return {
				ok: false,
				message: String(err)
			};
		}
	};
	const handleChangePassword = async (currentPassword, newPassword) => {
		try {
			const data = await (await fetch("/api/crm/action", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "change_password",
					email: "admin@codexdynamics.com",
					currentPassword,
					newPassword
				})
			})).json();
			if (data.ok) {
				toast.success("Admin password changed in SQLite database.");
				return {
					ok: true,
					message: data.message
				};
			}
			return {
				ok: false,
				error: data.error || "Password update failed."
			};
		} catch (err) {
			return {
				ok: false,
				error: String(err)
			};
		}
	};
	const handleLogout = () => {
		localStorage.removeItem("codex_admin_auth");
		setIsAuth(false);
		toast.info("Signed out of back office.");
	};
	const handleSimulateVisitor = async () => {
		const countries = [
			{
				country: "United States",
				flag: "🇺🇸",
				ip: "172.56.33.104",
				browser: "Chrome 125",
				device: "Desktop (macOS)"
			},
			{
				country: "United Kingdom",
				flag: "🇬🇧",
				ip: "82.165.197.1",
				browser: "Safari 17.4",
				device: "Mobile (iPhone 15)"
			},
			{
				country: "Germany",
				flag: "🇩🇪",
				ip: "178.62.204.89",
				browser: "Firefox 126",
				device: "Desktop (Linux)"
			},
			{
				country: "Canada",
				flag: "🇨🇦",
				ip: "24.200.180.12",
				browser: "Edge 125",
				device: "Desktop (Windows 11)"
			},
			{
				country: "Japan",
				flag: "🇯🇵",
				ip: "133.242.18.99",
				browser: "Chrome 125",
				device: "Mobile (Android)"
			}
		];
		const pick = countries[Math.floor(Math.random() * countries.length)];
		const pages = [
			"/",
			"/#work",
			"/#services",
			"/#contact",
			"/#studio"
		];
		const page = pages[Math.floor(Math.random() * pages.length)];
		await dispatchAction("simulate_visitor", {
			sessionId: `live_${Math.random().toString(36).slice(2, 8)}`,
			ip: pick.ip,
			country: pick.country,
			flag: pick.flag,
			browser: pick.browser,
			device: pick.device,
			pageUrl: page
		});
		toast.success(`Live visitor ping received from ${pick.country} ${pick.flag}!`);
	};
	if (!isAuth) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminLogin, {
		emailInput,
		setEmailInput,
		passwordInput,
		setPasswordInput,
		authError,
		handleLogin
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#f5f5f7] text-label flex font-sans selection:bg-blue/15",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSidebar, {
				activeTab,
				setActiveTab,
				stats,
				isOpenMobile: isMobileSidebarOpen,
				onCloseMobile: () => setIsMobileSidebarOpen(false),
				onOpenHostingerModal: () => setIsHostingerModalOpen(true),
				onSimulateVisitor: handleSimulateVisitor,
				onLogout: handleLogout
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 lg:pl-64 xl:pl-72 flex flex-col min-w-0 transition-all duration-200",
				children: [(!isBlogEditing || activeTab !== "blogs") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminHeader, {
					activeTab,
					loading,
					onRefresh: fetchData,
					onOpenMobileSidebar: () => setIsMobileSidebarOpen(true),
					onOpenHostingerModal: () => setIsHostingerModalOpen(true),
					onLogout: handleLogout,
					onSelectTab: setActiveTab
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: `flex-1 w-full ${isBlogEditing && activeTab === "blogs" ? "max-w-none px-3 sm:px-6 lg:px-8 py-3" : "max-w-7xl px-4 sm:px-6 lg:px-8 py-6"} mx-auto space-y-6 relative z-10`,
					children: [(!isBlogEditing || activeTab !== "blogs") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMetrics, {
						stats,
						activeTab,
						setActiveTab
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-1",
						children: [
							activeTab === "tidio" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TidioTab, {}),
							(activeTab === "site_content" || activeTab === "content") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteContentTab, { onSwitchTab: (tab) => setActiveTab(tab) }),
							activeTab === "visitors" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitorsTab, {
								visitors,
								onSimulate: handleSimulateVisitor,
								onAddToLeads: handleAddVisitorToLeads,
								onDeleteVisitor: (id) => dispatchAction("delete_visitor", { id }),
								onClearVisitors: (olderThanDays) => dispatchAction("clear_visitors", { olderThanDays }),
								leadsSessionIds: new Set(leads.filter((l) => l.notes && l.notes.includes("sess_")).map((l) => {
									const m = l.notes?.match(/sess_[a-zA-Z0-9_-]+/);
									return m ? m[0] : "";
								}).filter(Boolean))
							}),
							activeTab === "leads" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadsTab, {
								leads,
								onCreateLead: handleCreateLead,
								onUpdateStatus: handleUpdateLeadStatus,
								onUpdateNotes: handleUpdateLeadNotes,
								onDeleteLead: handleDeleteLead
							}),
							activeTab === "analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnalyticsTab, {
								stats,
								regions,
								browsers,
								devices,
								visitors
							}),
							activeTab === "enquiries" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnquiriesTab, {
								enquiries,
								onUpdateStatus: (id, status) => dispatchAction("update_enquiry_status", {
									id,
									status
								}),
								onDelete: (id) => dispatchAction("delete_enquiry", { id })
							}),
							activeTab === "backlinks" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BacklinksTab, {
								backlinks,
								onAddBacklink: (data) => dispatchAction("save_backlink", data),
								onEditBacklink: (id, data) => dispatchAction("update_backlink", {
									id,
									...data
								}),
								onDeleteBacklink: (id) => dispatchAction("delete_backlink", { id })
							}),
							activeTab === "blogs" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogsTab, {
								blogs,
								onSaveBlog: (data) => dispatchAction("save_blog", data),
								onDeleteBlog: (id) => dispatchAction("delete_blog", { id }),
								onToggleStatus: (id, status) => dispatchAction("toggle_blog_status", {
									id,
									status
								}),
								onDuplicateBlog: (id) => dispatchAction("duplicate_blog", { id }),
								onEditorStateChange: (isEditing) => setIsBlogEditing(isEditing)
							}),
							activeTab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsTab, {
								reviews,
								onSaveReview: (data) => dispatchAction("save_review", data),
								onEditReview: (id, data) => dispatchAction("update_review", {
									id,
									...data
								}),
								onToggleReview: (id, is_published) => dispatchAction("toggle_review", {
									id,
									is_published
								}),
								onDeleteReview: (id) => dispatchAction("delete_review", { id })
							}),
							activeTab === "projects" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsTab, {
								projects,
								onSaveProject: (data) => dispatchAction("save_project", data),
								onEditProject: (id, data) => dispatchAction("update_project", {
									id,
									...data
								}),
								onToggleProject: (id, is_published) => dispatchAction("toggle_project", {
									id,
									is_published
								}),
								onDeleteProject: (id) => dispatchAction("delete_project", { id })
							}),
							(activeTab === "settings" || activeTab === "customizer" || activeTab === "branding" || activeTab === "layout" || activeTab === "conversion" || activeTab === "seo_studio" || activeTab === "emergency") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsTab, {
								stats,
								webhookUrl,
								onSaveWebhook: handleSaveWebhook,
								onTestWebhook: handleTestWebhook,
								onChangePassword: handleChangePassword,
								onRestoreBackup: (backupData) => dispatchAction("restore_backup", { backupData }),
								onOpenHostingerModal: () => setIsHostingerModalOpen(true),
								defaultSubTab: activeTab === "branding" ? "branding" : activeTab === "layout" ? "layout" : activeTab === "conversion" ? "conversion" : activeTab === "seo_studio" ? "seo" : activeTab === "emergency" ? "emergency" : activeTab === "customizer" ? "branding" : "system",
								onSubTabChange: (sub) => {
									if (sub === "branding") setActiveTab("branding");
									else if (sub === "layout") setActiveTab("layout");
									else if (sub === "conversion") setActiveTab("conversion");
									else if (sub === "seo") setActiveTab("seo_studio");
									else if (sub === "emergency") setActiveTab("emergency");
									else if (sub === "system") setActiveTab("settings");
								},
								fullData: {
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
									settings: { webhook_url: webhookUrl }
								}
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HostingerModal, {
				isOpen: isHostingerModalOpen,
				onClose: () => setIsHostingerModalOpen(false)
			})
		]
	});
}
//#endregion
export { AdminCRM as component };
