import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper, AppBar, Toolbar, Checkbox, FormControlLabel } from '@mui/material';
import '../index.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [buttonState, setButtonState] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    if (!acceptedTerms) {
      setError('Vous devez accepter les termes et conditions.');
      return;
    }
    try {
      await axios.post('/api/users', { name, email, password });
      setButtonState('success');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      setError('Erreur d\'inscription. Veuillez vérifier vos informations.');
    }
  };

  return (
    <div className="gradient-background">
      <AppBar className="app-bar">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" className="title">
            Inscription
          </Typography>
          <Link to="/login" className="link">Connexion</Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Paper className="animated-paper" elevation={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Inscription
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              id="name"
              label="Nom"
              type="text"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <TextField
              label="Télécacaphone"
              type="tel"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              id="password"
              label="Mot de passe"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              id="confirm-password"
              label="Confirmer le mot de passe"
              type="password"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  name="acceptedTerms"
                  color="primary"
                />
              }
              label="J'accepte les termes et conditions"
              className="checkbox-label"
            />
            {error && (
              <Typography color="error" variant="body2" gutterBottom>
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" fullWidth className={`styled-button ${buttonState}`}>
              S'inscrire
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Register;

