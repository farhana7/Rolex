import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import login from "../../../images/login.jpg";
import useAuth from "../../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, singInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle(location, history);
  };

  return (
    <Box>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 10, mb: 7 }} xs={12} md={6}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: 37, color: "#004b23" }}
              variant="body1"
              gutterBottom
            >
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />

              <Button
                sx={{
                  width: "75%",
                  m: 1,
                  backgroundColor: "#004b23",
                  color: "#cc8f1f",
                }}
                type="submit"
                // variant="contained"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button sx={{ color: "#004b23", mt: 5 }} variant="text">
                  New User? Please Register
                </Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Login successfully !</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>---------------------------------------</p>
            <Button
              onClick={handleGoogleSignIn}
              sx={{ backgroundColor: "#004b23", color: "#cc8f1f" }}
            >
              Google Sign In
            </Button>
          </Grid>

          <Grid item sx={{ mt: 15 }} xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </Box>
  );
};

export default Login;
