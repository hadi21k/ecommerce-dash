const TopProductsTable: React.FC = () => {
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
          <tr>
            <td className="whitespace-nowrap px-4 py-2 text-left font-medium text-light dark:text-dark">
              Macbook Air
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              #950
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              1400
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              121
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              {(1400 * 121).toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-4 py-2 text-left font-medium text-light dark:text-dark">
              Ipad Pro
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              #1429
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              950
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              84
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-center font-medium text-light dark:text-dark">
              {(950 * 84).toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsTable;
