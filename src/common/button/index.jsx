import React from "react";
import { Button } from "@mui/material";

const CustomButton = (props) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        fontWeight: "600",
        width: props.isAuth ? "100%" : "80%",
        backgroundColor: "#000000",
        fontSize: "16px",
        borderRadius: "10px",
      }}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
