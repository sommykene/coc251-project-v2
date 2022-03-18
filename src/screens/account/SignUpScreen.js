import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import logo from "@assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUpScreen() {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // if (data.get("password") !== data.get("confirmpassword")) {
    //   setError("Passwords Don't Match");
    //   return;
    // }
    // const userState = {
    //   username: data.get("username"),
    //   password: data.get("password"),
    //   email: data.get("email"),
    //   name: data.get("name"),
    //   xp_points: 0,
    // };

    // SignUp(userState);
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
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              id="name"
              name="name"
              label="First Name"
              margin="normal"
              autoComplete="given-name"
              required
              fullWidth
            />
            <TextField
              id="username"
              name="username"
              label="Username"
              margin="normal"
              autoComplete="username"
              required
              fullWidth
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
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              id="confirmpassword"
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              margin="normal"
              required
              fullWidth
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
