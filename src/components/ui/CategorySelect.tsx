import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface CategorySelectProps {
  selected: string;
  setSelected: (category: string) => void;
  categories: String[];
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  selected,
  setSelected,
  categories,
}) => {
  return (
    <div className="w-full">
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {categories.map((c, i) => (
            <RadioGroup.Option
              key={i}
              value={c}
              className={({ checked }) =>
                `
                  ${checked ? "bg-dark" : ""}
                    relative flex cursor-pointer rounded border border-gray px-4 py-2 focus:outline-none`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`select-none font-medium ${
                            checked ? "text-dark" : "text-gray-900"
                          }`}
                        >
                          {c}
                        </RadioGroup.Label>
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white">
                        <CheckIcon className="h-6 w-6 select-none" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default CategorySelect;
