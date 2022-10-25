import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useStore } from "../../context/context";

interface StautsMenuProps {
  order: {
    customerName: string;
    status: string;
  };
}

const StatusMenu: React.FC<StautsMenuProps> = ({ order }) => {
  const { orders, setOrders } = useStore();
  const delivered = (name: string) => {
    const delivered = orders.map((order: { customerName: string }) =>
      order.customerName === name ? { ...order, status: "Delivered" } : order
    );
    setOrders(delivered);
  };
  const cancelled = (name: string) => {
    const cancel = orders.map((order: { customerName: string }) =>
      order.customerName === name ? { ...order, status: "Cancelled" } : order
    );
    setOrders(cancel);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`inline-flex w-full justify-center rounded-md bg-dark px-3 py-1 text-xs text-white focus:outline-none ${
            order.status === "Delivered"
              ? "bg-green-500 hover:bg-green-600"
              : order.status === "Cancelled"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {order.status}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="divide-gray-100 absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y rounded-md bg-dark shadow-lg focus:outline-none dark:bg-light">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => delivered(order.customerName)}
                  className={`${
                    active
                      ? "bg-[#84cc16] text-white"
                      : "text-dark dark:text-light"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Delivered
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => cancelled(order.customerName)}
                  className={`${
                    active
                      ? "bg-[#84cc16] text-white"
                      : "text-dark dark:text-light"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Cancelled
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default StatusMenu;
