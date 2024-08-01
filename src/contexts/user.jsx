import { useCallback, useMemo, useState, useEffect } from "react";
import React from "react";
import instance from "../api/instance";
import { useAccessToken } from "../hooks/useAccessToken";

export const AuthenticationContext = React.createContext({
  isAuthenticating: false,
  isAuthenticated: false,
  setIsAuthenticating: () => {},
  setIsAuthenticated: () => {},
  login: () => false,
  logout: async () => {},
});

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const { saveAccessToken, clearAccessToken } = useAccessToken();
  /*const initialize = useCallback(async () => {
      const { status, data } = await refreshToken();
      if (status === 200) {
        setIsAuthenticated(true);
        setAccessToken(data.access);
      }
      setIsAuthenticating(false);
    }, [setIsAuthenticated, setIsAuthenticating]);*/

  const login = useCallback(async (payload) => {
    try {
      const response = await instance.post("users/login", payload);
      if (response.status === 200) {
        const { access, profile } = response.data;
        saveAccessToken(access);
        setUsername(profile.nickname);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log("로그인 오류", error);
    }
    return false;
  }, []);

  const logout = useCallback((navigate) => {
    clearAccessToken();
    setUsername(null);
    setIsAuthenticated(false);
    navigate("/");
    //로그아웃 및 토큰 처리
  }, []);

  useEffect(() => {
    //initialize();
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      isAuthenticating,
      username,
      setIsAuthenticated,
      setIsAuthenticating,
      login,
      logout,
    }),
    [isAuthenticated, isAuthenticating, username, login, logout]
  );

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
