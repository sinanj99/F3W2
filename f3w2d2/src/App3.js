import React, { useState, useEffect } from "react";
import "./App.css";

export default function Fetch() {
  const [joke, setJoke] = useState("Click to get a chuck joke");
  const [newJoke, setNewJoke] = useState("Or wait 10 seconds for a joke");
  useEffect(() => {
    const clear = setInterval(() => {
      fetch("https://icanhazdadjoke.com/slack")
        .then(res => res.json())
        .then(newJoke => {
          setNewJoke(newJoke.attachments[0].fallback);
        })
        .catch(err => console.log(err));
    }, 10000);

    return () => {
      clearInterval(clear);
    };
  }, [newJoke]);

  return (
    <div className="App">
      <p>Joke: {joke}</p>
      <button
        onClick={() => {
          fetch("https://api.chucknorris.io/jokes/random")
            .then(res => res.json())
            .then(joke => {
              setJoke(joke.value);
            })
            .catch(err => console.log(err));
        }}
      >
        Get ChuckNorris
      </button>
      <p>{newJoke}</p>
    </div>
  );
}
