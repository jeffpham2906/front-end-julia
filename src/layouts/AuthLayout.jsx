/* eslint-disable react/prop-types */

import Modal from "../ui/Modal";
function AuthLayout({ children }) {
  return (
    <div className="relative h-screen bg-hero-section bg-cover">
      <Modal>{children}</Modal>
    </div>
  );
}

export default AuthLayout;
