// import supabase from './supabase'
import { BACKEND_URL } from '../Constants/BACKEND_URL'
import toast from 'react-hot-toast'
const token = JSON.parse(sessionStorage.getItem('token'))
export async function getProducts() {
    try {
        const res = await fetch(`${BACKEND_URL}/products`, {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await res.json()
        if (data.status === "fail") throw new Error(data.message)
        return data.products
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

export async function createEditProduct(formData) {
    // console.log(formData)
    try {
        const res = await fetch(`${BACKEND_URL}/products`, {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        const data = await res.json()
        if (data.status === "fail") throw new Error(data.message)
        return;
    } catch (error) {
        console.error(error.message)
    }
}
export async function deleteProduct(product_id) {
    try {
        const res = await fetch(`${BACKEND_URL}/products/${product_id}`, {
            method: "DELETE",
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = await res.json()
        if (data.status === "fail") throw new Error(data.message)
        return;
    } catch (error) {
        console.error(error.message)
    }

}
export async function updateProduct({ formData, editProductID }) {
    try {
        const res = await fetch(`${BACKEND_URL}/products/${editProductID}`, {
            method: "PUT",
            mode: "cors",
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        const data = await res.json()
        if (data.status === "fail") throw new Error(data.message)
        return;
    } catch (error) {
        console.error(error.message)
    }
}
