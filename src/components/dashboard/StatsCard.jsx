import { TrendingUp, TrendingDown } from "lucide-react";
import * as Icons from "lucide-react";
import Card from "@/components/ui/Card";

export default function StatsCard({ stat }) {
  const Icon = Icons[stat.icon];
  const isPositive = stat.trending === "up";
  
  return (
    <Card hover className="transition-transform duration-200 hover:scale-105">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-medium mb-2">{stat.label}</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp size={16} className="text-green-600" />
            ) : (
              <TrendingDown size={16} className="text-red-600" />
            )}
            <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change}
            </span>
            <span className="text-sm text-gray-500 ml-1">vs last week</span>
          </div>
        </div>
        
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: stat.bgColor }}
        >
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </Card>
  );
}

