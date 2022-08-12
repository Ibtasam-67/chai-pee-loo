import React, { useState } from "react";
import { Box, Container, Card, Typography, Divider, Grid } from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField/index";
import { useDispatch } from "react-redux";
import { addLunch } from "../../redux/actions/lunchAction";
import { useNavigate } from "react-router-dom";
import Header from "../header";

const LunchModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [roti, setRoti] = useState(0);
  const [amount, setAmount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      userName,
      setUserName,
      description: description,
      roti: roti,
      amount: amount,
    };
    dispatch(addLunch(payload));
    setData([...data, payload]);
    setRoti("");
    setAmount("");
    setAmount("");
    setLoading(false);
    navigate("/lunchorder");
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="xs">
        <Card
          sx={{ maxWidth: 545, height: 550, boxShadow: 24, marginTop: "15%" }}
        >
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
              name="username"
              id="username"
              label="Username"
              type="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <CustomTextField
              name="Description"
              id="description"
              label="Description"
              type="name"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <CustomTextField
              name="Roti Quantity"
              id="roti"
              label="Roti Quantity"
              type="number"
              value={roti}
              onChange={(e) => setRoti(e.target.value)}
            />
            <CustomTextField
              name="Amount Paid"
              id="amout"
              label="Amount Paid"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem",
              }}
            >
              <Grid item xs={3}>
                <CustomButton
                  text="Order"
                  isAuth
                  onClick={onSubmit}
                  isEnable={!description || !roti || !amount || !userName}
                  loading={loading}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomButton
                  text="Edit"
                  isAuth
                  onClick={onSubmit}
                  isEnable={!description || !roti || !amount || !userName}
                  loading={loading}
                />
              </Grid>
              <Grid item xs={3}>
                <CustomButton
                  text="Delete"
                  isAuth
                  onClick={onSubmit}
                  isEnable={!description || !roti || !amount || !userName}
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

export default LunchModal;
