import {
  CustomButton
} from "../../styles/components/loginjoin/LoginJoinButton";


const LoginJoinButton = ({ text, textColor, borderColor, bgColor, onClick }) => {

  return (
    <CustomButton
      textColor={textColor}
      borderColor={borderColor}
      bgColor={bgColor}
      onClick={onClick}>
        {text}
      
    </CustomButton>
  );
};

export default LoginJoinButton;