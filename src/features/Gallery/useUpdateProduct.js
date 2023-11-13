import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductApi } from "../../services/apiProduct";
import { toast } from "react-hot-toast";
function useUpdateProduct({ setShowModal, reset }) {
    const queryClient = useQueryClient();
    const { mutate: updateProduct, isLoading: isUpdating } = useMutation({
        mutationFn: ({ formData, editProductID }) => updateProductApi({ formData, editProductID }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
            toast.success("Cập nhật thành công sản phẩm");
            setShowModal(false)
            reset()
        },
        onError: (err) => toast.error(err.message),
    });
    return { isUpdating, updateProduct }
}

export default useUpdateProduct
