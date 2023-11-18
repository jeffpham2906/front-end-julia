import { useQueryClient } from "@tanstack/react-query"
import { v4 } from "uuid";

const newOrder = {
    checked: false,
    orderID: "",
    order_products: [],
};

function useQueryCache() {
    const queryClient = useQueryClient()
    const orderArr = queryClient.getQueryData(["orders", null])

    function addOrder() {
        console.log(orderArr)
        queryClient.setQueryData(["orders", null], (pre) => [...pre, { ...newOrder, fake_id: v4() }]);
    }

    function cancelOrder(fake_id) {
        const replaceArr = orderArr.filter(order => order?.fake_id !== fake_id)
        return queryClient.setQueryData(['orders', null], replaceArr)
    }

    return { addOrder, cancelOrder }
}

export default useQueryCache
