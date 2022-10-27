import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useStore } from "../../context/context";
import { db } from "../../firebase/firebase";
import StatsChild from "./StatsChild";

type Stats = Array<{
  category: string;
  numbers: number;
  state: "increasing" | "decreasing";
  increasedPercentage: number;
  value: number;
}>;

const Statistics: React.FC = () => {
  const [stats, setStats] = useState<Stats>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const statsRef = doc(db, "overview", "statistics");
      const statsSnap = await getDoc(statsRef);
      if (statsSnap.exists()) {
        setStats(statsSnap.data().stats);
      }
    };
    getData();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-[170px] animate-pulse rounded border border-[#151615] text-light dark:bg-[#1D1C1C] dark:text-dark"
            />
          ))}
        </div>
      ) : (
        <div className="grid h-[170px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatsChild stat={stat} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default Statistics;
