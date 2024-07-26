import styled from "styled-components";

const LoginJoinButton = styled.button`
  width: 458px;
  height: 48px;
  padding: 7.5px 12px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => props.border};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

export {LoginJoinButton, ButtonWrapper};
