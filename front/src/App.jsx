import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import NavbarComponent from './components/navbar';
import HomeCabinets from './pages/HomeCabinets';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import DetailsCabinet from './pages/DetailsCabinet';
import { AuthProvider } from './contexts/AuthContext';

import './fonts/fonts.css';
import './App.css';

function App() {
  const tabs = [
    { label: 'Accueil', link: '/' },
    { label: 'Cabinets', link: '/cabinets' },
    { label: 'À propos', link: '/about' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <AuthProvider>
      <Box>
        <NavbarComponent tabs={tabs} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabinets" element={<HomeCabinets />} />
          <Route path="/cabinets/details/:id" element={<DetailsCabinet />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Box>
    </AuthProvider>
  );
}

export default App;
