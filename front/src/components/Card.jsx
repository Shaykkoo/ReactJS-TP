import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';

function CardComponent({ image, title, description, buttonText, buttonLink, align }) {
  return (
    <Card sx={{ 
      display: 'flex', 
      flexDirection: align === 'left' ? 'row' : 'row-reverse', 
      margin: 2, 
      width: 800, 
      height: 300, 
      alignSelf: align === 'left' ? 'flex-start' : 'flex-end',
      position: 'relative',
      borderRadius: 2,
      background: 'radial-gradient(#f0f0f0, #fffaf1)',
     
      boxShadow: '0 5px 10px #a5adb9',
      overflow: 'hidden'
    }}>
      <CardMedia
        component="img"
        sx={{ width: 220, height: '100%', objectFit: 'cover' }}
        image={image}
        alt="Card Image"
      />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          flex: 1, 
          padding: 2,
          textAlign: align === 'left' ? 'right' : 'left',
          height: 'auto'
        }}
      >
        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: align === 'left' ? 'flex-end' : 'flex-start', marginBottom: align === 'left' ? '120px': '0px'}}>
          <Typography component="div" variant="h4" sx={{ textAlign: 'inherit', fontWeight: '600', color: '#939fb0', textShadow: '0 0 3px rgba(0, 0, 0, 0.3)' }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" component="div" sx={{ textAlign: 'inherit' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ 
          display: 'flex', 
          justifyContent: align === 'left' ? 'flex-end' : 'flex-start',
        }}>
          <Button 
            size="large" 
            href={buttonLink} 
            variant="contained" 
            sx={{
              color: '#FFF2DC',
              bgcolor: '#001C2F',
              

              '&:hover': {
                bgcolor: '#e6b694', 
                color: '#001C2F',
                boxShadow: '0 0 10px #d59f79'
              }
            }}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default CardComponent;
