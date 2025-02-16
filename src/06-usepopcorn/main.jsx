import { StrictMode, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StarRating from "./StarRating";

/* function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="purple" maxRating={12} onSetRating={setMovieRating} />
      <p>This movie is rating {movieRating} stars.</p>
    </div>
  );
} */

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      maxRating={10}
      color="pink"
      message={["terrible", "bad", "normal", "good", "great"]}
    />
    <StarRating color="green" className="test" /> */}
    {/*<Test />*/}ß
  </StrictMode>
);
