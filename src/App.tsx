import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import FundSelection from "./components/FundSelection";
import { PerformanceData, investmentData } from "./util/data";

function App() {
  const [selectedInvestment, setSelectedInvestment] = useState(0);
  const [data, setData] = useState<PerformanceData[] | null>();

  useEffect(() => {
    setData(investmentData);
  }, [investmentData]);
  return (
    <div className="min-h-screen min-w-screen">
      <Navbar />

      {data ? (
        <div className=" flex flex-col h-full max-w-7xl m-auto gap-8 mt-10  px-2 w-[95%]">
          <FundSelection
            data={data}
            selectedInvestment={selectedInvestment}
            setSelectedInvestment={setSelectedInvestment}
          />
          <Dashboard data={data[selectedInvestment]} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
