import React from 'react'
import { Typography, Container } from "@mui/material";
import MyImage from "../components/MyImage";
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';

/* const Introduction = () => {
  return (
    <Grid container sx={{height: '100vh'}}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <MyImage/>
      </Grid>

      <Grid item xs={12} sm={12} md={7} lg={7} xl={7} mt={5} >
      
        <Typography variant="h2" >Hi, I'm Matilda
        </Typography>
        <Typography variant="p" >I'm a full stack JavaScript developer with a passion for learning new things. Nothing makes me quite as happy as having a good problem in front of me.
        </Typography>
        
      </Grid>
    </Grid>
  )
} */

const Introduction = () => {
    return (
      <Container sx={{height: '100vh', width: '0.8', mt: '5%'}}>
          <MyImage/>
          <Typography variant="h2" align="center">Hi, I'm Matilda</Typography>
          <Typography variant="p" align="center" >I'm a full stack JavaScript developer with a passion for learning new things. Nothing makes me quite as happy as having a good problem to solve. This site is under construction.</Typography>
          <Box align="center">
            <a href="#Projects">
              <ExpandMoreOutlinedIcon sx={{fontSize: 150}}/>
            </a>
        </Box>
    </Container>
    )
  } 

export default Introduction