import toast from "react-hot-toast"
import { BACKEND_URL } from "../../Constants/BACKEND_URL"
import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
function useLogout() {
    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    async function logout() {
        try {
            setIsLoggingOut(true)
            const res = await fetch(`${BACKEND_URL}/users/logout`, {
                method: 'POST',
                credentials: 'include',
            })
            const resData = await res.json()
            if (resData.status === 'failed') throw new Error("Cannot logout")
            sessionStorage.clear()
            queryClient.clear()
            return navigate('/login')
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoggingOut(false)
        }
    }
    return { logout, isLoggingOut }
}

export default useLogout
