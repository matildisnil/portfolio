import { Paper, Typography } from '@mui/material';
import { Container, Box } from '@mui/system';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact2 = () => (
  <Container sx={{ width: 0.6 }}>
    <Typography variant="h2" component="h2" align="center" mb={5}>Contact me!</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Paper>
        <GitHubIcon sx={{ fontSize: 100 }} />
      </Paper>
      <Paper>
        <LinkedInIcon sx={{ fontSize: 100 }} />
      </Paper>
      <Paper>
        <EmailIcon sx={{ fontSize: 100 }} />
      </Paper>
    </Box>
  </Container>
);

export default Contact2;
