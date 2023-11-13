
import toast from "react-hot-toast";
import { BACKEND_URL } from "../Constants/BACKEND_URL";

export async function getAllOrders({ filter }) {
  try {
    const res = await fetch(`${BACKEND_URL}/orders${filter ? `?${filter?.field}=${filter?.value}` : ''}`, {
      mode: "cors",
      method: "GET",
      credentials: 'include',
    })
    const data = await res.json()
    if (data.status === "fail") throw new Error(data.message || "Error on server")
    return data.orders || []
  } catch (error) {
    console.error(error)
    toast.error(error.message)
  }
}

export async function sendCheckRequest(data) {
  try {
    const res = await fetch(`${BACKEND_URL}/orders`, {
      method: "PUT",
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ orders: data })
    })
    const resData = await res.json()
    return resData
  } catch (error) {
    console.error(error)
    toast.error(error.message)
  }
}


export async function createOrder({ data }) {
  try {
    const res = await fetch(`${BACKEND_URL}/orders`, {
      method: "POST",
      mode: 'cors',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const resData = await res.json()
    if (resData.status === "fail") throw new Error(resData.message)
    return
  } catch (error) {
    toast.error(error.message)
  }
}

export async function deleteOrder({ id }) {
  const res = await fetch(`${BACKEND_URL}/orders/${id}`, {
    method: "DELETE",
    mode: 'cors',
    credentials: 'include'
  })
  if (!res.ok) throw new Error('Something went wrong')
  const data = await res.json()
  if (data.status === 'failed') throw new Error('Cannot delete order')
  return data
}


export async function addStaffOrder({ data }) {
  try {
    // console.log(data)
    const res = await fetch(`${BACKEND_URL}/orders/${data.staff_id}`, {
      method: "POST",
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ orders: data.orders })
    })
    if (!res.ok) throw new Error("Network error or something went wrong")
    const resData = await res.json()
    if (resData.status === 'failed') throw new Error("Cannot add order")
    return resData
  } catch (error) {
    toast.error(error.message)
    console.log(error.message)
  }
}