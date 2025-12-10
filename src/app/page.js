import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsGrid from "@/components/dashboard/StatsGrid";
import EngagementChart from "@/components/dashboard/EngagementChart";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import AIActivityStream from "@/components/dashboard/AIActivityStream";
import InsightsSection from "@/components/dashboard/InsightsSection";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UsageMeter from "@/components/dashboard/UsageMeter";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <StatsGrid />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngagementChart />
          <PerformanceChart />
        </div>
        
        <AIActivityStream />
        
        <InsightsSection />
        
        <RecentActivity />
        
        <UsageMeter />
      </div>
    </DashboardLayout>
  );
}
