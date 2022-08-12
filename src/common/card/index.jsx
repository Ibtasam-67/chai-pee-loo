import React from "react";
import { Box, Button } from "@mui/material";
import "./cards.css";
import { Link } from "react-router-dom";

const CustomCards = ({ text, order, paragraphy, src, path }) => {
  return (
    <Box className="body-1">
      <Box className="container">
        <Box className="card">
          <Box className="imgBox">
            <img src={src} />
          </Box>
          <Box className="contentBox">
            <h2>{text}</h2>
            <Link to={path}>
              <Button>{order}</Button>
            </Link>
            <h6>{paragraphy}</h6>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCards;
