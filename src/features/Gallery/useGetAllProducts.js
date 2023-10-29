import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProduct";
// import { useAuth } from "../../Contexts/AuthProvider";

function useGetAllProducts() {
    // const { user } = useAuth()
    const {
        data: products,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["product"],
        queryFn: () => getProducts(),
    });

    return { products, error, isLoading }
}

export default useGetAllProducts
