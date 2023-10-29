import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUpStaffAccount } from "../../services/apiStaff";

function useCreateStaffAccount() {
    const queryClient = useQueryClient()
    const { mutate: createStaffAccount, isLoading, error } = useMutation({
        mutationFn: ({ data }) => signUpStaffAccount({ data }),
        onSuccess: () => {
            toast.success("Đăng ký tài khoản nhân viên thành công")
            queryClient.invalidateQueries({ queryKey: ['staffs'] })
        },
        onError: err => toast.error(err.message)
    });
    return { createStaffAccount, isLoading, error }
}

export default useCreateStaffAccount
