import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../../common/card/index";
import { getType } from "../../redux/actions/typeAction";
import { useDispatch } from "react-redux";
import Nav from "../nav";

const AdminLanding = () => {
  const dispatch = useDispatch();
  const placeOrderMethod = (type) => {
    dispatch(getType(type));
  };

  let start = 9 * 60 + 0;
  let end = 11 * 60 + 0;
  function inTime(start, end) {
    let now = new Date();
    let time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }
  return (
    <>
     <Nav/>
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
            paragraphy="You can generate report after 11 am"
            order="Generate Report"
            src="cup.jpg"
            path="/order"
            onClick={placeOrderMethod("Morning-Tea")}
            disabled={inTime(start, end)}
          />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Lunch"
            paragraphy="You can generate report after 1 pm"
            order="Generate Report"
            src="images.jpg"
            path="/order"
            onClick={placeOrderMethod("Lunch")}
            disabled={inTime(start, end)}
          />
        </Grid>
        <Grid item md={3} mt="2%">
          <CustomCard
            text="Evening Tea"
            paragraphy="You can generate report after 4 pm"
            order="Generate Report"
            src="cup.jpg"
            path="/order"
            onClick={placeOrderMethod("Evening-Tea")}
            disabled={inTime(start, end)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminLanding;
