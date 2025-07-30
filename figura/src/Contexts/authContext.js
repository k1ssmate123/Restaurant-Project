import { createContext, use, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();

    navigate("/");
  };
  const login = (user) => {
    sessionStorage.setItem("userName", user.name);
    sessionStorage.setItem("userEmail", user.email);
    sessionStorage.setItem("userId", user.id);

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!sessionStorage.getItem("userId"),
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
