import {getChartData} from "@/src/services/public/chart.service";
import React from "react";
import ChartComponent from "./ChartComponent";

const Chart = async () => {
  const data = await getChartData();
  return <ChartComponent data={data.data}></ChartComponent>;
};

export default Chart;
