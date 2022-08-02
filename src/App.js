import React from 'react';

import { Header, About, Menu, Faq, Contact } from './container';
import { Navbar, SubHeading } from './components';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SubHeading />
      <About />
      <Menu />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
