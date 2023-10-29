import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrder";
import { useSearchParams } from "react-router-dom";

function useGetOrders() {
    const [searchParams] = useSearchParams()
    const filterValue = searchParams.get('status')
    const filter = !filterValue || filterValue === 'all' ? null : { field: "status", value: filterValue }
    // console.log(filter)
    const {
        data: orders,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["orders", filter],
        queryFn: () => getAllOrders({ filter }),
    });
  
    return { orders, isLoading, error }
}

export default useGetOrders
