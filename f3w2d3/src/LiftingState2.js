import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PersonList from "./PersonList";
import NewPerson from "./NewPerson";
import uuid from "uuid/v1";

function LiftingState2() {
  const initial1 = [
    {
      id: uuid(),
      name: "Saddam"
    },
    {
      id: uuid(),
      name: "Hussein"
    },
    {
      id: uuid(),
      name: "Ali"
    }
  ];
  const initial2 = {
    id: "",
    name: ""
  };
  const [persons, setPersons] = useState(initial1);
  const [newPerson, setNewPerson] = useState(initial2);

  function addPerson(person) {
    const { id, name } = person;
    if (id == "") {
      person.id = uuid();
      persons.push(person);
    } else {
      const pToEdit = persons.find(person => person.id === id);
      pToEdit.name = name;
    }
    setPersons([...persons]);
  }

  function editPerson(id) {
    setNewPerson(persons.find(p => id === p.id));
  }
  function deletePerson(id) {
    setPersons(persons.filter(p => p.id !== id));
  }
  return (
    <div className="row justify-content-center">
      <NewPerson
        className="col-sm-12"
        newPerson={newPerson}
        addPerson={addPerson}
        setNewPerson={setNewPerson}
      />
      <PersonList
        className="col-sm-12"
        persons={persons}
        deletePerson={deletePerson}
        editPerson={editPerson}
      />
    </div>
  );
}

export default LiftingState2;

/*
Q: What is meant by the react term “Lifting State Up”?
A: Usually, state only goes down, but if the setState method is passed
through props, then the child component can update the parent's state object
by calling this method, and thereby "lift state up"
Q: Where do you lift it up to?
A: The state is lifted to the mother component
Q: Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?
A: From top to bottom
Q: Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?
A:
*/
