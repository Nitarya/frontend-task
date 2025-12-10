import * as Icons from "lucide-react";
import Badge from "@/components/ui/Badge";

const typeStyles = {
  success: {
    cardBg: "bg-green-50",
    iconBg: "bg-white",
    iconColor: "text-green-600",
    statusVariant: "success",
  },
  info: {
    cardBg: "bg-blue-50",
    iconBg: "bg-white",
    iconColor: "text-blue-600",
    statusVariant: "info",
  },
  review: {
    cardBg: "bg-purple-50",
    iconBg: "bg-white",
    iconColor: "text-purple-600",
    statusVariant: "review",
  },
  warning: {
    cardBg: "bg-yellow-50",
    iconBg: "bg-white",
    iconColor: "text-yellow-600",
    statusVariant: "warning",
  },
  error: {
    cardBg: "bg-red-50",
    iconBg: "bg-white",
    iconColor: "text-red-600",
    statusVariant: "error",
  },
};

export default function ActivityItem({ activity }) {
  const Icon = Icons[activity.icon];
  const styles = typeStyles[activity.type] || typeStyles.info;
  
  return (
    <div className={`${styles.cardBg} rounded-xl p-4 flex items-start gap-3`}>
      <div className={`w-10 h-10 rounded-xl ${styles.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
        <Icon size={20} className={styles.iconColor} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 font-medium mb-1.5">{activity.message}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Icons.Clock size={12} />
            <span>{activity.timestamp}</span>
          </div>
          {activity.status && (
            <>
              <span className="text-gray-400">•</span>
              <Badge variant={styles.statusVariant}>{activity.status}</Badge>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

