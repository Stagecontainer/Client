import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 38px;
  padding: 0px 0px 64px 0px;
  display: flex;
  gap: 8px;
  align-items: center;

  & > span {
    font-size: 24px;
    font-weight: 500;
    
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  & > .selected {
    font-weight: 600;
  }
`;

export default Container;
