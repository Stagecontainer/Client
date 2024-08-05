import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  background-color: white;
  top: 100px;
  width: 100%;
  min-width: 1440px;
  padding: 60px 0px;
  gap: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & .title {
    font-size: 24px;
    font-weight: 700;
  }
  & .content {
    & > span {
      font-size: 20px;
      font-weight: 300;
      color: ${(props) => props.theme.color.gray80};
    }

    text-align: center;
  }
  & .button-box {
    display: flex;
    gap: 24px;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 50px;

  border: 1px solid ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.main};
  background-color: #ffffff;
  &:disabled {
    border: 1px solid ${(props) => props.theme.color.main};
    color: #ffffff;
    background-color: ${(props) => props.theme.color.main};
  }
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, Button };
