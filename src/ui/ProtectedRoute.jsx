/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!user) navigate("/login");
    },
    [user, navigate],
  );
  if (!user)
    return (
      <Modal>
        <div className="flex flex-col gap-4 items-center">
          <Spinner />
          <p>You need to login first</p>
        </div>
      </Modal>
    );
  return <div>{children}</div>;
}

export default ProtectedRoute;
