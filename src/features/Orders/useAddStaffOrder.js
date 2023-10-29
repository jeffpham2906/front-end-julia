import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addStaffOrder as addStaffOrderAPI } from "../../services/apiOrder";
import toast from "react-hot-toast";

function useAddStaffOrder({ setShowStaffs }) {
    const queryClient = useQueryClient()
    const { mutate: addStaffOrder, isLoading: isUpdating, error: updateError } = useMutation({
        mutationFn: ({ data }) => addStaffOrderAPI({ data }),
        onError: err => toast.error(err.message),
        onSuccess: () => {
            toast.success("Update successfully")
            queryClient.invalidateQueries('orders')
            setShowStaffs(false)
        }
    })
    return { addStaffOrder, updateError, isUpdating }
}

export default useAddStaffOrder
