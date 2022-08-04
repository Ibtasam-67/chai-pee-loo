import { TextField, Typography } from "@mui/material";
import React from "react";

const CustomTextField = (props) => {
  return (
    <>
      <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
        {props.name}
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id={props.id}
        label={props.label}
        type={props.type}
        autoFocus
      />
    </>
  );
};

export default CustomTextField;
