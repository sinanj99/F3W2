import React, { useState, useEffect } from "react";
import "./App.css";

function Time({ initial }) {
  const [time, setTime] = useState(initial);
  useEffect(() => {
    localStorage.setItem("time", time);
    const clear = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => {
      clearInterval(clear);
    };
  }, [time]);
  return (
    <div className="App">
      <p>Time: {time}</p>
    </div>
  );
}

export default function App() {
  return <Time initial={parseInt(localStorage.getItem("time"))} />;
}
