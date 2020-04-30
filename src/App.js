import React, { Component, useState } from 'react'
import logo from './logo.svg';
import './App.css';


function App() {

  let participants = [{
    name:'yaniv'
  },
    {
      name:'hadas'
    }

  ];
  const [name, setName] = useState("");

  function startGame() {
    alert("hi");
  }



  function getInGame(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="App">

      <main className="initiator">

        <h1 className="title">
          ברוכים הבאים
        </h1>

        <ul className="participants">
          {participants.map(participant => {
            return <li key={participant.name}>{participant.name}</li>;
          })}
        </ul>

        <button className="cta" onClick={startGame}>Start</button>

      </main>

      <main className="player">
        <h3 className="title">
          נא להכניס שם
        </h3>

        <form className="get-in-form" onSubmit={getInGame}>

          <input
              placeholder="שם פה"
              className="player__input"
              type="text"
              onChange={event => setName(event.target.value)}
          />

          <button className="player__button">יאללה</button>
        </form>
      </main>

    </div>
  );
}

export default App;
