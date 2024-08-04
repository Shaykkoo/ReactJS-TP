import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import HeaderComponent from "../components/Header";
import SmoothScrollComponent from "../components/Scroll";

const Register = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
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
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        username: email,
        password,
        nom: name,
        prenom: firstName,
        telephone: phone,
        adresse: address,
      });

      if (response.status === 200) {
        navigate("/login");
      } else {
        setError(response.data.error || "Erreur lors de l'inscription");
      }
    } catch (error) {
      setError(error.response.data.error || "Erreur lors de l'inscription");
    }
  };

  return (
    <Box
      sx={{
        background: "radial-gradient(white, #B1BAC7)",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <HeaderComponent title="INSCRIPTION" sx={{ paddingBottom: 4 }} />

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 600,
          margin: "0 auto",
          padding: 3,
          background: "radial-gradient(#f0f0f0, #fff9ee)",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          borderRadius: 2,
        }}
        onSubmit={handleRegister}
      >
        <SmoothScrollComponent delay={0.5}>
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
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1}>
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
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.1}>
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
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.2}>
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
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.3}>
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
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.4}>
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
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.5}>
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
        </SmoothScrollComponent>
        <SmoothScrollComponent delay={1.6}>
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
        </SmoothScrollComponent>
        {error && (
          <SmoothScrollComponent delay={1.7}>
            <Typography color="error" variant="body2" gutterBottom>
              {error}
            </Typography>
          </SmoothScrollComponent>
        )}
        <SmoothScrollComponent delay={1.8}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
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
          >
            S'inscrire
          </Button>
        </SmoothScrollComponent>
      </Box>
    </Box>
  );
};

export default Register;
