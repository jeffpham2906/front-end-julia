import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProduct";
import { toast } from "react-hot-toast";

export default function useDeleteProduct() {
    const queryClient = useQueryClient();
    const { mutate: deleteProduct, isLoading: isDeleting } = useMutation({
        mutationFn: deleteProductApi,
        onSuccess: () => {
            toast.success("Product successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["product"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { isDeleting, deleteProduct }
}