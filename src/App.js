import React from 'react';
import Login from './Components/Login'
import LoginProps from './Components/LoginProps'
import './App.css';

function App() {
  return (
    <div className="App">
      <Login title='Login' />
      <LoginProps title='Login' />
    </div>
  );
}

export default App;
