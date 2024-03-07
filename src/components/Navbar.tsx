import { LineChart } from "lucide-react";
import Wrapper from "./Wrapper";

type Props = {};
export default function Navbar({}: Props) {
  return (
    <div className="border-b shadow">
      <Wrapper>
        <div className="flex items-center gap-2  px-2">
          <LineChart className="text-cyan-500 bg-white/15 p-1 rounded" size={28} />
          <h1 className="text-3xl font-semibold">
            My<span className="text-cyan-500">Investments</span>
          </h1>
        </div>
      </Wrapper>
    </div>
  );
}
