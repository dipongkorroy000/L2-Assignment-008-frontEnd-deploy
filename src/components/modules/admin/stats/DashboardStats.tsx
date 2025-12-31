"use client";

import {Card, CardHeader, CardTitle, CardContent} from "@/src/components/ui/card";

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

  return (
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
  );
}
