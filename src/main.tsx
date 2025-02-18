import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <iframe src="../public/solitaire/solitare.html" width={1000} height={1000}></iframe>
  </StrictMode>
);
