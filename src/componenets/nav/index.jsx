import React from "react";
import { Toolbar, AppBar, Typography, Box, Grid, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.removeItem("email");
    navigate("/adminsignin");
  };
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="header-1">
      <AppBar position="static" sx={{ backgroundColor: "#0C1012" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/adminlanding" style={{ textDecorationLine: "none" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#FF5442",

                fontWeight: "700"
              }}>
              Chay-Pee-Lo
            </Typography>
          </Link>

          <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography variant="h6" color="inherit" component="div">
              <Button
                style={{
                  color: "white",
                  textDecorationLine: "none",
                  marginRight: "1rem",

                  fontWeight: "700"
                }}
                onClick={logOut}>
                Logout
              </Button>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
