import { useState } from "react"
import { BACKEND_URL } from "../../Constants/BACKEND_URL"
import toast from "react-hot-toast"

function useLogin() {
    const [isLoading, setIsLoading] = useState(false)
    const [onSuccess, setOnSuccess] = useState(false)
    async function login(data) {
        try {
            setIsLoading(true)
            setOnSuccess(false)
            const res = await fetch(`${BACKEND_URL}/users/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data)
            })
            const resData = await res.json()
            if (resData.status === 'fail') throw new Error(resData.message)
            setOnSuccess(true)
            sessionStorage.setItem('user', JSON.stringify(resData.data.user))
        } catch (error) {
            console.error(error.message)
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { isLoading, login, onSuccess }

}

export default useLogin
