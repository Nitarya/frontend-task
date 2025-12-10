import { Radio, Brain } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ActivityItem from "./ActivityItem";
import { activityStreamData } from "@/lib/mockData";

export default function AIActivityStream() {
  return (
    <Card>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center">
            <Radio size={24} className="text-white" />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-gray-900">AI Activity Stream</h3>
            <Badge variant="live">Live</Badge>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          AURA is working in the background
        </p>
      </div>
      
      <div className="space-y-3">
        {activityStreamData.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 flex-shrink-0">
            <Brain size={20} className="text-pink-500" />
          </div>
          <p className="text-sm text-gray-700">
            <span className="font-semibold">AURA Summary:</span> I've drafted 64 emails, sent 18, and detected 2 positive replies. Your outreach is on track.
          </p>
        </div>
      </div>
    </Card>
  );
}

