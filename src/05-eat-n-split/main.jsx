import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppByMe from "./AppByMe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <AppByMe />
  </StrictMode>
);
