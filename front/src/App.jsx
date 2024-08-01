import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Home from './pages/Home';
import NavbarComponent from './components/navbar';
import HomeCabinets from './pages/HomeCabinets';
import About from './pages/About';
import Contact from './pages/Contact';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './fonts/fonts.css'
import './App.css'

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const userName = 'Liyam';

  const tabs = [
    { label: 'Accueil', link: '/' },
    { label: 'Cabinets', link: '/cabinets' },
    { label: 'À propos', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <Box>
      
       <NavbarComponent tabs={tabs} isLogged={isLogged} userName={userName} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabinets" element={<HomeCabinets />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Box>
  )
}

export default App
