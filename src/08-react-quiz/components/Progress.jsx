function Progress({ index, numQuestuions, points, maxPoints }) {
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
