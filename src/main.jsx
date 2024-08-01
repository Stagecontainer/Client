import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthenticationContextProvider } from "./contexts/user.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthenticationContextProvider>
    <App />
  </AuthenticationContextProvider>
);
