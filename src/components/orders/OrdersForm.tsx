import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useStore } from "../../context/context";
import { db } from "../../firebase/firebase";
import Button from "../ui/Button";
import OrdersInputs from "./OrdersInputs";

interface OrdersFormProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrdersForm: React.FC<OrdersFormProps> = ({ setIsOpen }) => {
  const { orders } = useStore();
  const [order, setOrder] = useState({
    customerName: "",
    product: "",
    price: "",
    category: "",
    quantity: "",
    date: "",
    time: "",
    status: "",
  });

  const [error, setError] = useState<{ type: string; message: string }>({
    type: "",
    message: "",
  });

  const submit = async () => {
    if (order.customerName.length === 0) {
      setError({ type: "emptyName", message: "Name is required" });
      return;
    }
    const time = new Date().getTime();
    const orderRef = doc(db, "orders", `${time}`);
    setDoc(orderRef, { ...order, id: time });

    setIsOpen(false);
  };
  return (
    <div className="mt-3 space-y-2">
      <OrdersInputs setOrder={setOrder} error={error} setError={setError} />
      <div className="flex items-center justify-between">
        <Button text="Cancel" onClick={() => setIsOpen(false)} type="button" />
        <Button text="Add Order" type="submit" onClick={submit} />
      </div>
    </div>
  );
};

export default OrdersForm;
