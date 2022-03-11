import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/rolex-logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#000000" }} position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "left",
              fontWeight: "bold",
              color: "#cc8f1f",
            }}
          >
            ROLEX
          </Typography>

          <NavLink style={{ textDecoration: "none" }} to="/home">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 19,
                color: "#ffffff",
              }}
            >
              Home
            </Button>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/collections">
            <Button
              sx={{
                // fontWeight: "bold",
                fontSize: 19,
                color: "#ffffff",
              }}
            >
              Explore
            </Button>
          </NavLink>

          {user?.email ? (
            <Box>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                }}
                to="/dashboard"
              >
                <Button
                  sx={{
                    // fontWeight: "bold",
                    fontSize: 20,
                    color: "#ffffff",
                  }}
                  color="inherit"
                >
                  Dashboard
                </Button>
              </NavLink>
              <Button
                sx={{
                  // fontWeight: "bold",
                  fontSize: 17,
                }}
                onClick={logOut}
                color="inherit"
              >
                Logout
              </Button>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button
                sx={{
                  // fontWeight: "bold",
                  fontSize: 17,
                }}
                color="inherit"
              >
                Login
              </Button>
            </NavLink>
          )}
          <>
            Signed in as:
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/#login"
            >
              {user?.displayName}
            </a>
          </>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
