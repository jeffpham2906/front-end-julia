import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStaff as updateStaffAPI } from "../../services/apiStaff";
import toast from "react-hot-toast";
import { useAuth } from "../../Contexts/AuthProvider";

function useUpdateStaff() {
    const { user } = useAuth()
    const queryClient = useQueryClient()
    const { mutate: updateStaff, isLoading: isUpdating, error: updateError, isSuccess } = useMutation({
        mutationFn: ({ data }) => updateStaffAPI({ data, token: user.token }),
        onError: err => toast.error(err.message),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['orders', 'staffs'] })
            toast.success("Update successfully")
        }
    })
    return { updateStaff, updateError, isUpdating, isSuccess }
}

export default useUpdateStaff
