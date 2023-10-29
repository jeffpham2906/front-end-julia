import MainSection from "../ui/MainSection";

import NavOrders from "../features/Orders/NavOrders";
import ListOrders from "../features/Orders/ListOrders";
import HeaderOrder from "../features/Orders/HeaderOrder";

function OrdersPage() {
  return (
    <>
      <HeaderOrder />
      <NavOrders />
      <MainSection>
        <ListOrders />
      </MainSection>
    </>
  );
}

export default OrdersPage;
