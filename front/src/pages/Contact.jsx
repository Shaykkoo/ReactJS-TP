import { Box } from '@mui/material'
import React from 'react'
import HeaderComponent from '../components/Header'

function Contact() {
  return (
    <Box sx={{
      background: 'radial-gradient(white, #B1BAC7)',
      height :'100vh'
    }}>
        <HeaderComponent
        title="BESOIN D'AIDE ?"
        sx={{ padding: 4 }}
      />
    </Box>
  )
}

export default Contact