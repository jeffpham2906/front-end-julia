import SummaryItem from "./SummaryItem";

import {
  HiOutlineSquares2X2,
  HiOutlineSquare3Stack3D,
  HiOutlineCheckCircle,
  HiOutlineCircleStack,
} from "react-icons/hi2";
function SummaryList() {
  return (
    <ul className="grid grid-cols-4 gap-8 mb-8">
      <SummaryItem
        icon={<HiOutlineSquares2X2 size={36} />}
        title="Tổng đơn"
        quantity={30}
      />
      <SummaryItem
        icon={<HiOutlineSquare3Stack3D size={36} />}
        title="Đã phân phối"
        quantity={20}
      />
      <SummaryItem
        icon={<HiOutlineCheckCircle size={36} />}
        title="Hoàn thành"
        quantity={20}
      />{" "}
      <SummaryItem
        icon={<HiOutlineCircleStack size={36} />}
        title="Tổng lương"
        salary={2000000}
      />
    </ul>
  );
}

export default SummaryList;
