import React from 'react'
import { Grid, Container, Typography } from "@mui/material";
import MyImage from "../components/MyImage";

const Introduction = () => {
  return (
    <Grid container >
      <Grid item >
        <MyImage/>
      </Grid>
      <Grid item >
        <Typography variant="h2" align="center">Hi, I'm Matilda
        </Typography>
        <Typography variant="p" align="center">I'm a full stack JavaScript developer with a passion for learning new things. Nothing makes me quite as happy as having a good problem to solve.
        </Typography>
      </Grid>

    </Grid>
  )
}

/* const Introduction = () => {
    return (
      <Container maxWidth="xs" minHeight="vh">
          <MyImage/>
          <Typography variant="h2" align="center">Hi, I'm Matilda</Typography>
          <Typography variant="p" align="center">I'm a full stack JavaScript developer with a passion for learning new things. Nothing makes me quite as happy as having a good problem to solve.</Typography>
    </Container>
    )
  } */

export default Introduction