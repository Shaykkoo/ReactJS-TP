import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

function ItemComponent({ nom, description, disponibilite, adresse, id }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    if (isAuthenticated) {
      if (disponibilite) {
        navigate(`/cabinets/details/${id}`);
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        margin: 1,
        mb: '20px',
        border: '1px solid #ddd',
        borderRadius: 1,
        background: disponibilite ? 'radial-gradient(#f0f0f0, #fffaf1)' : '#e0e0e0',
        opacity: disponibilite ? 1 : 0.6,
        pointerEvents: disponibilite ? 'auto' : 'none',
        boxShadow: '0 0 10px #748091'
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold',  color: '#001C2F', textShadow: '0 0 3px rgba(0, 0, 0, 0.3)' }}>
          {nom}
        </Typography>
        <Typography variant="body1" sx={{ color: '#939fb0', textShadow: '0.1px 0.1px 0 #000' }}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ color: disponibilite ? '#29c829' : '#c82929' }}>
          {disponibilite ? 'Disponible' : 'Indisponible'}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, textAlign: 'right' }}>
        <Typography variant="body1" sx={{ color: '#939fb0', textShadow: '0.1px 0.1px 0 #000' }}>
          {adresse}
        </Typography>
      </Box>
      <Box sx={{ flex: 1, textAlign: 'right' }}>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ 
            color: '#FFF2DC',
            bgcolor: '#001C2F',

            '&:hover': {
              bgcolor: '#e6b694', 
              color: '#001C2F',
              boxShadow: '0 0 10px #d59f79',
            }}}
          disabled={!disponibilite && isAuthenticated}
        >
          Plus d'infos
        </Button>
      </Box>
    </Box>
  );
}

export default ItemComponent;
