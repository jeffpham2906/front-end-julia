import { createOrder as createOrderAPI } from "../../services/apiOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../../Contexts/AuthProvider";

function useCreateOrder() {
    const { user } = useAuth()
    const queryClient = useQueryClient();
    const { mutate: createOrder, isLoading: isCreating } = useMutation({
        mutationFn: ({ data }) => createOrderAPI({ data, userToken: user.token }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
            toast.success("Create order successfully")
        },
        onError: err => toast.error(err)
    })
    return { createOrder, isCreating }
}

export default useCreateOrder
