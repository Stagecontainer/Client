import { useState, useEffect } from "react";

export const useRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("stageContainer");
    if (token) {
      setRefreshToken(token);
    }
  }, []);

  const saverefreshToken = (token) => {
    localStorage.setItem("stageContainer", JSON.stringify({'user-token' : token}));
    setRefreshToken(token);
  };

  const clearrefreshToken = () => {
    localStorage.removeItem("stageContainer");
    setRefreshToken(null);
  };

  return {
    refreshToken,
    saverefreshToken,
    clearrefreshToken,
  };
};
