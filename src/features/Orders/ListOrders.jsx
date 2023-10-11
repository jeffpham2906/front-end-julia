/* eslint-disable react/prop-types */

import OrderRow from "./OrderRow";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import useQueryCache from "./useQueryCache";
import useGetAllOrders from "./useGetAllOrders";

export default function ListOrders() {
  // const isAdmin = Boolean(user?.isAdmin);
  // console.log(isAdmin);
  const { orders, error, isLoading } = useGetAllOrders();

  const { addOrder } = useQueryCache();
  return (
    <>
      <div className="mb-4 ">
        {isLoading && (
          <Modal>
            <Spinner />
          </Modal>
        )}
        {!isLoading &&
          !error &&
          orders.map((order) => (
            <OrderRow key={order._id || order.fake_id} order={order} />
          ))}

        <Button type="primary" onClick={addOrder}>
          Thêm đơn hàng +
        </Button>
      </div>
    </>
  );
}
