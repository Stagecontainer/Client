import styled from "styled-components";

const Container = styled.div`
  height: 43px;

  display: flex;
  justify-content: center;
  & > .wrap {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .menu-left {
    display: flex;
    gap: 32px;
    & span {
      color: ${(props) => props.theme.color.gray100};
      font-weight: 600;
      cursor: pointer;
    }
  }

  & .menu-right {
    width: 192px;
    display: flex;
    justify-content: center;
    gap: 46px;
    & > span {
      font-family: "GangwonEduPowerExtraBoldA" !important;
      font-size: 16px;
      font-weight: 800;
      cursor: pointer;
    }
  }
`;

export default Container;
