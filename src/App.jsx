import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CompanyHomePage from "./pages/company/CompanyHomePage";
import UserHomePage from "./pages/user/UserHomePage";
import RequestItemPage from "./pages/company/RequestItemPage";
import SelectActionPage from "./pages/company/SelectActionPage";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>     
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<UserHomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/company" element={<CompanyHomePage />}/>
            <Route path="/company/select" element={<SelectActionPage />} />
            <Route path="/company/request" element={<RequestItemPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
