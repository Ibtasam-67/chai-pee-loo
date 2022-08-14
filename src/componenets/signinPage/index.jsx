import React, { useState } from "react";
import { Box, Container, Card, Typography, Grid } from "@mui/material";
import CustomButton from "../../common/button";
import { Link } from "react-router-dom";
import CustomTextField from "../../common/textField/index";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/dataServices";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions/userAction";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const path = "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email: email,
      password: password,
    };

    const result = await signIn(payload);
    if (result.status === 200) {
      localStorage.setItem("token", result.data.payload.data.token);
      navigate(path);
    } else {
      toast.error(result?.response?.data?.metadata?.message);
    }
    dispatch(addUser(result));
    setEmail("");
    setPassword("");
    setLoading(false);
  };
  return (
    <Box sx={{ marginTop: "10%" }}>
      <Toaster position="top-right" reverseOrder={true} />

      <Container maxWidth="xs">
        <Card style={{ maxWidth: 545, height: 500 }}>
          <img
            src="luminogicsLogo-1.png"
            alt="luminogicsLogo"
            style={{ height: "50px", width: "50px", marginTop: "6%" }}
          />
          <Typography
            variant="h5"
            style={{ fontWeight: "600", fontFamily: "Inter", marginTop: "6%" }}
          >
            Welcome To Luminogics
          </Typography>
          <Box
            component="form"
            noValidate
            style={{
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
          <Box style={{ display: "flex", justifyContent: "space-around" }}>
            <Grid item sx={3}>
              <Link to="/adminsignin">
                <span
                  style={{
                    fontWeight: "600",
                    textDecoration: "none",
                    color: "#2196f3",
                  }}
                >
                  Admin SignIn
                </span>
              </Link>
            </Grid>
            <Grid item sx={3}>
              <Link to="/signup">
                <span
                  style={{
                    fontWeight: "600",
                    textDecoration: "none ",
                    color: "#2196f3",
                  }}
                >
                  Sign Up
                </span>
              </Link>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SigninPage;
