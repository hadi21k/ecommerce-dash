import React from "react";
import StatusMenu from "../ui/StatusMenu";

interface TableChildProps {
  order: {
    id: string;
    customerName: string;
    price: number;
    quantity: number;
    product: string;
    date: string;
    time: string;
    status: string;
  };
}

const TableChild: React.FC<TableChildProps> = ({ order }) => {
  return (
    <>
      <h1 className="flex w-full flex-col items-start overflow-hidden text-left text-xs font-medium tracking-wide">
        <span>{order.date}</span>
        <span>
          {order.time.split(":")[0]}:{order.time.split(":")[1]}
        </span>
      </h1>
      <h1 className="justify-left flex w-32 items-center justify-center overflow-hidden text-left text-sm font-medium tracking-wide">
        {order.customerName.length > 20
          ? `${order.customerName.slice(0, 20)}...`
          : order.customerName}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        {order.price * (order.quantity ? order.quantity : 1)}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        {order.quantity ? order.quantity : 1}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        {order.product}
      </h1>
      <h1
        className={`flex items-start justify-center space-x-4 rounded px-4 py-1 text-xs tracking-wide text-light `}
      >
        <StatusMenu order={order} />
      </h1>
    </>
  );
};

export default TableChild;
