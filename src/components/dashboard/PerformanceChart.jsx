"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/Card";
import { performanceChartData } from "@/lib/mockData";

export default function PerformanceChart() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Playbooks</h3>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="name" 
              stroke="#6B7280"
              style={{ fontSize: '11px' }}
              angle={-15}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Bar 
              dataKey="value" 
              fill="#3B82F6" 
              radius={[8, 8, 0, 0]}
              name="Meetings Booked"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

