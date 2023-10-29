import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { useState } from "react";
import { useOrder } from "../../Contexts/OrdersProvider";

import HeaderWrapper from "../../ui/HeaderWrapper";
import SearchForm from "../../ui/SearchForm";
import Button from "../../ui/Button";
import ModalStaffs from "./ModalStaffs";
function HeaderOrder() {
  const { isStaff } = JSON.parse(sessionStorage.getItem("user"));
  const { choosenListOrders } = useOrder();
  const [showStaffs, setShowStaffs] = useState(false);
  
  return (
    <>
      {showStaffs && <ModalStaffs setShowStaffs={setShowStaffs} />}
      <HeaderWrapper>
        <h1 className="text-3xl sm:text-2xl">Orders</h1>
        <div className="flex gap-4">
          <SearchForm placeholder="Nhập ID đơn hàng" />
          <Button
            type={`${choosenListOrders.length > 0 ? "primary" : "secondary"}`}
            icon={
              <HiOutlineReceiptRefund
                size={24}
                stroke={`${
                  choosenListOrders.length > 0 ? "#f0fdfa" : "#1f2937"
                }`}
              />
            }
            disableBtn={choosenListOrders.length === 0}
            onClick={() => {
              if (!isStaff) return setShowStaffs(true);
              console.log("Check request", choosenListOrders);
            }}
          >
            <p className="sm:hidden">
              {isStaff ? "Yêu cầu duyệt" : "Phân phối"}
            </p>
            {choosenListOrders.length > 0 ? choosenListOrders.length : ""}
          </Button>
        </div>
      </HeaderWrapper>
    </>
  );
}

export default HeaderOrder;
