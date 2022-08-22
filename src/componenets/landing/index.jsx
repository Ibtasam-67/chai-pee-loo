import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../../common/card/index";
import Header from "../header";
import { getMorningType } from "../../redux/actions/morningTypeAction";
import { useDispatch } from "react-redux";
import {
  lunchEnd,
  lunchStart,
  morningTeaEnd,
  morningTeaStart,
  eveningTeaStart,
  eveningTeaEnd
} from "../../utilities/constants";
import { getEveningType } from "../../redux/actions/eveningTypeAction";
import { getLunchType } from "../../redux/actions/lunchTypeAction";

const Landing = () => {
  const dispatch = useDispatch();
  const placeOrderMethodMorning = (type) => {
    dispatch(getMorningType(type));
  };
  const placeOrderMethodLunch = (type) => {
    dispatch(getLunchType(type));
  };
  const placeOrderMethodEvening = (type) => {
    dispatch(getEveningType(type));
  };

  function inTime(start, end) {
    let now = new Date();
    let time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5%"
        }}>
        <Grid item md={3}>
          <CustomCard
            text="Morning Tea"
            paragraphy="You can not order after 11 am"
            order="Order"
            src="chayLogo.png"
            path="/teamodal"
            onClick={placeOrderMethodMorning("Morning-Tea")}
            disabled={inTime(morningTeaStart, morningTeaEnd)}
          />
        </Grid>
        <Grid item md={3}>
          <CustomCard
            text="Lunch"
            paragraphy="You can not order after 1 pm"
            order="Order"
            src="BurgerLogo.png"
            path="/lunchmodal"
            onClick={placeOrderMethodLunch("Lunch")}
            disabled={inTime(lunchStart, lunchEnd)}
          />
        </Grid>
        <Grid item md={3}>
          <CustomCard
            text="Evening Tea"
            paragraphy="You can not order after 4 pm"
            order="Order"
            src="chayLogo.png"
            path="/eveningTea"
            onClick={placeOrderMethodEvening("Evening-Tea")}
            disabled={!inTime(eveningTeaStart, eveningTeaEnd)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
