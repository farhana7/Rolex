import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        style={{ backgroundColor: "#0a0908" }}
        sx={{ mt: 5, fontSize: 17, color: "burlywood" }}
      >
        © All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
