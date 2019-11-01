import React from "react";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1.js";

function Comp(props) {
  const { name } = props;
  return (
    <div>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Comp name="Sne" />
    </div>
  );
}

export default App;
