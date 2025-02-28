import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You score <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
