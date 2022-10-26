import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";

type TopProducts = {
  name: string;
  id: number;
  price: number;
  sold: number;
  sales: number;
}[];

const TopProductsTable: React.FC = () => {
  const [topProducts, setTopProducts] = useState<TopProducts>([]);
  useEffect(() => {
    const getData = async () => {
      const topProductsRef = doc(db, "overview", "top-products");
      const topProductsSnap = await getDoc(topProductsRef);
      if (topProductsSnap.exists()) {
        setTopProducts(topProductsSnap.data().top);
      }
    };
    getData();
  }, []);
  return (
    <div className="overflow-x-auto px-4">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-400">
              Product name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-400">
              Order ID
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-400">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-400">
              Sold
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-400">
              Sales
            </th>
          </tr>
        </thead>
        <tbody className="text-base">
          {topProducts.map(({ name, id, price, sold, sales }, i) => (
            <tr key={i}>
              <td className="whitespace-nowrap px-4 py-2 text-left font-medium text-light dark:text-dark">
                {name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
                #{id}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
                {price}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
                {sold}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
                {(sold * price).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsTable;
