import BarChartComp from "./components/BarChartComp";
import LineChartComp from "./components/LineChartComp";
import PieChartComp from "./components/PieChartComp";
import FundSelection from "./comp/FundSelection";
import { useEffect, useState } from "react";
import { investmentData } from "./util/data";

type Props = {};

export default function Dashboard({}: Props) {
  const [selectedInvestment, setSelectedInvestment] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    setData(investmentData);
  }, [investmentData]);
  console.log(" data[0].data ", data[0].data);
  return (
    // <Wrapper>
    data ? (
      <div className="w-full max-w-6xl m-auto mt-10  h-10">
        <FundSelection data={data} />
        <div className=" w-full grid grid-cols-2 grid-rows-2 gap-10  ">
          <BarChartComp data={data[selectedInvestment].data} />
          <PieChartComp data={data[selectedInvestment].data} />
          <div className="  w-full col-span-2">
            <LineChartComp data={data[selectedInvestment].data} />
          </div>
        </div>
      </div>
    ) : (
      <h1>loading</h1>
    )
    // </Wrapper>
  );
}
