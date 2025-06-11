import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyBrowserRouter from "./MyRouter/MyBrowserRouter.jsx";
import MyRoute from "./MyRouter/MyRoute.jsx";
import MyRoutes from "./MyRouter/MyRoutes.jsx";
import MyLink from "./MyRouter/MyLink.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyBrowserRouter>
      <nav>
        <MyLink to="/">App</MyLink>
        <MyLink to="/home">Home</MyLink>
      </nav>
      <MyRoutes>
        <MyRoute path="/" element={<App />} />
        <MyRoute path="/home" element={<Home />} />
      </MyRoutes>
    </MyBrowserRouter>
  </StrictMode>
);
