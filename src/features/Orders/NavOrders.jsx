// import { useAuth } from "../../Contexts/AuthProvider";
import DropDownMenu from "../../ui/DropDownMenu";
import FilterOrder from "../../ui/FilterOrder";

import { HiOutlineChevronDown } from "react-icons/hi2";
const listAdminFilter = [
  { value: "all", label: "Tất cả" },
  { value: "distributed", label: "Đã giao" },
  { value: "no-distributed", label: "Chưa giao" },
  { value: "pending", label: "Chờ duyệt" },
  { value: "completed", label: "Hoàn thành" },
];
const listStaffFilter = [
  { value: "all", label: "Tất cả" },
  { value: "distributed", label: "Được giao" },
  { value: "pending", label: "Chờ duyệt" },
  { value: "completed", label: "Hoàn thành" },
];
function NavOrders() {
  const { isStaff } = JSON.parse(sessionStorage.getItem("user"));
  // const handleFilter = (e) => {
  //   getNoDistributeOrder(e);
  // };
  return (
    <div className="mb-8 flex items-center justify-between gap-4 sm:text-sm">
      <FilterOrder lists={isStaff ? listStaffFilter : listAdminFilter} />

      {/* <span className="rounded-md bg-white px-4 py-2">
        <DropDownMenu
          name={"Hôm nay"}
          listOptions={[
            "Hôm nay",
            "Hôm qua",
            "7 ngày trước",
            "1 tháng trước",
            "Tất cả",
          ]}
          type="selection"
          icon={<HiOutlineChevronDown size={20} />}
        />
      </span> */}
    </div>
  );
}

export default NavOrders;
