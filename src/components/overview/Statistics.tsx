import React from "react";
import { useStore } from "../../context/context";
import StatsChild from "./StatsChild";

type Stats = Array<{
  category: string;
  numbers: number;
  state: "increasing" | "decreasing";
  increasedPercentage: number;
  value: number;
}>;

const stats: Stats = [
  {
    category: "Total Sales",
    numbers: 1000,
    state: "increasing",
    increasedPercentage: 10,
    value: 100,
  },
  {
    category: "Total Orders",
    numbers: 1000,
    state: "increasing",
    increasedPercentage: 10,
    value: 100,
  },
  {
    category: "Total Products",
    numbers: 1000,
    state: "increasing",
    increasedPercentage: 10,
    value: 100,
  },
  {
    category: "Total Customers",
    numbers: 1000,
    state: "decreasing",
    increasedPercentage: 2,
    value: 429,
  },
];
const Statistics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <StatsChild stat={stat} key={i} />
      ))}
    </div>
  );
};

export default Statistics;
