import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../../common/card/index";
import Header from "../header";

const Landing = () => {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5%",
        }}
      >
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Morning Tea"
            paragraphy="You can not order after 11 am"
            order="Order"
            src="cup.jpg"
            path="/teamodal"
          />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Lunch"
            paragraphy="You can not order after 1 pm"
            order="Order"
            src="images.jpg"
            path="/lunchmodal"
          />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Evening Tea"
            paragraphy="You can not order after 4 pm"
            order="Order"
            src="cup.jpg"
            path="/teamodal"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
