type PerformanceGraphData = {
  name: string;
  portfolioValue: number;
  investmentReturn?: number;
  dividends?: number;
};
type AllocationGraphData = {
  name: string;
  value: number;
};
type TrendsGraphData = {
  name: string;
  revenue: number;
  profit: number;
  debt?: number;
};

export type PerformanceType = {
  title: string;
  graphData: PerformanceGraphData[] | AllocationGraphData[] | TrendsGraphData[];
};
export type GraphDataType =
  | PerformanceGraphData[]
  | AllocationGraphData[]
  | TrendsGraphData[];
export type PerformanceData = {
  investmentTitle: string;
  data: PerformanceType[];
};

export const contrastColors = [
  "#90caf9", // Light Blue
  "#536dfe", // Royal Blue
  "#2a8ccd", // Dark Blue
  "#16abbe", // Dark Blue
  "#0015ff", // Dark Blue
];

export const investmentData: PerformanceData[] = [
  {
    investmentTitle: "Diversified",
    data: [
      {
        title: "Performance",
        graphData: [
          {
            name: "Jan",
            portfolioValue: 10000,
            investmentReturn: 5000,
            dividends: 1500,
          },
          {
            name: "Feb",
            portfolioValue: 10550,
            investmentReturn: 5500,
            dividends: 1800,
          },
          {
            name: "Mar",
            portfolioValue: 11120,
            investmentReturn: 6200,
            dividends: 2000,
          },
          {
            name: "Apr",
            portfolioValue: 11700,
            investmentReturn: 5800,
            dividends: 2100,
          },
          {
            name: "May",
            portfolioValue: 12280,
            investmentReturn: 5800,
            dividends: 2300,
          },
          {
            name: "Jun",
            portfolioValue: 12870,
            investmentReturn: 6900,
            dividends: 2400,
          },
          {
            name: "Jul",
            portfolioValue: 13500,
            investmentReturn: 7300,
            dividends: 2500,
          },
        ],
      },
      {
        title: "Allocation",
        graphData: [
          {
            name: "Microsoft",
            value: 20,
          },
          {
            name: "Amazon",
            value: 30,
          },
          {
            name: "Google",
            value: 15,
          },
          {
            name: "Tesla",
            value: 10,
          },
        ],
      },
      {
        title: "Trends",
        graphData: [
          {
            name: "Jan",
            revenue: 7000,
            profit: 4000,
            debt: 1500,
          },
          {
            name: "Feb",
            revenue: 5600,
            profit: 3300,
            debt: 1200,
          },
          {
            name: "Mar",
            revenue: 9000,
            profit: 4800,
            debt: 2000,
          },
          {
            name: "Apr",
            revenue: 4200,
            profit: 2300,
            debt: 800,
          },
          {
            name: "May",
            revenue: 7700,
            profit: 3800,
            debt: 1500,
          },
          {
            name: "Jun",
            revenue: 6200,
            profit: 3200,
            debt: 1400,
          },
          {
            name: "Jul",
            revenue: 8500,
            profit: 4500,
            debt: 1800,
          },
        ],
      },
    ],
  },
  {
    investmentTitle: "Sustainable ",
    data: [
      {
        title: "Performance",
        graphData: [
          {
            name: "Jan",
            portfolioValue: 9500,
            investmentReturn: 4500,
            dividends: 1200,
          },
          {
            name: "Feb",
            portfolioValue: 9800,
            investmentReturn: 4800,
            dividends: 1300,
          },
          {
            name: "Mar",
            portfolioValue: 10100,
            investmentReturn: 5200,
            dividends: 1400,
          },
          {
            name: "Apr",
            portfolioValue: 10550,
            investmentReturn: 5500,
            dividends: 1500,
          },
          {
            name: "May",
            portfolioValue: 10980,
            investmentReturn: 5800,
            dividends: 1600,
          },
          {
            name: "Jun",
            portfolioValue: 11500,
            investmentReturn: 6100,
            dividends: 1700,
          },
          {
            name: "Jul",
            portfolioValue: 11980,
            investmentReturn: 6400,
            dividends: 1800,
          },
        ],
      },
      {
        title: "Allocation",
        graphData: [
          {
            name: "IBM",
            value: 15,
          },
          {
            name: "Johnson & Johnson",
            value: 20,
          },
          {
            name: "Procter & Gamble",
            value: 18,
          },
          {
            name: "Intel",
            value: 25,
          },
        ],
      },
      {
        title: "Trends",
        graphData: [
          {
            name: "Jan",
            revenue: 6000,
            profit: 3500,
          },
          {
            name: "Feb",
            revenue: 4800,
            profit: 2800,
          },
          {
            name: "Mar",
            revenue: 8200,
            profit: 4200,
          },
          {
            name: "Apr",
            revenue: 3600,
            profit: 2000,
          },
          {
            name: "May",
            revenue: 6900,
            profit: 3200,
          },
          {
            name: "Jun",
            revenue: 5500,
            profit: 2800,
          },
          {
            name: "Jul",
            revenue: 7300,
            profit: 3800,
          },
        ],
      },
    ],
  },
  {
    investmentTitle: "Tech ",
    data: [
      {
        title: "Performance",
        graphData: [
          {
            name: "Jan",
            portfolioValue: 98000,
            investmentReturn: 4500,
            dividends: 1200,
          },
          {
            name: "Feb",
            portfolioValue: 101500,
            investmentReturn: 4800,
            dividends: 1300,
          },
          {
            name: "Mar",
            portfolioValue: 105000,
            investmentReturn: 5200,
            dividends: 1400,
          },
          {
            name: "Apr",
            portfolioValue: 109000,
            investmentReturn: 5500,
            dividends: 1500,
          },
          {
            name: "May",
            portfolioValue: 113500,
            investmentReturn: 5800,
            dividends: 1600,
          },
          {
            name: "Jun",
            portfolioValue: 118000,
            investmentReturn: 6100,
            dividends: 1700,
          },
          {
            name: "Jul",
            portfolioValue: 122500,
            investmentReturn: 6400,
            dividends: 1800,
          },
        ],
      },
      {
        title: "Allocation",
        graphData: [
          {
            name: "Facebook",
            value: 20,
          },
          {
            name: "Johnson & Johnson",
            value: 15,
          },
          {
            name: "Alphabet Inc. (Google)",
            value: 25,
          },

          {
            name: "Procter & Gamble",
            value: 10,
          },
        ],
      },
      {
        title: "Trends",
        graphData: [
          {
            name: "Jan",
            revenue: 4000,
            profit: 2400,
          },
          {
            name: "Feb",
            revenue: 3000,
            profit: 1398,
          },
          {
            name: "Mar",
            revenue: 9800,
            profit: 2000,
          },
          {
            name: "Apr",
            revenue: 3908,
            profit: 2780,
          },
          {
            name: "May",
            revenue: 4800,
            profit: 1890,
          },
          {
            name: "Jun",
            revenue: 3800,
            profit: 2390,
          },
        ],
      },
    ],
  },
];
