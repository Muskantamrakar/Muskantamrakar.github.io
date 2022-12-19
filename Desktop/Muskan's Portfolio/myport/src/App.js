import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
// import HeroImage from './Components/HeroImage';
import Skills from './Routes/Skills';
import { useState } from 'react';
import GitCalender from './Routes/GitCalender'
import Project1 from './Routes/Projects1';
import Contacts1 from './Routes/Contact1';
import Project from './Routes/Projects/Project';
import Footer from './Routes/Footer';
import Coding from './Routes/Coding';

function App() {

  return (
         
      <div className='app'>
        <Navbar/>
         <Home/>
        <About/>
        <Coding/>
        <Skills/>
        <GitCalender/>
        
        <Project/>
        <Contacts1/>
        <Footer/>
      </div>
    
  );
  
}

export default App;
