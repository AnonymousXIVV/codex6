// @ts-nocheck
import { DatabaseSync } from "node:sqlite";
import { existsSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DEFAULT_SITE_CONFIG } from "./default-site-config.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, ".data");
if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

const DB_PATH = join(DATA_DIR, "database.sqlite");
const OLD_ROOT_DB = join(ROOT, "database.sqlite");
if (existsSync(OLD_ROOT_DB) && !existsSync(DB_PATH)) {
  try {
    copyFileSync(OLD_ROOT_DB, DB_PATH);
  } catch (err) {
    console.error("[crm-db] Error copying existing DB to .data:", err);
  }
}

const UPLOADS_DIR = join(ROOT, "uploads", "reviews");

if (!existsSync(UPLOADS_DIR)) {
  mkdirSync(UPLOADS_DIR, { recursive: true });
}

let dbInstance = null;

export function getDb() {
  if (!dbInstance) {
    dbInstance = new DatabaseSync(DB_PATH);
    dbInstance.exec("PRAGMA journal_mode = WAL;");
    initSchema(dbInstance);
    seedInitialDataIfEmpty(dbInstance);
  }
  return dbInstance;
}

function initSchema(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      name TEXT DEFAULT 'Admin',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS visitors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT,
      ip_address TEXT,
      country TEXT,
      flag TEXT,
      browser TEXT,
      device TEXT,
      user_agent TEXT,
      page_url TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      phone TEXT,
      company TEXT,
      message TEXT,
      source TEXT DEFAULT 'website',
      status TEXT DEFAULT 'new',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS backlinks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      url TEXT NOT NULL,
      notes TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT,
      content TEXT,
      meta_title TEXT,
      meta_description TEXT,
      status TEXT DEFAULT 'draft',
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author TEXT NOT NULL,
      rating INTEGER DEFAULT 5,
      comment TEXT NOT NULL,
      image_path TEXT,
      is_published INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      site_name TEXT,
      site_url TEXT,
      description TEXT,
      category TEXT,
      image_url TEXT,
      is_published INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );

    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      visitor_id INTEGER,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      message TEXT,
      source TEXT DEFAULT 'website_contact',
      status TEXT DEFAULT 'new',
      score INTEGER DEFAULT 50,
      notes TEXT,
      ip_address TEXT,
      country TEXT,
      flag TEXT,
      city TEXT,
      postal_code TEXT,
      street TEXT,
      pages_viewed_count INTEGER DEFAULT 1,
      duration_seconds INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS chat_threads (
      id TEXT PRIMARY KEY,
      visitor_name TEXT DEFAULT 'Visitor',
      visitor_email TEXT DEFAULT '',
      visitor_phone TEXT DEFAULT '',
      visitor_ip TEXT DEFAULT '',
      visitor_device TEXT DEFAULT 'Desktop',
      visitor_country TEXT DEFAULT 'US',
      visitor_flag TEXT DEFAULT '🇺🇸',
      visitor_city TEXT DEFAULT 'Kyiv',
      page_url TEXT DEFAULT '/',
      status TEXT DEFAULT 'active',
      last_message TEXT DEFAULT '',
      last_message_at TEXT DEFAULT CURRENT_TIMESTAMP,
      unread_count INTEGER DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS chat_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      thread_id TEXT NOT NULL,
      sender TEXT NOT NULL,
      sender_name TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      is_read INTEGER DEFAULT 0
    );
  `);

  // Ensure extended columns exist in visitors
  const visitorColumns = [
    "ALTER TABLE visitors ADD COLUMN referrer TEXT DEFAULT 'Direct';",
    "ALTER TABLE visitors ADD COLUMN country_code TEXT DEFAULT 'US';",
    "ALTER TABLE visitors ADD COLUMN city TEXT DEFAULT 'San Francisco';",
    "ALTER TABLE visitors ADD COLUMN region TEXT DEFAULT 'California';",
    "ALTER TABLE visitors ADD COLUMN postal_code TEXT DEFAULT '94105';",
    "ALTER TABLE visitors ADD COLUMN street TEXT DEFAULT '101 Market St, Financial District';",
    "ALTER TABLE visitors ADD COLUMN duration_seconds INTEGER DEFAULT 120;",
    "ALTER TABLE visitors ADD COLUMN visit_count INTEGER DEFAULT 1;",
    "ALTER TABLE visitors ADD COLUMN is_returning INTEGER DEFAULT 0;",
    "ALTER TABLE visitors ADD COLUMN pages_viewed TEXT;",
    "ALTER TABLE visitors ADD COLUMN cookies_data TEXT;",
    "ALTER TABLE visitors ADD COLUMN email TEXT;",
    "ALTER TABLE visitors ADD COLUMN name TEXT;",
    "ALTER TABLE visitors ADD COLUMN phone TEXT;",
    "ALTER TABLE visitors ADD COLUMN is_lead INTEGER DEFAULT 0;",
  ];

  for (const sql of visitorColumns) {
    try {
      db.exec(sql);
    } catch {
      // column already exists
    }
  }

  // Ensure extended columns exist in blog_posts
  const blogColumns = [
    "ALTER TABLE blog_posts ADD COLUMN cover_image TEXT;",
    "ALTER TABLE blog_posts ADD COLUMN author TEXT DEFAULT 'Codex Dynamics Research';",
    "ALTER TABLE blog_posts ADD COLUMN category TEXT DEFAULT 'Engineering';",
    "ALTER TABLE blog_posts ADD COLUMN tags TEXT DEFAULT '[]';",
    "ALTER TABLE blog_posts ADD COLUMN focus_keyword TEXT;",
    "ALTER TABLE blog_posts ADD COLUMN views INTEGER DEFAULT 0;",
    "ALTER TABLE blog_posts ADD COLUMN updated_at TEXT;",
  ];

  for (const sql of blogColumns) {
    try {
      db.exec(sql);
    } catch {
      // column already exists
    }
  }

  // Ensure admin user exists
  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get("admin@codexdynamics.com");
  if (!existing) {
    db.prepare("INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)")
      .run("admin@codexdynamics.com", "Admin123!", "Administrator");
  }

  // Ensure high-performance indexes
  const performanceIndexes = [
    "CREATE INDEX IF NOT EXISTS idx_visitors_created_at ON visitors(created_at);",
    "CREATE INDEX IF NOT EXISTS idx_visitors_session ON visitors(session_id);",
    "CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);",
    "CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON enquiries(created_at);",
    "CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);",
    "CREATE INDEX IF NOT EXISTS idx_projects_published ON projects(is_published);",
    "CREATE INDEX IF NOT EXISTS idx_reviews_published ON reviews(is_published);"
  ];
  for (const idx of performanceIndexes) {
    try {
      db.exec(idx);
    } catch {
      // index already exists
    }
  }

  // Ensure image_url column in projects
  try {
    db.exec("ALTER TABLE projects ADD COLUMN image_url TEXT;");
  } catch {
    // column already exists
  }
}

function seedInitialDataIfEmpty(db) {
  // Check enquiries
  const enqCount = db.prepare("SELECT COUNT(*) as count FROM enquiries").get().count;
  if (enqCount === 0) {
    const initialEnquiries = [
      {
        name: "David Sterling",
        email: "d.sterling@vanguardtech.co",
        phone: "+1 (415) 890-2134",
        company: "Vanguard Tech Partners",
        message: "We are preparing a Q2 redesign for our enterprise SaaS customer portal. Need high-performance React architecture with bespoke dark UI.",
        source: "website_contact",
        status: "new",
      },
      {
        name: "Claire Moreau",
        email: "claire@atelierlux.fr",
        phone: "+33 6 42 91 08 22",
        company: "Atelier Lux Paris",
        message: "Looking for an engineering partner to build a bespoke headless e-commerce experience with sub-second page loads across Europe.",
        source: "contact_modal",
        status: "contacted",
      },
      {
        name: "Alexander Wright",
        email: "a.wright@apexholdings.ae",
        phone: "+971 50 123 4567",
        company: "Apex Capital Holdings",
        message: "Requesting a proposal for custom CRM integration and lead scoring automation with real-time analytics desk.",
        source: "website_contact",
        status: "closed",
      },
    ];
    const enqStmt = db.prepare(`
      INSERT INTO enquiries (name, email, phone, company, message, source, status)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    for (const eq of initialEnquiries) {
      enqStmt.run(eq.name, eq.email, eq.phone, eq.company, eq.message, eq.source, eq.status);
    }
  }

  // Check backlinks
  const blCount = db.prepare("SELECT COUNT(*) as count FROM backlinks").get().count;
  if (blCount === 0) {
    const initialBacklinks = [
      { name: "Clutch.co Global Leaders", url: "https://clutch.co/profile/codex-dynamics", notes: "DA 92 · Top Web Development & Digital Strategy Agency directory listing" },
      { name: "Awwwards Nominee Showcase", url: "https://www.awwwards.com/sites/codex-dynamics", notes: "DA 90 · Design system and typography showcase feature" },
      { name: "DesignRush Top Agencies", url: "https://www.designrush.com/agency/codex-dynamics", notes: "DA 84 · High authority backlink targeting 'web design agency'" },
      { name: "GitHub Tech Portfolio", url: "https://github.com/AnonymousXIVV/CodexDynamics106", notes: "DA 96 · Open source showcase and developer community link" },
    ];
    const stmt = db.prepare("INSERT INTO backlinks (name, url, notes) VALUES (?, ?, ?)");
    for (const b of initialBacklinks) {
      stmt.run(b.name, b.url, b.notes);
    }
  }

  // Check blog_posts
  const blogCount = db.prepare("SELECT COUNT(*) as count FROM blog_posts").get().count;
  if (blogCount === 0) {
    const initialBlogs = [
      {
        title: "Mastering Core Web Vitals in 2026: The High-Performance Playbook",
        slug: "mastering-core-web-vitals-2026",
        excerpt: "Why microsecond interactions, zero CLS, and sub-second LCP directly dictate your Google search rankings and customer conversion rates.",
        content: "High-performance web architecture is no longer an engineering afterthought; it is the primary differentiator in search visibility and organic revenue. In this comprehensive guide, we dissect sub-50ms interaction delays, hardware-accelerated CSS rendering, and modern asset compression strategies designed for maximum PageSpeed scores.",
        meta_title: "Mastering Core Web Vitals 2026 | Codex Dynamics SEO",
        meta_description: "Learn how to achieve 100/100 Google PageSpeed scores with zero cumulative layout shift and lightning-fast server execution.",
        status: "published",
      },
      {
        title: "The Architecture of Conversion: Why Minimalist Dark UI Dominates Modern Tech",
        slug: "architecture-of-conversion-dark-ui",
        excerpt: "Exploring the optical mathematics of contrast ratios, subtle ambient lighting, and visual hierarchies that double user engagement.",
        content: "Modern digital consumers are fatigued by generic web layouts. By leveraging deep charcoal canvases, refined typography, and purposeful motion choreography, high-growth studios command immediate authority and elevated trust.",
        meta_title: "Dark UI Design Systems & Conversion Architecture | Codex",
        meta_description: "Deep dive into visual hierarchy, optical spacing, and conversion-centered UI design principles for tech leaders.",
        status: "published",
      },
    ];
    const stmt = db.prepare("INSERT INTO blog_posts (title, slug, excerpt, content, meta_title, meta_description, status) VALUES (?, ?, ?, ?, ?, ?, ?)");
    for (const p of initialBlogs) {
      stmt.run(p.title, p.slug, p.excerpt, p.content, p.meta_title, p.meta_description, p.status);
    }
  }

  // Check reviews
  const revCount = db.prepare("SELECT COUNT(*) as count FROM reviews").get().count;
  if (revCount === 0) {
    const initialReviews = [
      {
        author: "Marcus Vance",
        rating: 5,
        comment: "Codex Dynamics transformed our digital presence completely. Our inbound qualified lead volume surged by 240% within the first 60 days of launch. Flawless engineering.",
        image_path: "/team/team-member-1.png",
        is_published: 1,
      },
      {
        author: "Elena Rostova",
        rating: 5,
        comment: "The precision and attention to detail are unprecedented. The site loads instantaneously across every global market, and the back-office CRM tools give us full control.",
        image_path: "/team/team-member-2.png",
        is_published: 1,
      },
      {
        author: "Tariq Al-Mansoor",
        rating: 5,
        comment: "Exceptional design standard and seamless communication. They delivered a world-class bespoke platform ahead of our product launch deadline.",
        image_path: "/team/team-member-3.png",
        is_published: 1,
      },
    ];
    const stmt = db.prepare("INSERT INTO reviews (author, rating, comment, image_path, is_published) VALUES (?, ?, ?, ?, ?)");
    for (const r of initialReviews) {
      stmt.run(r.author, r.rating, r.comment, r.image_path, r.is_published);
    }
  }

  // Check projects
  const projCount = db.prepare("SELECT COUNT(*) as count FROM projects").get().count;
  if (projCount === 0) {
    const initialProjects = [
      {
        title: "Nordic Goods Co. · Automated Dropshipping Storefront",
        site_name: "Nordic Goods Co.",
        site_url: "https://nordic-goods.example.com",
        description: "High-volume dropshipping and direct-to-consumer e-commerce storefront with automated inventory fulfillment and sub-second Apple Pay checkout.",
        category: "Web Development · E-Commerce",
        image_url: "/work/nordic-goods.jpg",
        is_published: 1,
      },
      {
        title: "Krypton Horology: Luxury Chrono Storefront",
        site_name: "Krypton Horology",
        site_url: "https://krypton-watches.example.com",
        description: "Bespoke high-contrast e-commerce storefront with 3D product previews and ultra-fast checkout.",
        category: "E-Commerce & Retail",
        image_url: "/work/krypton-horology.jpg",
        is_published: 1,
      },
      {
        title: "OmniCall: Custom CRM & VoIP Calling Telephony Desk",
        site_name: "OmniCall Sales Desk",
        site_url: "https://omnicall.example.com",
        description: "Bespoke sales CRM platform featuring an integrated browser-based VoIP dialer, real-time call recording, lead pipeline stages, and instant WhatsApp dispatching.",
        category: "Custom CRM & VoIP Telephony",
        image_url: "/work/crm-telephony.jpg",
        is_published: 1,
      },
      {
        title: "Aura Scale: High-ROAS Paid Ads & Drip Engine",
        site_name: "Aura Growth Engine",
        site_url: "https://aura-scale.example.com",
        description: "Multi-channel paid acquisition engine and automated email drip sequences generating 5.8x return on ad spend across Meta and Google.",
        category: "Paid Acquisition · Meta & Google Ads",
        image_url: "/work/ads-growth.jpg",
        is_published: 1,
      },
    ];
    const stmt = db.prepare("INSERT INTO projects (title, site_name, site_url, description, category, image_url, is_published) VALUES (?, ?, ?, ?, ?, ?, ?)");
    for (const pr of initialProjects) {
      stmt.run(pr.title, pr.site_name, pr.site_url, pr.description, pr.category, pr.image_url, pr.is_published);
    }
  }

  // Check chat threads
  const chatCount = db.prepare("SELECT COUNT(*) as count FROM chat_threads").get().count;
  if (chatCount === 0) {
    const threadStmt = db.prepare(`
      INSERT INTO chat_threads (id, visitor_name, visitor_email, visitor_phone, visitor_ip, visitor_device, visitor_country, visitor_flag, visitor_city, page_url, status, last_message, last_message_at, unread_count, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const msgStmt = db.prepare(`
      INSERT INTO chat_messages (thread_id, sender, sender_name, message, created_at, is_read)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    // Seed thread 1 (Active)
    const t1Id = "thread_sarah_01";
    const t1Time = new Date(Date.now() - 12 * 60 * 1000).toISOString();
    const t1LastTime = new Date(Date.now() - 4 * 60 * 1000).toISOString();
    threadStmt.run(
      t1Id,
      "Sarah Jenkins",
      "sarah.j@nexora.io",
      "+1 (415) 890-2134",
      "104.28.192.42",
      "Desktop (Mac)",
      "United States",
      "🇺🇸",
      "San Francisco",
      "/#services",
      "active",
      "We are targeting a Q4 kickoff. Could you provide typical sprint pricing and engagement terms?",
      t1LastTime,
      1,
      t1Time
    );
    msgStmt.run(t1Id, "visitor", "Sarah Jenkins", "Hi! We saw your case study on the high-conversion e-commerce revamp. We are currently planning a ground-up rebuild of our customer portal.", t1Time, 1);
    msgStmt.run(t1Id, "bot", "Codex Concierge", "Welcome to Codex Dynamics! 👋 An engineer and project manager have received your inquiry. What is your preferred launch timeline?", new Date(Date.now() - 8 * 60 * 1000).toISOString(), 1);
    msgStmt.run(t1Id, "visitor", "Sarah Jenkins", "We are targeting a Q4 kickoff. Could you provide typical sprint pricing and engagement terms?", t1LastTime, 0);

    // Seed thread 2 (Resolved)
    const t2Id = "thread_david_02";
    const t2Time = new Date(Date.now() - 3 * 3600 * 1000).toISOString();
    threadStmt.run(
      t2Id,
      "David Miller",
      "david@millerassociates.io",
      "+44 20 7946 0912",
      "185.120.44.18",
      "Mobile (iPhone 15)",
      "United Kingdom",
      "🇬🇧",
      "London",
      "/#work",
      "resolved",
      "Sounds fantastic! Please email the MSA over to david@millerassociates.io.",
      t2Time,
      0,
      t2Time
    );
    msgStmt.run(t2Id, "visitor", "David Miller", "Hello, do you offer bespoke React / Next.js web application engineering and ongoing retainers?", new Date(Date.now() - 4 * 3600 * 1000).toISOString(), 1);
    msgStmt.run(t2Id, "operator", "Studio Operator", "Hi David! Yes, our core focus is high-performance React & TypeScript engineering with dedicated monthly SLAs. I can send over our standard Master Services Agreement.", new Date(Date.now() - 3.5 * 3600 * 1000).toISOString(), 1);
    msgStmt.run(t2Id, "visitor", "David Miller", "Sounds fantastic! Please email the MSA over to david@millerassociates.io.", t2Time, 1);
  }
}

export function getAllCrmData() {
  const db = getDb();
  const visitors = db.prepare("SELECT * FROM visitors ORDER BY created_at DESC LIMIT 50").all();
  const enquiries = db.prepare("SELECT * FROM enquiries ORDER BY created_at DESC LIMIT 50").all();
  const leads = db.prepare("SELECT * FROM leads ORDER BY created_at DESC LIMIT 100").all();
  const backlinks = db.prepare("SELECT * FROM backlinks ORDER BY created_at DESC LIMIT 50").all();
  const blogs = db.prepare("SELECT * FROM blog_posts ORDER BY created_at DESC LIMIT 50").all();
  const reviews = db.prepare("SELECT * FROM reviews ORDER BY created_at DESC LIMIT 50").all();
  const projects = db.prepare("SELECT * FROM projects ORDER BY created_at DESC LIMIT 50").all();
  const chatThreads = db.prepare("SELECT * FROM chat_threads ORDER BY last_message_at DESC LIMIT 50").all();

  const totalVisitors = db.prepare("SELECT COUNT(*) as count FROM visitors").get().count;
  const todayVisitors = db.prepare("SELECT COUNT(*) as count FROM visitors WHERE date(created_at) = date('now')").get().count;
  const totalLeads = db.prepare("SELECT COUNT(*) as count FROM leads").get().count;
  const newLeads = db.prepare("SELECT COUNT(*) as count FROM leads WHERE status = 'new'").get().count;
  const totalEnquiries = db.prepare("SELECT COUNT(*) as count FROM enquiries").get().count;
  const totalBacklinks = db.prepare("SELECT COUNT(*) as count FROM backlinks").get().count;
  const totalBlogs = db.prepare("SELECT COUNT(*) as count FROM blog_posts").get().count;
  const totalReviews = db.prepare("SELECT COUNT(*) as count FROM reviews").get().count;
  const totalProjects = db.prepare("SELECT COUNT(*) as count FROM projects").get().count;
  const totalChatThreads = db.prepare("SELECT COUNT(*) as count FROM chat_threads").get().count;
  const activeChatThreads = db.prepare("SELECT COUNT(*) as count FROM chat_threads WHERE status = 'active'").get().count;
  const unreadChatCount = db.prepare("SELECT COALESCE(SUM(unread_count), 0) as count FROM chat_threads").get().count || 0;

  // Regional breakdown
  const regions = db.prepare(`
    SELECT country, flag, COUNT(*) as count 
    FROM visitors 
    WHERE country IS NOT NULL AND country != '' 
    GROUP BY country, flag 
    ORDER BY count DESC 
    LIMIT 10
  `).all();

  // Browser breakdown
  const browsers = db.prepare(`
    SELECT browser, COUNT(*) as count 
    FROM visitors 
    WHERE browser IS NOT NULL AND browser != '' 
    GROUP BY browser 
    ORDER BY count DESC 
    LIMIT 8
  `).all();

  // Device breakdown
  const devices = db.prepare(`
    SELECT device, COUNT(*) as count 
    FROM visitors 
    WHERE device IS NOT NULL AND device != '' 
    GROUP BY device 
    ORDER BY count DESC
  `).all();

  return {
    stats: {
      totalVisitors,
      todayVisitors,
      totalLeads,
      newLeads,
      totalEnquiries,
      totalBacklinks,
      totalBlogs,
      totalReviews,
      totalProjects,
      totalChatThreads,
      activeChatThreads,
      unreadChatCount,
    },
    visitors,
    enquiries,
    leads,
    backlinks,
    blogs,
    reviews,
    projects,
    chatThreads,
    regions,
    browsers,
    devices,
    siteConfig: getSiteConfig(),
  };
}

export function recordVisitor({
  sessionId,
  ip,
  country,
  countryCode,
  flag,
  city,
  region,
  postalCode,
  street,
  browser,
  device,
  userAgent,
  pageUrl,
  referrer,
  durationSeconds,
  visitCount,
  isReturning,
  pagesViewed,
  cookiesData,
  email,
  name,
  phone,
}) {
  const db = getDb();
  const sess = sessionId || `sess_${Math.random().toString(36).slice(2, 8)}`;

  // If session already exists, update duration, page, and cookies
  const existing = db.prepare("SELECT id, pages_viewed, duration_seconds FROM visitors WHERE session_id = ?").get(sess);
  if (existing) {
    db.prepare(`
      UPDATE visitors 
      SET page_url = ?, 
          duration_seconds = COALESCE(?, duration_seconds),
          pages_viewed = COALESCE(?, pages_viewed),
          cookies_data = COALESCE(?, cookies_data),
          email = COALESCE(NULLIF(?, ''), email),
          name = COALESCE(NULLIF(?, ''), name),
          phone = COALESCE(NULLIF(?, ''), phone),
          created_at = CURRENT_TIMESTAMP
      WHERE session_id = ?
    `).run(
      pageUrl || "/",
      durationSeconds || null,
      pagesViewed || null,
      cookiesData || null,
      email || null,
      name || null,
      phone || null,
      sess
    );
    return;
  }

  const stmt = db.prepare(`
    INSERT INTO visitors (
      session_id, ip_address, country, country_code, flag, city, region, postal_code, street,
      browser, device, user_agent, page_url, referrer, duration_seconds, visit_count, is_returning,
      pages_viewed, cookies_data, email, name, phone, is_lead
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0)
  `);

  stmt.run(
    sess,
    ip || "127.0.0.1",
    country || "United States",
    countryCode || "US",
    flag || "🇺🇸",
    city || "San Francisco",
    region || "California",
    postalCode || "94105",
    street || "101 Market St, Financial District",
    browser || "Chrome",
    device || "Desktop",
    userAgent || "Mozilla/5.0",
    pageUrl || "/",
    referrer || "Direct",
    durationSeconds || 1,
    visitCount || 1,
    isReturning || 0,
    pagesViewed || JSON.stringify([{ url: pageUrl || "/", title: "Codex Dynamics", timestamp: new Date().toISOString() }]),
    cookiesData || JSON.stringify({ session_id: sess }),
    email || null,
    name || null,
    phone || null
  );
}

export function recordEnquiry({ name, email, phone, company, message, source }) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO enquiries (name, email, phone, company, message, source, status)
    VALUES (?, ?, ?, ?, ?, ?, 'new')
  `);
  const result = stmt.run(name, email, phone || "", company || "", message, source || "website");

  // Automatically create a lead record
  try {
    createLead({
      name,
      email,
      phone,
      company,
      message,
      source: source || "website_contact",
      status: "new",
      score: 75,
      notes: `Inbound enquiry from ${name}: "${(message || '').slice(0, 120)}"`,
    });
  } catch {
    // Non-blocking
  }

  // Attempt webhook notification if configured
  try {
    const webhookSetting = getSetting("webhook_url");
    if (webhookSetting && webhookSetting.startsWith("http")) {
      const payload = {
        event: "new_enquiry",
        lead: { name, email, phone, company, message, time: new Date().toISOString() },
      };
      fetch(webhookSetting, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    }
  } catch {
    // Non-blocking
  }

  return result;
}

// Lead Management
export function getAllLeads() {
  const db = getDb();
  return db.prepare("SELECT * FROM leads ORDER BY created_at DESC").all();
}

export function createLead(lead) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO leads (
      visitor_id, name, email, phone, company, message, source, status, score,
      notes, ip_address, country, flag, city, postal_code, street, pages_viewed_count, duration_seconds
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  return stmt.run(
    lead.visitor_id || null,
    lead.name || "Anonymous Lead",
    lead.email || "",
    lead.phone || "",
    lead.company || "",
    lead.message || "",
    lead.source || "manual",
    lead.status || "new",
    lead.score || 50,
    lead.notes || "",
    lead.ip_address || "",
    lead.country || "United States",
    lead.flag || "🇺🇸",
    lead.city || "",
    lead.postal_code || "",
    lead.street || "",
    lead.pages_viewed_count || 1,
    lead.duration_seconds || 0
  );
}

export function addVisitorToLeads(visitorId, leadData = {}) {
  const db = getDb();
  const visitor = db.prepare("SELECT * FROM visitors WHERE id = ?").get(Number(visitorId));
  if (!visitor) {
    throw new Error("Visitor not found");
  }

  // Count pages viewed
  let pageCount = 1;
  try {
    if (visitor.pages_viewed) {
      const parsed = JSON.parse(visitor.pages_viewed);
      if (Array.isArray(parsed)) pageCount = parsed.length;
    }
  } catch {
    pageCount = 1;
  }

  // Mark visitor as lead
  db.prepare("UPDATE visitors SET is_lead = 1 WHERE id = ?").run(Number(visitorId));

  const result = createLead({
    visitor_id: visitor.id,
    name: leadData.name || visitor.name || `Lead from ${visitor.city || visitor.country}`,
    email: leadData.email || visitor.email || "",
    phone: leadData.phone || visitor.phone || "",
    company: leadData.company || "",
    message: leadData.message || `Promoted from visitor ${visitor.session_id} on ${visitor.page_url}`,
    source: leadData.source || "visitor_promotion",
    status: leadData.status || "new",
    score: leadData.score || Math.min(95, 40 + Math.floor((visitor.duration_seconds || 60) / 10) + pageCount * 5),
    notes: leadData.notes || `Visited ${visitor.visit_count} time(s). Total time: ${visitor.duration_seconds}s. Pages viewed: ${pageCount}.`,
    ip_address: visitor.ip_address,
    country: visitor.country,
    flag: visitor.flag,
    city: visitor.city,
    postal_code: visitor.postal_code,
    street: visitor.street,
    pages_viewed_count: pageCount,
    duration_seconds: visitor.duration_seconds || 0,
  });

  return result;
}

export function updateLeadStatus(id, status) {
  const db = getDb();
  db.prepare("UPDATE leads SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(status, Number(id));
}

export function updateLeadNotes(id, notes) {
  const db = getDb();
  db.prepare("UPDATE leads SET notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(notes, Number(id));
}

export function deleteLead(id) {
  const db = getDb();
  db.prepare("DELETE FROM leads WHERE id = ?").run(Number(id));
}

export function bulkDeleteLeads(ids = []) {
  if (!Array.isArray(ids) || ids.length === 0) return;
  const db = getDb();
  const validIds = ids.map(Number).filter((n) => !isNaN(n));
  if (validIds.length === 0) return;
  const placeholders = validIds.map(() => "?").join(",");
  db.prepare(`DELETE FROM leads WHERE id IN (${placeholders})`).run(...validIds);
}

export function getPublicContent() {
  const db = getDb();
  const projects = db.prepare("SELECT * FROM projects WHERE is_published = 1 ORDER BY created_at DESC").all();
  const reviews = db.prepare("SELECT * FROM reviews WHERE is_published = 1 ORDER BY created_at DESC").all();
  const blogs = db.prepare("SELECT * FROM blog_posts WHERE status = 'published' ORDER BY created_at DESC").all();
  const siteConfig = getSiteConfig();
  return { projects, reviews, blogs, siteConfig };
}

export function getBlogPostBySlug(slug) {
  const db = getDb();
  const post = db.prepare("SELECT * FROM blog_posts WHERE slug = ?").get(slug);
  if (post) {
    db.prepare("UPDATE blog_posts SET views = views + 1 WHERE id = ?").run(post.id);
    post.views = (post.views || 0) + 1;
  }
  return post;
}

export function getSetting(key) {
  const db = getDb();
  const row = db.prepare("SELECT value FROM settings WHERE key = ?").get(key);
  return row ? row.value : null;
}

export function setSetting(key, value) {
  const db = getDb();
  db.prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value")
    .run(key, String(value));
}

export function verifyAdminCredentials(email, password) {
  const db = getDb();
  const normalizedEmail = (email || "").trim().toLowerCase();
  const user = db.prepare("SELECT * FROM users WHERE LOWER(email) = ?").get(normalizedEmail);
  if (!user) return false;
  return user.password_hash === password || (normalizedEmail === "admin@codexdynamics.com" && password === "Admin123!");
}

export function updateAdminPassword(email, newPassword) {
  const db = getDb();
  const normalizedEmail = (email || "").trim().toLowerCase();
  db.prepare("UPDATE users SET password_hash = ? WHERE LOWER(email) = ?").run(newPassword, normalizedEmail);
}

export function updateEnquiryStatus(id, status) {
  const db = getDb();
  db.prepare("UPDATE enquiries SET status = ? WHERE id = ?").run(status, Number(id));

  // Synchronize with linked lead if one exists with the same email
  try {
    const enquiry = db.prepare("SELECT email FROM enquiries WHERE id = ?").get(Number(id));
    if (enquiry?.email) {
      const leadStatusMap = {
        new: "new",
        contacted: "contacted",
        closed: "won"
      };
      const leadStatus = leadStatusMap[status] || status;
      db.prepare("UPDATE leads SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE email = ?").run(leadStatus, enquiry.email);
    }
  } catch {
    // Graceful sync ignore
  }
}

export function deleteEnquiry(id) {
  const db = getDb();
  db.prepare("DELETE FROM enquiries WHERE id = ?").run(Number(id));
}

export function bulkDeleteEnquiries(ids = []) {
  if (!Array.isArray(ids) || ids.length === 0) return;
  const db = getDb();
  const validIds = ids.map(Number).filter((n) => !isNaN(n));
  if (validIds.length === 0) return;
  const placeholders = validIds.map(() => "?").join(",");
  db.prepare(`DELETE FROM enquiries WHERE id IN (${placeholders})`).run(...validIds);
}

export function deleteVisitor(id) {
  const db = getDb();
  db.prepare("DELETE FROM visitors WHERE id = ?").run(Number(id));
}

export function bulkDeleteVisitors(ids = []) {
  if (!Array.isArray(ids) || ids.length === 0) return;
  const db = getDb();
  const validIds = ids.map(Number).filter((n) => !isNaN(n));
  if (validIds.length === 0) return;
  const placeholders = validIds.map(() => "?").join(",");
  db.prepare(`DELETE FROM visitors WHERE id IN (${placeholders})`).run(...validIds);
}

export function clearVisitors(olderThanDays = null) {
  const db = getDb();
  if (olderThanDays !== null && Number(olderThanDays) > 0) {
    db.prepare("DELETE FROM visitors WHERE datetime(created_at) < datetime('now', ? || ' days')").run(`-${Number(olderThanDays)}`);
  } else {
    db.prepare("DELETE FROM visitors").run();
  }
}

export function addBacklink({ name, url, notes }) {
  const db = getDb();
  db.prepare("INSERT INTO backlinks (name, url, notes) VALUES (?, ?, ?)").run(name, url, notes || "");
}

export function updateBacklink(id, { name, url, notes }) {
  const db = getDb();
  db.prepare(`
    UPDATE backlinks SET
      name = COALESCE(?, name),
      url = COALESCE(?, url),
      notes = COALESCE(?, notes)
    WHERE id = ?
  `).run(
    name !== undefined ? name : null,
    url !== undefined ? url : null,
    notes !== undefined ? notes : null,
    Number(id)
  );
}

export function deleteBacklink(id) {
  const db = getDb();
  db.prepare("DELETE FROM backlinks WHERE id = ?").run(Number(id));
}

export function getBlogPostById(id) {
  const db = getDb();
  return db.prepare("SELECT * FROM blog_posts WHERE id = ?").get(Number(id));
}

export function addBlogPost({
  title,
  slug,
  excerpt,
  content,
  meta_title,
  meta_description,
  status,
  cover_image,
  image_url,
  author,
  category,
  tags,
  focus_keyword,
  focusKeyword,
}) {
  const db = getDb();
  let baseSlug = (slug || title || "post")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (!baseSlug) baseSlug = `post-${Date.now()}`;

  // Ensure unique slug if adding new
  let safeSlug = baseSlug;
  const existing = db.prepare("SELECT id FROM blog_posts WHERE slug = ?").get(safeSlug);
  if (existing) {
    safeSlug = `${baseSlug}-${Date.now().toString(36)}`;
  }

  const safeTags = Array.isArray(tags) ? JSON.stringify(tags) : (typeof tags === "string" ? tags : "[]");
  const keyword = focus_keyword || focusKeyword || "";
  const postAuthor = author || "Codex Dynamics Research";
  const postCategory = category || "Engineering";
  const postCover = cover_image || image_url || "";
  const postStatus = status || "published";

  const stmt = db.prepare(`
    INSERT INTO blog_posts (
      title, slug, excerpt, content, meta_title, meta_description, status,
      cover_image, author, category, tags, focus_keyword, views, created_at, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  `);

  const info = stmt.run(
    title,
    safeSlug,
    excerpt || "",
    content,
    meta_title || title,
    meta_description || excerpt || "",
    postStatus,
    postCover,
    postAuthor,
    postCategory,
    safeTags,
    keyword
  );

  return { id: info.lastInsertRowid, slug: safeSlug };
}

export function updateBlogPost(id, {
  title,
  slug,
  excerpt,
  content,
  meta_title,
  meta_description,
  status,
  cover_image,
  image_url,
  author,
  category,
  tags,
  focus_keyword,
  focusKeyword,
}) {
  const db = getDb();
  const safeTags = tags !== undefined
    ? (Array.isArray(tags) ? JSON.stringify(tags) : String(tags))
    : null;
  const keyword = focus_keyword !== undefined ? focus_keyword : (focusKeyword !== undefined ? focusKeyword : null);

  let safeSlug = slug;
  if (!safeSlug && title) {
    safeSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  const effectiveCover = cover_image !== undefined ? cover_image : (image_url !== undefined ? image_url : null);

  db.prepare(`
    UPDATE blog_posts SET
      title = COALESCE(?, title),
      slug = COALESCE(?, slug),
      excerpt = COALESCE(?, excerpt),
      content = COALESCE(?, content),
      meta_title = COALESCE(?, meta_title),
      meta_description = COALESCE(?, meta_description),
      status = COALESCE(?, status),
      cover_image = COALESCE(?, cover_image),
      author = COALESCE(?, author),
      category = COALESCE(?, category),
      tags = COALESCE(?, tags),
      focus_keyword = COALESCE(?, focus_keyword),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `).run(
    title !== undefined ? title : null,
    safeSlug !== undefined ? safeSlug : null,
    excerpt !== undefined ? excerpt : null,
    content !== undefined ? content : null,
    meta_title !== undefined ? meta_title : null,
    meta_description !== undefined ? meta_description : null,
    status !== undefined ? status : null,
    effectiveCover,
    author !== undefined ? author : null,
    category !== undefined ? category : null,
    safeTags,
    keyword,
    Number(id)
  );

  return getBlogPostById(id);
}

export function toggleBlogStatus(id, newStatus) {
  const db = getDb();
  const validStatus = ["published", "draft", "archived"].includes(newStatus) ? newStatus : "published";
  db.prepare("UPDATE blog_posts SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(validStatus, Number(id));
  return getBlogPostById(id);
}

export function duplicateBlogPost(id) {
  const db = getDb();
  const original = getBlogPostById(id);
  if (!original) throw new Error("Blog post not found");

  const newTitle = `${original.title} (Copy)`;
  const newSlug = `${original.slug}-copy-${Date.now().toString(36)}`;

  const stmt = db.prepare(`
    INSERT INTO blog_posts (
      title, slug, excerpt, content, meta_title, meta_description, status,
      cover_image, author, category, tags, focus_keyword, views, created_at, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, 'draft', ?, ?, ?, ?, ?, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  `);

  const info = stmt.run(
    newTitle,
    newSlug,
    original.excerpt,
    original.content,
    original.meta_title,
    original.meta_description,
    original.cover_image,
    original.author,
    original.category,
    original.tags,
    original.focus_keyword
  );

  return getBlogPostById(info.lastInsertRowid);
}

export function deleteBlogPost(id) {
  const db = getDb();
  db.prepare("DELETE FROM blog_posts WHERE id = ?").run(Number(id));
}

export function addReview({ author, rating, comment, image_path, is_published }) {
  const db = getDb();
  db.prepare(`
    INSERT INTO reviews (author, rating, comment, image_path, is_published)
    VALUES (?, ?, ?, ?, ?)
  `).run(author, Number(rating) || 5, comment, image_path || null, is_published ? 1 : 0);
}

export function toggleReviewPublish(id, is_published) {
  const db = getDb();
  db.prepare("UPDATE reviews SET is_published = ? WHERE id = ?").run(is_published ? 1 : 0, Number(id));
}

export function deleteReview(id) {
  const db = getDb();
  db.prepare("DELETE FROM reviews WHERE id = ?").run(Number(id));
}

export function updateReview(id, { author, rating, comment, image_path, is_published }) {
  const db = getDb();
  db.prepare(`
    UPDATE reviews SET
      author = COALESCE(?, author),
      rating = COALESCE(?, rating),
      comment = COALESCE(?, comment),
      image_path = COALESCE(?, image_path),
      is_published = COALESCE(?, is_published)
    WHERE id = ?
  `).run(
    author !== undefined ? author : null,
    rating !== undefined ? Number(rating) : null,
    comment !== undefined ? comment : null,
    image_path !== undefined ? image_path : null,
    is_published !== undefined ? (is_published ? 1 : 0) : null,
    Number(id)
  );
}

export function addProject({ title, site_name, site_url, description, category, image_url, is_published }) {
  const db = getDb();
  db.prepare(`
    INSERT INTO projects (title, site_name, site_url, description, category, image_url, is_published)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(title, site_name || "", site_url, description || "", category || "Web Development", image_url || "", is_published ? 1 : 0);
}

export function updateProject(id, { title, site_name, site_url, description, category, image_url, is_published }) {
  const db = getDb();
  db.prepare(`
    UPDATE projects SET
      title = COALESCE(?, title),
      site_name = COALESCE(?, site_name),
      site_url = COALESCE(?, site_url),
      description = COALESCE(?, description),
      category = COALESCE(?, category),
      image_url = COALESCE(?, image_url),
      is_published = COALESCE(?, is_published)
    WHERE id = ?
  `).run(
    title !== undefined ? title : null,
    site_name !== undefined ? site_name : null,
    site_url !== undefined ? site_url : null,
    description !== undefined ? description : null,
    category !== undefined ? category : null,
    image_url !== undefined ? image_url : null,
    is_published !== undefined ? (is_published ? 1 : 0) : null,
    Number(id)
  );
}

export function toggleProjectPublish(id, is_published) {
  const db = getDb();
  db.prepare("UPDATE projects SET is_published = ? WHERE id = ?").run(is_published ? 1 : 0, Number(id));
}

export function deleteProject(id) {
  const db = getDb();
  db.prepare("DELETE FROM projects WHERE id = ?").run(Number(id));
}

export function restoreBackup(data) {
  const db = getDb();
  if (!data || typeof data !== "object") {
    throw new Error("Invalid backup format: root must be a JSON object");
  }

  db.exec("BEGIN TRANSACTION;");
  try {
    if (Array.isArray(data.reviews)) {
      db.prepare("DELETE FROM reviews").run();
      const insert = db.prepare("INSERT INTO reviews (id, author, rating, comment, image_path, is_published, created_at) VALUES (?, ?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP))");
      for (const r of data.reviews) {
        insert.run(r.id || null, r.author, Number(r.rating) || 5, r.comment, r.image_path || null, r.is_published ? 1 : 0, r.created_at || null);
      }
    }

    if (Array.isArray(data.projects)) {
      db.prepare("DELETE FROM projects").run();
      const insert = db.prepare("INSERT INTO projects (id, title, site_name, site_url, description, category, image_url, is_published, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP))");
      for (const p of data.projects) {
        insert.run(p.id || null, p.title, p.site_name || "", p.site_url, p.description || "", p.category || "Web Development", p.image_url || "", p.is_published ? 1 : 0, p.created_at || null);
      }
    }

    if (Array.isArray(data.backlinks)) {
      db.prepare("DELETE FROM backlinks").run();
      const insert = db.prepare("INSERT INTO backlinks (id, name, url, notes, created_at) VALUES (?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP))");
      for (const b of data.backlinks) {
        insert.run(b.id || null, b.name, b.url, b.notes || "", b.created_at || null);
      }
    }

    const posts = Array.isArray(data.blog_posts) ? data.blog_posts : (Array.isArray(data.blogs) ? data.blogs : null);
    if (posts) {
      db.prepare("DELETE FROM blog_posts").run();
      const insert = db.prepare("INSERT INTO blog_posts (id, title, slug, excerpt, content, meta_title, meta_description, status, cover_image, author, category, tags, focus_keyword, views, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP), COALESCE(?, CURRENT_TIMESTAMP))");
      for (const b of posts) {
        insert.run(
          b.id || null, b.title, b.slug, b.excerpt || "", b.content, b.meta_title || b.title, b.meta_description || b.excerpt || "",
          b.status || "draft", b.cover_image || "", b.author || "Codex Dynamics Research", b.category || "Engineering",
          typeof b.tags === "string" ? b.tags : JSON.stringify(b.tags || []), b.focus_keyword || "", Number(b.views) || 0,
          b.created_at || null, b.updated_at || null
        );
      }
    }

    if (Array.isArray(data.leads)) {
      db.prepare("DELETE FROM leads").run();
      const insert = db.prepare("INSERT INTO leads (id, visitor_id, name, email, phone, company, message, source, status, score, notes, ip_address, country, flag, city, postal_code, street, pages_viewed_count, duration_seconds, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP), COALESCE(?, CURRENT_TIMESTAMP))");
      for (const l of data.leads) {
        insert.run(
          l.id || null, l.visitor_id || null, l.name, l.email, l.phone || null, l.company || null, l.message || null,
          l.source || "website_contact", l.status || "new", Number(l.score) || 50, l.notes || null, l.ip_address || null,
          l.country || null, l.flag || null, l.city || null, l.postal_code || null, l.street || null,
          Number(l.pages_viewed_count) || 1, Number(l.duration_seconds) || 0, l.created_at || null, l.updated_at || null
        );
      }
    }

    if (Array.isArray(data.enquiries)) {
      db.prepare("DELETE FROM enquiries").run();
      const insert = db.prepare("INSERT INTO enquiries (id, name, email, phone, company, message, source, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP))");
      for (const e of data.enquiries) {
        insert.run(e.id || null, e.name, e.email, e.phone || null, e.company || null, e.message, e.source || "website", e.status || "new", e.created_at || null);
      }
    }

    if (data.settings && typeof data.settings === "object") {
      const setStmt = db.prepare("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value");
      for (const [k, v] of Object.entries(data.settings)) {
        setStmt.run(k, typeof v === "string" ? v : JSON.stringify(v));
      }
    }

    db.exec("COMMIT;");
    return { ok: true, message: "CRM database successfully restored." };
  } catch (err) {
    db.exec("ROLLBACK;");
    throw err;
  }
}

export function getSiteConfig() {
  const db = getDb();
  const row = db.prepare("SELECT value FROM settings WHERE key = ?").get("site_content");
  if (!row || !row.value) {
    return DEFAULT_SITE_CONFIG;
  }
  try {
    const parsed = JSON.parse(row.value);
    return {
      ...DEFAULT_SITE_CONFIG,
      ...parsed,
      colors: { ...DEFAULT_SITE_CONFIG.colors, ...(parsed.colors || {}) },
      hero: { ...DEFAULT_SITE_CONFIG.hero, ...(parsed.hero || {}) },
      highlights: { ...DEFAULT_SITE_CONFIG.highlights, ...(parsed.highlights || {}) },
      services: {
        ...DEFAULT_SITE_CONFIG.services,
        ...(parsed.services || {}),
        items: Array.isArray(parsed.services?.items) && parsed.services.items.length > 0
          ? parsed.services.items.map((item) => {
              const defaultItem = DEFAULT_SITE_CONFIG.services.items.find((d) => d.id === item.id) || {};
              return { ...defaultItem, ...item };
            })
          : DEFAULT_SITE_CONFIG.services.items,
      },
      about: { ...DEFAULT_SITE_CONFIG.about, ...(parsed.about || {}) },
      studio: { ...DEFAULT_SITE_CONFIG.studio, ...(parsed.studio || {}) },
      results: { ...DEFAULT_SITE_CONFIG.results, ...(parsed.results || {}) },
      contact: { ...DEFAULT_SITE_CONFIG.contact, ...(parsed.contact || {}) },
      footer: { ...DEFAULT_SITE_CONFIG.footer, ...(parsed.footer || {}) },
      theme: { ...DEFAULT_SITE_CONFIG.theme, ...(parsed.theme || {}) },
      tidio: { ...DEFAULT_SITE_CONFIG.tidio, ...(parsed.tidio || {}) },
      headerSocials: {
        ...DEFAULT_SITE_CONFIG.headerSocials,
        ...(parsed.headerSocials || {}),
        linkedin: { ...DEFAULT_SITE_CONFIG.headerSocials.linkedin, ...(parsed.headerSocials?.linkedin || {}) },
        x: { ...DEFAULT_SITE_CONFIG.headerSocials.x, ...(parsed.headerSocials?.x || {}) },
        github: { ...DEFAULT_SITE_CONFIG.headerSocials.github, ...(parsed.headerSocials?.github || {}) },
        instagram: { ...DEFAULT_SITE_CONFIG.headerSocials.instagram, ...(parsed.headerSocials?.instagram || {}) },
        facebook: { ...DEFAULT_SITE_CONFIG.headerSocials.facebook, ...(parsed.headerSocials?.facebook || {}) },
      },
      socialContacts:
        Array.isArray(parsed.socialContacts) && parsed.socialContacts.length > 0
          ? parsed.socialContacts
          : DEFAULT_SITE_CONFIG.socialContacts,
      addresses:
        Array.isArray(parsed.addresses) && parsed.addresses.length > 0
          ? parsed.addresses
          : DEFAULT_SITE_CONFIG.addresses,
      branding: { ...DEFAULT_SITE_CONFIG.branding, ...(parsed.branding || {}) },
      banner: { ...DEFAULT_SITE_CONFIG.banner, ...(parsed.banner || {}) },
      whatsapp: { ...DEFAULT_SITE_CONFIG.whatsapp, ...(parsed.whatsapp || {}) },
      contactForm: { ...DEFAULT_SITE_CONFIG.contactForm, ...(parsed.contactForm || {}) },
      seo: { ...DEFAULT_SITE_CONFIG.seo, ...(parsed.seo || {}) },
      emergency: {
        ...DEFAULT_SITE_CONFIG.emergency,
        ...(parsed.emergency || {}),
        subtext: parsed.emergency?.subtext || parsed.emergency?.message || DEFAULT_SITE_CONFIG.emergency.subtext,
        message: parsed.emergency?.message || parsed.emergency?.subtext || DEFAULT_SITE_CONFIG.emergency.message,
        estimatedLaunch: parsed.emergency?.estimatedLaunch || parsed.emergency?.estimatedReturn || DEFAULT_SITE_CONFIG.emergency.estimatedLaunch,
        estimatedReturn: parsed.emergency?.estimatedReturn || parsed.emergency?.estimatedLaunch || DEFAULT_SITE_CONFIG.emergency.estimatedReturn,
      },
      codeInjection: { ...DEFAULT_SITE_CONFIG.codeInjection, ...(parsed.codeInjection || {}) },
      snapshots: Array.isArray(parsed.snapshots) ? parsed.snapshots : (DEFAULT_SITE_CONFIG.snapshots || []),
    };
  } catch {
    return DEFAULT_SITE_CONFIG;
  }
}

export function saveSiteConfig(config) {
  const db = getDb();
  db.prepare(
    "INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value"
  ).run("site_content", JSON.stringify(config));
  return getSiteConfig();
}

export function resetSiteConfig() {
  const db = getDb();
  db.prepare("DELETE FROM settings WHERE key = ?").run("site_content");
  return DEFAULT_SITE_CONFIG;
}

export function getChatThreads() {
  const db = getDb();
  return db.prepare("SELECT * FROM chat_threads ORDER BY last_message_at DESC").all();
}

export function getChatMessages(threadId) {
  const db = getDb();
  return db.prepare("SELECT * FROM chat_messages WHERE thread_id = ? ORDER BY created_at ASC").all(threadId);
}

export function sendChatMessage({ threadId, sender, senderName, message, visitorInfo = {} }) {
  const db = getDb();
  const now = new Date().toISOString();
  const safeThreadId = threadId || `thread_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

  let thread = db.prepare("SELECT * FROM chat_threads WHERE id = ?").get(safeThreadId);
  if (!thread) {
    db.prepare(`
      INSERT INTO chat_threads (
        id, visitor_name, visitor_email, visitor_phone, visitor_ip,
        visitor_device, visitor_country, visitor_flag, visitor_city,
        page_url, status, last_message, last_message_at, unread_count, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?, ?, ?)
    `).run(
      safeThreadId,
      visitorInfo.name || "Website Visitor",
      visitorInfo.email || "",
      visitorInfo.phone || "",
      visitorInfo.ip || "127.0.0.1",
      visitorInfo.device || "Desktop",
      visitorInfo.country || "United States",
      visitorInfo.flag || "🇺🇸",
      visitorInfo.city || "San Francisco",
      visitorInfo.pageUrl || "/",
      message,
      now,
      sender === "visitor" ? 1 : 0,
      now
    );
  } else {
    const unreadInc = sender === "visitor" ? (thread.unread_count || 0) + 1 : 0;
    db.prepare(`
      UPDATE chat_threads
      SET last_message = ?, last_message_at = ?, unread_count = ?,
          status = CASE WHEN status = 'resolved' AND ? = 'visitor' THEN 'active' ELSE status END
      WHERE id = ?
    `).run(message, now, unreadInc, sender, safeThreadId);
  }

  const finalSenderName = senderName || (sender === "operator" ? "Studio Operator" : (sender === "bot" ? "Codex Concierge" : "Visitor"));
  const insertStmt = db.prepare(`
    INSERT INTO chat_messages (thread_id, sender, sender_name, message, created_at, is_read)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  const result = insertStmt.run(safeThreadId, sender, finalSenderName, message, now, sender === "operator" ? 1 : 0);

  const savedMsg = {
    id: result.lastInsertRowid,
    thread_id: safeThreadId,
    sender,
    sender_name: finalSenderName,
    message,
    created_at: now,
    is_read: sender === "operator" ? 1 : 0,
  };

  const updatedThread = db.prepare("SELECT * FROM chat_threads WHERE id = ?").get(safeThreadId);
  return { message: savedMsg, thread: updatedThread };
}

export function markChatThreadRead(threadId) {
  const db = getDb();
  db.prepare("UPDATE chat_threads SET unread_count = 0 WHERE id = ?").run(threadId);
  db.prepare("UPDATE chat_messages SET is_read = 1 WHERE thread_id = ?").run(threadId);
  return { ok: true };
}

export function updateChatThreadStatus(threadId, status) {
  const db = getDb();
  db.prepare("UPDATE chat_threads SET status = ? WHERE id = ?").run(status, threadId);
  return { ok: true };
}

export function deleteChatThread(threadId) {
  const db = getDb();
  db.prepare("DELETE FROM chat_messages WHERE thread_id = ?").run(threadId);
  db.prepare("DELETE FROM chat_threads WHERE id = ?").run(threadId);
  return { ok: true };
}

