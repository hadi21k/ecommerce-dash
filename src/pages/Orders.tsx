import AddOrders from "../components/orders/AddOrders";
import GridOrders from "../components/orders/GridOrders";
import SortOrdersBy from "../components/orders/SortOrdersBy";
import TableOrders from "../components/orders/TableOrders";

const Orders = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between space-y-2 xl:flex-row xl:items-end">
        <AddOrders />
        <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0">
            <SortOrdersBy />
          </div>
        </div>
      </div>
      <TableOrders />
      <GridOrders />
    </div>
  );
};

export default Orders;
