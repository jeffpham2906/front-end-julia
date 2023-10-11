import {
  HiOutlineUser,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBars3,
} from "react-icons/hi2";
import Button from "./Button";
import Avatar from "./Avatar";
import Modal from "./Modal";
import MainNav from "./MainNav";


import { useAuth } from "../Contexts/AuthProvider";
import { useState } from "react";
function HeaderUser() {
  const { logout, user } = useAuth();
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  return (
    <div className="flex flex-row-reverse items-center border-b px-10 py-5 md:grid md:grid-cols-[auto,1fr] md:gap-x-5 md:px-5">
      {showMenuMobile && (
        <Modal onCloseModal={() => setShowMenuMobile(false)} position="left">
          <MainNav onCloseModal={()=> setShowMenuMobile(false)}/>
        </Modal>
      )}
      <span onClick={() => setShowMenuMobile(true)} className="hidden md:block">
        <HiOutlineBars3 size={24} />
      </span>
      <div className="flex items-center gap-4 md:justify-end">
        <Avatar />
        <p className="text-lg font-medium">{user.username}</p>
        <span>
          <HiOutlineUser size={24} />
        </span>
        <Button
          onClick={() => logout()}
          icon={<HiOutlineArrowRightOnRectangle size={24} />}
          type="secondary"
        >
          <span className="md:hidden">Logout</span>
        </Button>
      </div>
    </div>
  );
}

export default HeaderUser;
