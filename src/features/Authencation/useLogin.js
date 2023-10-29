import { useState } from "react"
import { BACKEND_URL } from "../../Constants/BACKEND_URL"

function useLogin(isStaff) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [onSuccess, setOnSuccess] = useState(false)
    async function login(data) {
        try {
            setIsLoading(true)
            setError('')
            setOnSuccess(false)
            const res = await fetch(`${BACKEND_URL}/users/login?role=${isStaff ? 'staff' : 'admin'}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(data)
            })
            const resData = await res.json()
            if (resData.status === 'failed') throw new Error(resData.message)
            setOnSuccess(true)
            sessionStorage.setItem('user', JSON.stringify(resData.data.user))
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return { isLoading, error, login, onSuccess }

}

export default useLogin
