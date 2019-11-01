import React from "react";
import PropTypes from "prop-types";
import { names } from "./file2.js";

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

function WelcomePerson({ person }) {
  const { firstName, lastName, email } = person;
  return (
    <h1>
      Hello {firstName},{lastName},{email}
    </h1>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

WelcomePerson.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default function App() {
  return (
    <div>
      <Welcome name="Sheitan" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      {names.map(person => (
        <WelcomePerson key={person.email.toString()} person={person} />
      ))}
    </div>
  );
}
