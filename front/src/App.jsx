import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Home from './pages/Home';
import Register from './pages/Register';



import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login';


function App() {

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      
      </Routes> 
    </Box>
  )
}

export default App
