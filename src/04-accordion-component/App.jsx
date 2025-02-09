import { useState } from "react";
import "./style.css";
import { use } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion acco={faqs} />
      <TipCalculator />
    </div>
  );
}

function Accordion({ acco }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {acco.map((item, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          num={index}
          key={index}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 10 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

function TipCalculator() {
  const [bills, setBills] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = bills * ((tip1 + tip2) / 2 / 100);
  const total = bills + tip;

  function handleReset() {
    setBills("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bills bills={bills} setBills={setBills} />
      <SelectBox tip={tip1} onChange={setTip1}>
        How did you like the service?
      </SelectBox>
      <SelectBox tip={tip2} onChange={setTip2}>
        How did your friends like the service
      </SelectBox>
      {bills > 0 && (
        <>
          <Outcome bills={bills} tip={tip} total={total} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bills({ bills, setBills }) {
  return (
    <div>
      <label>How much is the bill?</label>
      <input
        type="text"
        value={bills}
        onChange={(e) => setBills(Number(e.target.value))}
      />
    </div>
  );
}

function SelectBox({ children, tip, onChange }) {
  return (
    <div>
      <label>{children}</label>

      <select value={tip} onChange={(e) => onChange(Number(e.target.value))}>
        <option value="0">dissatisfied(0%)</option>
        <option value="5">it was okay(5%)</option>
        <option value="10">it was good(10%)</option>
        <option value="20">it was amazing!(20%)</option>
      </select>
    </div>
  );
}

function Outcome({ bills, tip, total }) {
  return (
    <h3>
      YOU PAY ${total}(${bills}+${tip}TIP)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
