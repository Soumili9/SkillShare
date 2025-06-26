// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isAdminLogin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userType = localStorage.getItem("usertype");
    setIsAdmin(userType === "admin");

    const user = localStorage.getItem("user");
    setIsUserLogin(!!user && userType !== "admin");
    setLoading(false);
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("usertype", "user");
    setIsUserLogin(true);
  };

  const adminLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("usertype", "admin");
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.clear();
    setIsUserLogin(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLogin, login, logout, adminLogin, isAdminLogin, loading }}>

      {children}
    </AuthContext.Provider>
  );
};
