import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function HomeAbout() {
  return (
    <Box 
      sx={{ 
        backgroundColor: 'transparent', 
        padding: 4, 
        textAlign: 'center', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        borderTop: '1px solid #5d5d5d',
        width: '95%',
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: 2,
          color: '#001C2F',
          textShadow: '0 0 3px rgba(0, 0, 0, 0.7)'
        }}
      >
        Nos Valeurs
      </Typography>
      <Box 
        sx={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#333', 
            maxWidth: '50%', 
            textAlign: 'center',
            margin: '50px 0 50px 0'
          }}
        >
          Nous nous engageons à fournir le meilleur service possible pour vous et vos animaux. 
          Nos valeurs fondamentales sont l'intégrité, la compassion, et le professionnalisme. Nous croyons en un 
          service client de qualité et en une approche personnalisée pour chaque visite. Nous travaillons sans 
          relâche pour assurer le bien-être de vos animaux avec une approche humaine et attentive.
        </Typography>
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        href="/about"
        sx={{ 
          marginTop: 2,
          color: '#001C2F',
          bgcolor: '#B1BAC7',
          border: '1px solid #9ba6b4',
          boxShadow: '0 5px 10px rgba(0,0,0,0.3)',

          '&:hover': {
                bgcolor: '#f7e1ba', 
                border: '1px solid #e0cca9',
                boxShadow: '0 0 10px #e0cca9'
              }
        }}
      >
        En Savoir Plus
      </Button>
    </Box>
  );
}

export default HomeAbout;
