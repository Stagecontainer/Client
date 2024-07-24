import styled from "styled-components";

const Container = styled.div`
  padding: 24px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  & > .wrap {
    width: 1281px;

    display: flex;
    flex-direction: column;
    gap: 48px;
  }
`;

export default Container;
