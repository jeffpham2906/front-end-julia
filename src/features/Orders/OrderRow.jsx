/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import useCreateOrder from "./useCreateOrder";
import toast from "react-hot-toast";
import { v4 } from "uuid";
import DropDownMenu from "../../ui/DropDownMenu";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import OrderProductRow from "./OrderProductRow";

import useQueryCache from "./useQueryCache";
import useDeleteOrder from "./useDeleteOrder";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import { useOrder } from "../../Contexts/OrdersProvider";

const newProduct = {
  form: "",
  size: "",
  image: "",
  name: "",
  quantity: 1,
  note: "",
};

function OrderRow({ order: data }) {
  const { choosenListOrders, setChoosenListOrders } = useOrder();
  const [order, setOrder] = useState(data);
  useEffect(() => {
    setOrder(data);
  }, [data]);
  const [isChanging, setIsChanging] = useState(Boolean(!order.orderID));

  const { createOrder, isCreating } = useCreateOrder();
  const { deleteOrder, isDeleting } = useDeleteOrder();
  const isLoading = isCreating || isDeleting;

  const { cancelOrder } = useQueryCache();

  function addProduct() {
    setOrder((pre) => {
      return {
        ...pre,
        order_products: [
          ...pre.order_products,
          { ...newProduct, fake_id: v4() },
        ],
      };
    });
  }
  function handleAction(action) {
    if (action === "Xóa") return deleteOrder({ id: order._id });
    // if (action === "Chỉnh sửa") return setIsChanging(true);
  }
  function handleCreateOrder(order) {
    if (order.orderID === "") return toast.error("Vui lòng nhập order id");
    if (order.order_products.length < 1)
      return toast.error("Vui lòng thêm tối thiểu 1 sản phẩm");
    const errors = order.order_products.reduce((arr, cur) => {
      if (!cur.image && !cur.name) return true;
      if (!cur.form) return true;
      if (!cur.size) return true;
      return arr;
    }, false);
    if (errors) return toast.error("Vui lòng nhập đủ thông tin sản phẩm");

    createOrder({
      data: {
        orderID: order.orderID,
        order_products: order.order_products,
      },
    });
  }
  function handleChecked(value) {
    if (value === true) {
      return setChoosenListOrders((pre) => [...pre, order._id]);
    } else {
      setChoosenListOrders((pre) =>
        pre.filter((or_id) => {
          return or_id !== order._id;
        }),
      );
    }
  }
  return (
    <>
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      <div className="grid grid-cols-[auto,3fr,1fr,1fr,2.5fr,1fr,1rem] items-center gap-x-4 gap-y-2 sm:grid-cols-[auto,2fr,1fr,1fr] sm:gap-y-0 sm:text-sm">
        <div>
          <input
            checked={choosenListOrders.includes(order._id)}
            onChange={(e) => handleChecked(e.target.checked)}
            type="checkbox"
            disabled={isLoading}
          />
        </div>
        <Input
          type="text"
          hiddenBorder={!isChanging}
          value={order.orderID}
          disabled={!isChanging}
          onChange={(e) =>
            setOrder((pre) => {
              return { ...pre, orderID: e.target.value };
            })
          }
        />
        <div className="col-start-3 col-end-5 sm:col-auto"></div>
        <p className="text-sm sm:hidden">
          {order.status === "completed"
            ? "Đã hoàn thành"
            : order.status === "pending"
            ? "Chờ duyệt"
            : ""}
        </p>
        <p className="text-sm sm:hidden">{order?.staff_name || "Chưa chia"}</p>

        {/** Hidden action button when adding or updating */}
        {!isChanging ? (
          <div className="cursor-pointer sm:hidden">
            <DropDownMenu
              listOptions={["Phân phối", "Chỉnh sửa", "Xóa"]}
              icon={<HiOutlineEllipsisVertical size={20} />}
              onClick={handleAction}
            />
          </div>
        ) : (
          <div></div>
        )}

        {/** Render all list products of order */}
        {order.order_products.map((product) => (
          <OrderProductRow
            key={product._id || product?.fake_id}
            product={product}
            isChanging={isChanging}
            setOrder={setOrder}
          />
        ))}
        {isChanging && (
          <>
            <div></div>
            <div className="col-start-2 col-end-8">
              <Button type="secondary" onClick={() => addProduct()}>
                +
              </Button>
              <div className="mt-4 flex gap-4">
                <Button type="primary" onClick={() => handleCreateOrder(order)}>
                  Save
                </Button>
                <Button
                  type="secondary"
                  onClick={() => {
                    if (order?.fake_id) {
                      return cancelOrder(order?.fake_id);
                    }
                    setIsChanging(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </>
        )}
        {/* Create space between order */}
        <div className="col-start-1 col-end-8 flex h-2 sm:col-end-5 sm:h-5"></div>
      </div>
    </>
  );
}

export default OrderRow;
