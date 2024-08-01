import { Box } from '@mui/material'
import React from 'react'
import HeaderComponent from '../components/Header'

function About() {
  return (
    <Box sx={{
      background: 'radial-gradient(white, #B1BAC7)',
      height :'100vh'
    }}>
        <HeaderComponent
        title="NOS VALEURS"
        sx={{ padding: 4 }}
      />
    </Box>
  )
}

export default About