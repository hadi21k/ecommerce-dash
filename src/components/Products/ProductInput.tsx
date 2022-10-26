import React from "react";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import CategorySelect from "../ui/CategorySelect";

interface ProductInputProps {
  category: string;
  categories: string[];
  setCategory: (category: string) => void;
  setIsOpen: (isOpen: true | false) => void;
  setProduct: (product: any) => void;
  product: any;
  error: { type: string; message: string };
  submit: () => void;
}

const ProductInput: React.FC<ProductInputProps> = ({
  category,
  categories,
  setCategory,
  setProduct,
  setIsOpen,
  error,
  submit,
}) => {
  const [name, onNameChange] = useInput("");
  const [price, onPriceChange] = useInput("");
  const [stock, onStockChange] = useInput("");
  const [cpu, onCpuChange] = useInput("");
  const [gpu, onGpuChange] = useInput("");
  const [ram, onRamChange] = useInput("");
  const [storage, onStorageChange] = useInput("");
  const [screen, onScreenChange] = useInput("");
  const [battery, onBatteryChange] = useInput("");
  const [camera, onCameraChange] = useInput("");
  const [ports, onPortsChange] = useInput("");
  const [colors, onColorsChange] = useInput("");

  useEffect(() => {
    setProduct({
      id: Math.floor(Math.random() * 100000),
      name: name,
      price: price,
      createdAt: new Date().getTime(),
      image: `https://source.unsplash.com/random/200x200?sig=${Math.floor(
        Math.random() * 1000
      )}`,
      category: category,
      stock: stock,
      sold: 0,
      descriptions: {
        cpu: cpu,
        gpu: gpu,
        ram: ram,
        storage: storage,
        screen: screen,
        battery: battery,
        camera: camera,
        ports: ports,
        colors: colors,
      },
    });
  }, [
    name,
    category,
    price,
    stock,
    cpu,
    gpu,
    ram,
    storage,
    screen,
    battery,
    camera,
    ports,
    colors,
  ]);

  return (
    <>
      <div>
        <Input value={name} placeholder="Name" onChange={onNameChange} />
        {(error.type === "productInStock" || error.type === "emptyName") && (
          <p className="mt-1 text-xs text-red-500">{error.message}</p>
        )}
      </div>
      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={onPriceChange}
          min={0}
          className="w-full select-none rounded border border-gray bg-transparent py-1 pl-3 pr-8 text-base outline-none placeholder:text-light"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={onStockChange}
          min={0}
          className="w-full select-none rounded border border-gray bg-transparent py-1 pl-3 pr-8 text-base placeholder:text-light focus:outline-none"
        />
      </div>
      <CategorySelect
        selected={category}
        setSelected={setCategory}
        categories={categories}
      />
      {category === "Phone" && (
        <div className="grid grid-cols-2 gap-4">
          <Input
            value={storage}
            onChange={onStorageChange}
            placeholder="Storage"
          />
          <Input
            value={colors}
            onChange={onColorsChange}
            placeholder="Colors"
          />
        </div>
      )}
      {category === "Ipad" && (
        <div className="grid grid-cols-2 gap-4">
          <Input
            value={storage}
            onChange={onStorageChange}
            placeholder="Storage"
          />
          <Input
            value={colors}
            onChange={onColorsChange}
            placeholder="Colors"
          />
        </div>
      )}
      {category === "Laptop" && (
        <div className="grid grid-cols-3 gap-4">
          <Input value={cpu} onChange={onCpuChange} placeholder="CPU" />

          <Input value={gpu} onChange={onGpuChange} placeholder="GPU" />

          <Input value={ram} onChange={onRamChange} placeholder="RAM" />

          <Input
            value={storage}
            onChange={onStorageChange}
            placeholder="Storage"
          />

          <Input
            value={screen}
            onChange={onScreenChange}
            placeholder="Screen"
          />

          <Input
            value={battery}
            onChange={onBatteryChange}
            placeholder="Battery"
          />

          <Input
            value={camera}
            onChange={onCameraChange}
            placeholder="Camera"
          />

          <Input value={ports} onChange={onPortsChange} placeholder="Ports" />

          <Input
            value={colors}
            onChange={onColorsChange}
            placeholder="Colors"
          />
        </div>
      )}
      <div className="flex items-center justify-between space-x-3">
        <Button text="Cancel" onClick={() => setIsOpen(false)} />
        <Button text="Add" onClick={submit} />
      </div>
    </>
  );
};

export default ProductInput;
