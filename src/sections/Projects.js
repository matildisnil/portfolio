import React from 'react';
import BasicCard from '../components/ProjectCard';
import { Box, Typography } from '@mui/material';
import projects from "../data/projects";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';


const Projects = () => {

  return (
    <Box className="section" sx={{/* display: { xs: 'block', sm: 'none'} */}}>
        <Typography variant="h2" align="center" mb={5}>
            My projects
        </Typography>
        <Box className="section__space-anchor" id="Projects"></Box>
        <Box display="flex" className="projects__board"
    justifyContent="center"
    alignItems="center" sx={{ flexDirection: 'column' }}>
            {projects.map((project, index) =>  (<BasicCard thisProject={project} key={index} />))}
        </Box>
        <Box align="center">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{fontSize: 150}}/>
        </a>
        </Box>
    </Box>
  )
}

export default Projects