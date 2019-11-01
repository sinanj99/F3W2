import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleSubmit = event => {
    const { firstName, lastName } = reservation;
    window.alert(firstName + " " + lastName);
  };
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          id="payByCreditCard"
          checked={reservation.payByCreditCard}
          onChange={handleChange}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="lastName"
          id="lastName"
          value={reservation.lastName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="email"
          id="email"
          value={reservation.email}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          name="phone"
          id="phone"
          value={reservation.phone}
          onChange={handleChange}
          placeholder="First Name"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;

/*
In a Controlled Component React state is made the "Single source of truth", so how:
Q: Do we ensure that input controls like text, textarea or select always presents the value found in the components state?
Do we ensure that a controls state, always matches the value found in an input control?
A: Since the control is rendered whenever the setState function is called.

Q: What is the purpose of doing event.preventDefault() in an event handler?
A: To cancel the default behavvior of the event. 
Q: What would be the effect of NOT doing event.preventDefault in a submit handler
A: In this case it prevents the browser from talking with a server.
The result of this is the page not refreshing.
Q: Why don't we want to submit the traditional way, in a single page application?
A: Since everything happens on one page, and the logic behind submitting is done browser side
Q: Explain in words what it takes to implement the "Controlled Component" pattern for a form
A: It takes a function that updates the state property of the component a form with input fields
whose values are the state property's properties*/
