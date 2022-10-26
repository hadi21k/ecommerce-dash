import { TrashIcon } from "@heroicons/react/20/solid";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

interface ProductGridProps {
  product: any;
}

const ProductGrid: React.FC<ProductGridProps> = ({ product }) => {
  const deleteProduct = (name: string) => {
    const docRef = doc(db, "products", name);
    deleteDoc(docRef);
  };
  return (
    <>
      <div className="relative sm:h-[250px]">
        <img
          src={product.image}
          alt={product.name}
          className="h-[300px] w-full rounded-t-lg sm:h-full"
        />
        <div className="absolute top-4 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 rounded-lg bg-gray-600/40 px-2 py-1 text-dark backdrop-blur-sm backdrop-filter">
            <BanknotesIcon className="h-5 w-5" />
            <span className="text-xs">{product.price}</span>
          </div>
          <div className="rounded-lg bg-gray-600/40 px-2 py-1 text-xs text-dark backdrop-blur-sm backdrop-filter">
            {product.category}
          </div>
        </div>
        <div className="absolute bottom-2 right-4 flex items-center space-x-2 rounded-lg bg-gray-600/40 px-2 py-1 backdrop-blur-sm backdrop-filter">
          <TrashIcon
            onClick={() => deleteProduct(product.name)}
            className="h-5 w-5 cursor-pointer text-red-600"
          />
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h1 className="text-xl font-medium">{product.name}</h1>
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-gray-400">
            {product.sold} <span className="text-sm">Sold</span>
          </h1>
          <h1 className="text-xl text-gray-400">
            {product.stock} <span className="text-sm">Stock</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
