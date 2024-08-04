import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import HeaderComponent from "../components/Header";
import SmoothScrollComponent from "../components/Scroll";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., sending data to the server
    alert("Votre message a été envoyé avec succès");
  };

  return (
    <Box
      sx={{
        background: "radial-gradient(white, #B1BAC7)",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <HeaderComponent title="BESOIN D'AIDE ?" sx={{ paddingBottom: 4 }} />

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          maxWidth: 600,
          margin: "0 auto",
          padding: 3,
          background: "radial-gradient(#f0f0f0, #fff9ee)",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          borderRadius: 2,
        }}
        onSubmit={handleSubmit}
      >
        <SmoothScrollComponent delay={0.5}>
          <HeaderComponent title="Contactez-Nous" />
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1}>
          <TextField
            label="Nom"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
          />
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.1}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.2}>
          <TextField
            label="Sujet"
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            fullWidth
          />
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.3}>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            fullWidth
          />
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.5}>
          <Button
            variant="contained"
            type="submit"
            sx={{
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
            fullWidth
          >
            Envoyer
          </Button>
        </SmoothScrollComponent>
      </Box>
    </Box>
  );
}

export default Contact;
