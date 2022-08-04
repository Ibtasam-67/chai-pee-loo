/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { Modal, MenuItem, Select } from "@mui/material";
import Fade from "@mui/material/Fade";
import { Typography, TextField } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { Button } from "@mui/material";
 

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LunchModal() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, width: "60vw" }}>
            <Typography variant="h5">Description</Typography>
            <TextField
              id="tea"
              type="text"
              label="Tea Volume"
              variant="outlined"
            />

            <Typography variant="h5">Roti Quantity</Typography>
            <TextField
              id="roti"
              type="number"
              label="Roti"
              variant="outlined"
            />

            <Typography variant="h5">Amount</Typography>
            <TextField
              id="amount"
              type="number"
              label="Amount"
              variant="outlined"
            />

            <Box style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                style={{ height: "5vh" }}
                size="large"
                sx={{ mr: 2 }}
              >
                Order
              </Button>

              <Button onClick={handleClose} variant="contained">
                Close
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
