import "../index.css";
import Header from "./Header";
import MainPart from "./MainPart";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <MainPart>
        {status == "loading" && <Loader />}
        {status == "error" && <Error />}
        {status == "ready" && <StartScreen />}
        {status == "active" && (
          <>
            <Progress />
            <Question />
            <footer>
              <Timer />
              <NextButton />
            </footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </MainPart>
    </div>
  );
}
