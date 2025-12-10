import StatsCard from "./StatsCard";
import { statsData } from "@/lib/mockData";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {statsData.map((stat) => (
        <StatsCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}

