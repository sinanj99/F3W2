import React from "react";
import App from "./App";
import person from "./file2.js";
import { males } from "./file2.js";
import { females } from "./file2.js";
export default function App2() {
  console.log([...males, ...females]);
  console.log([...males, "Kurt", "Helle", ...females, "Tina"]);
  const { firstName, email } = person;
  const personV2 = { ...person, friends: [...males, ...females], phone: 12345 };
  console.log(personV2);
  return (
    <div>
      <p>
        {firstName},{email}{" "}
      </p>
    </div>
  );
}
