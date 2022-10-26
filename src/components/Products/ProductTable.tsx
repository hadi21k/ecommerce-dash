import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

interface ProductTableProps {
  product: any;
}

const ProductTable: React.FC<ProductTableProps> = ({ product }) => {
  const { name, price, stock, category, sold, id } = product;
  const deleteProduct = (name: string) => {
    const docRef = doc(db, "products", name);
    deleteDoc(docRef);
  };
  return (
    <>
      <h1 className="justify-left flex w-32 items-start overflow-hidden text-left text-sm font-medium tracking-wide">
        {name.length > 20 ? `${name.slice(0, 20)}...` : name}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        {price}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        {stock ? stock : 0}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        {category}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        {sold}
      </h1>
      <h1 className="flex items-start justify-center px-4 font-medium tracking-wide">
        #{id}
      </h1>
      <h1 className="flex items-start justify-center space-x-4 px-4 font-medium tracking-wide">
        <TrashIcon
          onClick={() => deleteProduct(name)}
          className="h-5 w-5 cursor-pointer text-red-600"
        />
      </h1>
    </>
  );
};

export default ProductTable;
