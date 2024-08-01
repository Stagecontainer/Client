import { useState, useEffect } from "react";

export const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("stageContainer");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const saveAccessToken = (token) => {
    localStorage.setItem("stageContainer", token);
    setAccessToken(token);
  };

  const clearAccessToken = () => {
    localStorage.removeItem("stageContainer");
    setAccessToken(null);
  };

  return {
    accessToken,
    saveAccessToken,
    clearAccessToken,
  };
};
