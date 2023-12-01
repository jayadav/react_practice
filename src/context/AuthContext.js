import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initval = localStorage.getItem("isLogedIn")
  const [isLogin, setLogin] = useState(initval);

  const login = () => {
    setLogin(true);
    localStorage.setItem("isLogedIn", true);
  };

  const logout = () => {
    setLogin(false);
    localStorage.setItem("isLogedIn", false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used in Auth provider");
  }

  return context;
};
