import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProduct } from "../../services/apiProduct";
import { toast } from "react-hot-toast";

function useCreateProduct({ setShowModal, reset }) {
    const queryClient = useQueryClient();

    const { mutate: createProduct, isLoading: isCreating, isSuccess } = useMutation({
        mutationFn: createEditProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
            toast.success("Tạo thành công sản phẩm");
            setShowModal(false)
            reset()
        },
        onError: (err) => toast.error(err.message),
    });
    return { isCreating, createProduct, isSuccess }
}
export default useCreateProduct
