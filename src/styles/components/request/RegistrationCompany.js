import styled from "styled-components";

const Container = styled.div`
  width: 1062px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  & .field-box {
    display: flex;
    justify-content: space-between;
  }
`;

const CustomButton = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  border: 1px solid
    ${(props) => (props.isChecked ? "" : props.theme.color.black)};
  border-radius: ${(props) => props.radius}px;

  color: ${(props) =>
    props.isChecked ? props.theme.color.white : props.theme.color.black};
  background-color: ${(props) =>
    props.isChecked ? props.theme.color.orange : props.theme.color.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  padding: 40px 0px;

  justify-content: space-between;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  & span {
    font-size: 16px;
    font-weight: 500;
    color: #0033ff;
  }
`;

export { Container, CustomButton, SubmitContainer };
