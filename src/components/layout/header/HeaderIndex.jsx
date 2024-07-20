import Menu from "./Menu";
import Search from "./Search";
import {
  Container,
  TopBar,
  NavButton,
} from "../../../styles/components/header/HeaderIndex";

const HeaderIndex = () => {
  return (
    <Container>
      <TopBar>
        <div
          className="icon-box"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          아이콘 예정
        </div>
        <Search />
        <NavButton bgcolor={"orange"}>일반 로그인</NavButton>
        <NavButton>고객센터</NavButton>
      </TopBar>
      <Menu />
    </Container>
  );
};

export default HeaderIndex;
