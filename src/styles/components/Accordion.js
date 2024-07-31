import styled from "styled-components";

const Container = styled.div`
  width: 846px;
  

  & > footer {
    height: 48px;
    display: flex;
    justify-content: center;

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 16px;
      background-color: transparent;
      border: none;
    }
  }
`;
const ContentWrap = styled.div`
  height: 0px;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
`;

export { Container, ContentWrap };
