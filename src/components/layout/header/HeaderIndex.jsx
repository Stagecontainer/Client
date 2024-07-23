import Search from "./Search";
import {
  Container,
  TopBar,
  NavButton,
} from "../../../styles/components/header/HeaderIndex";
import { useNavigate } from "react-router";
import Menu from "./Menu";
import { userMenu, companyMenu } from "../../../constans/MenuData";
import { useLocation } from "react-router-dom";

const HeaderIndex = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location?.pathname)
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
          onClick={() => navigate("/")}
        >
          아이콘 예정
        </div>
        <Search />
        <NavButton bgcolor={"orange"} onClick={() => navigate("/login")}>
          일반 로그인
        </NavButton>
        <NavButton>고객센터</NavButton>
      </TopBar>
      {
        location?.pathname.startsWith('/company') ? <Menu dataIndex={companyMenu}/> : <Menu dataIndex={userMenu}/>
      }
    </Container>
  );
};

export default HeaderIndex;
