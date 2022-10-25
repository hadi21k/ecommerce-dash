import { useState } from "react";
import { useStore } from "../../context/context";
import ProductInput from "./ProductInput";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  stock: string;
  sold: number;
  createdAt: number;
  descriptions: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    screen: string;
    battery: string;
    camera: string;
    ports: string;
    colors: string;
  };
}

interface ProductFormProps {
  setIsOpen: (isOpen: true | false) => void;
  products: any;
  setProducts: (products: any) => void;
}

const categories = ["Laptop", "Phone", "Ipad"];

const ProductForm: React.FC<ProductFormProps> = ({
  setIsOpen,
  products,
  setProducts,
}) => {
  const [category, setCategory] = useState(categories[0]);
  const { setFilteredBy, setPopupMessage } = useStore();
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: "",
    category: "",
    image: "",
    stock: "",
    sold: 0,
    createdAt: 0,
    descriptions: {
      cpu: "",
      gpu: "",
      ram: "",
      storage: "",
      screen: "",
      battery: "",
      camera: "",
      ports: "",
      colors: "",
    },
  } as Product);
  const [error, setError] = useState<{ type: string; message: string }>({
    type: "",
    message: "",
  });

  const submit = () => {
    setProduct({
      ...product,
      id: Math.floor(Math.random() * 1000),
    });
    if (product.name.toString().length === 0) {
      setError({ type: "emptyName", message: "Name is required" });
      return;
    }
    const regex = new RegExp(`^${product.name}$`, "i");
    const isNameTaken = products.some((product: any) =>
      regex.test(product.name)
    );
    if (isNameTaken) {
      setError({
        type: "productInStock",
        message: "Product already in stock",
      });
      return;
    }

    setProducts([...products, product]);
    setFilteredBy([...products, product]);
    setIsOpen(false);
    setPopupMessage(true);
  };
  return (
    <>
      <div className="mt-2 flex flex-col space-y-2">
        <ProductInput
          category={category}
          setCategory={setCategory}
          categories={categories}
          setProduct={setProduct}
          product={product}
          setIsOpen={setIsOpen}
          error={error}
          submit={submit}
        />
      </div>
    </>
  );
};

export default ProductForm;
