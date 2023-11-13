import Spinner from "../../ui/Spinner";
import useGetAllStaffs from "../Users/useGetAllStaffs";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";

import { useState } from "react";
import { useOrder } from "../../Contexts/OrdersProvider";
import useAddStaffOrder from "./useAddStaffOrder";

function ModalStaffs({ setShowStaffs }) {
  const { staffs, isGetting, getError } = useGetAllStaffs();
  const { choosenListOrders, setChoosenListOrders } = useOrder();

  const { addStaffOrder, isUpdating, updateError } = useAddStaffOrder({
    setShowStaffs,
  });
  const isLoading = isGetting || isUpdating;
  const error = getError || updateError;
  const [staffChoosen, setStaffChoosen] = useState();
  function handleDistribute(staff) {
    addStaffOrder({
      data: {
        staff_id: staff,
        orders: choosenListOrders,
      },
    });
    setChoosenListOrders([]);
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
              {staffs.length > 0 ? (
                staffs.map((staff) => (
                  <li
                    key={staff._id}
                    className={`cursor-pointer rounded-md p-2 hover:bg-teal-100 ${
                      staffChoosen === staff._id && "bg-teal-100"
                    }`}
                    onClick={() => setStaffChoosen(staff._id)}
                  >
                    {staff.displayName}
                  </li>
                ))
              ) : (
                <p>Không có nhân viên</p>
              )}
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
