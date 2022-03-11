import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#212529" }}>
      <Container
        sx={{
          textAlign: "flex items-center justify-between",
          fontWeight: "300",
          color: "#ffffff",
        }}
      >
        <Typography sx={{ textAlign: "left", fontWeight: "200" }}>
          <h3 style={{ fontWeight: "300" }}>SERVICES</h3>
          Buying a Rolex
          <br /> Find a jeweler Watch
          <br /> care and service Your selection
          <br />
          Frequently Asked Questions Newsroom
        </Typography>

        <Typography sx={{ textAlign: "left", fontWeight: "200" }}>
          <h3 style={{ fontWeight: "300" }}>LEGAL NOTICES</h3>
          Terms of Use
          <br />
          Privacy Notice
          <br />
          Cookies
        </Typography>
        <Typography sx={{ textAlign: "left", fontWeight: "200" }}>
          <h3 style={{ fontWeight: "300" }}>OFFICIAL CHANNELS </h3>
          Facebook
          <br />
          Instagram
          <br />
          Twitter
          <br />
          Youtube
          <br />
          Pinterest
          <br />
          LinkedIn
          <br />
          Youku
          <br />
          WeChat
          <br />
          Weibo
        </Typography>

        <Typography
          variant="h6"
          style={{ backgroundColor: "#212529" }}
          sx={{ mt: 5, fontSize: 17, fontWeight: "300", color: "#ffffff" }}
        >
          © All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
