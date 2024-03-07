import React, { SetStateAction } from "react";
import { PerformanceData } from "../util/data";
import { FolderOpen } from "lucide-react";
import { v4 as uuid } from "uuid";

type Props = {
  data: PerformanceData[];
  selectedInvestment: number;
  setSelectedInvestment: React.Dispatch<SetStateAction<number>>;
};

export default function FundSelection({
  data,
  selectedInvestment,
  setSelectedInvestment,
}: Props) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xl font-semibold mb-2">
        <FolderOpen />
        <h1>Portfolios</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {data.map((invest, index) => (
          <button
            key={uuid()}
            className={` p-2 ${
              index === selectedInvestment ? " bg-cyan-600" : " bg-gray-800"
            } rounded font-semibold text-lg`}
            onClick={() => setSelectedInvestment(index)}
          >
            {invest.investmentTitle}
          </button>
        ))}
      </div>
    </div>
  );
}
