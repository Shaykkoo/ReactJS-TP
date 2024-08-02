import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username: email,
        password
      });

      const user = response.data;
      console.log('API response:', user);

      if (user && user.id) {
        // Faire une autre requête pour obtenir les détails de l'utilisateur
        const userDetailsResponse = await axios.get(`http://127.0.0.1:8000/api/users/${user.id}`);
        const userDetails = userDetailsResponse.data;

        // Affichage des propriétés utilisateur individuelles
        console.log('Prénom:', userDetails.prenom);
        console.log('Nom:', userDetails.nom);
        console.log('Adresse:', userDetails.adresse);
        console.log('Téléphone:', userDetails.telephone);
        console.log('Email:', userDetails.email);

        const { prenom, nom } = userDetails;
        login(prenom, nom);
        navigate('/');
      } else {
        throw new Error('Données utilisateur manquantes');
      }
    } catch (error) {
      console.error('Error during login:', error); // Log error details for debugging
      setError('Erreur de connexion. Veuillez vérifier vos identifiants.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
