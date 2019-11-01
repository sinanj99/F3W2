import React from "react";

function NewPerson(props) {
  const {
    newPerson: { name },
    newPerson,
    addPerson,
    setNewPerson
  } = props;
  function savePerson(event) {
    if (name === "") {
      return;
    }
    addPerson(newPerson);
    setNewPerson({ id: "", name: "" });
    event.preventDefault();
  }

  function onChange(event) {
    newPerson.name = event.target.value;
    setNewPerson({ ...newPerson });
  }

  return (
    <form className="div">
      <h4>Add/Edit person</h4>
      <input type="text" value={name} onChange={onChange} />
      <button onClick={savePerson}>Save</button>
      <p>{JSON.stringify(newPerson)}</p>
    </form>
  );
}
export default NewPerson;
