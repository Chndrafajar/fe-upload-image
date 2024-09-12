import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    // Ambil data dari localStorage
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);

  useEffect(() => {
    // Perbarui header Authorization ketika auth token berubah
    axios.defaults.headers.common["Authorization"] = auth.token;
  }, [auth.token]);

  return <AuthContext.Provider value={[auth, setAuth]}>{children}</AuthContext.Provider>;
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
