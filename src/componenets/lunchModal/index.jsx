/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Container, Card, Typography, Divider, Grid } from "@mui/material";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField/index";
import Header from "../header";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, deleteOrders, updateOrders } from "../../services/dataServices";
import { getEmployeeOrder } from "../../services/dataServices";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { addOrder, deleteOrder, updateOrder } from "../../redux/actions/orderAction";
// import { useNavigate } from "react-router-dom";

const LunchModal = () => {
  // const navigate = useNavigate();
  const [alldata, setAllData] = useState();
  const user = useSelector((state) => state?.user?.data?.data?.payload?.data?.user);

  const type = useSelector((state) => state?.lunchType?.data);

  const [userName, setuserName] = useState(user?.userName);
  const [allOrders, setAllOrders] = useState([]);
  const [createloading, setCreateloading] = useState(false);
  const [deleteloading, setDeleteloading] = useState(false);
  const [updateloading, setUpdateloading] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    setCreateloading(true);
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      hourCycle: "h24"
    });
    date = date + "Z";

    const payload = {
      email: user?.email,
      employeeName: user?.userName,
      orderDate: date,
      orderType: type,
      extras: alldata?.extras,
      rotiQuantity: alldata?.rotiQuantity,
      amount: alldata?.amount
    };
    const result = await createOrder(payload);
    if (result.status === 200) {
      const result = await getEmployeeOrder(type, user?.email);
      setAllOrders(result?.data?.payload?.data);
      setAllData(result?.data?.payload?.data[0]);
      toast.success(result?.data?.metadata?.message);
    } else {
      toast.error(result?.response?.data?.metadata?.message);
    }
    setCreateloading(false);
    dispatch(addOrder(payload));
  };

  const onEdit = async (e) => {
    e.preventDefault();
    setUpdateloading(true);
    const newOrder = {
      _id: alldata?._id,
      teaVolume: alldata?.teaVolume,
      sugerQuantity: alldata?.sugerQuantity
    };
    const order = await updateOrders(newOrder);
    if (order.status === 200) {
      toast.success(order?.data?.metadata?.message);
    } else {
      toast.error(order?.response?.data?.metadata?.message);
    }
    setUpdateloading(false);
    dispatch(updateOrder(newOrder));
  };

  const onDelete = async (e) => {
    e.preventDefault();
    setDeleteloading(true);
    const order = await deleteOrders(alldata?._id);
    if (order.status === 200) {
      toast.success(order?.data?.metadata?.message);
    } else {
      toast.error(order?.response?.data?.metadata?.message);
    }
    dispatch(deleteOrder(order, alldata?._id));
    setDeleteloading(false);
    setAllData({
      ...alldata,
      extras: "",
      rotiQuantity: "",
      amount: ""
    });
  };
  useEffect(() => {
    getAllEmployers();
  }, []);
  const getAllEmployers = async () => {
    const result = await getEmployeeOrder(type, user?.email);
    setAllOrders(result?.data?.payload?.data);
    setAllData(result?.data?.payload?.data[0]);
  };

  return (
    <Box>
      <Toaster position="top-right" reverseOrder={true} />

      <Header />
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 545, height: 550, boxShadow: 24, marginTop: "15%" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", fontFamily: "monospace", marginTop: "6%" }}>
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
              transform: "scale(0.8)"
            }}>
            <CustomTextField
              name="username"
              id="username"
              label="Username"
              type="name"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
            <CustomTextField
              name="Description"
              id="description"
              label="Description"
              type="name"
              value={alldata?.extras}
              onChange={(e) => {
                let d = { ...alldata };
                d.extras = e.target.value;
                setAllData(d);
              }}
            />
            <CustomTextField
              InputProps
              name="Roti Quantity"
              id="roti"
              label="Roti Quantity"
              type="number"
              value={alldata?.rotiQuantity}
              onChange={(e) => {
                let d = { ...alldata };
                d.rotiQuantity = parseInt(e.target.value);
                setAllData(d);
              }}
            />
            <CustomTextField
              InputProps
              name="Amount Paid"
              id="amout"
              label="Amount Paid"
              type="number"
              value={alldata?.amount}
              onChange={(e) => {
                let d = { ...alldata };
                d.amount = parseInt(e.target.value);
                setAllData(d);
              }}
            />

            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem"
              }}>
              <Grid item xs={4}>
                <CustomButton text="Order" onClick={onSubmit} loading={createloading} />
              </Grid>
              <Grid item xs={4}>
                <CustomButton text="Edit" onClick={onEdit} loading={updateloading} />
              </Grid>
              <Grid item xs={4}>
                <CustomButton text="Delete" onClick={onDelete} loading={deleteloading} />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default LunchModal;
