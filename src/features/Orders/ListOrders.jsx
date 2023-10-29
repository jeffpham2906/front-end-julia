/* eslint-disable react/prop-types */

import OrderRow from "./OrderRow";
import HeaderListOrders from "./HeaderListOrders";

import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import useQueryCache from "./useQueryCache";
import useGetOrders from "./useGetOrders";
import { useSearchParams } from "react-router-dom";

export default function ListOrders() {
  const { isStaff } = JSON.parse(sessionStorage.getItem("user"));
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const { orders, error, isLoading } = useGetOrders();
  const { addOrder } = useQueryCache();
  if (isLoading) {
    return (
      <Modal>
        <Spinner />
      </Modal>
    );
  }
  return (
    <>
      <div className="mb-4 ">
        <HeaderListOrders />
        {!error &&
          orders?.map((order) => (
            <OrderRow key={order._id || order.fake_id} order={order} />
          ))}

        {!isStaff && (
          <Button
            type="primary"
            disableBtn={status !== "all" && status !== null}
            onClick={addOrder}
          >
            Thêm đơn hàng +
          </Button>
        )}
      </div>
    </>
  );
}
