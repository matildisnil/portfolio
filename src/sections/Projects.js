import React from 'react';
import { Container } from '@mui/system';
import BasicCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';
import projects from "../data/projects";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


const Projects = () => {
  return (
    <Box id="Projects" className="section">
        <Typography variant="h2" align="center" mb={5}>
            My projects
        </Typography>
        <Box display="flex" className="projects__board"
    justifyContent="center"
    alignItems="center" sx={{ flexDirection: 'column' }}>
            {projects.map((project, index) =>  (<BasicCard thisProject={project} key={index} />))}
        </Box>
        <Box align="center">
        <a href="#Skills">
          <ExpandMoreOutlinedIcon sx={{fontSize: 150}}/>
        </a>
        </Box>
    </Box>
  )
}

export default Projects