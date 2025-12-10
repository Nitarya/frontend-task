import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { usageData } from "@/lib/mockData";

export default function UsageMeter() {
  const emailPercentage = (usageData.emails.used / usageData.emails.total) * 100;
  
  return (
    <Card>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-medium text-gray-700">
              Monthly Email Usage
            </span>
            <span className="text-base font-semibold text-gray-700">
              {usageData.emails.used.toLocaleString()} / {usageData.emails.total.toLocaleString()}
            </span>
          </div>
          
          <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${emailPercentage}%` }}
            />
          </div>
        </div>
        
        <Button 
          variant="primary" 
          size="md"
          className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap w-full sm:w-auto"
        >
          Upgrade Plan
        </Button>
      </div>
    </Card>
  );
}

