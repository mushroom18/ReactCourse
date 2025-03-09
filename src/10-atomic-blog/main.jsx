import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App-v1";
import { PostProvider } from "./PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </React.StrictMode>
);
