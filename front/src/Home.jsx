import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'Utilisateur' };

  return (
    <div>
      <h1>Bienvenue, {user.name}!</h1>
      <nav>
        <ul>
          <li><Link to="/profile">Profil</Link></li>
          <li><Link to="/cabinets">Liste des cabinets</Link></li>
          <li><Link to="/animals">Gestion des animaux</Link></li>
          <li><Link to="/search">Recherche de cabinets</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
