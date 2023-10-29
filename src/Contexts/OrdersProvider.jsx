import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

function OrdersProvider({ children }) {
  const [choosenListOrders, setChoosenListOrders] = useState([]);

  return (
    <OrderContext.Provider value={{ choosenListOrders, setChoosenListOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) throw new Error("dsa");
  return context;
}

export { OrdersProvider, useOrder };
