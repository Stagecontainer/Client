import styled from "styled-components";

const Container = styled.div`
  width: 628px;
  height: 48px;

  border: 1px solid #eeeeee;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  & > .wrap {
    width: 604px;
    height: 100%;
    display: flex;
    align-items: center;

    & > input {
      width: 580px;
      height: 22px;
      font-size: 16px;
      border: none;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #4d4d4d;
      }
    }
  }
`;

export default Container;
