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

    function getCacheAllOrders() {
        return orderArr
    }

    // function getNoDistributeOrder(e) {
    //     let replaceArr;
    //     if (e === 'Chưa phân phối') {
    //         replaceArr = orderArr?.filter(order => order.staff_name === '')
    //     }
    //     else if (e === 'Đã giao') {
    //         console.log(123)
    //         replaceArr = orderArr?.filter(order => order.staff_name !== '')
    //     } else {
    //         return queryClient.setQueryData(['orders'], orderArr)
    //     }
    //     console.log(orderArr)
    //     console.log(replaceArr)
    //     return queryClient.setQueryData(['orders'], replaceArr)
    // }


    return { addOrder, cancelOrder, getCacheAllOrders }
}

export default useQueryCache
