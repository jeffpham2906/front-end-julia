import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { useState } from "react";
import { useChoosenListOrders } from "./ChoosenListOrdersProvider";

import Heading from "../../ui/Heading";
import HeaderWrapper from "../../ui/HeaderWrapper";
import SearchForm from "../../ui/SearchForm";
import Button from "../../ui/Button";
import ModalStaffs from "./ModalStaffs";
function HeaderOrder() {
  const { choosenListOrders } = useChoosenListOrders();
  const [showStaffs, setShowStaffs] = useState(false);
  return (
    <>
      {showStaffs && <ModalStaffs setShowStaffs={setShowStaffs} />}
      <HeaderWrapper>
        <Heading>Orders</Heading>
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
            onClick={() => setShowStaffs(true)}
          >
            Phân phối
            {choosenListOrders.length > 0 ? choosenListOrders.length : ""}
          </Button>
        </div>
      </HeaderWrapper>
    </>
  );
}

export default HeaderOrder;
