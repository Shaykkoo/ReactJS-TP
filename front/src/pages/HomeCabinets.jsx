import { Box, Typography } from '@mui/material'
import React from 'react'
import ListItems from '../components/ListItems'
import HeaderComponent from '../components/Header'
import SmoothScrollComponent from '../components/Scroll'


function HomeCabinets() {
  return (
    <Box sx={{
      background: 'radial-gradient(white, #B1BAC7)',
      height :'100vh'
    }}>
      <Box>
          <HeaderComponent 
            title="LISTE DES CABINETS"
            sx={{ padding: 4 }}
          />
      </Box>
        <SmoothScrollComponent delay={1}>
          <ListItems />
        </SmoothScrollComponent>
    </Box>
  )
}

export default HomeCabinets