import React from "react";
function PersonList({ persons, deletePerson, editPerson }) {
  console.log("personslist", persons);

  return (
    <div className="div">
      <h4>All Persons</h4>
      <ul>
        {persons.map(p => (
          <li key={p.id}>
            {p.name}
            <a href="#/" onClick={e => deletePerson(p.id)}>
              {" "}
              (delete{" "}
            </a>
            <a href="#/" onClick={() => editPerson(p.id)}>
              , edit){" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PersonList;
