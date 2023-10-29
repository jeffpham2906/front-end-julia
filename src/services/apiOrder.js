
import toast from "react-hot-toast";
import { BACKEND_URL } from "../Constants/BACKEND_URL";

export async function getAllOrders({ filter }) {
  console.log(filter)
  // console.log(1)
  const { isStaff } = JSON.parse(sessionStorage.getItem('user'))
  const res = await fetch(`${BACKEND_URL}/orders?role=${isStaff ? 'staff' : 'admin'}${filter ? `&${filter?.field}=${filter?.value}` : ''}`, {
    mode: "cors",
    method: "GET",
    credentials: 'include',
  })
  const data = await res.json()
  if (data.status === "failed") throw new Error(data.message || "Error on server")
  return data.orders
}

// export async function updateOrder({ id, checked }) {
//   try {
//     const res = await fetch(`${BACKEND_URL}/orders/${id}`, {
//       method: "PATCH",
//       mode: 'cors',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ checked: checked })
//     })
//     const data = await res.json()

//     if (data.status === "failed") throw new Error(data.message || "Error on server")
//     if (checked) return "Checked"
//     else return "Unchecked"
//   } catch (error) {
//     throw new Error("Cannot update order")
//   }
// }


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
    if (resData.status === "failed") throw new Error(resData.message)
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