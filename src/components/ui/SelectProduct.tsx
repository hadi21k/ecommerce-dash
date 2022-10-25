import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useStore } from "../../context/context";

interface SelectProductProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SelectProduct: React.FC<SelectProductProps> = ({
  selected,
  setSelected,
}) => {
  const { products } = useStore();
  const [query, setQuery] = useState("");

  const filteredProducts =
    query === ""
      ? products
      : products.filter((p: { name: string }) =>
          p.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-3">
        <div className="relative w-full cursor-default rounded border border-gray bg-transparent text-left focus:outline-none sm:text-sm">
          <Combobox.Input
            placeholder="Select Product"
            className="w-full border-none bg-transparent py-2 pl-3 pr-10 text-base leading-5 text-light placeholder:text-light focus:outline-none focus:ring-0"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Combobox.Options
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark text-base focus:outline-none sm:text-sm"
        >
          {filteredProducts.length === 0 && query !== "" ? (
            <div className="relative cursor-default select-none py-3 px-4 text-dark">
              Nothing found.
            </div>
          ) : (
            filteredProducts.map((p: { name: string }, i: number) => (
              <Combobox.Option
                key={i}
                className={({ active }) =>
                  `relative flex cursor-default select-none py-3 pl-6 pr-4 ${
                    active ? "bg-light/25 text-dark" : "text-dark"
                  }`
                }
                value={p.name}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {p.name}
                    </span>
                    {selected ? (
                      <span
                        className={`absolute inset-y-0 right-6 flex items-center pl-3 ${
                          active ? "text-dark" : "text-light"
                        }`}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </div>
    </Combobox>
  );
};

export default SelectProduct;
