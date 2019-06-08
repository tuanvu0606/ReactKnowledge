import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlesContainer from './components/ArticlesContainer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <ArticlesContainer />
    </div>
  );
}

export default App;
