import React from "react";
import { Toolbar, AppBar, Typography, Box, Grid, Button } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate()
  const logOut=()=>{
    window.localStorage.removeItem("token")
    navigate("/signin")
    console.log("first")
  }
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="header-1">
      <AppBar position="static" sx={{ backgroundColor: "#0C1012" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecorationLine: "none" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#FF5442",
                fontFamily: "monospace",
                fontWeight: "700",
              }}
            >
              Chay-Pee-Lo
            </Typography>
          </Link>

          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="h6" color="inherit" component="div">
              <Button
                style={{
                  color: "white",
                  textDecorationLine: "none",
                  marginRight: "1rem",
                  fontFamily: "monospace",
                  fontWeight: "700",
                }}
                onClick={logOut}
              >
                Logout
              </Button>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
