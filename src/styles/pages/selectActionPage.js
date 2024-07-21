import styled from "styled-components";

const Container = styled.div`
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .wrap {
    display: flex;
    justify-content: space-between;
    gap: 100px;
  }
`;

export default Container;
