import Card from "@/components/ui/Card";
import { recentActivityData } from "@/lib/mockData";

const statusStyles = {
  sent: { color: "bg-blue-500", label: "Sent" },
  received: { color: "bg-green-500", label: "Received" },
  booked: { color: "bg-purple-500", label: "Booked" },
  bounced: { color: "bg-red-500", label: "Bounced" },
  paused: { color: "bg-yellow-500", label: "Paused" },
};

export default function RecentActivity() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      
      <div className="space-y-3">
        {recentActivityData.map((activity) => {
          const status = statusStyles[activity.status] || statusStyles.sent;
          return (
            <div key={activity.id} className="flex items-center gap-3 py-2">
              <div className={`w-2 h-2 rounded-full ${status.color} flex-shrink-0`} />
              <p className="text-sm text-gray-900 flex-1">{activity.message}</p>
              <span className="text-sm text-gray-500 ml-auto whitespace-nowrap">{activity.timestamp}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

