import Spinner from "../../ui/Spinner";
import useGetAllStaffs from "../Users/useGetAllStaffs";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";

import { useState } from "react";
import { useChoosenListOrders } from "./ChoosenListOrdersProvider";
import useUpdateStaff from "../Users/useUpdateStaff";

function ModalStaffs({ setShowStaffs }) {
  const { staffs, isGetting, getError } = useGetAllStaffs();
  const { updateStaff, isUpdating, updateError, isSuccess } = useUpdateStaff();
  const isLoading = isGetting || isUpdating;
  const error = getError || updateError;
  const [staffChoosen, setStaffChoosen] = useState();
  const { choosenListOrders } = useChoosenListOrders();
  function handleDistribute(staff) {
    updateStaff({
      data: {
        staff_id: staff,
        orders: choosenListOrders,
      },
    });
    if (isSuccess) return setShowStaffs(false);
  }
  return (
    <>
      <Modal onCloseModal={() => setShowStaffs(false)}>
        {isLoading && <Spinner />}
        {error && <p>Error fetching staffs</p>}
        {!isLoading && !error && (
          <>
            <ul className="mb-4 flex flex-col">
              <Heading type="secondary">Danh sách nhân viên</Heading>
              {staffs.map((staff) => (
                <li
                  key={staff._id}
                  className={`cursor-pointer rounded-md p-2 hover:bg-teal-100 ${
                    staffChoosen === staff._id && "bg-teal-100"
                  }`}
                  onClick={() => setStaffChoosen(staff._id)}
                >
                  {staff.displayName}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center">
              <Button
                type="primary"
                onClick={() => handleDistribute(staffChoosen)}
              >
                Phân phối
              </Button>
            </div>
          </>
        )}{" "}
      </Modal>
    </>
  );
}

export default ModalStaffs;
