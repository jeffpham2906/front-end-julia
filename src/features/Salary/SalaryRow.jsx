import { FormatVND } from "../../utils/FormatVND";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

function SalaryRow() {
  return (
    <>
      <div>Jeff</div>
      <div>50</div>
      <div>40</div>
      <div>30</div>
      <div>10</div>
      <div>{FormatVND.format(7000000)}</div>
      <div>
        <HiOutlineEllipsisVertical
          className="cursor-pointer"
          size={20}
          stroke="#1f2937"
        />
      </div>
      <div className="col-span-7 h-2"></div>
    </>
  );
}

export default SalaryRow;
