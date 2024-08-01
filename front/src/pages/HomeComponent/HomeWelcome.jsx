import { Box, Button } from '@mui/material';
import React from 'react';
import HomeImage from '../../assets/HomeImage.png';
import TitleComponent from '../../components/Title';

function HomeWelcome() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '93.5vh', overflow: 'hidden' }}>
      <Box>
        <img
          src={HomeImage}
          alt="Home"
          style={{
            width: '100%',
            height: '93.5vh',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <TitleComponent
          title="Votre Animal, Notre Priorite."
          sx={{
            fontSize: '3rem', 
            color: '#FFC9A3',
            textShadow: '0 0 4px #FFF2DC',
          }}
        />
      </Box>
    </Box>
  )
}

export default HomeWelcome