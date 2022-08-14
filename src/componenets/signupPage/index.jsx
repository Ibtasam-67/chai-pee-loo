import React, { useState } from "react";
import { Box, Container, Card, Typography, Grid } from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField";
import { signUp } from "../../services/dataServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const path = "/signin";

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      userName: userName,
      email: email,
      password: password
    };
    const result = await signUp(payload);
    if (result.status === 200) {
      navigate(path);
    } else {
      toast.error(result.response.data.metadata.message);
    }
    setUserName("");
    setEmail("");
    setPassword("");
    setLoading(false);
  };
  return (
    <Box sx={{ marginTop: "4%" }}>
      <Toaster position="top-right" reverseOrder={true} />
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 445, height: 600 }}>
          <img
            src="luminogicsLogo-1.png"
            alt="luminogicsLogo"
            style={{ height: "50px", width: "50px", marginTop: "6%" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "600", fontFamily: "Inter", marginTop: "8%" }}>
            Welcome To Luminogics
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: "scale(0.8)"
            }}>
            <CustomTextField
              name="User Name"
              id="username"
              label="User Name"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <CustomTextField
              name="Email"
              id="email"
              label="Enter Your Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <CustomTextField
              name="Password"
              id="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <CustomButton
              onClick={onSubmit}
              text="Sign Up"
              isAuth
              loading={loading}
              isEnable={!userName || !email || !password}
            />
          </Box>
          <Grid>
            <span> Do not have an account? </span>
            <Link to="/signin">
              <span
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#2196f3"
                }}>
                Sign In
              </span>
            </Link>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default SignupPage;
