import { deleteOrder as deleteOrderAPI } from "../../services/apiOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../../Contexts/AuthProvider";

function useDeleteOrder() {
    const { user } = useAuth();

    const queryClient = useQueryClient()
    const { mutate: deleteOrder, isLoading: isDeleting } = useMutation({
        mutationFn: ({ id }) => deleteOrderAPI({ id, userToken: user.token }),
        onError: err => toast.error(err.message),
        onSuccess: () => {
            toast.success("Delete successfully")
            queryClient.invalidateQueries({ queryKey: 'orders' })
        }
    })
    return { deleteOrder, isDeleting }
}

export default useDeleteOrder
