import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useOrder } from "../../Contexts/OrdersProvider";
import useSendCheckRequest from "./useSendCheckRequest";
import useConfirmOrders from "./useConfirmOrders";

function useHandleRequest() {
    const [isPendingList, setIsPendingList] = useState(false);
    const [searchParams] = useSearchParams();

    const { choosenListOrders } = useOrder();
    const { sendCheckRequest, isLoading: sending } = useSendCheckRequest();
    const { confirmOrders, isLoading: firmming } = useConfirmOrders()
    const isLoading = sending || firmming
    useEffect(() => {
        if (searchParams.get("status") === "pending") {
            setIsPendingList(true);
        } else {
            setIsPendingList(false);
        }
    }, [searchParams]);

    const handleRequest = () => {
        if (searchParams.get('status') === 'distributed') return sendCheckRequest(choosenListOrders);
        if (searchParams.get('status') === 'pending') return confirmOrders(choosenListOrders)
    };

    return { isLoading, choosenListOrders, handleRequest, isPendingList }
}

export default useHandleRequest
