import theme from "../../styles/theme"

import {
  LoginJoinButton
} from "../../styles/components/loginjoin/LoginJoinButton";

const Button = ({ type, children, onClick }) => {
  const getButtonStyle = () => {
    if (type === "join") {
      return {
        border: `1px solid ${theme.color.gray100}`,
        color: theme.color.gray100,
        backgroundColor: theme.color.gray0

      };
    }
    if (type === "submit") {
      return {
        border: "none",
        color: theme.color.gray0,
        backgroundColor: theme.color.main
      };

    };
    return {
      border: "1px solid #ccc",
      color: "#000",
      backgroundColor: "#fff"
    };
  }
  const buttonStyle = getButtonStyle();

  return (
    <LoginJoinButton
      type={type}
      border={buttonStyle.border}
      color={buttonStyle.color}
      backgroundColor={buttonStyle.backgroundColor}
      onClick={onClick}
    >
      {children}
    </LoginJoinButton>
  );
};

export {Button};
