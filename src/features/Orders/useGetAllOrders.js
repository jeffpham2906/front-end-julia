import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../../services/apiOrder";
import { useAuth } from "../../Contexts/AuthProvider";

function useGetAllOrders() {
    const { user } = useAuth();

    const {
        data: orders,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["orders"],
        queryFn: () => getAllOrders(user),
    });
    return { orders, isLoading, error }
}

export default useGetAllOrders
