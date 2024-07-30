import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Home from './pages/Home';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  )
}

export default App
