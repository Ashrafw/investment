import { useState } from "react";
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
  const [keys, _] = useState(Object.keys(data[0]));

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
      </LineChart>
    </ResponsiveContainer>
  );
}
