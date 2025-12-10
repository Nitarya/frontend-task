"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from "@/components/ui/Card";
import { engagementChartData } from "@/lib/mockData";

export default function EngagementChart() {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Over Time</h3>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={engagementChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="day" 
              stroke="#6B7280"
              style={{ fontSize: '12px' }}
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
            <Legend 
              wrapperStyle={{ fontSize: '12px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="sent" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Emails Sent"
              dot={{ fill: '#3B82F6', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="meetings" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Meetings"
              dot={{ fill: '#8B5CF6', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="replies" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Replies"
              dot={{ fill: '#10B981', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

