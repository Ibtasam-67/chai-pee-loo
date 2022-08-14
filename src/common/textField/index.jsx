import React from "react";
import { TextField, Typography } from "@mui/material";

const CustomTextField = ({ name, id, label, type, onChange,value }) => {
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
        placeholder={label}
        type={type}
        autoFocus
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default CustomTextField;
