import { useStore } from "../../context/context";
import useInput from "../../hooks/useInput";
import Input from "../ui/Input";
import SelectProduct from "../ui/SelectProduct";
import { useState, useEffect } from "react";

interface OrdersInputsProps {
  error: {
    type: string;
    message: string;
  };
  setError: React.Dispatch<
    React.SetStateAction<{
      type: string;
      message: string;
    }>
  >;
  setOrder: React.Dispatch<
    React.SetStateAction<{
      customerName: string;
      product: string;
      price: string;
      category: string;
      quantity: string;
      date: string;
      time: string;
      status: string;
    }>
  >;
}

const OrdersInputs: React.FC<OrdersInputsProps> = ({
  setOrder,
  error,
  setError,
}) => {
  const { products } = useStore();
  const [selected, setSelected] = useState("");
  const [customerName, onCustomerNameChange] = useInput("");
  const [quantity, onQuantityChange] = useInput("");
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  useEffect(() => {
    if (customerName.toString().length !== 0) {
      setError({ type: "", message: "" });
    }
    setOrder({
      customerName: customerName.toString(),
      product: selected,
      price: selected
        ? products.find((p: { name: string }) => p.name === selected)?.price
        : 0,
      quantity: quantity.toString(),
      category: products.find((p: { name: string }) => p.name === selected)
        ?.category,
      date: date.split("/").join(" "),
      time: time,
      status: "Pending",
    });
  }, [selected, customerName, quantity]);

  return (
    <>
      <Input
        placeholder="Customer Name"
        onChange={onCustomerNameChange}
        value={customerName}
      />
      {(error.type === "productInStock" || error.type === "emptyName") && (
        <p className="mt-1 text-xs text-red-500">{error.message}</p>
      )}
      <SelectProduct selected={selected} setSelected={setSelected} />
      <div className="flex items-center space-x-3">
        {selected && (
          <div className="w-full select-none rounded border border-gray bg-transparent py-1 pl-3 pr-8 text-base placeholder:text-light focus:outline-none">
            {selected
              ? products.find((p: { name: string }) => p.name === selected)
                  ?.price
                ? products.find((p: { name: string }) => p.name === selected)
                    ?.price
                : 0
              : ""}
          </div>
        )}
        <input
          type="number"
          placeholder="Quantity"
          min={1}
          value={quantity}
          onChange={onQuantityChange}
          className="w-full select-none rounded border border-gray bg-transparent py-1 pl-3 pr-8 text-base placeholder:text-light focus:outline-none"
        />
      </div>
    </>
  );
};

export default OrdersInputs;
