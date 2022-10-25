import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../../context/context";
import ProductGrid from "./ProductGrid";

const GridContent = () => {
  const { filteredBy } = useStore();
  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.8, type: "spring", delay: 0.2 },
      }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      <AnimatePresence>
        {filteredBy.map(
          (product: {
            name: string;
            image: string;
            category: string;
            sold: number;
            price: number;
            stock: number;
          }) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                layout: { duration: 0.9, ease: "linear", type: "spring" },
                opacity: { duration: 0.2, delay: 0.1 },
              }}
              key={product.name}
              className="rounded-lg bg-white dark:bg-[#151615]"
            >
              <ProductGrid product={product} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GridContent;
