import toast from "react-hot-toast";
import { BACKEND_URL } from "../Constants/BACKEND_URL";

export async function getAllStaffs() {
    try {
        const { _id } = await JSON.parse(sessionStorage.getItem('user'))
        const res = await fetch(`${BACKEND_URL}/users/${_id}`, { credentials: 'include' })
        if (!res.ok) throw new Error("Something went wrong")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
}

export async function signUpStaffAccount({ data: dataStaff }) {

    try {
        const user = await JSON.parse(sessionStorage.getItem('user'))
        const res = await fetch(`${BACKEND_URL}/users/signup?role=staff`, {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                displayName: dataStaff.displayName,
                username: dataStaff.username,
                password: dataStaff.password,
                admin_id: user._id
            })
        })
        if (!res.ok) throw new Error("Network error or something went wrong")
        const resData = await res.json()
        if (resData.status === 'failed') throw new Error(resData.message)
        return

    } catch (error) {
        toast.error(error.message)
        console.log(error.message)

    }
}
