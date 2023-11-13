import { useMutation, useQueryClient } from "@tanstack/react-query"
import { sendCheckRequest as sendCheckRequestAPI } from "../../services/apiOrder"
import toast from "react-hot-toast"
function useSendCheckRequest() {
    const queryClient = useQueryClient()
    const { mutate: sendCheckRequest, isLoading } = useMutation({
        mutationFn: sendCheckRequestAPI,
        onSuccess: () => {
            toast.success('Gửi yêu cầu thành công')
            queryClient.invalidateQueries('orders')
        }
    })
    return { sendCheckRequest, isLoading }
}

export default useSendCheckRequest
