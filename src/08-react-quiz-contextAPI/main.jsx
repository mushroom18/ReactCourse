import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { QuizProvider } from "./contexts/QuizContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
