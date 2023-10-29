import {
  HiOutlineUser,
  HiOutlineArrowRightOnRectangle,
  HiOutlineBars3,
} from "react-icons/hi2";
import Button from "./Button";
import Avatar from "./Avatar";
import Modal from "./Modal";
import MainNav from "./MainNav";
import Spinner from "./Spinner";

import { useState } from "react";
import useLogout from "../features/Authencation/useLogout";
function HeaderUser() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const { logout, isLogout } = useLogout();
  return (
    <>
      {isLogout && (
        <Modal>
          <Spinner />
        </Modal>
      )}
      <div className="flex flex-row-reverse items-center border-b px-10 py-5 md:grid md:grid-cols-[auto,1fr] md:gap-x-5 md:px-5">
        {showMenuMobile && (
          <Modal onCloseModal={() => setShowMenuMobile(false)} position="left">
            <MainNav onCloseModal={() => setShowMenuMobile(false)} />
          </Modal>
        )}
        <span
          onClick={() => setShowMenuMobile(true)}
          className="hidden md:block"
        >
          <HiOutlineBars3 size={24} />
        </span>
        <div className="flex items-center gap-4 md:justify-end">
          <Avatar />
          <p className="text-lg font-medium">
            {user?.displayName || user?.username}
          </p>
          <span>
            <HiOutlineUser size={24} />
          </span>
          <Button
            onClick={() => {
              logout();
            }}
            icon={<HiOutlineArrowRightOnRectangle size={24} />}
            type="secondary"
          >
            <span className="md:hidden">Logout</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default HeaderUser;
