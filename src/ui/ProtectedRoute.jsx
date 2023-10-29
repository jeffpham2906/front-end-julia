/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  let user = Boolean(JSON.parse(sessionStorage.getItem("user")));
  useEffect(
    function () {
      if (!user) navigate("/");
    },
    [navigate, user],
  );
  if (!user)
    return (
      <Modal>
        <Spinner />
      </Modal>
    );
  return <div>{children}</div>;
}

export default ProtectedRoute;
