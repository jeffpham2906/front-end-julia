import { useState } from "react";
import { BACKEND_URL } from "../../Constants/BACKEND_URL";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function useSignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()
    const signUp = async (userData) => {
        try {
            setIsLoading(true)
            setErrorMessage('')
            const res = await fetch(`${BACKEND_URL}/users/signup?role=admin`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            const data = await res.json()
            if (data.status === 'failed') throw new Error(data.message)
            else if (data.status === 'success') {
                toast.success('Tạo tài khoản thành công')
                return navigate('/login')
            }
        } catch (error) {
            setErrorMessage(error.message)
            toast.error(errorMessage || error.message)
        } finally {
            setIsLoading(false)
        }
    }
    return { signUp, isLoading }
}

export default useSignUp
