import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  & > span {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.color.gray60};
    cursor: pointer;
  }
`;

export default Container;
