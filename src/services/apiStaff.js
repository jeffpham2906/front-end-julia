import toast from "react-hot-toast";
import { BACKEND_URL } from "../Constants/BACKEND_URL";

export async function getAllStaffs(token) {
    try {
        const res = await fetch(`${BACKEND_URL}/staffs`, {
            method: "GET",
            mode: 'cors',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (!res.ok) throw new Error("Network error")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}

export async function signUpStaffAccount({ data: dataStaff, admin_id, token }) {

    try {
        // console.log(dataStaff)
        // console.log(admin_id)
        // console.log(token)
        const res = await fetch(`${BACKEND_URL}/staffs/signup`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                displayName: dataStaff.displayName,
                username: dataStaff.username,
                password: dataStaff.password,
                admin_id
            })
        })
        if (!res.ok) throw new Error("Network error or something went wrong")
        const resData = await res.json()
        if (resData.status === 'failed') throw new Error(resData.message)
        return resData

    } catch (error) {
        toast.error(error.message)
        console.log(error.message)
        throw new Error(error.message)
    }
}

export async function updateStaff({ data, token }) {
    try {
        console.log(data)
        const res = await fetch(`${BACKEND_URL}/staffs/${data.staff_id}`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data.orders)
        })
        if (!res.ok) throw new Error("Network error or something went wrong")
        const resData = await res.json()
        if (resData.status === 'failed') throw new Error("Cannot create account")
        return resData
    } catch (error) {
        toast.error(error.message)
        console.log(error.message)
        throw new Error(error.message)
    }
}