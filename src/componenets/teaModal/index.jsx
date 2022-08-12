import React, { useState } from "react";
import { createOrder } from "../../services/dataServices";
import {
  Box,
  Container,
  Card,
  Typography,
  Divider,
  MenuItem,
  Select,
  Grid,
} from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField";
import { useDispatch, useSelector } from "react-redux";
import { addTea } from "../../redux/actions/teaAction";
import Header from "../header";

const TeaModal = ({ text }) => {
  const user = useSelector(
    (state) => state?.user?.data?.data?.payload?.data?.user
  );

  const [userName, setUserName] = useState(user?.userName);
  const [chayQuant, setChayQuant] = useState("");
  const [sugar, setSugar] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let date = "2022-08-12T17:00:00";
    const payload = {
      email: user.email,
      employeeName: user.userName,
      sugerQuantity: sugar,
      teaVolume: chayQuant,
      orderDate: date,
      orderType: "Evening-Tea",
    };
    const result = await createOrder(payload);

    dispatch(addTea(payload));
    setChayQuant("");
    setSugar("");
    setLoading(false);
  };
  return (
    <Box>
      <Header />
      <Container maxWidth="xs">
        <Card
          sx={{ maxWidth: 645, height: 470, boxShadow: 24, marginTop: "15%" }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              fontFamily: "monospace",
              marginTop: "8%",
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
            <CustomTextField
              name="UserName"
              id="UserName"
              label="UserName"
              type="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
              Chay Quantity
            </Typography>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={chayQuant}
              onChange={(e) => setChayQuant(e.target.value)}
              fullWidth
              label="Tea"
            >
              <MenuItem value={"Half-Cup"}>Half Cup </MenuItem>
              <MenuItem value={"Full-Cup"}>Full Cup </MenuItem>
            </Select>
            <CustomTextField
              name="Sugar"
              id="sugar"
              label="Sugar Quantity"
              type="number"
              value={sugar}
              onChange={(e) => setSugar(e.target.value)}
            />
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem",
              }}
            >
              <Grid item xs={4}>
                <CustomButton
                  text="Order"
                  onClick={onSubmit}
                  isEnable={!sugar || !chayQuant || !userName}
                  loading={loading}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  text="Edit"
                  onClick={onSubmit}
                  isEnable={!sugar || !chayQuant || !userName}
                  loading={loading}
                />
              </Grid>
              <Grid item xs={4}>
                <CustomButton
                  text="Delete"
                  onClick={onSubmit}
                  isEnable={!sugar || !chayQuant || !userName}
                  loading={loading}
                />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default TeaModal;
