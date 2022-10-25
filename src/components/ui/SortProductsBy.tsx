import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useStore } from "../../context/context";

type Sort = Array<string>;

const sort: Sort = [
  "All",
  "Newest",
  "Oldest",
  "Mac only",
  "Iphones only",
  "Ipads only",
  "Price: Low to High",
  "Price: High to Low",
];

const SortProductsBy: React.FC = () => {
  const [selected, setSelected] = useState(sort[0]);
  const { filteredBy, setFilteredBy, products } = useStore();

  useEffect(() => {
    if (selected === "All") {
      setFilteredBy(products);
    } else if (selected === "Newest") {
      let arr = [...products];
      let sorting = arr.sort(
        (a: { createdAt: number }, b: { createdAt: number }) =>
          b.createdAt - a.createdAt
      );
      setFilteredBy(sorting);
    } else if (selected === "Oldest") {
      let arr = [...products];
      let sorting = arr.sort(
        (a: { createdAt: number }, b: { createdAt: number }) =>
          a.createdAt - b.createdAt
      );
      setFilteredBy(sorting);
    } else if (selected === "Mac only") {
      setFilteredBy(
        filteredBy.filter(
          (product: { category: string }) => product.category === "Laptop"
        )
      );
    } else if (selected === "Iphones only") {
      setFilteredBy(
        filteredBy.filter(
          (product: { category: string }) => product.category === "Phone"
        )
      );
    } else if (selected === "Ipads only") {
      setFilteredBy(
        filteredBy.filter(
          (product: { category: string }) => product.category === "Ipad"
        )
      );
    } else if (selected === "Price: Low to High") {
      let arr = [...products];
      let sorting = arr.sort(
        (a: { price: number }, b: { price: number }) => a.price - b.price
      );
      setFilteredBy(sorting);
    } else if (selected === "Price: High to Low") {
      let arr = [...products];
      let sorting = arr.sort(
        (a: { price: number }, b: { price: number }) => b.price - a.price
      );
      setFilteredBy(sorting);
    }
  }, [selected, products]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative text-dark dark:text-light z-40">
        <Listbox.Button className="relative z-50 h-full w-full cursor-default rounded border border-gray bg-light py-1 px-2 text-left text-light focus:outline-none dark:bg-[#1c1d1c] dark:text-dark sm:w-40 sm:text-sm">
          <span className="block truncate">{selected}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 mt-2 max-h-48 w-52 overflow-auto rounded-md border border-gray bg-[#1c1d1c] text-base text-light focus:outline-none dark:bg-white dark:text-dark sm:w-44 sm:text-sm">
            {sort.map((item: string, i: number) => (
              <Listbox.Option
                key={i}
                onClick={() => setFilteredBy(products)}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-5 ${
                    active
                      ? "bg-dark/30 text-dark dark:text-light"
                      : "text-dark dark:text-light"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SortProductsBy;
