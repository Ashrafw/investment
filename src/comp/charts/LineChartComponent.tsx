import React, { useState } from "react";
import { GraphDataType, contrastColors } from "../../util/data";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = { data: GraphDataType };

export default function LineChartComponent({ data }: Props) {
  const [keys, setKeys] = useState(Object.keys(data[0]));
  console.log("data line", data);
  console.log("data[0] ", data[0]);
  console.log("keys", keys);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={keys[0]} />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.slice(1).map((itemLine, index) => (
          <Line
            type="monotone"
            dataKey={itemLine}
            stroke={contrastColors[index]}
            strokeWidth={3}
          />
        ))}
        {/* <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
          <Line type="monotone" dataKey="profit" stroke="#8b5cf6" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
