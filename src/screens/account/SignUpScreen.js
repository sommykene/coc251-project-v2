import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import logo from "@assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

import { CreateUser } from "@services/auth";

const INITIAL_USER = {
  username: "",
  password: "",
  confirmpassword: "",
  email: "",
  firstname: "",
  xp_points: 0,
};

export default function SignUpScreen() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userForm, setUserForm] = useState(INITIAL_USER);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event, navigate) => {
    event.preventDefault();

    if (userForm.password !== userForm.confirmpassword) {
      setError("Passwords Don't Match");
      return;
    }

    setError("");
    setLoading(true);
    await CreateUser(userForm)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to Sign Up");
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
            Sign in
          </Typography>
          <Typography component="h6" sx={{ color: "red" }}>
            {error}
          </Typography>
          {/* FORM */}
          <Box
            component="form"
            noValidate
            onSubmit={(e) => handleSubmit(e, navigate)}
            sx={{ mt: 1 }}
          >
            <TextField
              id="name"
              name="firstname"
              label="First Name"
              margin="normal"
              autoComplete="given-name"
              required
              fullWidth
              value={userForm.firstname}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="username"
              name="username"
              label="Username"
              margin="normal"
              autoComplete="username"
              required
              fullWidth
              value={userForm.username}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="email"
              name="email"
              label="Email Address"
              type="email"
              autoComplete="email"
              margin="normal"
              required
              fullWidth
              value={userForm.email}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              margin="normal"
              required
              fullWidth
              value={userForm.password}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              margin="normal"
              required
              fullWidth
              value={userForm.confirmpassword}
              onChange={(e) => handleChange(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "button.main", color: "black" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/login">Already have an account? Login</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
