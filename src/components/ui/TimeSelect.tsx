import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useState, Fragment } from "react";

type Time = Array<{ time: string }>;

const date: Time = [
  { time: "24hr" },
  { time: "This week" },
  { time: "This month" },
];

const ComponentName: React.FC = () => {
  const [selected, setSelected] = useState(date[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative text-dark dark:text-light">
        <Listbox.Button className="relative h-full w-40 cursor-default rounded border border-gray bg-light py-1 px-2 text-left text-light focus:outline-none dark:bg-[#1c1d1c] dark:text-dark sm:text-sm">
          <span className="block truncate">{selected.time}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-1 mt-2 max-h-60 w-44 overflow-auto rounded-md border border-gray bg-[#1c1d1c] text-base text-light focus:outline-none dark:bg-white dark:text-dark sm:text-sm">
            {date.map((t, i) => (
              <Listbox.Option
                key={i}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-5 ${
                    active
                      ? "bg-dark/30 dark:text-light text-dark"
                      : "text-dark dark:text-light"
                  }`
                }
                value={t}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {t.time}
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

export default ComponentName;
