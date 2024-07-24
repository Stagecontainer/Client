import styled from "styled-components";

const Container = styled.div`
  width: 1062px;
  padding : 48px 0px 0px 0px;

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
    ${(props) => (props.isChecked ? "" : props.theme.color.gray100)};
  border-radius: ${(props) => props.radius}px;

  color: ${(props) =>
    props.isChecked ? props.theme.color.gray0 : props.theme.color.gray100};
  background-color: ${(props) =>
    props.isChecked ? props.theme.color.main : props.theme.color.gray0};

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
    color: ${(props) => props.theme.color.blue};
  }
`;

export { Container, CustomButton, SubmitContainer };
