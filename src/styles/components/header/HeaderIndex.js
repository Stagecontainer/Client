import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.gray40};

  & .icon-box {
    width: 193px;
    height: 48px;
    display: flex;
    cursor: pointer;
    & > span {
      font-size: 16px;
      gap: 8px;
      font-family: 'DNFBitBitv2' !important;
      color: ${(props) => props.theme.color.main};
    }
  }
`;

const TopBar = styled.div`
  width: 1280px;
  height: 88px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
`;

const NavButton = styled.button`
  width: 192px;
  height: 48px;

  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 6px;
  background-color: ${(props) =>
    props.bgcolor === "orange"
      ? props.theme.color.main
      : props.theme.color.gray0};
  color: ${(props) =>
    props.bgcolor === "orange"
      ? props.theme.color.gray0
      : props.theme.color.main};
  font-size: 16px;
  line-height: 140%;
  cursor: pointer;
`;

export { Container, TopBar, NavButton };
