import React from "react";
import { Box, Container, Card, Typography, Grid } from "@mui/material";
import CustomButton from "../../common/button";
import { Link } from "react-router-dom";
import CustomTextField from "../../common/textField/index";

const SigninPage = () => {
  return (
    <Box sx={{ marginTop: "10%" }}>
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 545, height: 500 }}>
          <img
            src="luminogicsLogo-1.png"
            alt="luminogicsLogo"
            style={{ height: "50px", width: "50px", marginTop: "6%" }}
          />
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", fontFamily: "Inter", marginTop: "6%" }}
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
            <CustomTextField
              name="Email"
              id="email"
              label="Enter Your Email"
              type="email"
            />
            <CustomTextField
              name="Pssword"
              id="password"
              label="Enter Your Password"
              type="password"
            />

            <CustomButton text="Sign In" isAuth />
          </Box>
          <Grid>
            <span>Don't have an account? </span>
            <Link to="/signupPage">
              <span
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Sign Up
              </span>
            </Link>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default SigninPage;
