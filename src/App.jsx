import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="calc-grid">
      <div className="wrapper">
        <div className="display"></div>
        <button className="btn" onClick={reset}>
          AC
        </button>
        <button className="btn" onClick={precent}>
          %
        </button>
        <button className="btn" onClick={minusPlus}>
          +/-
        </button>

        <button className="btn" onClick={operatorType}>
          /
        </button>

        <button className="btn" onClick={inputNum}>
          7
        </button>
        <button className="btn" onClick={inputNum}>
          8
        </button>
        <button className="btn" onClick={inputNum}>
          9
        </button>
        <button className="btn" onClick={operatorType}>
          X
        </button>
        <button className="btn" onClick={inputNum}>
          4
        </button>
        <button className="btn" onClick={inputNum}>
          5
        </button>
        <button className="btn" onClick={inputNum}>
          6
        </button>
        <button className="btn" onClick={operatorType}>
          +
        </button>
        <button className="btn" onClick={inputNum}>
          1
        </button>
        <button className="btn" onClick={inputNum}>
          2
        </button>
        <button className="btn" onClick={inputNum}>
          3
        </button>
        <button className="btn" onClick={operatorType}>
          -
        </button>
        <button className="btn" onClick={inputNum}>
          0
        </button>
        <button className="btn" onClick={inputNum}>
          .
        </button>
        <button className="btn" onClick={equals}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
