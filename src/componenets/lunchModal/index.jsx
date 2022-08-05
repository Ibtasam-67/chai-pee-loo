import React from "react";
import { Box, Container, Card, Typography, Divider } from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField/index";

const LunchModal = () => {
  return (
    <Box sx={{ marginTop: "10%" }}>
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 545, height: 460, boxShadow: 24 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", fontFamily: "monospace", marginTop: "6%" }}
          >
            Order Your Lunch
          </Typography>
          <Divider sx={{ marginTop: "5%" }} />
          <Box
            component="form"
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mx: "2px",
              transform: "scale(0.8)",
            }}
          >
            <CustomTextField
              name="Description"
              id="description"
              label="Description"
              type="number"
            />
            <CustomTextField
              name="Roti Quantity"
              id="roti"
              label="Roti Quantity"
              type="number"
            />
            <CustomTextField
              name="Amount Paid"
              id="amout"
              label="Amount Paid"
              type="number"
            />
            <CustomButton text="Order" isAuth />
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default LunchModal;
