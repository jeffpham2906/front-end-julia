function ListSalaryHeader() {
  return (
    <>
      <div className="text-xl font-medium">Name</div>
      <div className="text-xl font-medium">Total</div>
      <div className="text-xl font-medium">Completed</div>
      <div className="text-xl font-medium">Accepted</div>
      <div className="text-xl font-medium">Rejected</div>
      <div className="text-xl font-medium">Total Salary (Completed)</div>
      <div></div>
      <div className="col-span-7 h-6"></div>
    </>
  );
}

export default ListSalaryHeader;
