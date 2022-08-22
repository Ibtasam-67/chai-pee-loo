import React from "react";
import { TextField, Typography } from "@mui/material";

const CustomTextField = ({ name, id, label, type, onChange, value, InputProps }) => {
  return (
    <>
      <Typography sx={{ marginRight: "auto", fontWeight: "600" }}>{name}</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id={id}
        placeholder={label}
        type={type}
        autoFocus
        onChange={onChange}
        value={value}
        InputProps={{ inputProps: { min: 0, max: 10000 } }}
      />
    </>
  );
};

export default CustomTextField;
