import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestuions, points, maxPoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestuions} value={index} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestuions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
