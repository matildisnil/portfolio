import * as React from 'react';
import {
  Card, Button, Typography, Box, CardMedia,
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

export default function ProjectCard({ thisProject }) {
  return (
    <Card sx={{
      display: 'flex', flexDirection: 'row', width: { xs: 1, sm: 0.8, md: 0.7 }, height: { md: 300 }, p: 2, mb: 3,
    }}>
      {/* <Card sx={{width: {xs: 1}, mb: 3 }}> */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: '1 0 auto' }}>
          <Typography variant="h5" component="div" sx={{ mb: 1 }}>
            {thisProject.title}
          </Typography>
          <Typography variant="body2" align="justify" sx={{ mb: 1, mr: { md: 2 }, flexGrow: 1 }}>
            {thisProject.description}
          </Typography>
          <Box sx={{ fontSize: 25, flexGrow: 1 }}>{thisProject.techs.map(tech => <Box sx={{ display: 'inline', ml: 1 }} key={`${thisProject.title}_icon_${tech.name}`}>{tech.icon}</Box>)}</Box>

        </CardContent>
        <CardActions>
          <Button color="button1" href={thisProject.deployedLink} variant="contained" disableElevation target="_blank" size="small" sx={{ padding: '3px 6px' }}>Deployed app</Button>
          <Button color="button2" href={thisProject.githubLink} variant="contained" disableElevation target="_blank" size="small" sx={{ padding: '3px 6px' }}>Github frontend</Button>
          {thisProject.secondGithubLink
            ? <Button color="button3" href={thisProject.secondGithubLink} className="projectcard__button" variant="contained" disableElevation target="_blank" size="small" sx={{ padding: '3px 6px' }}>Github backend</Button> : ''}
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ objectFit: 'contain', maxWidth: 150, display: { xs: 'none', md: 'block' } }}
        image={thisProject.imageAddress}
        alt="Page from project" />
    </Card>
  );
}
