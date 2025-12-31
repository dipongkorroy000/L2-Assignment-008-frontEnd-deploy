/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts";

interface DashboardStatsProps {
  data: {
    admins: number;
    tourists: number;
    guides: number;
    tours: number;
    totalPayments: number;
    totalEarning: number;
  };
}

export default function DashboardStats({data}: DashboardStatsProps) {
  const stats = [
    {label: "Admins", value: data.admins},
    {label: "Tourists", value: data.tourists},
    {label: "Guides", value: data.guides},
    {label: "Tours", value: data.tours},
    {label: "Total Payments", value: data.totalPayments},
    {label: "Total Earning", value: `${data.totalEarning} BDT`},
  ];

  const total = data.tours + data.totalPayments + data.guides + data.tourists;

  const performanceData = [
    {
      name: "Total Tours",
      value: data.tours,
      percent: ((data.tours / total) * 100).toFixed(1),
    },
    {
      name: "Completed Tours",
      value: data.totalPayments,
      percent: ((data.totalPayments / total) * 100).toFixed(1),
    },
    {
      name: "Guides",
      value: data.guides,
      percent: ((data.guides / total) * 100).toFixed(1),
    },
    {
      name: "Tourists",
      value: data.tourists,
      percent: ((data.tourists / total) * 100).toFixed(1),
    },
  ];

  return (
    <div>
      {/* Bar Chart */}
      <div className="shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Platform Performance</h2>
        <ResponsiveContainer height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | undefined, entry: any): [string, string] => {
                const percent = performanceData.find((d) => d.name === entry.name)?.percent ?? "0.0";
                return [`${value} (${percent}%)`, String(name)];
              }}
            />

            <Bar dataKey="value" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
