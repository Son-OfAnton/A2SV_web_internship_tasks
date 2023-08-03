import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  // Store the initial value and use it later to prevernt re-render
  const minusButtonRef = useRef<HTMLButtonElement>(null);
  const plusButtonRef = useRef<HTMLButtonElement>(null);

  function plus() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  // The document title changes everytime the count state changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="counter">
      <button ref={minusButtonRef} className="counter--minus" onClick={minus}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button ref={plusButtonRef} className="counter--plus" onClick={plus}>
        +
      </button>
    </div>
  );
};

export default App;
