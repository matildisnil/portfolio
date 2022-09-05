import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard({thisProject}) {
  return (
    <Card sx={{ width: 0.8, mb: 3 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Might put something here
        </Typography>
        <Typography variant="h5" component="div">
          {thisProject.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          subtitle
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
