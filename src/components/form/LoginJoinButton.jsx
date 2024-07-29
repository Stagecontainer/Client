import {
  CustomButton
} from "../../styles/components/loginjoin/LoginJoinButton";


const LoginJoinButton = ({ text, textColor, borderColor, bgColor, onClick, isDisabled }) => {

  return (
    <CustomButton
      textColor={textColor}
      borderColor={borderColor}
      bgColor={bgColor}
      onClick={onClick}
      disabled={isDisabled}
      >
        {text}
      
    </CustomButton>
  );
};

export default LoginJoinButton;