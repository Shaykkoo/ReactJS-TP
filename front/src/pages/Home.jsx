import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, List, ListItem, ListItemText, Paper, AppBar, Toolbar, Button } from '@mui/material';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Utilisateur' };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bienvenue, {user.name}!
          </Typography>
          <Button color="inherit" component={Link} to="/profile">Profil</Button>
          <Button color="inherit" component={Link} to="/login">Déconnexion</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 3, mt: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Tableau de Bord
          </Typography>
          <List>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profil" />
            </ListItem>
            <ListItem button component={Link} to="/cabinets">
              <ListItemText primary="Liste des cabinets" />
            </ListItem>
            <ListItem button component={Link} to="/animals">
              <ListItemText primary="Gestion des animaux" />
            </ListItem>
            <ListItem button component={Link} to="/search">
              <ListItemText primary="Recherche de cabinets" />
            </ListItem>
          </List>
        </Paper>
      </Container>
    </>
  );
};

export default Home;