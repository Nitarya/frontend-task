import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function InsightCard({ insight }) {
  return (
    <div className="p-4 sm:p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-base font-semibold text-gray-900 flex-1">{insight.title}</h4>
        <Badge 
          variant="default" 
          style={{ 
            backgroundColor: `${insight.categoryColor}20`,
            color: insight.categoryColor 
          }}
        >
          {insight.category}
        </Badge>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{insight.description}</p>
      
      <div className="flex flex-col sm:flex-row gap-2">
        {insight.actions.map((action, index) => (
          <Button
            key={index}
            variant={action.primary ? "primary" : "secondary"}
            size="sm"
            className="flex-1 sm:flex-initial"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

