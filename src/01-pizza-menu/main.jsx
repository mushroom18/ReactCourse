import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Yushu's pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <React.Fragment key="thisIsMyName">
          <p>just some meaningless words</p>
          <ul className="pizzas">
            {pizzas.map((item) => (
              <Pizza pizzaObj={item} key={item.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>Sorry, we are still working on our menu. Please come back later.</p>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  //if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <OrderTime closeHour={closeHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function OrderTime({ closeHour }) {
  return (
    <div className="order">
      <p>we are open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
