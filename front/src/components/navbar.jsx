import React, { useState } from 'react';
import { AppBar, Box, Button, Toolbar, Typography, Menu, MenuItem } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const capitalizeFirstLetter = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

function NavbarComponent({ tabs }) {
  const { isLogged, userFirstName, userLastName, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  const fullName = `${userFirstName} ${userLastName}`;
  const formattedName = capitalizeFirstLetter(fullName);

  return (
    <AppBar position="static" sx={{ background: 'radial-gradient(#f0f0f0, #fffaf1)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 10 }}>
          {tabs.map((tab, index) => (
            <Typography
              key={index}
              component="a"
              href={tab.link}
              sx={{
                position: 'relative',
                color: '#2A4E62',
                textDecoration: 'none',
                overflow: 'hidden',
                transition: '0.5s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '-100%',
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#001C2F',
                  transition: 'left 0.5s ease',
                },
                '&:hover::after': {
                  left: 0,
                },
                '&:hover': {
                  color: '#001C2F',
                  textShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              {tab.label}
            </Typography>
          ))}
        </Box>
        {isLogged ? (
          <>
            <Button
              onClick={handleMenuClick}
              endIcon={anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
              sx={{
                color: '#001C2F',
                textTransform: 'capitalize',
                fontSize: '0.875rem',
                bgcolor: '#B1BAC7',
                border: '1px solid #9ba6b4',
                boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
                '&:hover': {
                  bgcolor: '#f7e1ba',
                  border: '1px solid #e0cca9',
                  boxShadow: '0 0 10px #e0cca9',
                },
              }}
            >
              {formattedName}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Réservations</MenuItem>
              <MenuItem onClick={handleMenuClose}>Paramètres</MenuItem>
              <MenuItem onClick={handleLogout}>Déconnexion</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              color="inherit"
              href="/login"
              sx={{
                marginRight: 2,
                color: '#001C2F',
                bgcolor: '#B1BAC7',
                border: '1px solid #9ba6b4',
                boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
                '&:hover': {
                  bgcolor: '#f7e1ba',
                  border: '1px solid #e0cca9',
                  boxShadow: '0 0 10px #e0cca9',
                },
              }}
            >
              Se connecter
            </Button>
            <Button
              color="inherit"
              href="/register"
              sx={{
                color: '#001C2F',
                bgcolor: '#B1BAC7',
                border: '1px solid #9ba6b4',
                boxShadow: '0 5px 10px rgba(0,0,0,0.3)',
                '&:hover': {
                  bgcolor: '#f7e1ba',
                  border: '1px solid #e0cca9',
                  boxShadow: '0 0 10px #e0cca9',
                },
              }}
            >
              S'inscrire
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavbarComponent;
