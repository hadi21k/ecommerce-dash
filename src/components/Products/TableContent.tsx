import { AnimatePresence, motion } from "framer-motion";
import ProductTable from "./ProductTable";
import { useStore } from "../../context/context";

const TableContent: React.FC = () => {
  const { filteredBy } = useStore();
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="min-w-max text-sm">
        <div className={`mb-8 grid w-full grid-cols-7`}>
          <h1 className="flex items-center justify-start font-medium tracking-wide">
            Product Name
          </h1>
          <h1 className="flex items-center justify-center px-4 font-medium tracking-wide">
            Price
          </h1>
          <h1 className="flex items-center justify-center px-4 font-medium tracking-wide">
            Stock
          </h1>
          <h1 className="flex items-center justify-center px-4 font-medium tracking-wide">
            Category
          </h1>
          <h1 className="flex items-center justify-center px-4 font-medium tracking-wide">
            Sold
          </h1>
          <h1 className="flex items-center justify-center px-4 font-medium tracking-wide">
            ID
          </h1>
          <h1 className="flex items-center justify-center px-4 font-medium tracking-wide">
            Actions
          </h1>
        </div>
        <div className="space-y-4 pb-24">
          <AnimatePresence>
            {filteredBy.map((product: { name: string }) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  layout: { duration: 1.2, ease: "linear", type: "spring" },
                  opacity: { duration: 0.2, delay: 0.1 },
                }}
                key={product.name}
                className="grid h-12 w-full min-w-max grid-cols-7 place-items-center rounded text-base transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-light/20"
              >
                <ProductTable product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TableContent;
