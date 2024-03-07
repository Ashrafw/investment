import { v4 as uuid } from "uuid";
import { PerformanceData } from "../util/data";
import DisplayComp from "./DisplayComp";

type Props = {
  data: PerformanceData;
};

export default function Dashboard({ data }: Props) {
  return (
    <div>
      <h1 className="text-3xl mb-4 font-bold"> {data.investmentTitle}</h1>
      <div className=" grid gap-4 grid-cols-2 max-[800px]:grid-cols-1">
        {data.data.map((invest) => (
          <DisplayComp key={uuid()} invest={invest} isTrend={invest.title === "Trends"} />
        ))}
      </div>
    </div>
  );
}
