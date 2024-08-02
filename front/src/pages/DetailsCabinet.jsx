import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Modal, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useAuth } from '../contexts/AuthContext'; // Assurez-vous que ce chemin est correct

const DetailsCabinet = () => {
  const [cabinet, setCabinet] = useState(null);
  const [animals, setAnimals] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [user, setUser] = useState(null);
  const { isLogged } = useAuth(); // Assurez-vous que cet état est correctement configuré

  // Remplacer avec l'ID du cabinet que vous récupérez via les props ou les paramètres de l'URL
  const cabinetId = 1;

  useEffect(() => {
    // Récupération des détails du cabinet
    fetch(`/api/cabinets/${cabinetId}`)
      .then(response => response.json())
      .then(data => setCabinet(data));

    // Récupération des animaux
    fetch('/api/animals')
      .then(response => response.json())
      .then(data => setAnimals(data['hydra:member']));

    // Récupération des informations de l'utilisateur
    // Remplacez cette URL avec celle de votre API pour obtenir les détails de l'utilisateur connecté
    fetch('/api/users/1') 
      .then(response => response.json())
      .then(data => setUser(data));
  }, [cabinetId]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleReserve = () => {
    if (!isLogged) {
      alert('Vous devez être connecté pour faire une réservation');
      return;
    }

    // Soumettre les détails de la réservation
    fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dateReservation: selectedTime,
        prix: 20,
        idUser: user.id, // Assurez-vous que l'ID de l'utilisateur est correct
        idCabinet: cabinetId,
      }),
    })
    .then(response => response.json())
    .then(data => {
      alert('Réservation réussie');
      handleClose();
    })
    .catch(error => console.error('Erreur:', error));
  };

  if (!cabinet) return <Typography>Chargement...</Typography>;

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">{cabinet.nom}</Typography>
      <Typography variant="body1">{cabinet.description}</Typography>
      <Typography variant="body1">{cabinet.adresse}</Typography>
      <Typography variant="body1" sx={{ color: cabinet.disponibilite ? 'green' : 'red' }}>
        {cabinet.disponibilite ? 'Disponible' : 'Indisponible'}
      </Typography>

      {cabinet.disponibilite && (
        <Button variant="contained" onClick={handleOpen}>
          Réserver
        </Button>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-title" variant="h6" component="h2">
            Réserver un créneau
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Choisissez un animal</InputLabel>
            <Select
              value={selectedAnimal}
              onChange={(e) => setSelectedAnimal(e.target.value)}
              label="Choisissez un animal"
            >
              {animals.map(animal => (
                <MenuItem key={animal.id} value={animal.id}>
                  {animal.nom}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Choisissez un créneau"
            type="datetime-local"
            fullWidth
            sx={{ mt: 2 }}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Prix: 20€
          </Typography>
          <Button variant="contained" color="primary" onClick={handleReserve} sx={{ mt: 2 }}>
            Confirmer la réservation
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default DetailsCabinet;
