import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./screens/PhoneHomePage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
