import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdeasContainer from './components/IdeasContainer'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <IdeasContainer />
    </div>
  );
}

export default App;
