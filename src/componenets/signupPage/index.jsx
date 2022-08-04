import React from "react";
import { Box, Container, Card, Typography, TextField } from "@mui/material";
import CustomButton from "../../common/button";

const SignupPage = () => {
  return (
    <Box sx={{ marginTop: "4%" }}>
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 545, height: 600 }}>
          <img
            src="luminogicsLogo-1.png"
            alt="luminogicsLogo"
            style={{ height: "50px", width: "50px", marginTop: "6%" }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", fontFamily: "Inter", marginTop: "4%" }}
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
              transform: "scale(0.8)",
            }}
          >
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
              First Name
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="first name"
              label="First Name"
              name="first name"
              autoComplete="first name"
              autoFocus
            />
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
              Last Name
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              name="Last Name"
              label="Last Name"
              type="Last Name"
              id="Last Name"
            />
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
              Email
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              name="Email"
              label="Email"
              type="Email"
              id="Email"
            />
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
              Password
            </Typography>

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
            <CustomButton text="Sign Up" isAuth />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SignupPage;
