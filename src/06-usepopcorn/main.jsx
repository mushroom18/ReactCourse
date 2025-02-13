import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <StarRating maxRating={5} />
    <StarRating maxRating={10} />
    <StarRating />
  </StrictMode>
);
