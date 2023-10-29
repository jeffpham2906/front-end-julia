import { useQuery } from "@tanstack/react-query";
import { getAllStaffs } from "../../services/apiStaff";
// import { useAuth } from "../../Contexts/AuthProvider";
function useGetAllStaffs() {
    // const {
    //     user: { token },
    // } = useAuth();
    const { data: staffs, error: getError, isLoading: isGetting } = useQuery({
        queryFn: () => getAllStaffs(),
        queryKey: ["staffs"],
    });

    return { staffs, getError, isGetting }
}

export default useGetAllStaffs
