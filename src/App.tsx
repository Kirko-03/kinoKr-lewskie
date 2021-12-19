import React from 'react';

import  './App.css';
import { Navbar } from './firstPage/Navbar';
import { Main } from './firstPage/Main';
import { Footer } from './firstPage/Footer';


function App() {
  return (
    <div className="App">
      <div className="firstPage">
        <div>
          <Navbar/>
        <Main/>
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
