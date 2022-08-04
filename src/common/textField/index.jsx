import React from "react";
import { TextField, Typography } from "@mui/material";

const CustomTextField = ({ name, id, label, type, onChange }) => {
  return (
    <>
      <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>
        {name}
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        type={type}
        autoFocus
        onChange={onChange}
      />
    </>
  );
};

export default CustomTextField;
