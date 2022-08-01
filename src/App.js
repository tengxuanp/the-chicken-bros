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

      {/* Header About Menu */}
    </div>
  );
}

export default App;
