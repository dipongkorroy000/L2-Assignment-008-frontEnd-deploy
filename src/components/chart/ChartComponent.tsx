"use client";

import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";

export default function ChartComponent({data}: {data: {totalGuides: number; totalTourists: number}}) {
  if (!data) return <p>Loading...</p>;

  const roleData = [
    {name: "Guides", value: data.totalGuides},
    {name: "Tourists", value: data.totalTourists},
  ];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#F43F5E"];

  return (
    <div className="my-20 max-md:my-5">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={roleData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({name, percent}) => `${name}: ${(Number(percent) * 100).toFixed(0)}%`}
            outerRadius={100}
            dataKey="value"
          >
            {roleData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
