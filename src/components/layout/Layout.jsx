import { Outlet } from "react-router";
import HeaderIndex from "./header/HeaderIndex";

const Layout = () => {
  return (
    <div>
      <HeaderIndex />
      <Outlet />
    </div>
  );
};

export default Layout;
