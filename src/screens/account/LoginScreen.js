import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import logo from "@assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "@services/auth";

const INITIAL_USER = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userForm, setUserForm] = useState(INITIAL_USER);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event, navigate) => {
    event.preventDefault();

    setError("");
    setLoading(true);
    await SignIn(userForm)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to Login");
      });

    setLoading(false);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      {/* left */}
      <Grid
        item
        xs={false}
        sm={6}
        md={4}
        sx={{
          backgroundColor: "#9EDBD7",
        }}
      >
        <Box sx={{ height: "100%", display: "flex", justifyContent: "center" }}>
          <img
            style={{
              width: "50%",
            }}
            src={logo}
            alt="Asusu Igbo Logo"
          />
        </Box>
      </Grid>
      {/* right */}
      <Grid
        item
        xs={12}
        sm={6}
        md={8}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => handleSubmit(e, navigate)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "button.main", color: "black" }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
