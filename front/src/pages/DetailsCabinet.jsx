import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Fade,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useParams } from "react-router-dom";
import HeaderComponent from "../components/Header";
import SmoothScrollComponent from "../components/Scroll";

const DetailsCabinet = () => {
  const { id } = useParams();
  const [cabinet, setCabinet] = useState(null);
  const [animals, setAnimals] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { isLogged, userId } = useAuth();

  useEffect(() => {
    const fetchCabinet = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/cabinets/${id}`
        );
        const data = await response.json();
        setCabinet(data);
      } catch (error) {
        console.error("Erreur lors de la récupération du cabinet:", error);
      }
    };

    const fetchAnimals = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/animals");
        const data = await response.json();
        setAnimals(data["hydra:member"]);
      } catch (error) {
        console.error("Erreur lors de la récupération des animaux:", error);
      }
    };

    fetchCabinet();
    fetchAnimals();
  }, [id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleReserve = async () => {
    console.log("isLogged:", isLogged);
    console.log("userId:", userId);

    if (!isLogged) {
      alert("Vous devez être connecté pour faire une réservation");
      return;
    }

    if (!userId) {
      alert("Utilisateur non défini");
      return;
    }

    const now = new Date();
    const reservationDate = new Date(now);
    reservationDate.setDate(now.getDate() + (selectedDay === "demain" ? 1 : 2));
    reservationDate.setHours(parseInt(selectedTime));
    reservationDate.setMinutes(0);
    reservationDate.setSeconds(0);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/ld+json",
          Accept: "application/ld+json",
        },
        body: JSON.stringify({
          dateReservation: reservationDate.toISOString(),
          prix: 20,
          idUser: `http://127.0.0.1:8000/api/users/${userId}`,
          idCabinet: `/api/cabinets/${id}`,
        }),
      });

      if (response.ok) {
        alert("Réservation réussie");
        handleClose();
      } else {
        const errorData = await response.json();
        console.error("Erreur lors de la réservation:", errorData);
        alert("Erreur lors de la réservation");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  // Génération des options horaires de 08:00 à 18:00
  const timeOptions = [];
  for (let hour = 8; hour <= 18; hour++) {
    const formattedHour = hour.toString().padStart(2, "0");
    timeOptions.push(
      <MenuItem key={formattedHour} value={formattedHour}>
        {`${formattedHour}:00`}
      </MenuItem>
    );
  }

  if (!cabinet)
    return (
      <center>
        <Box
          sx={{
            background: "radial-gradient(white, #B1BAC7)",
            height: "100vh",
          }}
        >
          <HeaderComponent title={"Chargement... Veuillez Patienter"} />
        </Box>
      </center>
    );

  return (
    <Box
      sx={{
        padding: 2,
        background: "radial-gradient(white, #B1BAC7)",
        height: "100vh",
      }}
    >
      <HeaderComponent title={cabinet.nom} />
      <center>
        <SmoothScrollComponent delay={1}>
          <Box
            sx={{
              padding: 2,
              background: "radial-gradient(#f0f0f0, #fff9ee)",
              boxShadow: "0 3px 10px #a5adb9",
              width: "30%",
              borderRadius: 2,
            }}
          >
            <Typography variant="body1">{cabinet.description}</Typography>
            <Typography
              variant="body1"
              sx={{
                mt: "10px",
              }}
            >
              {cabinet.adresse}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: cabinet.disponibilite ? "green" : "red",
                mt: "10px",
              }}
            >
              {cabinet.disponibilite ? "Disponible" : "Indisponible"}
            </Typography>

            {cabinet.disponibilite && (
              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  mt: "10px",
                  color: "#001C2F",
                  bgcolor: "#B1BAC7",
                  border: "1px solid #9ba6b4",
                  boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
                  "&:hover": {
                    bgcolor: "#f7e1ba",
                    border: "1px solid #e0cca9",
                    boxShadow: "0 0 10px #e0cca9",
                  },
                }}
              >
                Réserver
              </Button>
            )}
          </Box>
        </SmoothScrollComponent>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Fade in={open}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                background: "radial-gradient(#f0f0f0, #fff3de)",
                borderRadius: 1,
                boxShadow: 24,
                p: 4,
              }}
            >
              <HeaderComponent title={"Reservez un creneau"} />
              <SmoothScrollComponent delay={0.5}>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Animal</InputLabel>
                  <Select
                    value={selectedAnimal}
                    onChange={(e) => setSelectedAnimal(e.target.value)}
                    label="Animal"
                  >
                    {animals.map((animal) => (
                      <MenuItem key={animal.id} value={animal.id}>
                        {animal.nom}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Jour</InputLabel>
                  <Select
                    value={selectedDay}
                    onChange={(e) => setSelectedDay(e.target.value)}
                    label="Jour"
                  >
                    <MenuItem value="aujourd'hui">Aujourd'hui</MenuItem>
                    <MenuItem value="demain">Demain</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Heure</InputLabel>
                  <Select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    label="Heure"
                  >
                    {timeOptions}
                  </Select>
                </FormControl>
              </SmoothScrollComponent>
              <SmoothScrollComponent delay={1}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    color: "#001C2F",
                    bgcolor: "#B1BAC7",
                    border: "1px solid #9ba6b4",
                    boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
                    "&:hover": {
                      bgcolor: "#f7e1ba",
                      border: "1px solid #e0cca9",
                      boxShadow: "0 0 10px #e0cca9",
                    },
                  }}
                  onClick={handleReserve}
                >
                  Confirmer la réservation
                </Button>
              </SmoothScrollComponent>
            </Box>
          </Fade>
        </Modal>
      </center>
    </Box>
  );
};

export default DetailsCabinet;
