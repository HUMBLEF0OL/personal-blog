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
import Cookies from "js-cookie";
const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    const resp = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await resp.json();
    console.log("result is: ", result);
    var expiryTime = new Date(new Date().getTime() + 60 * 60 * 1000);
    Cookies.set("token", result.data.token, {
      expires: expiryTime,
    });
    window.location.replace("/");
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
          label="Username"
          type="text"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
