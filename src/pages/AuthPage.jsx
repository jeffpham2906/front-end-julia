import AuthLayout from "../layouts/AuthLayout";

import { Outlet } from "react-router-dom";
function AuthPage() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}

export default AuthPage;
