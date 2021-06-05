import React from 'react';
import logo from './logo.svg';
import './App.css';

const names = ["Dimych", "Sveta", "Katya", "Viktor", "Ignat", ]
const users = [{name: 'Dimych'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Viktor'}, {name: 'Ignat'}]
let teamNames = users.map((n, i, array) => <li key={i}>{n.name}</li>)
function App() {
  return (
    <div className="App">
    <ul>
      {teamNames}
    </ul>
    </div>
  );
}

export default App;
