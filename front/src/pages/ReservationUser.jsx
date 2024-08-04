import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import {
  Container,
  Typography,
  Paper,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function ReservationUser() {
  const [reservations, setReservations] = useState([]); // Initialisez en tant que tableau vide
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useAuth();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/reservations`
        );
        // Assurez-vous que 'hydra:member' est un tableau
        const reservationData = response.data["hydra:member"] || []; // Défaut à un tableau vide si non défini
        console.log("Réponse de l'API:", response.data);
        console.log("Réservations:", reservationData);

        setReservations(reservationData);
      } catch (err) {
        setError("Erreur lors de la récupération des réservations.");
        console.error("Erreur de récupération:", err); // Débogage
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchReservations();
    } else {
      setError("Utilisateur non connecté.");
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Mes Réservations
      </Typography>
      <Paper>
        {reservations.length > 0 ? (
          <List>
            {reservations.map((reservation) => (
              <ListItem key={reservation.id}>
                <ListItemText
                  primary={`Réservation ID: ${reservation.id}`}
                  secondary={`Date: ${new Date(
                    reservation.dateReservation
                  ).toLocaleDateString()} | Prix: ${reservation.prix}€`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>Aucune réservation trouvée.</Typography>
        )}
      </Paper>
    </Container>
  );
}

export default ReservationUser;
