import React from "react";
import SearchInput from "../ui/SearchInput";
import TimeSelect from "../ui/TimeSelect";
import TopProductsTable from "./TopProductsTable";

const TopProducts: React.FC = () => {
  return (
    <div className="w-full space-y-2 rounded bg-light py-4 px-3 dark:bg-[#1c1d1c]">
      <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
        <h1 className="text-center text-lg text-light dark:text-dark md:text-left">
          Top Products
        </h1>
      </div>
      <TopProductsTable />
    </div>
  );
};

export default TopProducts;
