import { Lightbulb } from "lucide-react";
import Card from "@/components/ui/Card";
import InsightCard from "./InsightCard";
import { insightsData } from "@/lib/mockData";

export default function InsightsSection() {
  return (
    <Card>
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb size={24} className="text-blue-500" />
        <h3 className="text-xl font-semibold text-gray-900">AI Insights & Suggestions</h3>
      </div>
      
      <div className="space-y-4">
        {insightsData.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </Card>
  );
}

