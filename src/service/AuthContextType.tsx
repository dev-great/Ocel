import { useState, useEffect, type ReactNode } from "react";
import { authLogin } from "../service/Api";
import { AuthContext, type User } from "../types/Types";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = sessionStorage.getItem("tlm_token");
    const savedUser = sessionStorage.getItem("tlm_user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const res = await authLogin(email, password);
    const { token: newToken, user: newUser } = res.data;
    setToken(newToken);
    setUser(newUser);
    sessionStorage.setItem("tlm_token", newToken);
    sessionStorage.setItem("tlm_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    sessionStorage.removeItem("tlm_token");
    sessionStorage.removeItem("tlm_user");
  };

  return <AuthContext.Provider value={{ user, token, loading, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
