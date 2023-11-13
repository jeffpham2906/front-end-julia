import useGetOrders from "../Orders/useGetOrders";

function UserRow({ user }) {
  const { username, displayName } = user;
  const { orders } = useGetOrders();
  const totalOrder = orders.reduce((arr, crr) => {
    if (crr?.staff_id === user._id) return arr + 1;
    return arr;
  }, 0);
  return (
    <>
      <div className="text-center">{displayName}</div>
      <div className="text-center">{username}</div>
      <div className="text-center">{totalOrder}</div>
      <div className="text-center">Edit</div>
      <div className="col-span-4 h-2"></div>
    </>
  );
}

export default UserRow;
