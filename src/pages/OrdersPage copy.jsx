import { HiOutlineReceiptRefund } from "react-icons/hi2";

import Heading from "../ui/Heading";
import HeaderWrapper from "../ui/HeaderWrapper";
import SearchForm from "../ui/SearchForm";
import Button from "../ui/Button";
import MainSection from "../ui/MainSection";

import NavOrders from "../features/Orders/NavOrders";
import ListOrders from "../features/Orders/ListOrders";

import { useState } from "react";

function OrdersPage() {
  const [choosenListOrders, setChoosenListOrders] = useState([]);
  console.log(choosenListOrders);
  return (
    <>
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
          >
            Phân phối{" "}
            {choosenListOrders.length > 0 ? choosenListOrders.length : ""}
          </Button>
        </div>
      </HeaderWrapper>
      <NavOrders />
      <MainSection>
        <ListOrders setChoosenListOrders={setChoosenListOrders} />
      </MainSection>
    </>
  );
}

export default OrdersPage;
