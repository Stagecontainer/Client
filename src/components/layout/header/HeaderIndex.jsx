import Search from "./Search";
import {
  Container,
  TopBar,
  NavButton,
  UserContainer,
} from "../../../styles/components/header/HeaderIndex";
import { useNavigate } from "react-router";
import Menu from "./Menu";
import { userMenu, companyMenu } from "../../../constant/MenuData";
import { useLocation } from "react-router-dom";
import Logo from "../../../assets/icon/logo.svg?react";
import { useContext } from "react";
import { AuthenticationContext } from "../../../contexts/user";
import BellIcon from "../../../assets/icon/bell.svg?react";
import FormIcon from "../../../assets/icon/form.svg?react";
import UserIcon from "../../../assets/icon/user.svg?react";

const HeaderIndex = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, username, logout } = useContext(
    AuthenticationContext
  );
  const searchHandler = () => {
    navigate("/company/search");
  };
  return (
    <Container
      index={
        location?.pathname.startsWith("/company/products")
          ? "isProductsPage"
          : ""
      }
    >
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
          <Logo />
          <span>무대 창고</span>
        </div>
        <Search onclickFun={searchHandler} readOnly={true} />
        {isAuthenticated ? (
          <UserContainer>
            <div className="user">
              <span>
                <strong style={{ fontWeight: "700" }}>{username}</strong>님
                환영합니다
              </span>
              <span className="logout" onClick={() => logout()}>
                로그아웃
              </span>
            </div>

            <div className="icon">
              <div className="icon-container">
                <FormIcon />
                <span>주문 내역</span>
              </div>
              <div className="icon-container">
                <BellIcon />
                <span>알림</span>
              </div>
              <div className="icon-container">
                <UserIcon />
                <span>마이페이지</span>
              </div>
            </div>
          </UserContainer>
        ) : (
          <>
            <NavButton bgcolor={"orange"} onClick={() => navigate("/login")}>
              일반 로그인
            </NavButton>
            <NavButton>고객센터</NavButton>
          </>
        )}
      </TopBar>
      {location?.pathname.startsWith(
        "/company/products"
      ) ? null : location?.pathname.startsWith("/company") ? (
        <Menu dataIndex={companyMenu} />
      ) : (
        <Menu dataIndex={userMenu} />
      )}
    </Container>
  );
};

export default HeaderIndex;
