import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../../common/card/index";
import { useDispatch } from "react-redux";
import Nav from "../nav";
import {
  morningResultStart,
  morningResultEnd,
  lunchResultStart,
  lunchResultEnd,
  eveningResultStart,
  eveningResultEnd
} from "../../utilities/constants";
import { getMorningType } from "../../redux/actions/morningTypeAction.js";
import { getLunchType } from "../../redux/actions/lunchTypeAction.js";
import { getEveningType } from "../../redux/actions/eveningTypeAction.js";

const AdminLanding = () => {
  const dispatch = useDispatch();
  const placeOrderMethodMorningAdmin = (type) => {
    dispatch(getMorningType(type));
  };
  const placeOrderMethodLunchAdmin = (type) => {
    dispatch(getLunchType(type));
  };
  const placeOrderMethodEveningAdmin = (type) => {
    dispatch(getEveningType(type));
  };

  function inTime(start, end) {
    let now = new Date();
    let time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }
  return (
    <>
      <Nav />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5%"
        }}>
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Morning-Tea"
            paragraphy="You can generate report after 11 am"
            order="Generate Report"
            src="cup.jpg"
            path="/teaorder"
            onClick={placeOrderMethodMorningAdmin("Morning-Tea")}
            disabled={!inTime(morningResultStart, morningResultEnd)}
          />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Lunch"
            paragraphy="You can generate report after 1 pm"
            order="Generate Report"
            src="images.jpg"
            path="/lunchorder"
            onClick={placeOrderMethodLunchAdmin("Lunch")}
            disabled={!inTime(lunchResultStart, lunchResultEnd)}
          />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Evening Tea"
            paragraphy="You can generate report after 4 pm"
            order="Generate Report"
            src="cup.jpg"
            path="/eveningteaorder"
            onClick={placeOrderMethodEveningAdmin("Evening-Tea")}
            disabled={!inTime(eveningResultStart, eveningResultEnd)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminLanding;
