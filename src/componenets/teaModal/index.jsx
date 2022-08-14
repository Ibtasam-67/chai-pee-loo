import React, { useEffect, useState } from "react";
import {
  createOrder,
  deleteOrder,
  updateOrders,
} from "../../services/dataServices";
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
import { addTea, deleteTea, updateTea } from "../../redux/actions/teaAction";
import Header from "../header";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { getEmployeeOrder } from "../../services/dataServices";

const TeaModal = () => {
  const [alldata, setAllData] = useState();
  const user = useSelector(
    (state) => state?.user?.data?.data?.payload?.data?.user
  );

  const type = useSelector((state) => state?.type?.data);

  const [loading, setLoading] = useState(false);
  const [allOrders, setAllOrders] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllEmployers();
  }, []);
  const getAllEmployers = async () => {
    const result = await getEmployeeOrder(type, user?.email);
    setAllOrders(result?.data?.payload?.data);
    setAllData(result?.data?.payload?.data[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let date = "2022-08-13T12:00:00Z";

    const payload = {
      email: user?.email,
      employeeName: user?.userName,
      sugerQuantity: alldata?.sugerQuantity,
      teaVolume: alldata?.teaVolume,
      orderDate: date,
      orderType: type,
    };
    const result = await createOrder(payload);
    if (result.status === 200) {
      toast.success(result?.data?.metadata.message);
    } else {
      toast.error(result?.response?.data?.metadata?.message);
    }
    dispatch(addTea(payload));
  };

  const onEdit = async (e) => {
    e.preventDefault();
    const newOrder = {
      _id: alldata?._id,
      teaVolume: alldata?.teaVolume,
      sugerQuantity: alldata?.sugerQuantity,
    };
    const order = await updateOrders(newOrder);

    if (order.status === 200) {
      toast.success(order?.data?.metadata?.message);
    } else {
      toast.error(order?.response?.data?.metadata?.message);
    }

    dispatch(updateTea(newOrder));
  };

  const onDelete = async (e) => {
    e.preventDefault();
    const order = await deleteOrder(alldata?._id);
    if (order.status === 200) {
      toast.success(order.data.metadata.message);
    } else {
      toast.error(order?.response?.data?.metadata?.message);
    }
    
    dispatch(deleteTea(order, alldata?._id));
  
  };
  return (
    <Box>
      <Toaster position="top-right" reverseOrder={true} />

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
              value={alldata?.employeeName}
              onChange={(e) => {
                let d = { ...alldata };
                d.employeeName = e.target.value;
                setAllData(d);
              }}
            />
            <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
              Chay Quantity
            </Typography>
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
              label="Tea"
            >
              <MenuItem value={"half-cup"}>Half Cup </MenuItem>
              <MenuItem value={"full-cup"}>Full Cup </MenuItem>
            </Select>
            <CustomTextField
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
            <Grid
              container
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "1rem",
              }}
            >
              <Grid item xs={4}>
                <CustomButton text="Order" onClick={onSubmit} />
              </Grid>
              <Grid item xs={4}>
                <CustomButton text="Edit" onClick={onEdit} />
              </Grid>
              <Grid item xs={4}>
                <CustomButton text="Delete" onClick={onDelete} />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default TeaModal;
