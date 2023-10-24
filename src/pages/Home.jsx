import React from "react";
import Layout from "./Layout";
import { Box, Container, CssBaseline, Typography } from "@mui/material";

const Home = () => {
  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography>Home</Typography>
      </Container>
    </Layout>
  );
};

export default Home;
