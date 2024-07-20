import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { HomePage as UserHomePage } from "./pages/user/HomePage";
import { HomePage as CompanyHomePage } from "./pages/company/HomePage";
import RequestItemPage from "./pages/company/RequestItemPage";
import SelectActionPage from "./pages/company/SelectActionPage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<UserHomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/company" element={<CompanyHomePage />}>
              <Route path="/company/select" element={<SelectActionPage />} />
              <Route path="/company/request" element={<RequestItemPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
