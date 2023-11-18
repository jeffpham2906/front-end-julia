import toast from "react-hot-toast";
import { BACKEND_URL } from "../Constants/BACKEND_URL";
import { getToken } from "./apiOrder";
export async function getAllStaffs() {
    try {
        const res = await fetch(`${BACKEND_URL}/users`, { credentials: 'include', headers: { 'Authorization': `Bearer ${getToken()}` } })
        const data = await res.json()
        return data.staffs || []
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
}

export async function signUpStaffAccount(data) {
    try {
        const res = await fetch(`${BACKEND_URL}/users/staff`, {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(data)
        })
        if (!res.ok) throw new Error("Network error or something went wrong")
        const resData = await res.json()
        return resData

    } catch (error) {
        toast.error(error.message)
        console.log(error.message)
    }
}
