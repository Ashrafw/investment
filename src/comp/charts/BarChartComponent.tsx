import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GraphDataType, contrastColors } from "../../util/data";
import { useState } from "react";

type Props = { data: GraphDataType };

export default function BarChartComponent({ data }: Props) {
  const [keys, setKeys] = useState(Object.keys(data[0]));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.slice(1).map((itemLine, index) => (
          <Bar
            key={`bar-${index}-${keys[index]}`}
            dataKey={itemLine}
            fill={contrastColors[index]}
          />
        ))}
        {/* <Bar dataKey="profit" fill="#8b5cf6" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
