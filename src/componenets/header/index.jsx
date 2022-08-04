import React from "react";
import { Toolbar, AppBar, Typography, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="header-1">
      <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Luminogics
          </Typography>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography variant="h6" color="inherit" component="div">
              <Link
                to="/landing"
                style={{
                  color: "white",
                  textDecorationLine: "none",
                  marginRight: "1rem",
                }}
              >
                Home
              </Link>
              <Link
                to="/landing"
                style={{ color: "white", textDecorationLine: "none" }}
              >
                Sign In
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
