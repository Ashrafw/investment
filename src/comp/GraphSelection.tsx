import React from "react";
import { BarChart3, LineChart, PieChart } from "lucide-react";

type Props = {
  graph: string;
  setGraph: React.Dispatch<React.SetStateAction<string>>;
  isPieChartOnly: boolean;
};

export default function GraphSelection({ graph, setGraph, isPieChartOnly }: Props) {
  return (
    <div className="flex gap-4">
      {isPieChartOnly ? (
        <button
          className={` p-[6px] rounded  ${
            graph === "pie" ? " bg-gray-700" : " bg-gray-900"
          }`}
          onClick={() => setGraph("pie")}
        >
          <PieChart />
        </button>
      ) : (
        <>
          <button
            className={` p-[6px] rounded  ${
              graph === "bar" ? " bg-gray-700" : " bg-gray-900"
            }`}
            onClick={() => setGraph("bar")}
          >
            <BarChart3 />
          </button>
          <button
            className={` p-[6px] rounded  ${
              graph === "line" ? " bg-gray-700" : " bg-gray-900"
            }`}
            onClick={() => setGraph("line")}
          >
            <LineChart />
          </button>
        </>
      )}
    </div>
  );
}
