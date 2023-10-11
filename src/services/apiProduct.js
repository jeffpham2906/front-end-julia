import supabase from './supabase'
import { BACKEND_URL } from '../Constants/BACKEND_URL'
import toast from 'react-hot-toast'

export async function getProducts({ userToken }) {
    try {
        const res = await fetch(`${BACKEND_URL}/products`, {
            method: "GET",
            mode: 'cors',
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
        const data = await res.json()
        if (data.status === "failed") throw new Error(data.message)
        return data.products
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

export async function createEditProduct(newProduct) {

    try {
        const file = newProduct.image
        const fileName = await uploadFile(file)
        const res = await fetch(`${BACKEND_URL}/products`, {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...newProduct, image: fileName })
        })
        const data = await res.json()
        if (data.status === "failed") throw new Error(data.message)
        return;
    } catch (error) {
        throw new Error("Failed to create new product")
    }


}
export async function deleteProduct({ id, image }) {
    console.log("id", id)
    console.log("image", image)

    await deleteFile(image)

    try {
        const res = await fetch(`${BACKEND_URL}/products/${id}`, {
            method: "DELETE",
            mode: 'cors',
        })
        const data = await res.json()
        if (data.status === "failed") throw new Error(data.message)
        return;
    } catch (error) {
        throw new Error("Failed to delete product")
    }

}
export async function updateProduct({ newProductData, changeImage, staleImage }) {
    let fileName = ''
    try {
        if (changeImage) {
            fileName = await uploadFile(newProductData.image)
            await deleteFile(staleImage)
        }
        const res = await fetch(`${BACKEND_URL}/products/${newProductData._id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...newProductData, image: changeImage ? fileName : newProductData.image })
        })
        const data = await res.json()

        if (data.status === "failed") throw new Error(data.message)
        return;
    } catch (error) {
        throw new Error("Failed to update product")
    }
}

async function uploadFile(file) {
    const fileName = `${Math.floor(Math.random() * 100000)}${file.name}`
    const { error } = await supabase
        .storage
        .from('product-images')
        .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
        })
    if (error) throw new Error("Cannot upload image")
    return fileName
}
async function deleteFile(imageName) {
    const { error } = await supabase
        .storage
        .from('product-images')
        .remove([imageName])
    if (error) throw new Error("Failed to delete image")
}