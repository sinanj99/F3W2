import React, { useState } from "react";
function TableRow({ members }) {
  return members.map(m => (
    <tr>
      <td>{m.name}</td>
      <td>{m.age}</td>
    </tr>
  ));
}
function MemberTable({ members }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        <TableRow members={members} />
      </tbody>
    </table>
  );
}

function MemberDemo({ members }) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={members} />
    </div>
  );
}

export default function App() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
  ];
  const [members, setMembers] = useState(initialMembers);

  return <MemberDemo members={members} />;
}
/*
Q:
What is the purpose of the key value, 
which must be given to individual rows in a react-list?
A:
They help React identify which items have changed in the DOM.

Q:
It's recommended to use a unique value from your data if available 
(like an ID). How do you get a unique value in a map callback, 
for data without a unique id?
A:
You can use another uniquely identifying property value from
the data, if available, or use the index (which is not required by React)

Q:
What is the difference(s) between state and props?
A:
Props are arguments passed by a component
to be used by another component. It is a
components options/configuration. They are received
from above and immutable. State is the local state of the component which 
cannot be accessed and modified outside of the component.
functions.

Q:
For which scenarios would you use props, and for which would you use state?
A:
Props could be used if a child component has to display a list with members.
These members can be passed from the parent component to the child component via
props.
State can be used if a component was to be changed dynamically. By changing the state
of the component, the UI is re-rendered.

Q:
Where is the only place you can set state directly as in:  t
his.state = {name: "Peter"};
A:
Inside the constructor

Q: How must you set state all other places?
A: Using setState method

 */
