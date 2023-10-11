/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { BACKEND_URL } from "../Constants/BACKEND_URL";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");
  const [user, setUser] = useState();

  async function login(userInfo) {
    try {
      setErrorLogin("");
      setIsLoading(true);
      const res = await fetch(`${BACKEND_URL}/users/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      console.log(res)
      if (!res.ok) throw new Error("Error network");
      const data = await res.json();

      if (data.status === "failed")
        return setErrorLogin("Credientials is not correct");
      console.log(data);
      return setUser({
        username: data.data.user.username,
        // token: data.token,
        isAdmin: data.data.user?.isAdmin,
        user_id: data.data.user._id,
      });
    } catch (err) {
      setErrorLogin(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  function logout() {
    setUser("");
  }
  return (
    <AuthContext.Provider
      value={{ isLoading, errorLogin, login, setErrorLogin, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Using context outside Provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
