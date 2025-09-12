/* eslint-disable react-refresh/only-export-components */
// AuthContext.js
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) =>
    setUser({
      email,
      displayName: "Demo User",
      photoURL: "https://via.placeholder.com/40",
    });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
