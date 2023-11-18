import { useMutation, useQueryClient } from "@tanstack/react-query"
import { confirmOrders as confirmOrdersAPI } from "../../services/apiOrder";
import toast from "react-hot-toast";

function useConfirmOrders() {
    const queryClient = useQueryClient()
    const { mutate: confirmOrders, isLoading } = useMutation({
        mutationFn: confirmOrdersAPI,
        onSuccess: () => {
            toast.success('Gửi yêu cầu thành công')
            queryClient.invalidateQueries('orders')
        },
        onError: err => toast.error(err.message)
    })
    return { confirmOrders, isLoading }
}

export default useConfirmOrders

