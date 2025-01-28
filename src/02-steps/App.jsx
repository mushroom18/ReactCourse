import { useState } from "react";
import "./index.css";
import { use } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <div>
      <Steps />
      <DateCounter />
      <UpgradeCounter />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "jonas" });
  const [isOpen, setIsopen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }
  //在 React 中，使用 setState 更新状态时，可以传递一个值或一个函数，两者的行为略有不同。
  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
      setTest({ name: "fred" });
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsopen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step{step}:{messages[step - 1]}
            {test.name}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function DateCounter() {
  const [count, SetCount] = useState(0);
  const [step, SetStep] = useState(1);
  const today = new Date();
  const dateDisplay = new Date();
  dateDisplay.setDate(dateDisplay.getDate() + count);

  return (
    <div className="message">
      <div>TEST</div>
      <div>
        <button onClick={() => SetStep((s) => s - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => SetStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => SetCount((c) => c - step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => SetCount((c) => c + step)}>+</button>
      </div>
      <div>
        <p>{`Today is ${today.toDateString()}`}</p>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{dateDisplay.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}

function UpgradeCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const dateDisplay = new Date();
  dateDisplay.setDate(dateDisplay.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="message">
      <p>Counter Version2</p>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>{`${count} days from today is ${dateDisplay.toDateString()}`}</p>
      {step !== 1 || count !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
