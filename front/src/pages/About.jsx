import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import HeaderComponent from "../components/Header";

function About() {
  return (
    <Box
      sx={{
        background: "radial-gradient(white, #B1BAC7)",
        height: "100%",
      }}
    >
      <HeaderComponent title="NOS VALEURS" sx={{ padding: 4 }} />

      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Nos Valeurs
        </Typography>
        <Typography variant="body1" paragraph>
          Nous croyons fermement que chaque animal mérite les meilleurs soins
          possibles. Nos valeurs guident chaque aspect de notre plateforme de
          réservation pour les cabinets vétérinaires à travers la France.
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Compassion"
              secondary="Nous traitons chaque animal avec amour et respect, en veillant à ce qu'il reçoive les soins nécessaires pour son bien-être."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Excellence"
              secondary="Nous nous engageons à offrir un service de qualité supérieure en mettant à disposition les meilleurs cabinets vétérinaires de France."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Intégrité"
              secondary="Nous agissons toujours avec honnêteté et transparence, fournissant des informations claires et fiables aux propriétaires d'animaux."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Éducation"
              secondary="Nous croyons que l'éducation est essentielle pour la santé des animaux. Nous offrons des ressources et des conseils pour aider les propriétaires à prendre les meilleures décisions pour leurs compagnons."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Communauté"
              secondary="Nous sommes fiers de soutenir et de collaborer avec les cabinets vétérinaires locaux et les associations pour améliorer la vie des animaux à travers la France."
            />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Notre Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Notre mission est de faciliter l'accès aux meilleurs soins
          vétérinaires en permettant aux propriétaires d'animaux de trouver et
          de réserver facilement des consultations auprès des cabinets
          vétérinaires de toute la France.
        </Typography>
      </Box>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Pourquoi Nous Choisir ?
        </Typography>
        <Typography variant="body1" paragraph>
          Nous choisir c'est choisir une plateforme dédiée à la santé et au
          bien-être de vos animaux de compagnie. Voici pourquoi les
          propriétaires d'animaux nous font confiance :
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Accès Facile"
              secondary="Réservez facilement des consultations auprès des meilleurs cabinets vétérinaires partout en France."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Service Fiable"
              secondary="Nous vérifions et sélectionnons les cabinets pour garantir des soins de haute qualité."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Support Client"
              secondary="Notre équipe est toujours disponible pour répondre à vos questions et vous assister dans vos réservations."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Informations Complètes"
              secondary="Accédez à des descriptions détaillées des cabinets, des services offerts et des avis clients."
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default About;
