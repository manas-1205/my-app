import logo from './logo.svg';

// this app.css is used to style the content inside App()
// import './App.css';

// importing the navbar,TextForm component
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';


// only 1 tag can be returned inside this function app
// this code inside this App() is called JSX 
// {} are used to write var names and JS in JSX
// Babel compiles down JSX to react.createElement() calls
// passing props in Navbar (title and the about test in navbar) 
// Now, we want to change with states from app.js only

function App() { 
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container my-3">
        <About/>       
      </div>
    </>
  );
}

export default App;
