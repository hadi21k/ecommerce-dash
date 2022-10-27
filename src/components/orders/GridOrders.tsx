import { useStore } from "../../context/context";
import { motion } from "framer-motion";
import StatusMenu from "../ui/StatusMenu";

const GridOrders = () => {
  const { filterOrders } = useStore();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:hidden xl:grid-cols-4">
      {filterOrders.map(
        (order: {
          id: string;
          customerName: string;
          price: number;
          quantity: number;
          product: string;
          date: string;
          time: string;
          status: string;
        },i:number) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={order.id}
            transition={{
              layout: { duration: 1.2, ease: "linear", type: "spring" },
              opacity: { duration: 0.2, delay: 0.1 },
            }}
            className="rounded-lg border border-gray bg-white px-2 py-1 shadow-md dark:bg-[#151615]"
          >
            <div className="flex items-center justify-between border-b border-gray py-2 text-xs">
              <span>{order.date}</span>
              <span>
                {order.time?.split(":")[0]}:{order.time?.split(":")[1]}
              </span>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between rounded bg-[#F9F8F9]/70 py-1 px-3 dark:bg-dark">
                <h1 className="text-sm text-light/60 dark:text-dark/60">
                  Customer
                </h1>
                <h1 className="text-light dark:text-dark">
                  {order.customerName}
                </h1>
              </div>
              <div className="flex items-center justify-between rounded py-1 px-3">
                <h1 className="text-sm text-light/60 dark:text-dark/60">
                  Product
                </h1>
                <h1 className="text-light dark:text-dark">{order.product}</h1>
              </div>
              <div className="flex items-center justify-between rounded bg-[#F9F8F9]/70 py-1 px-3 dark:bg-dark">
                <h1 className="text-sm text-light/60 dark:text-dark/60">
                  Price
                </h1>
                <h1 className="text-light dark:text-dark">{order.price}</h1>
              </div>
              <div className="flex items-center justify-between rounded py-1 px-3">
                <h1>Status</h1>
                <h1 className="flex items-center space-x-1">
                  <StatusMenu order={order} index={i} />
                </h1>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default GridOrders;
