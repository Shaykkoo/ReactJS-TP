import React from 'react';
import { Box, Typography } from '@mui/material';
import '../App.css';
import SmoothScrollComponent from '../components/Scroll'



function HeaderComponent({ title, sx }) {
  return (
    <SmoothScrollComponent>
      <Box sx={{ 
        textAlign: 'center', 
        marginBottom: 2,
        ...sx
      }}>
        <Typography variant="h3" component="h1" sx={{ 
          marginBottom: 1, 
          fontFamily: 'AnimalChariot, sans-serif', 
          fontWeight: '900', 
          letterSpacing: '0.1em',
          color: '#001C2F',
          }}>
          {title}
        </Typography>
        <Box 
          sx={{ 
            height: '2px', 
            width: '100%', 
            backgroundColor: '#001C2F', 
            borderRadius: '10px',
            display: 'inline-block'
          }}
        />
      </Box>
    </SmoothScrollComponent>
  );
}

export default HeaderComponent;
