import styled from "styled-components";
import theme from "../../theme"

const CustomButton = styled.button`
  width: 458px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:18px;
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.textColor};
  background-color: ${props => props.bgColor};
    &:disabled{
      background-color: ${theme.color.gray40};
      color: ${theme.color.gray0};
      border: none;
    }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

export { CustomButton, ButtonWrapper };
