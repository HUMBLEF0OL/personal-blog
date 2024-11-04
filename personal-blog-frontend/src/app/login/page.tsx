"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          //   mt: 4
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          width: "320px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          textAlign="center"
          gutterBottom
          sx={{ color: "primary.main", fontWeight: 500 }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          variant="text"
          fullWidth
          href="/register"
          sx={{
            textDecoration: "underline",
            color: "#000",
            "&:hover": {
              backgroundColor: "transparent",
              color: "primary.main",
              textDecoration: "underline",
            },
          }}
        >
          Register for new User
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default page;
