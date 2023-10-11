import { useAuth } from "../../Contexts/AuthProvider";
import DropDownMenu from "../../ui/DropDownMenu";
import OrderListsRow from "../ListByOrder";
import {
  ALLIST,
  NOT_DISTRIBUTED,
  DISTRIBUTED,
  COMPLETED,
  TODAY,
  LAST_DAY,
  SEVEN_DAY,
  THIRTY_DAY,
} from "../../Constants/OrderListConstant";

import { HiOutlineChevronDown } from "react-icons/hi2";
function NavOrders() {
  const { user } = useAuth();
  const isAdmin = Boolean(user?.isAdmin);
  return (
    <div className="mb-8 flex items-center justify-between">
      <OrderListsRow
        lists={
          isAdmin
            ? [ALLIST, NOT_DISTRIBUTED, DISTRIBUTED, COMPLETED]
            : ["Được giao", "Chờ duyệt", "Đã hoàn thành"]
        }
      />

      <span className="rounded-md bg-white px-4 py-2">
        <DropDownMenu
          name={TODAY}
          listOptions={[TODAY, LAST_DAY, SEVEN_DAY, THIRTY_DAY, ALLIST]}
          type="selection"
          icon={<HiOutlineChevronDown size={20} />}
        />
      </span>
    </div>
  );
}

export default NavOrders;
