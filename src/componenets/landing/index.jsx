import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../../common/card/index";
import Header from "../header";

const Landing = () => {
  const events = ["Morning Tea", "After Noon !!", "Evening Tea"];
  return (
    <div style={{backgroundColor:"#0E1113",height:"100vh"}}>
      <Header/>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "10%",
      
        }}
      >
        {events.map((event,index) => (
          <Grid item md={3} mt="2%" key={index}>
            <CustomCard text={event} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Landing;
