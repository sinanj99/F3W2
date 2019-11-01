import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FormDemo from "./FormDemo";
import FormDemoMultiple from "./FormDemoMultiple";
import LiftingState from "./LiftingState";
import LiftingState2 from "./LiftingState2";

let app = <FormDemo />;
const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        ex1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        ex2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        ex3
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app4">
        ex4
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <FormDemo />;
      break;
    case "app2":
      app = <FormDemoMultiple />;
      break;
    case "app3":
      app = <LiftingState />;
      break;
    case "app4":
      app = <LiftingState2 />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
