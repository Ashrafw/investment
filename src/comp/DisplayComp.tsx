import React, { useEffect, useState } from "react";
import { GraphDataType, PerformanceData, PerformanceType } from "../util/data";
import GraphSelection from "./GraphSelection";
import BarChartComponent from "./charts/BarChartComponent";
import LineChartComponent from "./charts/LineChartComponent";
import PieChartComponent from "./charts/PieChartComponent";

type Props = {
  invest: PerformanceType;
  isTrend: boolean;
};

export default function DisplayComp({ invest, isTrend }: Props) {
  const [graph, setGraph] = useState("");

  useEffect(() => {
    if (invest.title === "Performance") {
      setGraph("bar");
    } else if (invest.title === "Allocation") {
      setGraph("pie");
    } else {
      setGraph("line");
    }
  }, []);

  return (
    <div
      className={`w-full min-h-[390px] h-full border border-white/5 p-4 rounded bg-white/5 max-h-[400px] ${
        isTrend ? " col-span-2 max-[800px]:col-span-1" : ""
      }`}
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{invest.title}</h1>
        <GraphSelection
          graph={graph}
          setGraph={setGraph}
          isPieChartOnly={invest.title === "Allocation"}
        />
      </div>
      <div className="w-full h-full p-4 pb-10">
        {graph === "bar" ? (
          <BarChartComponent data={invest.graphData} />
        ) : graph === "pie" ? (
          <PieChartComponent data={invest.graphData} />
        ) : (
          <LineChartComponent data={invest.graphData} />
        )}
      </div>
    </div>
  );
}
