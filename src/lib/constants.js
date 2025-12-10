export const APP_NAME = "AI Outreach Dashboard";

export const NAVIGATION_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutGrid", active: true },
  { id: "inbox", label: "Inbox", icon: "Inbox", active: false },
  { id: "drafts", label: "Drafts", icon: "Mail", active: false },
  { id: "campaigns", label: "Campaigns", icon: "Send", active: false },
  { id: "playbooks", label: "Playbooks", icon: "Book", active: false },
  { id: "settings", label: "Settings", icon: "Settings", active: false },
];

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};

export const COLORS = {
  primary: "#4169E1",
  sidebar: {
    from: "#4169E1",
    to: "#1E3A8A",
  },
  background: "#F8F9FA",
  card: "#FFFFFF",
  status: {
    success: "#10B981",
    info: "#3B82F6",
    warning: "#F59E0B",
    error: "#EF4444",
    purple: "#8B5CF6",
    yellow: "#EAB308",
  },
  text: {
    primary: "#111827",
    secondary: "#6B7280",
    muted: "#9CA3AF",
  },
  iconBg: {
    blue: "#DBEAFE",
    green: "#D1FAE5",
    yellow: "#FEF3C7",
    purple: "#EDE9FE",
  },
};

