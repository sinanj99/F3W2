import React, { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState("name");

  function handleChange(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setName(value);
  }
  function handleSubmit(event) {
    console.log("a");
    window.alert(event.target.value);
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <label>
          Name:
          <input id="name" type="text" onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {name}
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
