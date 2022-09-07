import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function AltIntroduction() {

  return (
    <Container sx={{ display:'flex', justifyContent:'center', height: '100vh' }}>
    <Card sx={{ display: 'flex', width: '0.8', flexWrap: {xs: 'wrap', sm: 'wrap', md: 'noWrap', lg: 'noWrap', xl: 'noWrap' } }}>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="/roundCVImage.png"
        alt="Matilda Lindahl"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant="h2" >Hi, I'm Matilda
        </Typography>
        <Typography variant="p" >I'm a full stack JavaScript developer with a passion for learning new things. Nothing makes me quite as happy as having a good problem to solve.
        </Typography>
        </CardContent>
      </Box>

    </Card>
    </Container>
  );
}