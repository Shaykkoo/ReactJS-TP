import { Box } from '@mui/material'
import React from 'react'
import WayComponent from '../components/way'

function AdminPage() {
  return (
    <Box>
      <WayComponent
        title="Bienvenue"
        description="Accédez à la section animaux :"
        buttonText="Admin Animaux"
        buttonLink="/admin/animaux"
      />
      <WayComponent
        title="Bienvenue"
        description="Accédez à la section cabinets :"
        buttonText="Admin Cabinets"
        buttonLink="/admin/cabinets"
      />
    </Box>
  )
}

export default AdminPage