import { useChoosenListOrders } from "./ChoosenListOrdersProvider";
import useGetAllOrders from "./useGetAllOrders";
function HeaderListOrders() {
  const { setChoosenListOrders } = useChoosenListOrders();
  const { orders } = useGetAllOrders();

  return (
    <div className="mb-6 grid grid-cols-[auto,3fr,1fr,1fr,2.5fr,1fr,1rem] gap-x-4 text-lg">
      <div>
        <input
          onChange={(e) => {
            if (e.target.checked === true) {
              return setChoosenListOrders(orders.map((order) => order._id));
            }
            return setChoosenListOrders([]);
          }}
          type="checkbox"
        />
      </div>
      <div>ID Đơn hàng</div>
      <div>Size</div>
      <div>Form</div>
      <div className="pl-2">Ghi chú</div>
      <div>Trạng thái</div>
      <div></div>
    </div>
  );
}

export default HeaderListOrders;
