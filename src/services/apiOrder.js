
import { BACKEND_URL } from "../Constants/BACKEND_URL";

export async function getAllOrders() {
  const res = await fetch(`${BACKEND_URL}/orders`)
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
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    const resData = await res.json()
    if (resData.status === "failed") throw new Error(resData.message)
    return
  } catch (error) {
    throw new Error("Somet")
  }
}

export async function deleteOrder({ id }) {
  const res = await fetch(`${BACKEND_URL}/orders/${id}`, {
    method: "DELETE",
    mode: 'cors'
  })
  if (!res.ok) throw new Error('Something went wrong')
  const data = await res.json()
  if (data.status === 'failed') throw new Error('Cannot delete order')
  return data
}