import { Typography, Container, Grid, Box } from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Collection from "../Collection/Collection";
import Collections from "../Collections/Collections";

const Home = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("./collections.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>

      <Container>
        <Typography
          variant="h3"
          sx={{
            mt: 5,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#403d39",
            textAlign: "left",
          }}
        >
          ROLEX WATCHES ARE CRAFTED WITH SCRUPULOUS ATTENTION TO DETAIL
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 3,
            mb: 5,
            color: "gray",
            fontWeight: "300",
            textAlign: "left",
          }}
        >
          Explore the Rolex collection of prestigious, high-precision
          timepieces. Rolex offers a wide assortment of Oyster Perpetual and
          Cellini watches to suit any wrist. Discover the broad selection of
          Rolex watches to find a perfect combination of style and
          functionality.
        </Typography>
      </Container>
      <Box>
        <Typography
          variant="h2"
          sx={{
            mt: 10,
            mb: 10,
            fontStyle: "italic",
            color: "#004b23",
            fontWeight: "bold",
          }}
        >
          Our Collections
        </Typography>
        <Typography
          variant="h4"
          sx={{
            mt: 5,
            mb: 5,
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#264653",
          }}
        >
          Top - Brands
        </Typography>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {collections.slice(0, 6).map((collection) => (
              <Collection
                key={collection.id}
                collection={collection}
              ></Collection>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer></Footer>
    </div>
  );
};

export default Home;
