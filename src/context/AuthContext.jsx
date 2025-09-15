// client/src/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const API = "http://localhost:5000";

  // App load হলে localStorage থেকে token check
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // যদি চাইলে API call করে validate করা যায়
      // উদাহরণ: axios.get(`${API}/me`, { headers: { Authorization: `Bearer ${token}` } })
      setUser({ token }); // simple: token থাকলে logged-in ধরে নিলাম
    }
  }, []);

  // Register user
  const register = async (userData) => {
    const res = await axios.post(`${API}/register`, userData);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user || { token: res.data.token });
    return res.data;
  };

  // Login user
  const login = async ({ email, password }) => {
    const res = await axios.post(`${API}/login`, { email, password });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user || { token: res.data.token });
    return res.data;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ useAuth হুক
export const useAuth = () => useContext(AuthContext);
