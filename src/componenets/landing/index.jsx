import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../../common/card";
import Header from "../header";

const Landing = () => {
  return (
    <div>
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10%",
        }}
      >
        <Grid item md={3} mt="2%">
          <CustomCard text=" Morning Tea " />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard text="Afternoon !!" />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard text="Eveneing Tea" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
