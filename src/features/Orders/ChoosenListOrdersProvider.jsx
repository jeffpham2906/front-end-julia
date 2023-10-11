import { createContext, useContext, useState } from "react";

const choosenListOrder = createContext();

function ChoosenListOrdersProvider({ children }) {
  const [choosenListOrders, setChoosenListOrders] = useState([]);

  return (
    <choosenListOrder.Provider
      value={{ choosenListOrders, setChoosenListOrders }}
    >
      {children}
    </choosenListOrder.Provider>
  );
}

function useChoosenListOrders() {
  const context = useContext(choosenListOrder);
  if (context === undefined) throw new Error("dsa");
  return context;
}

export { ChoosenListOrdersProvider, useChoosenListOrders };
