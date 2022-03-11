import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Collection from "../Collection/Collection";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("./collections.json")
      .then((res) => res.json())
      .then((data) => setCollections(data));
  }, []);

  return (
    <Box>
      <Navigation></Navigation>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            sx={{
              mt: 10,
              mb: 7,
              fontStyle: "italic",
              fontWeight: "bold",
              color: "#004b23",
            }}
          >
            More of Our Collections
          </Typography>

          <Container>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {collections.map((collection) => (
                <Collection
                  key={collection.id}
                  collection={collection}
                ></Collection>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Collections;
