import React, { useState } from "react";


function App() {
  // State variable
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="text-red-700">React Counter Application</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>

          <button onClick={decrement}>Decrement (-)</button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;