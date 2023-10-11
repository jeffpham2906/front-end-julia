import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateOrder as updateOrderAPI } from "../../services/apiOrder";

export default function useUpdateOrder() {
    const queryClient = useQueryClient();
    const { mutate: updateOrder, isLoading } = useMutation({
        mutationFn: ({ id, checked }) => updateOrderAPI({ id, checked }),
        onError: (err) => toast.error(err.message || "Cannot change check order"),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            if (data === "Checked") toast.success(data);
            else toast.error(data);
        },
    });
    return { updateOrder, isLoading }
}