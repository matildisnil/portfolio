import * as React from 'react';
import {Card, Button, Typography} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



export default function BasicCard({thisProject}) {
  return (
    <Card sx={{ width: 0.8, mb: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {thisProject.title}
        </Typography>
        <Typography variant="body2">
          {thisProject.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={thisProject.deployedLink} target="_blank" size="small">Deployed app</Button>
        <Button href={thisProject.githubLink}  target="_blank" size="small">Github</Button>
      </CardActions>
    </Card>
  );
}
