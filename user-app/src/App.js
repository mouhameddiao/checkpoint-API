// src/App.js
import React from 'react';
import './App.css';
import UserList from './UserList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liste des Utilisateurs</h1>
      </header>
      <UserList />
    </div>
  );
};

export default App;
