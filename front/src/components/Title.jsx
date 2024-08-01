import { Box, Typography } from '@mui/material';
import React from 'react';
import '../App.css';

function TitleComponent({ title, sx }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        color: 'white',
        textAlign: 'center',
        ...sx, 
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 'bold', fontFamily: 'AnimalChariot, sans-serif'   }}>
        {title}
      </Typography>
    </Box>
  );
}

export default TitleComponent;
