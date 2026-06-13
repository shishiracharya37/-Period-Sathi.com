const DATA = window.PeriodSathiData;

const ROUTES = [
  { key: "home", hash: "#/", label: "Home", labelNe: "गृहपृष्ठ", icon: "⌂", title: "PeriodSathi Nepal" },
  { key: "education", hash: "#/education", label: "Learn", labelNe: "सिक्नुहोस्", icon: "📖", title: "Education Hub" },
  { key: "myths-facts", hash: "#/myths-facts", label: "Myths & Facts", labelNe: "मिथ्या/सत्य", icon: "✅", title: "Myths vs Facts" },
  { key: "tracker", hash: "#/tracker", label: "Tracker", labelNe: "ट्र्याकर", icon: "📅", title: "Period Tracker" },
  { key: "chatbot", hash: "#/chatbot", label: "Ask AI", labelNe: "AI सोध्नुहोस्", icon: "🤖", title: "AI Chatbot" },
  { key: "hospital-finder", hash: "#/hospital-finder", label: "Hospitals", labelNe: "अस्पताल", icon: "🏥", title: "Hospital Finder" },
  { key: "ngo-directory", hash: "#/ngo-directory", label: "NGOs", labelNe: "NGO", icon: "🤝", title: "NGO Directory" },
  { key: "community", hash: "#/community", label: "Community", labelNe: "समुदाय", icon: "💬", title: "Community Forum" },
  { key: "donate", hash: "#/donate", label: "Donate", labelNe: "सहयोग", icon: "💜", title: "Donate" },
  { key: "dashboard", hash: "#/dashboard", label: "Dashboard", labelNe: "ड्यासबोर्ड", icon: "📊", title: "Admin Dashboard" },
];

const MOBILE_ROUTES = ["home", "education", "tracker", "chatbot", "hospital-finder"];

const COPY = {
  en: {
    tagline: "Your Health, Your Strength",
    heroSub: "Breaking the Silence on Menstrual Health in Nepal",
    heroBody: "A safe space for every Nepali woman to understand her body, access health resources, and break free from stigma.",
    track: "Start Tracking",
    chat: "Ask AI Chatbot",
    getStarted: "Get Started",
    language: "ने",
    theme: "Theme",
    footerNote: "A hackathon prototype. Not a medical service.",
    askPlaceholder: "Ask anything about your health...",
    thinking: "पिरियड साथी सोच्दैछ...",
    disclaimer: "यो AI सिमुलेशन हो। गम्भीर स्वास्थ्य समस्याको लागि डाक्टरसँग परामर्श गर्नुहोस्।",
    resources: "Resources",
    support: "Support",
    emergency: "Emergency",
    educationHub: "Education Hub",
    mythsFacts: "Myths & Facts",
    findHospital: "Find Hospital",
    ngoDirectory: "NGO Directory",
    dayGuide: "Day Guide",
    learnBody: "Learn your body without shame",
    educationHero: "Articles, video-style explainers, a hormone journey infographic, and fast facts for menstrual health literacy.",
    findHelp: "Find Help",
    hospitals: "Hospital Finder",
    browsePlaceholder: "Browse simulated, hardcoded hospital listings across all 7 provinces. No network, no location tracking.",
    mythsTitle: "Myths vs Facts",
    mythsHero: "Separate fear from facts about menstruation, health, and body literacy.",
    communityTitle: "You're not alone",
    communityHero: "A simulated forum where Nepali women can share questions, experiences, advice, and moments of honesty without exposing their identity.",
    communityFeed: "Community Feed",
    anonymousForum: "यो forum पूर्णतः anonymous छ। कुनै व्यक्तिगत जानकारी सेयर गर्नुपर्दैन।",
    newPost: "New Post",
    trendingTags: "Trending Tags",
    emergencyNote: "For emergencies or violence risk, contact Nepal Police 100, Women's helpline 1145, or a local health post.",
    ngoDir: "NGO Directory",
    ngoHero: "Organizations working on menstrual health, Chhaupadi elimination, WASH, education, and gender-based violence support in Nepal.",
    donate: "Donate",
    helpBreakSilence: "Help Us Break The Silence",
    giveDignity: "Give dignity, not silence",
    impactCounter: "Impact Counter",
    womenReached: "Women and girls reached through education, supplies, and community partners.",
    partnerNgos: "Partner NGOs",
    builtAround: "Built around real support networks",
    admin: "Admin Preview",
    dashboard: "Impact Dashboard",
    fundable: "A SaaS-style view of the product's potential operating metrics, designed to make the prototype feel fundable.",
    overview: "Overview",
    users: "Users",
    articles: "Articles",
    reports: "Reports",
    settings: "Settings",
    totalUsers: "Total Users",
    activeThisMonth: "Active This Month",
    chatsCompleted: "Chats Completed",
    articlesRead: "Articles Read",
  },
  ne: {
    tagline: "तपाईंको स्वास्थ्य, तपाईंको शक्ति",
    heroSub: "नेपालमा महिनावारी स्वास्थ्यबारे मौनता तोड्दै",
    heroBody: "हरेक नेपाली महिलाले आफ्नो शरीर बुझ्न, स्वास्थ्य स्रोत पाउन, र कलंकबाट मुक्त हुन सक्ने सुरक्षित ठाउँ।",
    track: "ट्र्याकिङ सुरु गर्नुहोस्",
    chat: "AI सँग सोध्नुहोस्",
    getStarted: "सुरु गर्नुहोस्",
    language: "EN",
    theme: "थिम",
    footerNote: "Hackathon prototype. चिकित्सकीय सेवाको विकल्प होइन।",
    askPlaceholder: "आफ्नो स्वास्थ्यबारे जे पनि सोध्नुहोस्...",
    thinking: "पिरियड साथी सोच्दैछ...",
    disclaimer: "यो AI सिमुलेशन हो। गम्भीर समस्याको लागि डाक्टरसँग परामर्श गर्नुहोस्।",
    resources: "स्रोतहरू",
    support: "सहयोग",
    emergency: "आपातकाल",
    educationHub: "शिक्षा केन्द्र",
    mythsFacts: "मिथ्या/सत्य",
    findHospital: "अस्पताल खोज्नुहोस्",
    ngoDirectory: "NGO निर्देशिका",
    dayGuide: "दैनिक गाइड",
    learnBody: "लाज बिना आफ्नो शरीर सिक्नुहोस्",
    educationHero: "लेख, भिडियो शैली व्याख्याकार, हार्मोन यात्रा इनफोग्राफिक, र महिनावारी स्वास्थ्य साक्षरताको लागि द्रुत तथ्य।",
    findHelp: "सहायता खोज्नुहोस्",
    hospitals: "अस्पताल खोज्नुहोस्",
    browsePlaceholder: "सबै ७ प्रदेशमा नकल गरिएको अस्पताल सूचीहरू ब्राउज गर्नुहोस्। कोनै नेटवर्क, कोनै स्थान ट्र्याकिङ छैन।",
    mythsTitle: "मिथ्या बनाम सत्य",
    mythsHero: "महिनावारी, स्वास्थ्य, र शरीर साक्षरताको बारेमा डर र तथ्य अलग गर्नुहोस्।",
    communityTitle: "तपाई एक्लै हुनुहुन्न",
    communityHero: "एक नकल गरिएको फोरम जहाँ नेपाली महिलाहरुले आफ्नो पहिचान बताए बिना प्रश्न, अनुभव, सल्लाह, र इमान्दारीको क्षण साझा गर्न सक्छन्।",
    communityFeed: "समुदाय फिड",
    anonymousForum: "यो forum पूर्णतः anonymous छ। कुनै व्यक्तिगत जानकारी सेयर गर्नुपर्दैन।",
    newPost: "नयाँ पोस्ट",
    trendingTags: "प्रवाहमान ट्यागहरू",
    emergencyNote: "आपातकाल वा हिंसा जोखिमको लागि, नेपाल पुलिस १००, महिला हेल्पलाइन ११४५, वा स्थानीय स्वास्थ्य पोस्टमा सम्पर्क गर्नुहोस्।",
    ngoDir: "NGO निर्देशिका",
    ngoHero: "महिनावारी स्वास्थ्य, छाउपडी उन्मूलन, WASH, शिक्षा, र नेपालमा लिङ्ग-आधारित हिंसा समर्थनमा काम गरिरहेका संस्थाहरू।",
    donate: "दान गर्नुहोस्",
    helpBreakSilence: "मौनता तोड्न हामलाई मद्दत गर्नुहोस्",
    giveDignity: "गरिमा दिनुहोस्, मौनता होइन",
    impactCounter: "प्रभाव काउन्टर",
    womenReached: "शिक्षा, आपूर्ति, र समुदाय साझेदारीहरूको माध्यमबाट पहुँच गरिएका महिला र केटीहरू।",
    partnerNgos: "साझेदार NGO",
    builtAround: "वास्तविक समर्थन नेटवर्कको वरिपरि निर्मित",
    admin: "प्रशासक पूर्वावलोकन",
    dashboard: "प्रभाव ड्यासबोर्ड",
    fundable: "उत्पादको सम्भावित अपरेटिङ मेट्रिक्सको SaaS-शैली दृश्य, प्रोटोटाइप वित्तपोषणयोग्य अनुभव गराउन डिजाइन गरिएको।",
    overview: "सारांश",
    users: "प्रयोगकर्ता",
    articles: "लेखहरू",
    reports: "रिपोर्टहरू",
    settings: "सेटिङहरू",
    totalUsers: "कुल प्रयोगकर्ता",
    activeThisMonth: "यस महिना सक्रिय",
    chatsCompleted: "पूरा गरिएका च्यातहरू",
    articlesRead: "पढिएका लेखहरू",
  },
};

const today = new Date();

const state = {
  lang: localStorage.getItem("periodsathi_lang") || "en",
  theme: localStorage.getItem("periodsathi_theme") || "light",
  mobileMenu: false,
  selectedProvince: "Karnali",
  mythFilter: "All",
  hospitalProvince: "All",
  hospitalDistrict: "All",
  hospitalService: "All",
  hospitalType: "All",
  hospitalSearch: "",
  communityPosts: loadJSON("periodsathi_posts", DATA.posts),
  postModal: false,
  commentModal: false,
  selectedPostId: null,
  articleModal: false,
  selectedArticleId: null,
  bookmarkedPosts: loadJSON("periodsathi_bookmarks", []),
  sharedPosts: loadJSON("periodsathi_shares", []),
  chatMessages: [
    {
      role: "ai",
      text: "Namaste, म PeriodSathi AI हुँ। You can ask about cramps, late periods, hygiene, mood swings, PCOS, Chhaupadi, or finding a doctor. Everything here is private in this browser.",
    },
  ],
  chatTyping: false,
  trackerMonth: new Date(today.getFullYear(), today.getMonth(), 1),
  selectedTrackerDate: isoDate(today),
  trackerData: loadTrackerData(),
};

document.documentElement.dataset.theme = state.theme;
document.documentElement.lang = state.lang === "ne" ? "ne" : "en";

function loadJSON(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function loadTrackerData() {
  const fallback = {
    periodDays: [],
    cycleLength: 28,
    periodLength: 5,
    lastStart: new Date(today.getFullYear(), today.getMonth(), Math.max(1, today.getDate() - 3)).toISOString().slice(0, 10),
    records: [
      { start: "2026-04-10", end: "2026-04-15" },
      { start: "2026-03-12", end: "2026-03-17" },
      { start: "2026-02-08", end: "2026-02-13" },
    ],
  };
  const loaded = loadJSON("periodsathi_data", fallback);
  return { ...fallback, ...loaded, periodDays: loaded.periodDays || fallback.periodDays, records: loaded.records || fallback.records };
}

function saveTrackerData() {
  localStorage.setItem("periodsathi_data", JSON.stringify(state.trackerData));
}

function savePosts() {
  localStorage.setItem("periodsathi_posts", JSON.stringify(state.communityPosts));
}

function saveBookmarks() {
  localStorage.setItem("periodsathi_bookmarks", JSON.stringify(state.bookmarkedPosts));
}

function saveShares() {
  localStorage.setItem("periodsathi_shares", JSON.stringify(state.sharedPosts));
}

function routeKey() {
  const raw = (location.hash || "#/").replace(/^#\/?/, "");
  return raw || "home";
}

function routeByKey(key) {
  return ROUTES.find((route) => route.key === key) || ROUTES[0];
}

function setRoute(key) {
  const route = routeByKey(key);
  location.hash = route.hash;
}

function t(key) {
  return COPY[state.lang][key] || COPY.en[key] || key;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isoDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function niceDate(value) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en", { month: "short", day: "numeric" });
}

function daysBetween(start, end) {
  const startDate = new Date(`${start}T12:00:00`);
  const endDate = new Date(`${end}T12:00:00`);
  return Math.round((endDate - startDate) / 86400000);
}

function addDays(value, days) {
  const d = new Date(`${value}T12:00:00`);
  d.setDate(d.getDate() + days);
  return isoDate(d);
}

function isBetween(value, start, end) {
  return value >= start && value <= end;
}

function appTemplate(content) {
  const active = routeKey();
  return `
    <div class="shell">
      ${navbar(active)}
      <main class="main" id="main" tabindex="-1">${content}</main>
      ${footer()}
      ${mobileBottomNav(active)}
      ${state.mobileMenu ? mobileMenu(active) : ""}
      ${state.postModal ? postModal() : ""}
      ${state.commentModal ? commentModal() : ""}
      ${state.articleModal ? articleDetailModal() : ""}
    </div>
  `;
}

function navbar(active) {
  const visibleRoutes = ["home", "education", "myths-facts", "tracker", "chatbot", "hospital-finder", "community"];
  return `
    <header class="navbar">
      <a class="brand" href="#/" aria-label="PeriodSathi Nepal home">
        <span class="brand-mark" aria-hidden="true">🌸</span>
        <span class="brand-text">
          <strong>PeriodSathi Nepal</strong>
          <span>पिरियड साथी</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        ${visibleRoutes.map((key) => navLink(routeByKey(key), active)).join("")}
      </nav>
      <div class="nav-actions">
        <button class="plain-button" data-action="toggle-lang" aria-label="Toggle language">${t("language")}</button>
        <button class="icon-button" data-action="toggle-theme" aria-label="Toggle dark or light mode">${state.theme === "dark" ? "☀" : "☾"}</button>
        <button class="primary-button" data-route="tracker">${t("getStarted")}</button>
        <button class="icon-button hamburger" data-action="toggle-menu" aria-label="Open menu">☰</button>
      </div>
    </header>
  `;
}

function navLink(route, active) {
  const label = state.lang === "ne" ? route.labelNe : route.label;
  return `<a class="nav-link ${active === route.key ? "active" : ""}" href="${route.hash}">${escapeHTML(label)}</a>`;
}

function mobileMenu(active) {
  return `
    <div class="mobile-menu open" role="dialog" aria-modal="true" aria-label="Mobile menu">
      <button class="icon-button" data-action="toggle-menu" aria-label="Close menu" style="position:absolute;top:1rem;right:1rem;">×</button>
      ${ROUTES.map((route) => `<a class="${active === route.key ? "active" : ""}" href="${route.hash}" data-action="close-menu">${escapeHTML(state.lang === "ne" ? route.labelNe : route.label)}</a>`).join("")}
    </div>
  `;
}

function mobileBottomNav(active) {
  return `
    <nav class="mobile-bottom-nav" aria-label="Mobile bottom navigation">
      ${MOBILE_ROUTES.map((key) => {
        const route = routeByKey(key);
        return `<a class="bottom-link ${active === key ? "active" : ""}" href="${route.hash}">
          <strong aria-hidden="true">${route.icon}</strong>
          <span>${escapeHTML(state.lang === "ne" ? route.labelNe : route.label)}</span>
        </a>`;
      }).join("")}
    </nav>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer-accent"></div>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="#/">
              <span class="brand-mark" aria-hidden="true">🌸</span>
              <span class="brand-text">
                <strong>PeriodSathi</strong>
                <span>${t("tagline")}</span>
              </span>
            </a>
            <p class="muted footer-desc">A safe, private, offline space for Nepali women and girls to understand their bodies, access menstrual health resources, and break free from stigma.</p>
            <div class="social-links" aria-label="Social links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <nav class="footer-nav">
            <h3>${t("resources")}</h3>
            <a href="#/education">${t("educationHub")}</a>
            <a href="#/myths-facts">${t("mythsFacts")}</a>
            <a href="#/education">📚 Articles</a>
            <a href="#/education">🎥 Videos</a>
          </nav>

          <nav class="footer-nav">
            <h3>${t("support")}</h3>
            <a href="#/hospital-finder">${t("findHospital")}</a>
            <a href="#/ngo-directory">${t("ngoDirectory")}</a>
            <a href="#/community">${t("communityFeed")}</a>
            <a href="#/chatbot">💬 AI Chatbot</a>
          </nav>

          <nav class="footer-nav">
            <h3>${t("emergency")}</h3>
            <a href="tel:1145" class="emergency-link">
              <span class="emergency-icon">📞</span>
              <span>Women's Helpline<br><strong>1145</strong></span>
            </a>
            <a href="tel:100" class="emergency-link">
              <span class="emergency-icon">🛡️</span>
              <span>Nepal Police<br><strong>100</strong></span>
            </a>
            <a href="tel:014102030" class="emergency-link">
              <span class="emergency-icon">🏠</span>
              <span>WOREC<br><strong>01-4102030</strong></span>
            </a>
          </nav>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <span>© 2026 PeriodSathi Nepal</span>
          </div>
          <button class="back-to-top" data-action="back-to-top" aria-label="Back to top">↑ Back to top</button>
        </div>
      </div>
    </footer>
  `;
}

function render() {
  const key = routeKey();
  const route = routeByKey(key);
  document.title = `${route.title} | PeriodSathi Nepal`;
  document.documentElement.lang = state.lang === "ne" ? "ne" : "en";
  document.documentElement.dataset.theme = state.theme;

  const pages = {
    home: homePage,
    education: educationPage,
    "myths-facts": mythsPage,
    tracker: trackerPage,
    chatbot: chatbotPage,
    "hospital-finder": hospitalFinderPage,
    "ngo-directory": ngoDirectoryPage,
    community: communityPage,
    donate: donatePage,
    dashboard: dashboardPage,
  };

  const content = (pages[key] || homePage)();
  document.getElementById("app").innerHTML = appTemplate(content);
  bindEvents();
  revealOnScroll();
  animateCounters();
  if (key === "chatbot") scrollChatToBottom();
}

function homePage() {
  return `
    <section class="hero page">
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1 class="hero-title reveal" style="transition-delay:.08s;">
            <span class="nepali">पिरियड साथी</span>
            <span class="english">${t("tagline")}</span>
          </h1>
          <p class="lead reveal" style="transition-delay:.16s;"><strong>${t("heroSub")}</strong></p>
          <p class="lead reveal" style="transition-delay:.24s;">${t("heroBody")}</p>
          <div class="hero-actions reveal" style="transition-delay:.32s;">
            <button class="primary-button" data-route="tracker">📅 ${t("track")}</button>
            <button class="secondary-button" data-route="chatbot">🤖 ${t("chat")}</button>
          </div>
          <div class="stat-pill reveal" style="transition-delay:.4s;">🌸 88% of women in Nepal lack safe menstrual materials</div>
        </div>
        <div class="hero-visual reveal" style="transition-delay:.18s;" aria-label="PeriodSathi mobile app preview">
          <div class="floating-card one"><strong>71%</strong><br><span class="muted small">girls miss school during periods</span></div>
          <div class="phone-mock" aria-hidden="true">
            <div class="phone-top"></div>
            <div class="phone-screen">
              <div class="mini-cycle"><div>Day 3<br><span class="muted small">Menstrual</span></div></div>
              <div class="mini-card">
                <strong>Today</strong>
                <p class="muted small">Papaya, eggs, warm tea, light yoga</p>
              </div>
              <div class="mini-list">
                <span>🌿 Ginger tea with honey</span>
                <span>🧘 Child's Pose</span>
                <span>🏥 Find help nearby</span>
              </div>
            </div>
          </div>
          <div class="floating-card two"><strong>छाउपडी</strong><br><span class="muted small">criminalized in 2018</span></div>
        </div>
      </div>
      <a class="scroll-cue" href="#impact" aria-label="Scroll to impact"><span>↓</span></a>
    </section>
    <section class="section compact" id="impact">
      <div class="container grid four">
        ${DATA.stats.map((stat, i) => `
          <article class="card stat-card hover-card reveal" style="transition-delay:${i * 0.06}s;">
            <div class="stat-icon">${stat.icon}</div>
            <div>
              <div class="stat-value" data-count="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
              <p class="muted">${escapeHTML(state.lang === "ne" ? stat.labelNe : stat.label)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="section-heading center reveal">
          <span class="eyebrow">Built For The Full Journey</span>
          <h2>Care, education, and support in one quiet place</h2>
          <p class="lead">Designed for a judge to feel the problem, try the tools, and see a real path to impact in under five minutes.</p>
        </div>
        <div class="grid three">
          ${DATA.features.map((feature, i) => `
            <article class="card feature-card hover-card reveal" data-route="${feature.route}" tabindex="0" role="button" aria-label="${escapeHTML(feature.title)}" style="transition-delay:${i * 0.05}s;">
              <div class="feature-icon">${feature.icon}</div>
              <div>
                <h3>${escapeHTML(feature.title)}</h3>
                <p class="muted">${escapeHTML(feature.text)}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    ${provinceMapSection()}
    <section class="section">
      <div class="container">
        <div class="section-heading center reveal">
          <span class="eyebrow">Anonymous Stories</span>
          <h2>When shame gets named, it gets smaller</h2>
        </div>
        <div class="grid three">
      ${DATA.testimonials.map((story, i) => `
        <article class="card testimonial-card hover-card reveal" style="transition-delay:${i * 0.08}s;">
          <p style="font-size:1.1rem;">"${escapeHTML(story.quote)}"</p>
          <div class="testimonial-meta">
            <span class="avatar testimonial-avatar">${story.initials}</span>
            <span class="testimonial-author">${escapeHTML(story.author)}, ${story.age}</span>
            <span class="testimonial-sep">•</span>
            <span class="testimonial-place">${escapeHTML(story.place)}</span>
          </div>
        </article>
      `).join("")}
        </div>
      </div>
    </section>
  `;
}

function provinceMapSection() {
  const provinces = [
    { num: 7, name: "Sudurpashchim", ne: "सुदूरपश्चिम", color: "#DC143C", access: 60 },
    { num: 6, name: "Karnali", ne: "कर्णाली", color: "#22A039", access: 55 },
    { num: 5, name: "Lumbini", ne: "लुम्बिनी", color: "#C4B454", access: 48 },
    { num: 4, name: "Gandaki", ne: "गण्डकी", color: "#87CEEB", access: 72 },
    { num: 3, name: "Bagmati", ne: "बाग्मती", color: "#FFB347", access: 85 },
    { num: 2, name: "Madhesh", ne: "मधेश", color: "#FFD700", access: 42 },
    { num: 1, name: "Koshi", ne: "कोशी", color: "#2D7E3E", access: 68 }
  ];

  return `
    <section class="section" id="province-map">
      <div class="container">
        <div class="section-heading reveal">
          <span class="eyebrow">7 Provinces, Unequal Access</span>
          <h2>Nepal Provinces Map</h2>
          <p class="lead">Healthcare access shifts dramatically by geography. Karnali and Sudurpashchim still carry the heaviest burden of distance, taboo, and infrastructure gaps.</p>
        </div>
        
        <div class="card map-wrap reveal" style="display: grid; grid-template-columns: 1fr 240px; gap: 2rem; align-items: start;">
          <!-- Map Image -->
          <div>
            <img src="./public/images/nepal-map.svg" alt="Interactive map of Nepal showing 7 provinces with healthcare access data" style="width: 100%; background: #f0f4f8; border-radius: 8px;" />
          </div>

          <!-- Legend Sidebar -->
          <div style="border-left: 1px solid var(--border-color); padding-left: 1.5rem;">
            <h4 style="margin: 0 0 1rem 0; font-size: 1rem;">Legend</h4>
            <div style="display: flex; flex-direction: column; gap: 0.7rem;">
              ${provinces.sort((a, b) => b.num - a.num).map(p => `
                <div style="display: flex; align-items: center; gap: 0.7rem; cursor: pointer; padding: 0.5rem; border-radius: 4px; transition: background 0.2s;" onmouseover="this.style.background='var(--bg-secondary)'" onmouseout="this.style.background='transparent'">
                  <div style="width: 16px; height: 16px; background: ${p.color}; border-radius: 2px; border: 1px solid white;"></div>
                  <div style="flex: 1; font-size: 0.9rem;">
                    <div style="font-weight: 500;">${p.name}</div>
                    <div style="color: var(--text-secondary); font-size: 0.85rem;">${p.access}% access</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Province Details Grid -->
        <div class="province-details-grid reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; margin-top: 2rem;">
          ${provinces.map(p => `
            <div class="card" style="border-left: 4px solid ${p.color}; padding: 1.2rem; background: var(--bg-secondary);">
              <div style="font-size: 1.2rem; font-weight: bold; color: ${p.color}; margin-bottom: 0.3rem;">P${p.num}</div>
              <h4 style="margin: 0.3rem 0; font-size: 1rem;">${p.name}</h4>
              <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">${p.ne}</p>
              <p style="margin: 0.5rem 0 0 0; font-size: 1.1rem; color: ${p.color}; font-weight: bold;">${p.access}%</p>
              <p style="margin: 0.2rem 0 0 0; font-size: 0.8rem; color: var(--text-tertiary);">Healthcare Access</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function chatbotPage() {
  const suggestions = [
    "Period cramps",
    "Late period",
    "Mood swings",
    "Home remedies",
    "Hygiene tips",
    "Is this normal?",
    "Find a doctor",
    "छाउपडी",
    "PCOS symptoms",
    "First period",
  ];
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">Private & Confidential</span>
        <h1 class="reveal">🌸 PeriodSathi AI</h1>
        <p class="lead reveal">A simulated offline chatbot for anonymous menstrual health questions. No API, no account, no saved identity.</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container chat-layout">
        <aside class="card suggestions reveal">
          <h3>Suggested Questions</h3>
          <div class="chip-list">
            ${suggestions.map((item) => `<button class="chip" data-chat-suggest="${escapeHTML(item)}">${escapeHTML(item)}</button>`).join("")}
          </div>
          <div class="faq-list">
            ${["Why are cramps painful?", "Is cloth safe?", "What is PCOS?", "What if I am forced into Chhaupadi?", "When should I see a doctor?"].map((q) => `
              <button class="faq-button" data-chat-suggest="${escapeHTML(q)}">${escapeHTML(q)}</button>
            `).join("")}
          </div>
          <div class="disclaimer">${t("disclaimer")}</div>
        </aside>
        <section class="card chat-panel reveal" aria-label="Chat interface">
          <div class="chat-header">
            <div class="avatar-row">
              <span class="avatar">🌸</span>
              <div><h3>PeriodSathi AI</h3><span class="muted small">Ask safely, anonymously</span></div>
            </div>
            <span class="status-badge"><i class="status-dot"></i> Offline simulation</span>
          </div>
          <div class="messages" id="messages" aria-live="polite">
            ${state.chatMessages.map(messageTemplate).join("")}
            ${state.chatTyping ? typingTemplate() : ""}
          </div>
          <form class="chat-form" data-form="chat">
            <input id="chat-input" name="message" autocomplete="off" placeholder="${t("askPlaceholder")}" aria-label="${t("askPlaceholder")}" />
            <button class="primary-button" aria-label="Send message">➤</button>
          </form>
        </section>
      </div>
    </section>
  `;
}

function messageTemplate(message) {
  return `
    <div class="message ${message.role}">
      <div class="bubble">${escapeHTML(message.text)}</div>
      <span class="message-meta">${message.role === "ai" ? "PeriodSathi" : "You"}</span>
    </div>
  `;
}

function typingTemplate() {
  return `
    <div class="message ai">
      <div class="bubble">
        <span class="typing" aria-label="${t("thinking")}"><i></i><i></i><i></i></span>
        <span class="muted small" style="margin-left:.5rem;">${t("thinking")}</span>
      </div>
    </div>
  `;
}

function getChatResponse(input) {
  const lower = input.toLowerCase();
  const match = DATA.chatbotResponses.find((item) => item.keys.some((key) => lower.includes(key.toLowerCase())));
  if (match) return match.response;
  return "I can help with period pain, late periods, hygiene, mood changes, PCOS, Chhaupadi, food myths, and finding a doctor.\n\nIf you have heavy bleeding, fever, fainting, severe one-sided pain, or pregnancy-related pain, please seek medical care urgently.";
}

function sendChatMessage(text) {
  const clean = text.trim();
  if (!clean || state.chatTyping) return;
  state.chatMessages.push({ role: "user", text: clean });
  state.chatTyping = true;
  render();
  window.setTimeout(() => {
    state.chatTyping = false;
    state.chatMessages.push({ role: "ai", text: getChatResponse(clean) });
    render();
  }, 1500);
}

function scrollChatToBottom() {
  const messages = document.getElementById("messages");
  if (messages) messages.scrollTop = messages.scrollHeight;
}

function trackerPage() {
  const selectedInfo = selectedCycleInfo();
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">Offline LocalStorage Tracker</span>
        <h1 class="reveal">Period Tracker</h1>
        <p class="lead reveal">Tap dates to mark period days, understand your current phase, and get a culturally grounded day-by-day wellness guide.</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container tracker-layout">
        <div>
          <section class="card reveal">
            ${calendarTemplate()}
            <form class="cycle-form" data-form="cycle">
              <div class="cycle-settings-grid">
                <div class="cycle-field">
                  <label for="lastStart" class="cycle-label">Last period start</label>
                  <input id="lastStart" type="date" name="lastStart" value="${state.trackerData.lastStart}" class="cycle-input" />
                </div>
                <div class="cycle-field">
                  <label for="cycleLength" class="cycle-label">Cycle length</label>
                  <input id="cycleLength" type="number" name="cycleLength" min="21" max="35" value="${state.trackerData.cycleLength}" class="cycle-input" />
                  <span class="cycle-hint">Usually 21–35 days</span>
                </div>
                <div class="cycle-field">
                  <label for="periodLength" class="cycle-label">Period days</label>
                  <input id="periodLength" type="number" name="periodLength" min="2" max="9" value="${state.trackerData.periodLength}" class="cycle-input" />
                  <span class="cycle-hint">Usually 2–9 days</span>
                </div>
              </div>
              <button class="primary-button cycle-save">Save Cycle Settings</button>
            </form>
          </section>
          <section class="card cycle-log reveal" style="margin-top:1rem;">
            <div class="panel-header"><h3>Cycle Log</h3><button class="secondary-button" data-action="clear-tracker">Clear marked days</button></div>
            ${cycleLogTemplate()}
          </section>
        </div>
        <aside>
          <section class="card cycle-ring-card reveal">
            ${cycleRingTemplate(selectedInfo)}
          </section>
          <section class="card guide-panel reveal">
            ${dayGuideTemplate(selectedInfo)}
          </section>
        </aside>
      </div>
    </section>
  `;
}

function calendarTemplate() {
  const month = state.trackerMonth;
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const first = new Date(year, monthIndex, 1);
  const last = new Date(year, monthIndex + 1, 0);
  const emptyStart = first.getDay();
  const days = [];
  for (let i = 0; i < emptyStart; i += 1) days.push(`<div class="day-cell empty" aria-hidden="true"></div>`);
  for (let day = 1; day <= last.getDate(); day += 1) {
    const current = new Date(year, monthIndex, day);
    const iso = isoDate(current);
    const classes = ["day-cell"];
    if (iso === isoDate(today)) classes.push("today");
    if (iso === state.selectedTrackerDate) classes.push("selected");
    if (isPeriodDay(iso)) classes.push("period");
    if (isPredictedDay(iso)) classes.push("predicted");
    if (isOvulationDay(iso)) classes.push("ovulation");
    days.push(`<button class="${classes.join(" ")}" data-date="${iso}" aria-label="${iso}${isPeriodDay(iso) ? ", period day" : ""}">${day}</button>`);
  }
  const label = month.toLocaleDateString("en", { month: "long", year: "numeric" });
  return `
    <div class="calendar-header">
      <button class="icon-button" data-action="month-prev" aria-label="Previous month">‹</button>
      <h3>${label}</h3>
      <button class="icon-button" data-action="month-next" aria-label="Next month">›</button>
    </div>
    <div class="calendar-grid" role="grid" aria-label="${label} period calendar">
      ${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<div class="weekday">${day}</div>`).join("")}
      ${days.join("")}
    </div>
  `;
}

function predictedStart() {
  return addDays(state.trackerData.lastStart, Number(state.trackerData.cycleLength || 28));
}

function isPeriodDay(iso) {
  return state.trackerData.periodDays.includes(iso) || state.trackerData.records.some((record) => isBetween(iso, record.start, record.end));
}

function isPredictedDay(iso) {
  const start = predictedStart();
  const end = addDays(start, Number(state.trackerData.periodLength || 5) - 1);
  return isBetween(iso, start, end);
}

function isOvulationDay(iso) {
  const start = addDays(state.trackerData.lastStart, Number(state.trackerData.cycleLength || 28) - 14);
  return iso === start;
}

function selectedCycleInfo() {
  const cycleLength = Number(state.trackerData.cycleLength || 28);
  const diff = daysBetween(state.trackerData.lastStart, state.selectedTrackerDate);
  const day = ((diff % cycleLength) + cycleLength) % cycleLength + 1;
  let guide = DATA.dayGuide[DATA.dayGuide.length - 1];
  if (day <= 5) guide = DATA.dayGuide[Math.max(0, day - 1)];
  else if (day <= 14) guide = DATA.dayGuide[5];
  return { day, cycleLength, guide };
}

function cycleRingTemplate(info) {
  const circumference = 2 * Math.PI * 94;
  const progress = Math.min(info.day / info.cycleLength, 1);
  const offset = circumference * (1 - progress);
  const segments = [
    { color: "#d63384", dash: "106 590", offset: 0 },
    { color: "#f8bbd9", dash: "188 590", offset: -118 },
    { color: "#7c3aed", dash: "22 590", offset: -318 },
    { color: "#c084fc", dash: "246 590", offset: -352 },
  ];
  return `
    <h3>Cycle Ring</h3>
    <svg class="cycle-ring" viewBox="0 0 240 240" role="img" aria-label="Cycle day ${info.day}">
      <circle class="ring-track" cx="120" cy="120" r="94"></circle>
      ${segments.map((segment) => `<circle class="ring-segment" cx="120" cy="120" r="94" stroke="${segment.color}" stroke-dasharray="${segment.dash}" stroke-dashoffset="${segment.offset}"></circle>`).join("")}
      <circle cx="120" cy="120" r="72" fill="var(--bg-solid)"></circle>
      <text x="120" y="116" text-anchor="middle" class="ring-center">Day ${info.day}</text>
      <text x="120" y="140" text-anchor="middle" class="ring-sub">${escapeHTML(info.guide.phase)}</text>
      <circle class="ring-segment" cx="120" cy="120" r="106" stroke="var(--accent)" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-width="5"></circle>
    </svg>
    <div class="tag-list" style="justify-content:center;">
      <span class="tag">🩸 Menstrual</span><span class="tag">🌸 Follicular</span><span class="tag">💜 Ovulation</span><span class="tag">🌙 Luteal</span>
    </div>
  `;
}

function dayGuideTemplate(info) {
  const guide = info.guide;
  return `
    <span class="eyebrow">📅 ${guide.range}</span>
    <h3 style="font-size:1.6rem;margin-top:.7rem;">${escapeHTML(guide.phase)}</h3>
    <p><strong>Flow:</strong> ${escapeHTML(guide.flow)}</p>
    <p class="muted">${escapeHTML(guide.happening)}</p>
    ${guideBlock("🧠 How you might feel", [guide.mood, ...guide.symptoms])}
    ${guideBlock("🍎 Eat Today", guide.eat)}
    ${guideBlock("🚫 Avoid", guide.avoid)}
    <p><strong>🌿 Home Remedy:</strong> ${escapeHTML(guide.remedy)}</p>
    <p><strong>💪 Activity:</strong> ${escapeHTML(guide.exercise)}</p>
    <div class="disclaimer">${escapeHTML(guide.tip)}</div>
  `;
}

function guideBlock(title, items) {
  return `
    <h3>${title}</h3>
    <div class="tag-list">${items.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("")}</div>
  `;
}

function cycleLogTemplate() {
  const records = [...state.trackerData.records].slice(0, 3);
  const avg = state.trackerData.cycleLength || 28;
  return `
    ${records.map((record) => `<div class="log-row"><span>${niceDate(record.start)} → ${niceDate(record.end)}</span><strong>${daysBetween(record.start, record.end) + 1} days</strong></div>`).join("")}
    <div class="disclaimer">Average: ${avg}-day cycle | Next predicted: ${niceDate(predictedStart())}</div>
  `;
}

function mythsPage() {
  const categories = ["All", "Religious", "Health", "Food", "Exercise", "Hygiene"];
  const myths = state.mythFilter === "All" ? DATA.myths : DATA.myths.filter((myth) => myth.category === state.mythFilter);
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">${t("mythsFacts")}</span>
        <h1 class="reveal">${t("mythsTitle")}</h1>
        <p class="lead reveal">${t("mythsHero")}</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container">
        <div class="tabs reveal" role="tablist" aria-label="Myth categories">
          ${categories.map((category) => `<button class="tab ${state.mythFilter === category ? "active" : ""}" data-myth-filter="${category}">${category}</button>`).join("")}
        </div>
        <div class="grid two">
          ${myths.map((myth, index) => mythCard(myth, index)).join("")}
        </div>
      </div>
    </section>
  `;
}

function mythCard(myth, index) {
  return `
    <article class="myth-card reveal" style="transition-delay:${index * 0.04}s;">
      <div class="myth-inner">
        <section class="card myth-face myth-front">
          <div>
            <span class="badge red">🚫 MYTH</span>
            <h3 style="font-size:1.45rem;margin-top:.8rem;">${escapeHTML(state.lang === "ne" ? myth.mythNe : myth.myth)}</h3>
            <p class="muted">Common in: ${escapeHTML(myth.common)}</p>
          </div>
          <button class="primary-button" data-action="reveal-myth">Reveal Truth</button>
        </section>
        <section class="card myth-face myth-back">
          <div>
            <span class="badge green">✅ FACT</span>
            <h3 style="font-size:1.3rem;margin-top:.8rem;">Science not shame</h3>
            <p>${escapeHTML(myth.fact)}</p>
          </div>
          <div>
            <p class="muted small">Source: ${escapeHTML(myth.source)}</p>
            <button class="secondary-button" data-action="hide-myth">See Myth</button>
          </div>
        </section>
      </div>
    </article>
  `;
}

function educationPage() {
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">${t("educationHub")}</span>
        <h1 class="reveal">${t("learnBody")}</h1>
        <p class="lead reveal">${t("educationHero")}</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container">
        <div class="grid three">
${DATA.articles.map((article, i) => `
             <button class="card article-card hover-card reveal" data-action="view-article" data-article-id="${article.id}" style="transition-delay:${i * 0.04}s; cursor: pointer; border: none; background: inherit; padding: 0; text-align: left; overflow: hidden; display: flex; flex-direction: column;">
               <img src="${article.imageUrl}" alt="${escapeHTML(article.title)}" style="width: 100%; height: 180px; object-fit: cover; object-position: center; border-radius: 12px 12px 0 0; flex-shrink: 0; transition: transform 0.3s ease;" loading="lazy" />
               <div class="article-body" style="padding: 1.2rem; flex-grow: 1; display: flex; flex-direction: column;">
                 <span class="badge green">${escapeHTML(article.category)}</span>
                 <h3 style="margin-top:.8rem;">${escapeHTML(state.lang === "ne" ? article.titleNe : article.title)}</h3>
                 <p class="muted">${escapeHTML(article.summary)}</p>
                 <div class="card-meta" style="margin-top: auto;"><span class="tag">⏱ ${article.readTime}</span>${article.tags.slice(0, 2).map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}</div>
               </div>
             </button>
           `).join("")}
        </div>
      </div>
    </section>
<section class="section compact">
       <div class="container grid two">
         <article class="card reveal">
           <div class="section-heading">
             <span class="eyebrow">Featured Videos</span>
             <h2>Watch and learn</h2>
           </div>
           <div class="grid two">
             ${[
               { title: "Understanding PCOS", img: "./img/pcos.webp", video: "https://youtu.be/I96WO-9ZmWw?si=G8ZfMsMJ5e5hLDs4" },
               { title: "Chhaupadi & Rights", img: "./img/Chhaupadi.webp", video: "https://youtu.be/Fz4WKkQ4G0Y?si=tNF0K28pJGIIS2f-" },
               { title: "Period Cramps Relief", img: "./img/period cramps.webp", video: "https://youtu.be/BgzCL0q2118?si=UTxrw42oXoqo6iBc" },
               { title: "Menstrual Health Basics", img: "./img/period hygenic.webp", video: "https://youtu.be/cIWvgYtFE9Y?si=bVv6kVrg6je1a9v5" }
             ].map((video, i) => `
               <a href="${video.video}" target="_blank" rel="noopener noreferrer" class="card article-card hover-card video-card" style="cursor: pointer; text-decoration: none; color: inherit; padding: 0; overflow: hidden;">
                 <img src="${video.img}" alt="${video.title}" style="width: 100%; height: 120px; object-fit: cover; object-position: center; display: block;" loading="lazy" />
                 <div class="article-body" style="padding: 1rem;"><strong>${video.title}</strong><p class="muted small">Click to watch on YouTube</p></div>
               </a>
             `).join("")}
           </div>
         </article>
         <article class="card reveal">
           <div class="section-heading">
             <span class="eyebrow">Infographic</span>
             <h2>Your monthly hormone journey</h2>
           </div>
           ${hormoneChart()}
         </article>
       </div>
     </section>
    <div class="ticker" aria-label="Quick menstrual health facts">
      <div class="ticker-track">
        ${quickFacts().concat(quickFacts()).map((fact) => `<span>${escapeHTML(fact)}</span>`).join("")}
      </div>
    </div>
  `;
}

function hormoneChart() {
  const phaseInfo = {
    menstrual: { label: "Menstrual", range: "Day 1 – 5", color: "#d63384", desc: "Low estrogen & progesterone. Uterine lining sheds." },
    follicular: { label: "Follicular", range: "Day 6 – 14", color: "#f8bbd9", desc: "Estrogen rises. Energy and confidence increase." },
    ovulation: { label: "Ovulation", range: "Day 14", color: "#7c3aed", desc: "Estrogen peaks. Fertility window open." },
    luteal: { label: "Luteal", range: "Day 15 – 28", color: "#f59e0b", desc: "Progesterone rises then falls. PMS may begin." },
  };

  return `
    <div class="hormone-panel reveal">
      <div class="hormone-header">
        <div>
          <h3 style="margin:0 0 0.2rem;">📈 Your Monthly Hormone Journey</h3>
          <p class="muted small" style="margin:0;">Hover over the chart or phases to learn what your body is doing</p>
        </div>
      </div>

      <div class="hormone-chart-wrap">
        <svg class="hormone-chart" viewBox="0 0 660 310" role="img" aria-label="Estrogen and progesterone levels across 28 days">
          <defs>
            <linearGradient id="estrogen" x1="0" x2="1"><stop stop-color="#d63384"/><stop offset="1" stop-color="#f8bbd9"/></linearGradient>
            <linearGradient id="progesterone" x1="0" x2="1"><stop stop-color="#7c3aed"/><stop offset="1" stop-color="#f59e0b"/></linearGradient>
            <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>

          <rect x="40" y="32" width="580" height="220" rx="20" fill="var(--bg-solid)" stroke="var(--border)" />

          ${Object.entries(phaseInfo).map(([key, info]) => {
            const xMap = { menstrual: 40, follicular: 160, ovulation: 300, luteal: 360 };
            const wMap = { menstrual: 120, follicular: 140, ovulation: 60, luteal: 260 };
            return `<rect class="phase-hit" data-phase="${key}" x="${xMap[key]}" y="32" width="${wMap[key]}" height="220" fill="transparent" stroke="none" style="cursor:pointer;" />`;
          }).join("")}

          ${[1, 7, 14, 21, 28].map((d, i) => {
            const x = 60 + i * 135;
            const phaseKey = ["menstrual", "follicular", "ovulation", "luteal", "luteal"][i];
            return `<line x1="${x}" y1="50" x2="${x}" y2="252" stroke="var(--border)" />
              <text class="chart-day" data-phase="${phaseKey}" x="${x}" y="275" fill="var(--text-secondary)" text-anchor="middle" font-size="12" font-weight="700" style="cursor:pointer;">Day ${d}</text>`;
          }).join("")}

          <path class="chart-line" data-phase="menstrual" d="M55 220 C120 218, 145 120, 210 95 C260 78, 315 130, 348 178 C390 236, 520 222, 610 200" fill="none" stroke="url(#estrogen)" stroke-width="9" stroke-linecap="round" filter="url(#glow)" style="cursor:pointer;" />
          <path class="chart-line" data-phase="luteal" d="M55 232 C165 228, 250 224, 325 214 C390 198, 420 90, 485 78 C545 74, 580 138, 610 210" fill="none" stroke="url(#progesterone)" stroke-width="9" stroke-linecap="round" filter="url(#glow)" style="cursor:pointer;" />

          <text x="68" y="66" fill="#d63384" font-size="13" font-weight="800">Estrogen</text>
          <text x="68" y="88" fill="#7c3aed" font-size="13" font-weight="800">Progesterone</text>

          ${Object.entries(phaseInfo).map(([key, info]) => {
            const xMap = { menstrual: 100, follicular: 230, ovulation: 385, luteal: 490 };
            return `<text class="chart-phase" data-phase="${key}" x="${xMap[key]}" y="298" fill="var(--text-secondary)" text-anchor="middle" font-size="11" font-weight="800" style="cursor:pointer;letter-spacing:0.02em;">${info.label}</text>`;
          }).join("")}

          <circle id="phase-dot" cx="-20" cy="-20" r="7" fill="var(--primary)" filter="url(#glow)" style="opacity:0;transition:opacity 0.2s;" />
        </svg>

        <div class="hormone-tooltip" id="hormone-tooltip" style="opacity:0;pointer-events:none;">
          <div class="tooltip-title" id="tooltip-title"></div>
          <div class="tooltip-range" id="tooltip-range"></div>
          <div class="tooltip-desc" id="tooltip-desc"></div>
        </div>
      </div>

      <div class="hormone-legend">
        ${Object.entries(phaseInfo).map(([key, info]) => `
          <div class="phase-card" data-phase="${key}" style="--phase-color:${info.color};">
            <div class="phase-dot"></div>
            <div>
              <div class="phase-name">${info.label}</div>
              <div class="phase-range">${info.range}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function quickFacts() {
  return [
    "Normal cycles can range from 21 to 35 days",
    "Unclean cloth can increase infection risk",
    "Light exercise can reduce cramps",
    "Chhaupadi was criminalized in Nepal in 2018",
    "Severe pain deserves medical care",
    "Talking about periods protects health",
  ];
}

function hospitalFinderPage() {
  const provinces = ["All", ...new Set(DATA.hospitals.map((h) => h.province))];
  const districts = ["All", ...new Set(DATA.hospitals.filter((h) => state.hospitalProvince === "All" || h.province === state.hospitalProvince).map((h) => h.district))];
  const services = ["All", "Gynecology", "Obstetrics", "Family Planning", "Mental Health"];
  const types = ["All", "Government", "Private", "Community"];
  const hospitals = filteredHospitals();
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">${t("findHelp")}</span>
        <h1 class="reveal">${t("hospitals")}</h1>
        <p class="lead reveal">${t("browsePlaceholder")}</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container finder-layout">
        <aside class="card filters-card reveal">
          <div class="filters-head">
            <h3>Filters</h3>
            <span class="filters-count">${hospitals.length} results</span>
          </div>
          <div class="filters-card">
            <div class="filters-head">
              <h3>Filters</h3>
              <span class="filters-count">${hospitals.length} hospitals</span>
            </div>
            <div class="filter-grid-3">
              <div class="filter-field">
                <label for="province" class="filter-label">Province</label>
                <select id="province" data-hospital-filter="province" class="filter-select">
                  ${provinces.map((option) => `<option value="${escapeHTML(option)}" ${option === state.hospitalProvince ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}
                </select>
              </div>
              <div class="filter-field">
                <label for="district" class="filter-label">District</label>
                <select id="district" data-hospital-filter="district" class="filter-select">
                  ${districts.map((option) => `<option value="${escapeHTML(option)}" ${option === state.hospitalDistrict ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}
                </select>
              </div>
              <div class="filter-field">
                <label for="service" class="filter-label">Service</label>
                <select id="service" data-hospital-filter="service" class="filter-select">
                  ${services.map((option) => `<option value="${escapeHTML(option)}" ${option === state.hospitalService ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}
                </select>
              </div>
              <div class="filter-field">
                <label for="type" class="filter-label">Type</label>
                <select id="type" data-hospital-filter="type" class="filter-select">
                  ${types.map((option) => `<option value="${escapeHTML(option)}" ${option === state.hospitalType ? "selected" : ""}>${escapeHTML(option)}</option>`).join("")}
                </select>
              </div>

          <button class="secondary-button filter-reset" data-action="reset-hospital">Reset Filters</button>
        </aside>
        <div>
          <section class="card reveal" style="margin-bottom:1rem;">
            ${provinceMapMini()}
          </section>
          <div class="grid three">
            ${hospitals.map((hospital, i) => hospitalCard(hospital, i)).join("") || `<article class="card"><h3>No hospitals found</h3><p class="muted">Try clearing filters.</p></article>`}
          </div>
        </div>
      </div>
    </section>
  `;
}



function filteredHospitals() {
  const query = state.hospitalSearch.trim().toLowerCase();
  return DATA.hospitals.filter((hospital) => {
    if (state.hospitalProvince !== "All" && hospital.province !== state.hospitalProvince) return false;
    if (state.hospitalDistrict !== "All" && hospital.district !== state.hospitalDistrict) return false;
    if (state.hospitalService !== "All" && !hospital.services.includes(state.hospitalService)) return false;
    if (state.hospitalType !== "All" && hospital.type !== state.hospitalType) return false;
    if (!query) return true;
    return [hospital.name, hospital.nameNe, hospital.province, hospital.district, hospital.address, hospital.type, hospital.services.join(" ")].join(" ").toLowerCase().includes(query);
  });
}

function hospitalCard(hospital, index) {
  return `
    <article class="card hospital-card hover-card reveal" style="transition-delay:${index * 0.03}s;">
      <div>
        <span class="badge green">${escapeHTML(hospital.type)}</span>
        <h3>${escapeHTML(state.lang === "ne" && hospital.nameNe ? hospital.nameNe : hospital.name)}</h3>
        <p class="muted">${escapeHTML(hospital.address)}</p>
      </div>
      <div class="card-meta">
        <span class="tag">📍 ${escapeHTML(hospital.province)} / ${escapeHTML(hospital.district)}</span>
        <span class="tag rating">★ ${hospital.rating}</span>
        <span class="tag">🕒 ${escapeHTML(hospital.openHours)}</span>
      </div>
      <div class="tag-list">${hospital.services.map((service) => `<span class="tag">${escapeHTML(service)}</span>`).join("")}</div>
      <div class="hospital-footer">
        <span class="hospital-fee">Fee: ${escapeHTML(hospital.fee)}</span>
        <span class="hospital-phone">☎ ${escapeHTML(hospital.phone)}</span>
      </div>
    </article>
  `;
}

function provinceMapMini() {
  return `
    <div class="map-wrap" style="grid-template-columns:1fr minmax(220px,.45fr);">
      <img src="./public/images/nepal-map.svg" alt="Province map showing healthcare coverage across Nepal" style="width: 100%;" />
      <div>
        <h3>Province coverage</h3>
        <p class="muted">Listings include government, private, and community facilities with gynecology, obstetrics, family planning, and mental health services.</p>
      </div>
    </div>
  `;
}

function ngoDirectoryPage() {
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">Support Network</span>
        <h1 class="reveal">${t("ngoDir")}</h1>
        <p class="lead reveal">${t("ngoHero")}</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container grid three">
        ${DATA.ngos.map((ngo, i) => `
          <article class="card ngo-card hover-card reveal" style="transition-delay:${i * 0.04}s;">
            <div class="avatar-row">
              <span class="ngo-logo">${ngo.logo}</span>
              <div><h3>${escapeHTML(ngo.name)}</h3><span class="tag">${escapeHTML(ngo.province)}</span></div>
            </div>
            <p class="muted">${escapeHTML(ngo.description)}</p>
            <div class="tag-list">${ngo.focus.map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join("")}</div>
            <div class="log-row"><span>${escapeHTML(ngo.contact || "Contact listed locally")}</span><strong>${escapeHTML(ngo.website || "Community")}</strong></div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function communityPage() {
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">🤝 ${t("communityTitle")}</span>
        <h1 class="reveal">${t("communityTitle")}</h1>
        <p class="lead reveal">${t("communityHero")}</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 300px; gap: 2rem; margin-bottom: 2rem; align-items: start;">
          <!-- Feed Header -->
          <div class="card reveal" style="display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
            <div>
              <h3 style="margin: 0 0 0.3rem 0;">${t("communityFeed")}</h3>
              <p class="muted" style="margin: 0;">${t("anonymousForum")}</p>
            </div>
            <button class="primary-button" data-action="open-post-modal" style="white-space: nowrap; flex-shrink: 0;">+ ${t("newPost")}</button>
          </div>
          
            <!-- Trending Sidebar -->
          <aside class="card reveal" style="position: sticky; top: 1rem;">
            <h3 style="margin-top: 0; margin-bottom: 0.85rem;">🔥 ${t("trendingTags")}</h3>
            <div class="trending-grid">
              ${["#CrampsRelief", "#PCOSSupport", "#Chhaupadi", "#MoodSwings", "#FirstPeriod", "#Hygiene", "#SchoolLife"].map((tag) => `
                <span class="trending-tag" style="cursor: pointer;">${tag}</span>
              `).join("")}
            </div>
            <div style="padding: 1rem; background: var(--bg-light); border-radius: 12px; margin-top: 1rem; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
              <strong style="color: var(--text-primary);">📞 Emergency</strong><br>
              Police: <strong>100</strong><br>
              Women's Helpline: <strong>1145</strong><br>
              <span style="font-size: 0.8rem;">Available 24/7</span>
            </div>
          </aside>
        </div>

        <!-- Posts Feed -->
        <div>
          ${state.communityPosts.length > 0 ? state.communityPosts.map((post, i) => postCard(post, i)).join("") : `
            <article class="card reveal" style="text-align: center; padding: 3rem 1rem;">
              <div style="font-size: 2rem; margin-bottom: 1rem;">💬</div>
              <h3>No posts yet</h3>
              <p class="muted">Be the first to share your story anonymously</p>
              <button class="primary-button" data-action="open-post-modal">Start a conversation</button>
            </article>
          `}
        </div>
      </div>
    </section>
  `;
}

function postCard(post, index) {
  return `
    <article class="card post-card hover-card reveal" style="transition-delay:${Math.min(index, 8) * 0.03}s; margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
        <span class="avatar" style="font-size: 2.5rem; flex-shrink: 0; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--ring-bg);">${["🌻", "🌼", "🌷", "🌺", "🌸"][post.id % 5]}</span>
        <div style="flex-grow: 1;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.2rem;">
            <strong>${escapeHTML(post.author)}</strong>
            <span class="badge green" style="font-size: 0.75rem;">${escapeHTML(post.category)}</span>
          </div>
          <span class="muted small" style="font-size: 0.8rem;">⏱ ${escapeHTML(post.time || "Just now")}</span>
        </div>
      </div>
      
      <p style="margin: 1rem 0; line-height: 1.6; color: var(--text-primary);">${escapeHTML(post.body)}</p>
      
      <div class="tag-list" style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${post.tags.map((tag) => `<span class="tag">#${escapeHTML(tag)}</span>`).join("")}
      </div>
      
      <div class="post-actions">
        <button class="action-btn" data-action="like-post" data-post-id="${post.id}" aria-label="Like">
          <span class="action-icon">❤️</span>
          <span class="action-count">${post.likes}</span>
        </button>
        <button class="action-btn" data-action="view-comments" data-post-id="${post.id}" aria-label="Comments">
          <span class="action-icon">💬</span>
          <span class="action-count">${post.commentsList ? post.commentsList.length : 0}</span>
        </button>
        <div class="action-spacer"></div>
        <button class="action-btn action-icon-only" data-action="bookmark-post" data-post-id="${post.id}" aria-label="Bookmark" style="color: ${state.bookmarkedPosts.some((b) => b.postId === post.id) ? 'var(--accent)' : 'var(--text-secondary)'};">
          <span class="action-icon">🔖</span>
        </button>
        <button class="action-btn action-icon-only" data-action="share-post" data-post-id="${post.id}" aria-label="Share" style="color: var(--text-secondary);">
          <span class="action-icon">↗️</span>
        </button>
      </div>
    </article>
  `;
}

function postModal() {
  return `
    <div class="modal-backdrop" data-action="close-post-modal">
      <section class="card modal" role="dialog" aria-modal="true" aria-label="Create anonymous post" data-modal style="max-width: 600px;">
        <div class="modal-head" style="background: var(--soft-gradient);">
          <h2 style="margin: 0;">Share Your Story</h2>
          <button class="icon-button" data-action="close-post-modal" aria-label="Close modal" style="font-size: 1.5rem;">×</button>
        </div>
        <form class="grid" data-form="post" style="padding: 2rem; gap: 1.5rem;">
          <div style="padding: 1rem; background: var(--bg-light); border-radius: 8px; font-size: 0.9rem; color: var(--text-secondary);">
            <strong style="color: var(--text-primary);">🔒 100% Anonymous</strong><br>
            No personal details are stored or shared
          </div>
          
          <div class="field">
            <label for="postCategory">What type of post is this?</label>
            <select id="postCategory" name="category" style="padding: 0.8rem; border-radius: 8px; border: 1px solid var(--border); width: 100%;">
              ${["Question", "Experience", "Advice", "Vent"].map((item) => `<option>${item}</option>`).join("")}
            </select>
          </div>
          
          <div class="field">
            <label for="postBody">Share your thoughts (optional: include relevant tags)</label>
            <textarea id="postBody" name="body" required placeholder="Example: I've been having severe cramps... #pain #PCOS" style="min-height: 120px; padding: 0.8rem; border-radius: 8px; border: 1px solid var(--border); width: 100%; font-family: inherit; font-size: inherit;"></textarea>
          </div>
          
          <div style="background: var(--ring-bg); padding: 0.8rem; border-radius: 8px; display: flex; align-items: flex-start; gap: 0.8rem; font-size: 0.9rem;">
            <span style="font-size: 1.2rem; flex-shrink: 0;">🌸</span>
            <div>
              <strong style="display: block; margin-bottom: 0.2rem;">Community Guidelines</strong>
              <p style="margin: 0; color: var(--text-secondary);">Be respectful, supportive, and avoid sharing personal details</p>
            </div>
          </div>
          
          <button class="primary-button" style="padding: 1rem; font-size: 1rem;">Post Anonymously</button>
        </form>
      </section>
    </div>
  `;
}

function commentModal() {
  const post = state.communityPosts.find((p) => p.id === state.selectedPostId);
  if (!post) return "";
  const comments = post.commentsList || [];
  const flower = ["🌻", "🌼", "🌷", "🌺", "🌸"][post.id % 5];
  return `
    <div class="modal-backdrop" data-action="close-comment-modal">
      <section class="card comment-modal" role="dialog" aria-modal="true" aria-label="View and add comments" data-modal style="max-width: 680px;">
        <div class="modal-head">
          <div class="avatar-row">
            <span class="avatar" style="width:3.2rem;height:3.2rem;font-size:1.6rem;">${flower}</span>
            <div>
              <h2 style="margin:0 0 0.2rem 0;font-size:1.35rem;">Comments (${comments.length})</h2>
              <span class="muted small">Join the conversation</span>
            </div>
          </div>
          <button class="icon-button" data-action="close-comment-modal" aria-label="Close modal" style="font-size:1.5rem;">×</button>
        </div>

        <div class="comment-post-preview">
          <div style="display:flex;gap:1rem;align-items:flex-start;">
            <span style="font-size:2rem;flex-shrink:0;">${flower}</span>
            <div style="flex-grow:1;">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.2rem;">
                <strong style="font-size:0.95rem;">${escapeHTML(post.author)}</strong>
                <span class="badge green" style="font-size:0.72rem;">${escapeHTML(post.category)}</span>
              </div>
              <span class="muted small" style="font-size:0.8rem;">⏱ ${escapeHTML(post.time || "Just now")}</span>
              <p style="margin:0.7rem 0 0 0;line-height:1.55;color:var(--text-primary);">${escapeHTML(post.body)}</p>
              <div class="tag-list" style="margin-top:0.7rem;display:flex;flex-wrap:wrap;gap:0.45rem;">
                ${(post.tags || []).map((tag) => `<span class="tag">#${escapeHTML(tag)}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>

        <div class="comment-divider">
          <span>Conversation</span>
        </div>

        <div class="comment-list">
          ${comments.length > 0 ? comments.map((comment, idx) => `
            <div class="comment-item" style="${idx === comments.length - 1 ? 'border-bottom:none;' : ''}">
              <div style="display:flex;gap:1rem;align-items:flex-start;">
                <span class="comment-avatar" style="font-size:1.1rem;flex-shrink:0;">🌷</span>
                <div style="flex-grow:1;min-width:0;">
                  <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.25rem;flex-wrap:wrap;">
                    <strong style="font-size:0.88rem;">${escapeHTML(comment.author)}</strong>
                    <span class="muted small" style="font-size:0.75rem;white-space:nowrap;">${escapeHTML(comment.time)}</span>
                  </div>
                  <p style="margin:0;line-height:1.55;color:var(--text-primary);font-size:0.95rem;overflow-wrap:anywhere;">${escapeHTML(comment.text)}</p>
                </div>
              </div>
            </div>
          `).join("") : `
            <div class="comment-empty">
              <p class="muted" style="margin:0;">No comments yet. Be the first to respond!</p>
            </div>
          `}
        </div>

        <form class="comment-form" data-form="comment">
          <label class="comment-label" for="commentText">
            <span>💬 Add your thoughts</span>
            <span class="badge">Anonymous</span>
          </label>
          <textarea id="commentText" name="text" required placeholder="Share supportive advice, ask a follow-up question, or share your experience..." class="comment-textarea"></textarea>
          <button type="submit" class="primary-button comment-submit">Post Comment</button>
        </form>
      </section>
    </div>
  `;
}

function articleDetailModal() {
  const article = DATA.articles.find((a) => a.id === state.selectedArticleId);
  if (!article) return "";
  
  const articleContent = {
    1: { // PCOS
      sections: [
        { title: "What is PCOS?", content: "PCOS (Polycystic Ovary Syndrome) is a condition where the ovaries produce extra male hormones, causing irregular periods, cysts on ovaries, and other symptoms." },
        { title: "Common Symptoms", content: "• Irregular or missed periods\n• Extra facial or body hair\n• Acne or oily skin\n• Weight gain, especially around belly\n• Difficulty getting pregnant\n• Hair loss or thinning\n• Dark patches on skin (acanthosis nigricans)" },
        { title: "Why It Matters in Nepal", content: "In Nepal, PCOS affects about 1 in 5 women but remains undiagnosed. Many believe symptoms are normal shame rather than a medical condition." },
        { title: "What Helps", content: "• Eat regular meals with protein and fiber\n• Exercise 150 minutes per week (walking counts)\n• Manage stress through yoga or breathing\n• See a gynecologist for hormone testing\n• Some need medicine; ask about metformin or birth control options" }
      ]
    },
    2: { // Hygiene on Budget
      sections: [
        { title: "Why Quality Matters", content: "Clean menstrual products prevent infections, rashes, and Toxic Shock Syndrome. Cost should never mean suffering." },
        { title: "Cloth Options", content: "If using cloth:\n• Use white cotton, NOT colors (dye can harm)\n• Wash with soap daily after soaking\n• Dry in sunlight (natural disinfectant)\n• Replace every 2-3 years if worn\n• Boil once monthly to sterilize" },
        { title: "Reusable Pads", content: "₹200-500 for a pack. Washable, durable 2-3 years. Many NGOs like Sacchaa offer free distribution in rural areas." },
        { title: "Menstrual Cups", content: "₹300-800 one-time cost, lasts 5-10 years. Requires private space to clean but most affordable long-term. Ask at health posts." }
      ]
    },
    3: { // Cramps
      sections: [
        { title: "Why Cramps Happen", content: "During your period, the uterus contracts to shed its lining. These contractions are caused by prostaglandins, hormone-like chemicals. More prostaglandins = worse cramps." },
        { title: "Heat Therapy Works", content: "Apply hot water bottle, heating pad, or warm cloth to lower belly for 15-20 minutes. Heat relaxes muscles and blocks pain signals.\n\nAlternative: Sit in warm (not hot) water." },
        { title: "Movement Helps", content: "Light walking, stretching, or child's pose actually reduces cramps better than lying still. Yoga poses like pigeon pose or cat-cow are especially helpful." },
        { title: "Nutrition & Medicine", content: "• Drink water (dehydration worsens pain)\n• Eat iron-rich foods: dates, spinach, eggs, jaggery\n• Ginger, turmeric, cinnamon tea helps\n• Paracetamol or ibuprofen work if severe\n• See a doctor if pain prevents daily activities" }
      ]
    },
    4: { // Endometriosis
      sections: [
        { title: "When Pain Isn't Normal", content: "Pain that makes you miss school, work, or activities — or pain that medication doesn't help — needs a doctor's check." },
        { title: "What is Endometriosis?", content: "Tissue that lines the uterus grows outside it (fallopian tubes, ovaries, bowels). This causes severe pain, especially during periods or intercourse." },
        { title: "Warning Signs", content: "• Period pain that gets worse over years\n• Pain during or after intercourse\n• Digestive pain or heavy bleeding\n• Difficulty getting pregnant\n• Fatigue and brain fog around periods" },
        { title: "Next Steps", content: "See a gynecologist for ultrasound or MRI. Treatment includes pain medicine, hormone therapy, or surgery. Many women feel better after diagnosis and care." }
      ]
    },
    5: { // Food Myths
      sections: [
        { title: "Achar (Pickle)", content: "MYTH: Achar 'heats' the body and causes more bleeding.\n\nFACT: Spices don't change your period. Eat achar if you like it. The salt is actually good for fluid balance." },
        { title: "Dahi (Yogurt)", content: "MYTH: Dahi makes blood thicken.\n\nFACT: Dahi is safe and healthy. It's full of calcium and probiotics for digestion. Eat it." },
        { title: "Cold Water", content: "MYTH: Cold water causes periods to stop or blood to clot inside.\n\nFACT: Water temperature doesn't affect your period. Hydration is crucial — drink as much as you need." },
        { title: "What Actually Helps", content: "Eat: Iron (eggs, spinach), calcium (milk, greens), protein (beans, fish), fiber (whole grains).\n\nAvoid: Skipping meals, extreme caffeine, very spicy food if it causes cramping." }
      ]
    },
    6: { // Mental Health PMS
      sections: [
        { title: "PMS & Hormones", content: "Progesterone and estrogen drop sharply before your period. These changes can trigger mood swings, anxiety, depression, or irritability. It's real biology, not weakness." },
        { title: "Common Mood Changes", content: "• Anxiety or worry\n• Sadness or tearfulness\n• Anger or irritability\n• Brain fog or trouble concentrating\n• Low confidence or self-doubt" },
        { title: "What Helps During PMS", content: "• Sleep 8 hours (lack of sleep worsens mood)\n• Walk outside for 20 minutes daily\n• Talk to a trusted friend or journaling\n• Limit caffeine and sugary foods\n• Avoid big decisions on difficult days\n• If extreme: ask doctor about mood support" },
        { title: "When to Seek Help", content: "If mood changes affect school, relationships, or daily life, talk to a counselor or doctor. PMDD (severe PMS) is treatable." }
      ]
    },
    7: { // First Period
      sections: [
        { title: "Before It Happens", content: "First period can come anytime from age 9-16. Signs it's coming: breast growth, pubic hair, vaginal discharge, height spurt." },
        { title: "What to Expect", content: "• Bleeding lasts 3-7 days (usually lighter than later periods)\n• May be irregular at first\n• Use pads, cups, or cloth you're comfortable with\n• Cramps are mild or absent\n• Spotting might happen months before a full period" },
        { title: "At School", content: "• Keep a small pad or cloth in your bag\n• Use bathroom whenever you need to\n• Tell a trusted teacher or nurse if you need help\n• It's OK to sit during sports if uncomfortable\n• Ask for privacy to change" },
        { title: "For Guardians", content: "Talk calmly, answer questions honestly, provide supplies, and normalize the conversation. Your calm reaction teaches her it's healthy and normal." }
      ]
    },
    8: { // Menstrual Cups
      sections: [
        { title: "What is a Cup?", content: "A small silicone or rubber cup that folds and inserts into the vagina. It collects blood instead of absorbing it. Reusable for 5-10 years." },
        { title: "Who Can Use Cups?", content: "Anyone with a period. Most effective from age 16+. Not required to be sexually active — virginity is not broken by a cup. Not recommended if you have an IUD." },
        { title: "How to Use", content: "• Insert before period starts\n• Check it's open (run finger around rim)\n• Remove every 8-12 hours\n• Empty, rinse, reinsert\n• Sterilize by boiling 5-10 minutes monthly" },
        { title: "Pros & Cons", content: "Pros: Cheapest long-term, eco-friendly, less odor, no toxic shock risk.\n\nCons: Requires private bathroom, learning curve (3-6 cycles), upfront cost." }
      ]
    },
    9: { // Chhaupadi
      sections: [
        { title: "What is Chhaupadi?", content: "An illegal tradition where menstruating women/girls are isolated in sheds, thought to be 'impure.' Criminalized in Nepal in 2018. It violates human rights." },
        { title: "Why It's Dangerous", content: "• Girls miss school and education\n• No access to medical care\n• Unsafe shelter causes illness, injury, death\n• Psychological harm and shame\n• Perpetuates harmful stigma" },
        { title: "Your Rights", content: "You have the right to: stay in your home, attend school, access bathrooms, get medical care, refuse Chhaupadi, and report it to police or NGOs." },
        { title: "If It Happens to You", content: "Contact: Nepal Police (100), WOREC Hotline, or local health post. Organizations like WOREC, CARE Nepal provide legal support and shelter." }
      ]
    },
    10: { // Cycle Tracking
      sections: [
        { title: "Why Track?", content: "Tracking helps you understand YOUR unique cycle, prepare supplies, know when cramps might hit, predict next period, and notice changes early." },
        { title: "What to Track", content: "• First day of bleeding\n• Days it lasts\n• Flow intensity (light/medium/heavy)\n• Symptoms (cramps, mood, energy)\n• Optional: cervical mucus or basal body temp" },
        { title: "How to Track", content: "Use the Period Tracker in PeriodSathi, a calendar, notebook, or phone app. Mark the first day bleeding starts. Repeat for 3-6 months to see patterns." },
        { title: "What Patterns Mean", content: "• Cycles usually 21-35 days\n• Change in cycle = stress, illness, PCOS, or thyroid\n• Heavy bleeding + clots = see doctor\n• Tracking is private and for YOU only\n• No shame in not knowing your cycle yet" }
      ]
    }
  };

  const content = articleContent[article.id];
  const sections = content?.sections || [];

  return `
    <div class="modal-backdrop article-backdrop" data-action="close-article-modal">
      <section class="card article-modal" role="dialog" aria-modal="true" aria-label="${escapeHTML(article.title)}" data-modal>
        <div class="article-modal-head">
          <div>
            <span class="badge green">${escapeHTML(article.category)}</span>
            <h2 class="article-modal-title">${escapeHTML(article.title)}</h2>
            <span class="muted small article-meta">⏱ ${article.readTime} read</span>
          </div>
          <button class="icon-button article-modal-close" data-action="close-article-modal" aria-label="Close article">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

<div class="article-modal-body">
           <div class="article-image-wrap">
             <img src="${article.imageUrl}" alt="${escapeHTML(article.title)}" class="article-image" loading="lazy" onerror="this.src='./img/period hygenic.webp';this.alt='Article image'" />
           </div>

          <div class="article-content">
            <div class="article-sections">
              ${sections.map((section, idx) => `
                <div class="article-section" style="animation-delay:${idx * 0.06}s;">
                  <h3 class="article-section-title">${escapeHTML(section.title)}</h3>
                  <div class="article-section-body">${escapeHTML(section.content).replace(/\n/g, "<br>")}</div>
                </div>
              `).join("")}
            </div>

            <div class="article-help-card">
              <div class="article-help-icon">💜</div>
              <div>
                <strong>Need Help?</strong>
                <p class="muted small" style="margin-top:0.2rem;">Visit a health post, ask your doctor, or chat with PeriodSathi AI. Your health matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function donatePage() {
  const tiers = [
    { icon: "🌱", amount: "₹100", title: "Awareness", text: "Reaches 5 women with education materials" },
    { icon: "🌸", amount: "₹500", title: "Protector", text: "6-month pad supply for 1 girl in rural Nepal" },
    { icon: "💜", amount: "₹1000", title: "Champion", text: "Menstrual hygiene workshop in 1 village" },
    { icon: "🏆", amount: "₹5000", title: "Hero", text: "Full school program for 1 year" },
  ];
  return `
    <section class="page page-hero">
      <div class="container donation-hero">
        <div class="card reveal" style="background:var(--soft-gradient);">
          <span class="eyebrow">${t("helpBreakSilence")}</span>
          <h1>${t("giveDignity")}</h1>
          <p class="lead">Every ₹500 provides a 6-month supply of sanitary pads to a girl in rural Nepal.</p>
          <button class="primary-button" disabled aria-disabled="true">Coming Soon — Digital payment integration</button>
        </div>
        <div class="card reveal">
          <span class="eyebrow">${t("impactCounter")}</span>
          <div class="stat-value" data-count="12847" data-suffix="">0</div>
          <p class="muted">${t("womenReached")}</p>
        </div>
      </div>
    </section>
    <section class="section compact">
      <div class="container grid four">
        ${tiers.map((tier, i) => `
          <article class="card tier-card hover-card reveal" style="transition-delay:${i * 0.06}s;">
            <div class="feature-icon">${tier.icon}</div>
            <div class="price">${tier.amount}</div>
            <h3>${tier.title}</h3>
            <p class="muted">${tier.text}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="section compact">
      <div class="container card reveal">
        <div class="section-heading center">
          <span class="eyebrow">${t("partnerNgos")}</span>
          <h2>${t("builtAround")}</h2>
        </div>
        <div class="chip-list" style="justify-content:center;">${DATA.ngos.slice(0, 8).map((ngo) => `<span class="tag">${ngo.logo} ${escapeHTML(ngo.name)}</span>`).join("")}</div>
      </div>
    </section>
  `;
}

function dashboardPage() {
  const stats = [
    [t("totalUsers"), "12,847", "↑ 18%"],
    [t("activeThisMonth"), "3,241", "↑ 11%"],
    [t("chatsCompleted"), "8,932", "↑ 24%"],
    [t("articlesRead"), "45,120", "↑ 31%"],
  ];
  return `
    <section class="page page-hero">
      <div class="container">
        <span class="eyebrow reveal">Admin Preview</span>
        <h1 class="reveal">Impact Dashboard</h1>
        <p class="lead reveal">A SaaS-style view of the product’s potential operating metrics, designed to make the prototype feel fundable.</p>
      </div>
    </section>
    <section class="section compact">
      <div class="container dashboard-layout">
        <aside class="card dash-sidebar reveal">
          <a class="brand" href="#/dashboard"><span class="brand-mark">🌸</span><span class="brand-text"><strong>Admin</strong><span>PeriodSathi</span></span></a>
          <nav class="dash-nav">
            ${[t("overview"), t("users"), t("articles"), t("reports"), t("settings")].map((item, i) => `<a class="${i === 0 ? "active" : ""}" href="#/dashboard">${["📊", "👥", "📚", "🧾", "⚙"][i]} ${item}</a>`).join("")}
          </nav>
        </aside>
        <div class="grid">
          <div class="grid four">
            ${stats.map(([label, value, delta], i) => `
              <article class="card stat-card reveal" style="transition-delay:${i * 0.04}s;">
                <span class="muted">${label}</span>
                <strong class="stat-value" style="font-size:2.2rem;">${value}</strong>
                <span class="tag">${delta}</span>
              </article>
            `).join("")}
          </div>
          <div class="grid three">
            <article class="card chart-card reveal">
              <h3>User growth</h3>
              ${lineChart()}
            </article>
            <article class="card chart-card reveal">
              <h3>Most asked chatbot topics</h3>
              ${barChart()}
            </article>
            <article class="card chart-card reveal">
              <h3>Province distribution</h3>
              <div class="donut"><span>7 provinces</span></div>
              <div class="tag-list"><span class="tag">Bagmati 34%</span><span class="tag">Karnali 12%</span><span class="tag">Madhesh 16%</span></div>
            </article>
          </div>
          <article class="card reveal">
            <div class="panel-header"><h3>Recent Activity</h3><div class="quick-actions"><button class="secondary-button">Publish Article</button><button class="secondary-button">Add Hospital</button><button class="secondary-button">Add NGO</button><button class="secondary-button">Export Report</button></div></div>
            ${["Anonymous post review queued from Humla", "Education article on PCOS crossed 4,000 reads", "NGO partnership request from Madhesh", "Hospital listing updated in Surkhet"].map((item, i) => `<div class="activity-row"><span>${item}</span><strong>${i + 1}h ago</strong></div>`).join("")}
          </article>
        </div>
      </div>
    </section>
  `;
}

function lineChart() {
  const points = [
    [20, 180],
    [90, 158],
    [160, 134],
    [230, 116],
    [300, 86],
    [370, 48],
  ];
  return `
    <svg class="line-chart" viewBox="0 0 410 220" role="img" aria-label="Line chart of user growth">
      <rect x="10" y="10" width="390" height="190" rx="18" fill="var(--bg-solid)" stroke="var(--border)" />
      ${[50, 95, 140, 185].map((y) => `<line x1="30" y1="${y}" x2="382" y2="${y}" stroke="var(--border)" />`).join("")}
      <path d="M${points.map((p) => p.join(" ")).join(" L")}" fill="none" stroke="#d63384" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      ${points.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#7c3aed" />`).join("")}
    </svg>
  `;
}

function barChart() {
  const rows = [
    ["Cramps", 86],
    ["Late period", 72],
    ["Hygiene", 61],
    ["PCOS", 48],
    ["Mood", 41],
  ];
  return `<div class="bars">${rows.map(([name, value]) => `<div class="bar-row"><span>${name}</span><div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div><strong>${value}</strong></div>`).join("")}</div>`;
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", () => setRoute(element.dataset.route));
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setRoute(element.dataset.route);
      }
    });
  });

  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", handleAction);
  });

  document.querySelectorAll("[data-province]").forEach((element) => {
    element.addEventListener("click", () => {
      state.selectedProvince = element.dataset.province;
      render();
      document.getElementById("province-map")?.scrollIntoView({ block: "center" });
    });
  });

  document.querySelectorAll("[data-myth-filter]").forEach((element) => {
    element.addEventListener("click", () => {
      state.mythFilter = element.dataset.mythFilter;
      render();
    });
  });

  document.querySelectorAll("[data-chat-suggest]").forEach((element) => {
    element.addEventListener("click", () => {
      window.setTimeout(() => sendChatMessage(element.dataset.chatSuggest), 400);
    });
  });

  document.querySelector('[data-form="chat"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.currentTarget.elements.message;
    sendChatMessage(input.value);
    input.value = "";
  });

  document.querySelector('[data-form="cycle"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    state.trackerData.lastStart = form.elements.lastStart.value || state.trackerData.lastStart;
    state.trackerData.cycleLength = Number(form.elements.cycleLength.value || 28);
    state.trackerData.periodLength = Number(form.elements.periodLength.value || 5);
    saveTrackerData();
    render();
  });

  document.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => {
      const date = button.dataset.date;
      state.selectedTrackerDate = date;
      const index = state.trackerData.periodDays.indexOf(date);
      if (index >= 0) state.trackerData.periodDays.splice(index, 1);
      else state.trackerData.periodDays.push(date);
      state.trackerData.periodDays.sort();
      saveTrackerData();
      render();
    });
  });

  document.querySelectorAll("[data-hospital-filter]").forEach((field) => {
    field.addEventListener("input", handleHospitalFilter);
    field.addEventListener("change", handleHospitalFilter);
  });

  document.querySelector('[data-form="post"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const body = form.elements.body.value.trim();
    if (!body) return;
    const newPost = {
      id: Date.now(),
      author: "Lotus from Nepal",
      category: form.elements.category.value,
      time: "Just now",
      body,
      likes: 0,
      comments: 0,
      tags: [form.elements.category.value],
      commentsList: [],
    };
    state.communityPosts = [newPost, ...state.communityPosts];
    state.postModal = false;
    savePosts();
    render();
  });

  document.querySelectorAll('[data-action="view-comments"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.selectedPostId = Number(button.dataset.postId);
      state.commentModal = true;
      render();
    });
  });

  document.querySelectorAll('[data-action="like-post"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const postId = Number(button.dataset.postId);
      const post = state.communityPosts.find((p) => p.id === postId);
      if (post) {
        post.likes = (post.likes || 0) + 1;
        savePosts();
        button.style.transform = "scale(1.2)";
        setTimeout(() => { button.style.transform = "scale(1)"; }, 200);
        render();
      }
    });
  });

  document.querySelectorAll('[data-action="bookmark-post"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const postId = Number(button.dataset.postId);
      const bookmark = {
        postId,
        time: new Date().toISOString(),
      };
      if (!state.bookmarkedPosts.some((b) => b.postId === postId)) {
        state.bookmarkedPosts.push(bookmark);
        saveBookmarks();
        button.style.color = "var(--accent)";
        button.style.transform = "scale(1.15)";
        setTimeout(() => { button.style.transform = "scale(1)"; }, 200);
      } else {
        state.bookmarkedPosts = state.bookmarkedPosts.filter((b) => b.postId !== postId);
        saveBookmarks();
        button.style.color = "var(--text-secondary)";
      }
    });
  });

  document.querySelectorAll('[data-action="share-post"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const postId = Number(button.dataset.postId);
      const post = state.communityPosts.find((p) => p.id === postId);
      if (!post) return;
      const share = {
        postId,
        time: new Date().toISOString(),
        text: post.body.slice(0, 120) + (post.body.length > 120 ? "..." : ""),
      };
      state.sharedPosts.push(share);
      saveShares();
      button.style.color = "var(--success)";
      button.style.transform = "scale(1.15)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
        setTimeout(() => { button.style.color = "var(--text-secondary)"; }, 600);
      }, 200);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`PeriodSathi Nepal — ${post.author}: "${post.body.slice(0, 100)}..."`).catch(() => {});
      }
    });
  });

  document.querySelectorAll('[data-action="view-article"]').forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      state.selectedArticleId = Number(button.dataset.articleId);
      state.articleModal = true;
      render();
    });
  });

  document.querySelector('[data-form="comment"]')?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = form.elements.text.value.trim();
    if (!text) return;
    const post = state.communityPosts.find((p) => p.id === state.selectedPostId);
    if (!post) return;
    if (!post.commentsList) post.commentsList = [];
    const newComment = {
      author: "Flower from Nepal",
      time: "Just now",
      text,
    };
    post.commentsList.push(newComment);
    post.comments = post.commentsList.length;
    savePosts();
    form.reset();
    render();
  });

  document.querySelector("[data-modal]")?.addEventListener("click", (event) => event.stopPropagation());
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  if (action === "close-comment-modal") {
    state.commentModal = false;
    state.selectedPostId = null;
    render();
  }
  if (action === "close-article-modal") {
    state.articleModal = false;
    state.selectedArticleId = null;
    render();
  }
  if (action === "toggle-lang") {
    state.lang = state.lang === "en" ? "ne" : "en";
    localStorage.setItem("periodsathi_lang", state.lang);
    render();
  }
  if (action === "toggle-theme") {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("periodsathi_theme", state.theme);
    render();
  }
  if (action === "toggle-menu") {
    state.mobileMenu = !state.mobileMenu;
    render();
  }
  if (action === "close-menu") {
    state.mobileMenu = false;
  }
  if (action === "month-prev") {
    state.trackerMonth = new Date(state.trackerMonth.getFullYear(), state.trackerMonth.getMonth() - 1, 1);
    render();
  }
  if (action === "month-next") {
    state.trackerMonth = new Date(state.trackerMonth.getFullYear(), state.trackerMonth.getMonth() + 1, 1);
    render();
  }
  if (action === "clear-tracker") {
    state.trackerData.periodDays = [];
    saveTrackerData();
    render();
  }
  if (action === "reveal-myth") {
    const card = event.currentTarget.closest(".myth-card");
    card?.classList.add("revealed");
    burstConfetti(event.clientX || window.innerWidth / 2, event.clientY || window.innerHeight / 2);
  }
  if (action === "hide-myth") {
    event.currentTarget.closest(".myth-card")?.classList.remove("revealed");
  }
  if (action === "reset-hospital") {
    state.hospitalProvince = "All";
    state.hospitalDistrict = "All";
    state.hospitalService = "All";
    state.hospitalType = "All";
    state.hospitalSearch = "";
    render();
  }
  if (action === "open-post-modal") {
    state.postModal = true;
    render();
  }
  if (action === "close-post-modal") {
    state.postModal = false;
    render();
  }
  if (action === "back-to-top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (action === "bookmark-post") {
    const postId = Number(event.currentTarget.dataset.postId);
    const idx = state.bookmarkedPosts.findIndex((b) => b.postId === postId);
    if (idx >= 0) {
      state.bookmarkedPosts.splice(idx, 1);
    } else {
      state.bookmarkedPosts.push({ postId, time: new Date().toISOString() });
    }
    saveBookmarks();
    render();
  }
  if (action === "share-post") {
    const postId = Number(event.currentTarget.dataset.postId);
    const post = state.communityPosts.find((p) => p.id === postId);
    if (!post) return;
    state.sharedPosts.push({ postId, time: new Date().toISOString() });
    saveShares();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`PeriodSathi Nepal — ${post.author}: "${post.body.slice(0, 100)}"`).catch(() => {});
    }
    render();
  }
}

function handleHospitalFilter(event) {
  const kind = event.currentTarget.dataset.hospitalFilter;
  const value = event.currentTarget.value;
  if (kind === "province") {
    state.hospitalProvince = value;
    state.hospitalDistrict = "All";
  }
  if (kind === "district") state.hospitalDistrict = value;
  if (kind === "service") state.hospitalService = value;
  if (kind === "type") state.hospitalType = value;
  if (kind === "search") state.hospitalSearch = value;
  render();
}

function burstConfetti(x, y) {
  const colors = ["#d63384", "#7c3aed", "#f59e0b", "#10b981", "#f8bbd9"];
  for (let i = 0; i < 20; i += 1) {
    const dot = document.createElement("span");
    dot.className = "confetti";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.background = colors[i % colors.length];
    dot.style.setProperty("--x", `${Math.cos(i) * (60 + Math.random() * 90)}px`);
    dot.style.setProperty("--y", `${Math.sin(i) * (60 + Math.random() * 90)}px`);
    document.body.appendChild(dot);
    window.setTimeout(() => dot.remove(), 760);
  }
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  items.forEach((item) => observer.observe(item));
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach((counter) => {
    const end = Number(counter.dataset.count);
    const suffix = counter.dataset.suffix || "";
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(end * (1 - Math.pow(1 - progress, 3)));
      counter.textContent = `${value.toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

window.addEventListener("hashchange", () => {
  state.mobileMenu = false;
  render();
});

function initHormoneChart() {
  const tooltip = document.getElementById("hormone-tooltip");
  const tooltipTitle = document.getElementById("tooltip-title");
  const tooltipRange = document.getElementById("tooltip-range");
  const tooltipDesc = document.getElementById("tooltip-desc");
  const phaseInfo = {
    menstrual: { label: "Menstrual", range: "Day 1 – 5", desc: "Low estrogen & progesterone. Uterine lining sheds." },
    follicular: { label: "Follicular", range: "Day 6 – 14", desc: "Estrogen rises. Energy and confidence increase." },
    ovulation: { label: "Ovulation", range: "Day 14", desc: "Estrogen peaks. Fertility window open." },
    luteal: { label: "Luteal", range: "Day 15 – 28", desc: "Progesterone rises then falls. PMS may begin." },
  };

  const hoverTargets = document.querySelectorAll(".phase-hit, .chart-day, .chart-phase, .chart-line, .phase-card");

  function showInfo(phaseKey, clientX, clientY) {
    const info = phaseInfo[phaseKey];
    if (!info || !tooltip) return;
    tooltipTitle.textContent = info.label;
    tooltipRange.textContent = info.range;
    tooltipDesc.textContent = info.desc;
    tooltip.style.opacity = "1";
    const rect = tooltip.getBoundingClientRect();
    const x = Math.min(Math.max(clientX, rect.width / 2 + 12), window.innerWidth - rect.width / 2 - 12);
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${clientY - 12}px`;
  }

  function hideInfo() {
    if (!tooltip) return;
    tooltip.style.opacity = "0";
  }

  hoverTargets.forEach((el) => {
    const phaseKey = el.dataset.phase;
    if (!phaseKey) return;
    el.addEventListener("mouseenter", (e) => showInfo(phaseKey, e.clientX, e.clientY));
    el.addEventListener("mousemove", (e) => showInfo(phaseKey, e.clientX, e.clientY));
    el.addEventListener("mouseleave", hideInfo);
  });
}

render();

initHormoneChart();

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && (state.postModal || state.commentModal || state.articleModal || state.mobileMenu)) {
    state.postModal = false;
    state.commentModal = false;
    state.articleModal = false;
    state.selectedPostId = null;
    state.selectedArticleId = null;
    state.mobileMenu = false;
    render();
  }
});

render();
