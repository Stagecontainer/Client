import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 143px;
  padding: 16px 24px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color.gray20};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 6%);

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export default Container;