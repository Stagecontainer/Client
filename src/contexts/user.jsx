import { useCallback, useMemo, useState, useEffect } from "react";
import React from "react";
import { useAccessToken } from "../hooks/useAccessToken";

export const AuthenticationContext = React.createContext({
  isAuthenticating: false,
  isAuthenticated: false,
  username : "",
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

  const login = (response) => {
    saveAccessToken(response.access);
    setUsername(response.nickname);
    setIsAuthenticated(true);
  };

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
