import MainSection from "../ui/MainSection";

import NavOrders from "../features/Orders/NavOrders";
import ListOrders from "../features/Orders/ListOrders";
import HeaderOrder from "../features/Orders/HeaderOrder";
import HeaderListOrders from "../features/Orders/HeaderListOrders";

function OrdersPage() {
  console.log("render");
  return (
    <>
      <HeaderOrder />
      <NavOrders />
      <MainSection>
        <HeaderListOrders />
        <ListOrders />
      </MainSection>
    </>
  );
}

export default OrdersPage;
