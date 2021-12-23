import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [headingText, setHeadingText] = useState("Hello beautiful");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setHeadingText("I love you more than anything Rithmi <3");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
      >
        Click for a surprise
      </button>
    </div>
  );
}
export default App;
