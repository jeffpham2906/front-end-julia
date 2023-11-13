import UserRow from "./UserRow";
import ListUserHeader from "./ListUserHeader";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";

import useGetAllStaffs from "./useGetAllStaffs";
function ListUsers() {
  const { staffs, error, isLoading } = useGetAllStaffs();
  return (
    <>
      {isLoading && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      {error && <p>Something wrong</p>}
      {!isLoading && !error && (
        <div className="grid grid-cols-[1fr,1fr,1fr,0.4fr]">
          <ListUserHeader />
          {staffs?.map((user) => (
            <UserRow
              key={user._id}
              user={user}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ListUsers;
