import { useState } from "react";
import "./style.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion acco={faqs}/>
    </div>
  );
}

function Accordion({acco}) {
  return <div>{acco.map((item,index)=>(<AccordionItem title={item.title} text={item.text} num={index} key={index}/>))}</div>;
}

function AccordionItem({num,title,text}){
  const [isOpen,setIsopen]= useState(false);


  return <div className={`item ${isOpen?"open":""}`} onClick={()=>setIsopen(!isOpen)}> 
    <p className="number">{num<10?`0${num+1}`:num+1}</p>
    <p className="title">{title}</p>
    <p className="icon">{isOpen?"-":"+"}</p>
    {isOpen && <div className="content-box">{text}</div>}
  </div>;
}

