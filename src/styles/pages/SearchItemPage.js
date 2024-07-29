import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  & > .wrap {
    width: 1060px;

    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
  }
`;

export default Container;
