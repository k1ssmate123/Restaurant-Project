import { createContext, use, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const name = sessionStorage.getItem("userName");
    const email = sessionStorage.getItem("userEmail");
    const id = sessionStorage.getItem("userId");

    if (name && email && id) {
      setUserData({ name, email, id });
    }
  }, []);

  const navigate = useNavigate();
  const isLoggedIn = !!userData;
  const logout = () => {
    sessionStorage.clear();
    setUserData(null);
    navigate("/");
  };
  const login = (user) => {
    sessionStorage.setItem("userName", user.name);
    sessionStorage.setItem("userEmail", user.email);
    sessionStorage.setItem("userId", user.id);
    setUserData(user);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ userData, isLoggedIn: !!userData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
