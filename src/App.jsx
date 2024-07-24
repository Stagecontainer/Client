import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CompanyHomePage from "./pages/company/CompanyHomePage";
import UserHomePage from "./pages/user/UserHomePage";
import RequestItemPage from "./pages/company/RequestItemPage";
import SelectActionPage from "./pages/company/SelectActionPage";
import SearchItemPage from "./pages/company/SearchItemPage";
import SearchDetailPage from "./pages/company/SearchDetailPage";
import ChattingPage from "./pages/chat/ChattingPage";
import OrderRequestPage from "./pages/order-request/OrderRequestPage";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UserHomePage />} />
              <Route path="login" element={<LoginPage />} />

              <Route path="/company">
                <Route index element={<CompanyHomePage />} />
                <Route path="/company/select" element={<SelectActionPage />} />
                <Route path="/company/request" element={<RequestItemPage />} />
                <Route path="/company/search" element={<SearchItemPage />} />
                <Route path="/company/:id">
                  <Route index element={<SearchDetailPage />} />
                  <Route path="/company/:id/chat" element={<ChattingPage />} />
                  <Route
                    path="/company/:id/order-request"
                    element={<OrderRequestPage />}
                  />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
