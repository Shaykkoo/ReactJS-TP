import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Box, Typography, TextField, Button } from "@mui/material";
import HeaderComponent from "../components/Header";
import SmoothScrollComponent from "../components/Scroll";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        username: email,
        password,
      });

      const user = response.data;
      console.log("API response:", user);

      if (user && user.prenom && user.nom && user.id) {
        const { prenom, nom, id } = user;
        login(prenom, nom, id);
        navigate("/");
      } else {
        throw new Error("Données utilisateur manquantes");
      }
    } catch (error) {
      console.error("Error during login:", error.message || error);
      setError("Erreur de connexion. Veuillez vérifier vos identifiants.");
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
      <HeaderComponent title="CONNEXION" sx={{ paddingBottom: 4 }} />

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
        onSubmit={handleLogin}
      >
        <SmoothScrollComponent delay={1}>
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
        <SmoothScrollComponent delay={1.1}>
          <TextField
            label="Mot de passe"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
        </SmoothScrollComponent>
        {error && (
          <SmoothScrollComponent delay={1.2}>
            <Typography color="error">{error}</Typography>
          </SmoothScrollComponent>
        )}
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
            Se connecter
          </Button>
        </SmoothScrollComponent>
      </Box>
    </Box>
  );
};

export default Login;
