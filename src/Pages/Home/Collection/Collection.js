import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Collection = ({ collection }) => {
  const { _id, name, description, img, price } = collection;

  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, mb: 10 }}>
        <CardMedia
          component="img"
          //   height="140"
          style={{ width: "400px ", height: "300px", margin: "0 auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="h5"
            color="#000000"
            textAlign="left"
            component="div"
          >
            {name}
          </Typography>
          <br />

          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "left" }}
          >
            {description}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }} color="#dc2f02" textAlign="left">
            Price : {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ textDecoration: "none" }}
            className="w-full"
            to={`/purchase/${_id}`}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#004b23",
                width: "350px",
                color: "#cc8f1f",
              }}
              // size="medium"
            >
              Purchase
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Collection;
