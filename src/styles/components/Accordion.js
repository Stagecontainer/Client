import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;

  flex-direction: column;
  justify-content: center;

  & > footer {
    height: 48px;
    display: flex;
    justify-content: center;

    & > button {
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 16px;
        background-color: transparent;
        border: none;
    }
  }
`;

export { Container };
