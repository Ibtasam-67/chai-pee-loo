import React from "react";
import { Box, Container, Card, Typography, TextField } from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField/textField";

const SignupPage = () => {
  return (
    <Box sx={{ marginTop: "4%" }}>
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 445, height: 600 }}>
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
            <CustomTextField
              name="User Name"
              id="username"
              label="User Name"
              type="text"
            />
            <CustomTextField
              name="Email"
              id="email"
              label="Enter Your Email"
              type="email"
            />
            <CustomTextField
              name="Password"
              id="password"
              label="Password"
              type="password"
            />

            <CustomButton text="Sign Up" isAuth />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SignupPage;
