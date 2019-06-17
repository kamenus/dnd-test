import React from 'react';
import './App.scss';
import Header from './components/header';
import Content from './components/content';

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
