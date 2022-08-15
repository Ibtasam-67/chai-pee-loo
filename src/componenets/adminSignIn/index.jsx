import React, { useState } from "react";
import { Box, Container, Card, Typography } from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField/index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_WRONG_EMAIL,
  ADMIN_WRONG_PASSWORD,
  ADMIN_WRONG_PASSWORD_EMAIL
} from "../../utilities/constants";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("email", ADMIN_EMAIL);
      navigate("/adminlanding");
    } else if (email !== ADMIN_EMAIL) {
      toast.error(ADMIN_WRONG_EMAIL);
    } else if (password !== ADMIN_PASSWORD) {
      toast.error(ADMIN_WRONG_PASSWORD);
    } else {
      toast.error(ADMIN_WRONG_PASSWORD_EMAIL);
    }
    setEmail("");
    setPassword("");
    setLoading(false);
  };
  return (
    <Box sx={{ marginTop: "10%" }}>
      <Toaster position="top-right" reverseOrder={true} />

      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 545, height: 500 }}>
          <img
            src="luminogicsLogo-1.png"
            alt="luminogicsLogo"
            style={{ height: "50px", width: "50px", marginTop: "6%" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "600", fontFamily: "Inter", marginTop: "6%" }}>
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
              transform: "scale(0.8)"
            }}>
            <CustomTextField
              name="Email"
              id="email"
              label="Enter Your Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <CustomTextField
              name="Pssword"
              id="password"
              label="Enter Your Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <CustomButton
              text="Sign In"
              isAuth
              onClick={onSubmit}
              loading={loading}
              isEnable={!email || !password}
            />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default AdminSignIn;
