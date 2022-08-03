import React from "react";
// import "./signinPage.css";
import {
  Box,
  Container,
  Card,
  Typography,
  TextField,
} from "@mui/material";
import CustomButton from "../../common/button";

const SignupPage = () => {
  return (
    <Box className="signinGradient">
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 545, height: 560 }}>
          <img
            src="luminogicsLogo-1.png"
            alt="luminogicsLogo"
            style={{ height: "50px", width: "50px", marginTop: "6%" }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", fontFamily: "raleway", marginTop: "6%" }}
          >
            Welcome To Luminogics
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: "2px",
              transform: "scale(0.8)",
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            />
            <CustomButton text="Signup" />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SignupPage;
