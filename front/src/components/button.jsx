/* import { Box, Button } from '@mui/material';
import React from 'react';

function CustomButton({ type, onClick }) {
  let buttonProps = {};

  switch (type) {
    case 'ajouter':
      buttonProps = {
        text: 'Ajouter',
        color: 'primary',
        variant: 'contained'
      };
      break;
    case 'modifier':
      buttonProps = {
        text: 'Modifier',
        color: 'secondary',
        variant: 'contained'
      };
      break;
    case 'supprimer':
      buttonProps = {
        text: 'Supprimer',
        color: 'error',
        variant: 'contained'
      };
      break;
    default:
      buttonProps = {
        text: 'Button',
        color: 'default',
        variant: 'contained'
      };
  }

  return (
    <Box sx={{ margin: 1 }}>
      <Button
        color={buttonProps.color}
        variant={buttonProps.variant}
        onClick={onClick}
        sx={{ textTransform: 'none', borderRadius: 2 }}
      >
        {buttonProps.text}
      </Button>
    </Box>
  );
}

export default CustomButton;
 */