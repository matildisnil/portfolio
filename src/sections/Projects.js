import React from 'react';
import { Container } from '@mui/system';
import BasicCard from '../components/BasicCard';
import { Box, Typography } from '@mui/material';
import projects from "../data/projects";


const Projects = () => {
  return (
    <Container id="Projects">
        <Typography variant="h2" align="center">
            My projects
        </Typography>
        <Box display="flex"
    justifyContent="center"
    alignItems="center" sx={{ flexDirection: 'column' }}>
            {projects.map(project =>  (<BasicCard thisProject={project}/>))}
        </Box>

    </Container>
  )
}

export default Projects