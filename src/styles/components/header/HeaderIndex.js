import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & .icon-box {
    width: 193px;
    height: 48px;
    border: 1px solid black;
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

  border: 1px solid ${(props) => props.theme.color.orange};
  border-radius: 6px;
  background-color: ${(props) =>
    props.bgcolor === "orange"
      ? props.theme.color.orange
      : props.theme.color.white};
  color: ${(props) =>
    props.bgcolor === "orange"
      ? props.theme.color.white
      : props.theme.color.orange};
  font-size: 16px;
  line-height: 140%;
`;

export { Container, TopBar, NavButton };
