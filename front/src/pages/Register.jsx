import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper, AppBar, Toolbar, Checkbox, FormControlLabel } from '@mui/material';
import '../index.css';

const Register = () => {
  const [name, setName] = useState(''); // Nom
  const [firstName, setFirstName] = useState(''); // Prénom
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState(''); // Adresse
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [buttonState, setButtonState] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }
    if (!acceptedTerms) {
      setError("Vous devez accepter les termes et conditions");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        username: email,
        password,
        nom: name,
        prenom: firstName, // Envoi du prénom
        telephone: phone,
        adresse: address // Envoi de l'adresse
      });

      if (response.status === 200) {
        navigate('/login');
      } else {
        setError(response.data.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      setError(error.response.data.error || 'Erreur lors de l\'inscription');
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
              id="firstName"
              label="Prénom"
              type="text"
              fullWidth
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
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
              id="phone"
              label="Téléphone"
              type="tel"
              fullWidth
              margin="normal"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <TextField
              id="address"
              label="Adresse"
              type="text"
              fullWidth
              margin="normal"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
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
