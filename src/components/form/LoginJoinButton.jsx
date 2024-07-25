import styled from "styled-components";
import theme from "../../styles/theme"

import {
    LoginJoinButton
  } from "../../styles/components/login/LoginJoinButton";
  
  const Button = ({ type, children }) => {
    const getButtonStyle = () => {
      if (type === "login") {
        return {
          border: "none",
          color: theme.color.gray0,
          backgroundColor: theme.color.main
        };
      }
      if (type === "join") {
        return {
          border: `1px solid ${theme.color.gray100}`,
          color: theme.color.gray100,
          backgroundColor: theme.color.gray0
        };
      }

    };
  
    const buttonStyle = getButtonStyle();
  
    return (
      <LoginJoinButton
        border={buttonStyle.border}
        color={buttonStyle.color}
        backgroundColor={buttonStyle.backgroundColor}
      >
        {children}
      </LoginJoinButton>
    );
  };
  
  export {Button};
  