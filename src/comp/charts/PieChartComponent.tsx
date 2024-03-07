import React, { useState } from "react";
import { GraphDataType, contrastColors } from "../../util/data";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  PieLabel,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Props = { data: GraphDataType };

export default function PieChartComponent({ data }: Props) {
  const COLOURS = ["#3b6df6", "#ae7b15", "#0b7f1c", "#b53bf6", "#f63b5a"];
  const [keys, setKeys] = useState(Object.keys(data[0]));
  console.log("data piechart==>", data);
  return (
    <div className=" flex items-start justify-center">
      <PieChart width={380} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={contrastColors[index]} />
          ))}
        </Pie>
        <Legend align="center" />
      </PieChart>
    </div>
  );
}
const RADIAN = Math.PI / 180;
type LabelType = {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
};
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: LabelType) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{
        fontWeight: 700,
        background: "#22222296",
      }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
