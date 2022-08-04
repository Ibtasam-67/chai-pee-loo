import React from "react";
import { Toolbar, AppBar, Typography, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="header-1">
      <AppBar position="static" sx={{ backgroundColor: "#0C1012" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
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
                  fontFamily: "monospace",
                  fontWeight: "700",
                }}
              >
                Home
              </Link>
              <Link
                to="/landing"
                style={{
                  color: "white",
                  textDecorationLine: "none",

                  fontFamily: "monospace",
                  fontWeight: "700",
                }}
              >
                SignIn
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
