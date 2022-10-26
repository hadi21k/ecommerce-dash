import { AreaChart, BarChart } from "@tremor/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

type Bar = {
  name: string;
  Revenue: number;
}[];

const Line = () => {
  const [barData, setBarData] = useState<Bar>([]);
  const areaData = [
    {
      date: "Jan",
      Orders: 542,
      Revenue: 1290,
    },
    {
      date: "Mar",
      Orders: 363,
      Revenue: 5430,
    },
    {
      date: "Apr",
      Orders: 1454,
      Revenue: 4540,
    },
    {
      date: "May",
      Orders: 4782,
      Revenue: 3240,
    },
    {
      date: "Jun",
      Orders: 1454,
      Revenue: 3620,
    },
    {
      date: "Jul",
      Orders: 1458,
      Revenue: 1692,
    },
    {
      date: "Aug",
      Orders: 1975,
      Revenue: 1787,
    },
    {
      date: "Sep",
      Orders: 482,
      Revenue: 438,
    },
    {
      date: "Oct",
      Orders: 3328,
      Revenue: 2016,
    },
    {
      date: "Nov",
      Orders: 4526,
      Revenue: 1063,
    },
    {
      date: "Dec",
      Orders: 391,
      Revenue: 1460,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const barRef = doc(db, "overview", "charts");
      const barSnap = await getDoc(barRef);
      if (barSnap.exists()) {
        setBarData(barSnap.data().bar);
      }
    };
    getData();
  },[]);

  return (
    <div className="flex w-full flex-col items-center space-y-4 overflow-x-auto overflow-y-hidden md:flex-row md:space-x-4 md:space-y-0">
      <div className="w-full overflow-hidden rounded py-2 px-2 dark:bg-[#1d1c1c]">
        <AreaChart
          data={areaData}
          categories={["Orders", "Revenue"]}
          dataKey="date"
          height="h-80"
          colors={["lime", "red"]}
          showXAxis={true}
          yAxisWidth="w-10"
        />
      </div>
      <div className="w-full overflow-hidden rounded py-2 px-2 dark:bg-[#1d1c1c] md:w-[40%]">
        <BarChart
          data={barData}
          dataKey="name"
          categories={["Revenue"]}
          colors={["lime"]}
          yAxisWidth="w-10"
          height="h-80"
        />
      </div>
    </div>
  );
};

export default Line;
