import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  stat: any;
}

const StatsChild: React.FC<Props> = ({ stat }) => {
  return (
    <div className="dark:borer-gray group relative h-[170px] rounded border border-[#151615] text-light dark:bg-[#1D1C1C] dark:text-dark">
      <div className="absolute inset-x-0 bottom-0 z-0 h-1 w-full rounded bg-primary transition-all duration-300 ease-in-out group-hover:h-full" />
      <div className="absolute inset-0 flex flex-col justify-between p-3">
        <h1 className="text-base font-medium dark:group-hover:text-light">
          {stat.category}
        </h1>
        <h4 className="text-2xl font-semibold dark:group-hover:text-light ">
          ${stat.numbers}
        </h4>
        <div className="flex justify-between">
          <h6 className="flex items-center space-x-2">
            {stat.state === "increasing" ? (
              <ArrowTrendingUpIcon className="h-4 w-4 text-primary dark:group-hover:text-light" />
            ) : (
              <ArrowTrendingDownIcon className="h-4 w-4 text-red-500 dark:group-hover:text-light" />
            )}
            <span className="text-sm dark:group-hover:text-light">
              {stat.increasedPercentage}%
            </span>
          </h6>
          <h5 className="text-sm dark:group-hover:text-light">
            {stat.state === "increasing" ? "+" : "-"}
            {stat.value} this week
          </h5>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default StatsChild;
