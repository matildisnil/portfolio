import React from 'react'
import { Typography, Grid, Box } from "@mui/material";
import MyImage from "../components/MyImage";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

const Introduction = () => {
  return (
    <Box>
    <Grid container id="Introduction" spacing={{xs: 5, sm: 5, md: 5}} className="section" sx={{minHeight: {md: 'calc(100vh-20)'}, 
    width: '0.9', 
    alignItems:"center",
    justifyContent:"center"}}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{mt:{xs: 5, md: 0}}}> 
        <MyImage/>
      </Grid>

      <Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
        <Box width={{xs: 0.85, sm: 0.7, md: 0.8}} sx={{margin: '0 auto'}}>
        <Typography variant="h3" component="h1" sx={{
            display: {xs: 'none', md: 'flex'}
        }} mb={2}>Hi, I'm Matilda
        </Typography>
        <Typography variant="h3" component="h1" align='center' sx={{
            display: {xs: 'flex', sm: 'flex', md: 'none'}, fontSize: {xs: 46}
        }} mb={2} >Hi, I'm Matilda
        </Typography>
 {/*        <Typography variant="h2" align="center" mb={2}>Hi, I'm Matilda
        </Typography> */}
        <Typography variant="body1" component="p" align="justify">I'm a full stack JavaScript developer based in Stockholm. I love learning new things and with programming, I get to do that non-stop. Nothing makes me quite as happy as having a good problem in front of me.
        </Typography>
        </Box>
      </Grid>
    </Grid>
    <Box align="center">
        <a href="#Projects">
          <ExpandMoreOutlinedIcon sx={{fontSize: 150}}/>
        </a>
        </Box>
    </Box>
  )
} 

// const Introduction = () => {
//     return (
//       <Container sx={{height: '100vh', width: '0.8', mt: '5%'}}>
//           <MyImage/>
//           <Typography variant="h2" align="center">Hi, I'm Matilda</Typography>
//           <Typography variant="p" align="center" >I'm a full stack JavaScript developer with a passion for learning new things. Nothing makes me quite as happy as having a good problem to solve. This site is under construction.</Typography>
//     </Container>
//     )
//   } 

export default Introduction