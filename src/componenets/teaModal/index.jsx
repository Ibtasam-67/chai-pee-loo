/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { createOrder, deleteOrders, updateOrders } from "../../services/dataServices";
import {
  Box,
  Container,
  Card,
  Typography,
  Divider,
  MenuItem,
  Select,
  Grid,
  Button
} from "@mui/material";
import { addOrder, deleteOrder, updateOrder } from "../../redux/actions/orderAction";
import Header from "../header";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { getEmployeeOrder } from "../../services/dataServices";
import CustomButton from "../../common/button";
import CustomTextField from "../../common/textField";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const EveningTeaModal = () => {
  const navigate = useNavigate();

  const [alldata, setAllData] = useState({});
  const user = useSelector((state) => state?.user?.data?.data?.payload?.data?.user);
  const type = useSelector((state) => state?.evening?.data);

  const [userName, setUserName] = useState(user?.userName);
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
      sugerQuantity: alldata?.sugerQuantity,
      teaVolume: alldata?.teaVolume,
      orderDate: date,
      orderType: type
    };
    const result = await createOrder(payload);
    if (result.status === 200) {
      const res = await getEmployeeOrder(type, user?.email);
      setAllOrders(res?.data?.payload?.data);
      setAllData(res?.data?.payload?.data[0]);
      toast.success(result?.data?.metadata?.message);
    } else {
      toast.error(result?.response?.data?.metadata?.message);
    }

    dispatch(addOrder(payload));
    setCreateloading(false);
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
    dispatch(updateOrder(newOrder));
    setUpdateloading(false);
  };

  const onDelete = async (e) => {
    e.preventDefault();
    setDeleteloading(true);
    const order = await deleteOrders(alldata?._id);
    if (order.status === 200) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
      toast.success(order?.data?.metadata?.message);
    } else {
      toast.error(order?.response?.data?.metadata?.message);
    }
    dispatch(deleteOrder(order, alldata?._id));
    setDeleteloading(false);
    setAllData({
      ...alldata,
      teaVolume: "",
      sugerQuantity: ""
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
  console.log(alldata?.teaVolume);

  return (
    <Box>
      <Toaster position="top-right" reverseOrder={true} />
      <Header />
      <Container maxWidth="xs">
        <Card sx={{ maxWidth: 645, maxHeight: 600, boxShadow: 24, marginTop: "15%" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              marginTop: "8%",
              boxShadow: "20px"
            }}>
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
              transform: "scale(0.8)"
            }}>
            <CustomTextField
              name="UserName"
              id="UserName"
              label="UserName"
              type="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>Chay Quantity</Typography>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={alldata?.teaVolume}
              onChange={(e) => {
                let d = { ...alldata };
                d.teaVolume = e.target.value;
                setAllData(d);
              }}
              fullWidth
              label="Tea">
              <MenuItem value="Half Cup">Half Cup </MenuItem>
              <MenuItem value="Full Cup">Full Cup </MenuItem>
            </Select>
            <CustomTextField
              InputProps
              name="Sugar"
              id="sugar"
              label="Sugar Quantity"
              type="number"
              value={alldata?.sugerQuantity}
              onChange={(e) => {
                let d = { ...alldata };
                d.sugerQuantity = parseInt(e.target.value);
                setAllData(d);
              }}
            />

            <Grid container>
              {!allOrders && (
                <>
                  <Grid item xs={12}>
                    <CustomButton
                      text="Order"
                      onClick={onSubmit}
                      loading={createloading}
                      isAuth
                      isEnable={!alldata?.sugerQuantity || !alldata?.teaVolume}
                    />
                  </Grid>
                </>
              )}

              {allOrders && (
                <>
                  <Grid item xs={12}>
                    <CustomButton text="Edit" onClick={onEdit} loading={updateloading} isAuth />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text="Delete" onClick={onDelete} loading={deleteloading} isAuth />
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#000000",
                      "&:hover": {
                        background: "#000000"
                      },
                      fontWeight: "600",
                      fontSize: "16px",
                      borderRadius: "10px",
                      marginTop: "6%",
                      width: "100%"
                    }}>
                    Cancel
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default EveningTeaModal;
