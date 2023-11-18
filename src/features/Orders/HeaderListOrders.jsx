import { useOrder } from "../../Contexts/OrdersProvider";
import useGetOrders from "./useGetOrders";
function HeaderListOrders() {
  const { setChoosenListOrders } = useOrder();
  const { orders } = useGetOrders();

  return (
    <div className="mb-4 grid grid-cols-[auto,3fr,1fr,1fr,2.5fr,1fr,1rem] items-center gap-x-4 gap-y-2 sm:grid-cols-[auto,2fr,1fr,1fr] sm:text-sm">
      <div>
        <input
          onChange={(e) => {
            if (e.target.checked === true) {
              return setChoosenListOrders(orders?.map((order) => order._id));
            }
            return setChoosenListOrders([]);
          }}
          type="checkbox"
        />
      </div>
      <div>ID</div>
      <div>Size</div>
      <div>Form</div>
      <div className="sm:hidden">Ghi chú</div>
      <div className="sm:hidden">Trạng thái</div>
      <div className="sm:hidden"></div>
    </div>
  );
}

export default HeaderListOrders;
