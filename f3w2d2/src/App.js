import React, { useState, useEffect } from "react";
import "./App.css";

function Counter({ initial, incr }) {
  const [count, setCount] = useState(initial);
  useEffect(() => {
    localStorage.setItem("count", count);
  });

  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + incr)}>Increment</button>
      <button onClick={() => setCount(count - incr)}>Decrement</button>
    </div>
  );
}

export default function App() {
  return <Counter initial={parseInt(localStorage.getItem("count"))} incr={5} />;
}
