export const statsData = [
  {
    id: "emails-sent",
    label: "Emails Sent",
    value: "12,340",
    change: "+8%",
    trending: "up",
    icon: "TrendingUp",
    iconColor: "#3B82F6",
    bgColor: "#3B82F6",
  },
  {
    id: "replies",
    label: "Replies",
    value: "1,240",
    change: "+12%",
    trending: "up",
    icon: "MessageSquare",
    iconColor: "#06B6D4",
    bgColor: "#06B6D4",
  },
  {
    id: "meetings-booked",
    label: "Meetings Booked",
    value: "123",
    change: "+15%",
    trending: "up",
    icon: "Calendar",
    iconColor: "#10B981",
    bgColor: "#10B981",
  },
  {
    id: "reply-rate",
    label: "Reply Rate",
    value: "10.1%",
    change: "+2.3%",
    trending: "up",
    icon: "Activity",
    iconColor: "#F59E0B",
    bgColor: "#F59E0B",
  },
];

export const engagementChartData = [
  { day: "Mon", sent: 420, meetings: 12, replies: 98 },
  { day: "Tue", sent: 380, meetings: 15, replies: 89 },
  { day: "Wed", sent: 450, meetings: 18, replies: 105 },
  { day: "Thu", sent: 520, meetings: 22, replies: 122 },
  { day: "Fri", sent: 490, meetings: 20, replies: 115 },
  { day: "Sat", sent: 180, meetings: 5, replies: 42 },
  { day: "Sun", sent: 150, meetings: 3, replies: 35 },
];

export const performanceChartData = [
  { name: "SaaS Outreach", value: 14 },
  { name: "E-commerce", value: 12 },
  { name: "Agency Leads", value: 16 },
  { name: "Tech Startups", value: 10 },
];

export const activityStreamData = [
  {
    id: "1",
    type: "info",
    message: "Generated 42 drafts using Playbook v1.0",
    timestamp: "2 min ago",
    status: "In Progress",
    icon: "Sparkles",
  },
  {
    id: "2",
    type: "success",
    message: "Identified 6 positive replies from recent campaigns",
    timestamp: "8 min ago",
    status: "Completed",
    icon: "Eye",
  },
  {
    id: "3",
    type: "review",
    message: "Recommends adjusting Follow-up #2 timing",
    timestamp: "15 min ago",
    status: "Needs Review",
    icon: "Clock",
  },
  {
    id: "4",
    type: "warning",
    message: "Flagged 12 low-quality emails for your review",
    timestamp: "22 min ago",
    status: "Action Required",
    icon: "AlertTriangle",
  },
  {
    id: "5",
    type: "error",
    message: "Paused sending due to inbox warming schedule",
    timestamp: "1 hour ago",
    status: "",
    icon: "Clock",
  },
];

export const insightsData = [
  {
    id: "1",
    title: "Follow-up #2 at Day 4 performs best",
    description: "Your Day-4 follow-up got 26% more replies. Consider moving other follow-ups earlier.",
    category: "High",
    categoryColor: "#3B82F6",
    actions: [
      { label: "Apply to Playbook", primary: true },
      { label: "View Data", primary: false },
    ],
  },
  {
    id: "2",
    title: "Subject lines under 7 words drive 18% more opens",
    description: "Short, direct subject lines are working better across all campaigns.",
    category: "High",
    categoryColor: "#3B82F6",
    actions: [
      { label: "Apply to Playbook", primary: true },
      { label: "View Data", primary: false },
    ],
  },
  {
    id: "3",
    title: "Tuesday 10 AM sends show highest engagement",
    description: "Emails sent on Tuesday mornings have a 22% higher open rate.",
    category: "Medium",
    categoryColor: "#3B82F6",
    actions: [
      { label: "Apply to Playbook", primary: true },
      { label: "View Data", primary: false },
    ],
  },
];

export const recentActivityData = [
  {
    id: "1",
    message: "Email sent to John @Acme",
    timestamp: "2h ago",
    status: "sent",
  },
  {
    id: "2",
    message: "Meeting booked with Alice @XYZ Corp",
    timestamp: "3h ago",
    status: "booked",
  },
  {
    id: "3",
    message: "Reply received from Sarah @TechCo",
    timestamp: "4h ago",
    status: "received",
  },
  {
    id: "4",
    message: "Campaign \"SaaS Outreach\" paused",
    timestamp: "5h ago",
    status: "paused",
  },
  {
    id: "5",
    message: "Email bounced: invalid@example.com",
    timestamp: "6h ago",
    status: "bounced",
  },
];

export const usageData = {
  emails: {
    used: 2500,
    total: 3000,
    label: "Emails",
  },
  aiCredits: {
    used: 450,
    total: 500,
    label: "AI Credits",
  },
};

