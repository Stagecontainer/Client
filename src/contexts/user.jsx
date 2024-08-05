import { useCallback, useMemo, useState, useEffect } from "react";
import React from "react";
import { useAccessToken } from "../hooks/useAccessToken";
import { getUserId, postRefresh } from "../api/users";

export const AuthenticationContext = React.createContext({
  isAuthenticating: false,
  isAuthenticated: false,
  username: "",
  userid: "",
  userToken: "",
  refreshToken: "",
  setIsAuthenticating: () => {},
  setIsAuthenticated: () => {},
  login: () => false,
  logout: async () => {},
});

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [userToken, setUserToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const { saveAccessToken, clearAccessToken } = useAccessToken();

  const initialize = async () => {
    const stageContainer = JSON.parse(localStorage.getItem("stageContainer"));
    const token = stageContainer ? stageContainer["refresh-token"] : null;
    try {
      if (token) {
        const { status, data } = await postRefresh({
          refresh: token,
        });
        if (status >= 200 && status < 300) {
          setIsAuthenticated(true); 
           // user-token 설정
          localStorage.setItem("stageContainer", JSON.stringify({
            'refresh-token': token,
            'user-token': data.access // user-token 저장
          }));
          setUsername(localStorage.getItem("username")); // username 복원
          const res = await getUserId()
          setUserid(res.data.id); // 필요시 user_id도 복원
        }
      } else {
        console.log("WHAT")
        setIsAuthenticated(false)
      }
      setIsAuthenticating(false);
    } catch (e) {
      console.error(e);
      setIsAuthenticating(false);
    }
  }

  const login = (response) => {
    saveAccessToken(response.access);
    setUserToken(response.access); // user-token 설정
    setUsername(response.nickname);
    setUserid(response.user_id);
    setRefreshToken(response.refresh); // refresh-token 설정
    localStorage.setItem("username", response.nickname); // username 저장
    localStorage.setItem("stageContainer", JSON.stringify({
      'refresh-token': response.refresh,
      'user-token': response.access // user-token 저장
    }));
    setIsAuthenticated(true);
  };

  const logout = useCallback((navigate) => {
    clearAccessToken();
    setUsername(""); // 상태 초기화
    setUserToken(""); // user-token 초기화
    setRefreshToken(""); // refresh-token 초기화
    setIsAuthenticated(false);
    localStorage.removeItem("username"); // localStorage에서 제거
    localStorage.removeItem("stageContainer"); // stageContainer에서 제거
    navigate("/");
  }, []);

  useEffect(() => {
    // 페이지 로드 시 username 복원 및 토큰 복원
    const storedUsername = localStorage.getItem("username");
    const stageContainer = JSON.parse(localStorage.getItem("stageContainer"));
    
    if (storedUsername) {
      setUsername(storedUsername);
    }
    
    if (stageContainer) {
      setRefreshToken(stageContainer["refresh-token"]);
      setUserToken(stageContainer["user-token"]);
    }

    initialize();
  }, []);

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      isAuthenticating,
      username,
      userid,
      userToken,
      refreshToken,
      setIsAuthenticated,
      setIsAuthenticating,
      login,
      logout,
    }),
    [isAuthenticated, isAuthenticating, username, userid, userToken, refreshToken, login, logout]
  );

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
