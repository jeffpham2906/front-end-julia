function UserRow({ username, displayName, totalOrder }) {
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
