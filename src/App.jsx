import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const genButtons = (num) => {
    const numbers = [];

    for (let i = 0; i < num; i++) {
      numbers.push(<button>{i}</button>);
    }
    return numbers;
  };

  return (
    <div className="calc-grid">
      <div className="display"></div>
      <div className="buttons">
        <div className="display-btns">
          <button>AC</button>
          <button>%</button>
          <button>+/-</button>
        </div>
        <div className="operation-btns">
          <button>/</button>
          <button>X</button>
          <button>+</button>
          <button>-</button>
          <button>=</button>
        </div>
        <div className="number-btns">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>0</button>
          <button>.</button>
        </div>
      </div>
    </div>
  );
}

export default App;
