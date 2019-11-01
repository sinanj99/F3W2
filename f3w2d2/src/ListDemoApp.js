import React, { useState, useEffect } from "react";

function ListItem({ n }) {
  return <li>{n}</li>;
}
function NumberList({ numbers }) {
  return numbers.map((n, i) => <ListItem key={i} n={n} />);
}
function TableItem({ n }) {
  return <td>{n}</td>;
}
function NumberTable({ numbers }) {
  return numbers.map((n, i) => (
    <tr key={i}>
      <TableItem n={n} />
    </tr>
  ));
}
function TableDemo(props) {
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <table>
        <tbody>
          <NumberTable numbers={props.numbers} />
        </tbody>
      </table>
    </div>
  );
}
function ListDemo(props) {
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <ul>
        <NumberList numbers={props.numbers} />
      </ul>
    </div>
  );
}
export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  useEffect(() => {
    setInterval(() => {
      setNumbers(numbers => [...numbers, 1]);
    }, 5000);
  }, []);
  return (
    <div>
      <ListDemo numbers={numbers} />
      <TableDemo numbers={numbers} />
    </div>
  );
}
/*
Q:
    Since nothing really changes in this example the outer component App
    had no need for the useState hook (we could just have declared
    a numbers variable). But let's assume, like in a real app, 
    that data changes. Then data needs to be held in the state-object 
    for the app to re-render (why?).

A:
    Because the only way to re-render is to change the state.
*/
