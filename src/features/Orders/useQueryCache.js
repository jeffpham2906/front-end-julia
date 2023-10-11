import { useQueryClient } from "@tanstack/react-query"
import { v4 } from "uuid";

const newOrder = {
    checked: false,
    orderID: "",
    order_products: [],
};

function useQueryCache() {
    const queryClient = useQueryClient()
    const orderArr = queryClient.getQueryData(["orders"])

    function addOrder() {
        queryClient.setQueryData(["orders"], (pre) => [...pre, { ...newOrder, fake_id: v4() }]);
    }

    function cancelOrder(fake_id) {
        const replaceArr = orderArr.filter(order => order?.fake_id !== fake_id)
        return queryClient.setQueryData(['orders'], replaceArr)
    }

    function getCacheAllOrders() {
        return orderArr
    }


    return { addOrder, cancelOrder, getCacheAllOrders }
}

export default useQueryCache
