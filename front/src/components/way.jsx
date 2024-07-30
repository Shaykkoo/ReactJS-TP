import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import React from 'react';

function WayComponent({ title, description, buttonText, buttonLink }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5', padding: 2 }}>
      <Card sx={{ maxWidth: 345, padding: 2, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="medium" 
            color="primary" 
            variant="contained" 
            href={buttonLink}
            sx={{ textTransform: 'none', borderRadius: 2 }}
          >
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default WayComponent;
