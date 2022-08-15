import React from "react";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";

const CustomButton = ({ onClick, text, isAuth, loading, isEnable }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        fontWeight: "600",
        width: isAuth ? "100%" : "80%",
        backgroundColor: "#000000",
        "&:hover": {
          background: "#000000"
        },
        fontSize: "16px",
        borderRadius: "10px",
        marginTop: "12%"
      }}
      onClick={onClick}
      disabled={isEnable}>
      {loading ? <CircularProgress /> : text}
    </Button>
  );
};

export default CustomButton;
