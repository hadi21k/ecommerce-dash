import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useStore } from "../../context/context";
import useInput from "../../hooks/useInput";

const SearchInput: React.FC = () => {
  const [search, onSearchChange] = useInput("");
  const { setFilteredBy, filteredBy, products } = useStore();

  useEffect(() => {
    if (search.toString().length < 1) {
      setFilteredBy(products);
    } else {
      const filterSearch = filteredBy.filter((product: { name: string }) =>
        product.name.toLowerCase().includes(search.toString().toLowerCase())
      );
      setFilteredBy(filterSearch);
    }
  }, [search]);

  return (
    <div className="relative">
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={search}
        onChange={onSearchChange}
        className="w-full rounded border border-gray bg-transparent py-1 pl-3 pr-8 text-base placeholder:text-light focus:outline-none dark:text-dark dark:placeholder:text-dark"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 grid h-full w-8 place-items-center"
      >
        <MagnifyingGlassIcon className=" h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchInput;
