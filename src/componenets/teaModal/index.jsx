import React from "react";
import {
  Box,
  Container,
  Card,
  Typography,
  Divider,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField";

const TeaModal = () => {
  return (
    <Box sx={{ marginTop: "10%" }}>
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 545, height: 370, boxShadow: 24 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              fontFamily: "monospace",
              marginTop: "6%",
              boxShadow: "20px",
            }}
          >
            Tea Requirements
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
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
              Chay Quantity
            </Typography>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              fullWidth
            >
              <MenuItem value={10}>Half Cup</MenuItem>
              <MenuItem value={20}>Full Cup</MenuItem>
            </Select>
            <CustomTextField
              name="Sugar"
              id="sugar"
              label="Sugar Quantity"
              type="number"
            />
            <CustomButton text="Order" isAuth />;
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default TeaModal;
