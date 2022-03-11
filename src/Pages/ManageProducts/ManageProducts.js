import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https:///products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://localhost5000/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Are you sure you want to delete ?");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };

  return (
    <Box>
      {/* <Header></Header> */}
      <Typography
        variant="h2"
        sx={{
          mt: 7,
          mb: 5,
          fontStyle: "italic",
          color: "#dc2f02",
          fontWeight: "bold",
        }}
      >
        Manage Products
      </Typography>
      <NavLink style={{ textDecoration: "none" }} to="/home">
        <Button
          variant="contained"
          style={{ width: "100%", backgroundColor: "#2a9d8f" }}
        >
          Go Home
        </Button>
      </NavLink>

      {products.map((product) => (
        <Box key={product._id}>
          <Typography
            sx={{
              mt: 5,

              fontStyle: "italic",
              color: "black",
              fontWeight: "bold",
            }}
          >
            {product.name}
          </Typography>

          <br />
          <Button variant="contained" onClick={() => handleDelete(product._id)}>
            Delete
          </Button>
        </Box>
      ))}
      {/* <Footer></Footer> */}
    </Box>
  );
};

export default ManageProducts;
