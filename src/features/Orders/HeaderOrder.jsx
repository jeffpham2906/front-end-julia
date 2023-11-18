import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { useState } from "react";

import HeaderWrapper from "../../ui/HeaderWrapper";
import SearchForm from "../../ui/SearchForm";
import Button from "../../ui/Button";
import ModalStaffs from "./ModalStaffs";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import useHandleRequest from "./useHandleRequest";
function HeaderOrder() {
  const { isStaff } = JSON.parse(sessionStorage.getItem("user"));
  const [showStaffs, setShowStaffs] = useState(false);

  const { isLoading, handleRequest, choosenListOrders, isPendingList } =
    useHandleRequest();

  return (
    <>
      {showStaffs && <ModalStaffs setShowStaffs={setShowStaffs} />}
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
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
              !isStaff
                ? isPendingList
                  ? handleRequest()
                  : setShowStaffs(true)
                : handleRequest();
            }}
          >
            <p className="sm:hidden">
              {isStaff
                ? "Yêu cầu duyệt"
                : isPendingList
                ? "Duyet"
                : "Phân phối"}
            </p>
            {choosenListOrders.length > 0 ? choosenListOrders.length : ""}
          </Button>
        </div>
      </HeaderWrapper>
    </>
  );
}

export default HeaderOrder;
