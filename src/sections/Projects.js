import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ProjectCard from '../components/ProjectCard';
import importedProjects from '../data/projects';

const Projects = () => {
  const [projects, setProjects] = useState(importedProjects);
  const [currentTechFilters, setCurrentTechFilters] = useState([]);
  const techNames = [];
  importedProjects.forEach(project => {
    const projectTechs = project.techs.map(tech => tech.name);
    techNames.push(...projectTechs);
  });

  const uniqueTechNames = [...new Set(techNames)];
  // const filterProjects = e => {
  //   const filteredProjects = projects
  //     .filter(project => project.techs
  //       .find(tech => tech.name === e.target.name));
  //   setProjects(filteredProjects);
  // };

  const changeFilters = e => {
    const indexOfFilter = currentTechFilters.findIndex(filter => filter === e.target.name);
    if (indexOfFilter === -1) {
      return setCurrentTechFilters(prev => [...prev, e.target.name]);
    }
    return setCurrentTechFilters(prev => [
      ...prev.slice(0, indexOfFilter),
      ...prev.slice(indexOfFilter + 1),
    ]);
  };

  useEffect(() => {
    let filteredProjects = importedProjects;
    currentTechFilters.forEach(techFilter => {
      filteredProjects = filteredProjects.filter(project => project.techs
        .find(tech => tech.name === techFilter));
    });
    setProjects(filteredProjects);
  }, [currentTechFilters.length]);

  return (
    <Box className="section" sx={{/* display: { xs: 'block', sm: 'none'} */ }}>
      <Typography variant="h2" align="center" mb={5}>
        My projects
      </Typography>
      <Box className="section__space-anchor" id="Projects" />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {uniqueTechNames.map(techName => (
          <Button variant="contained" sx={{ margin: 1 }} onClick={changeFilters} name={techName} key={techName}>{techName}</Button>))}
      </Box>
      <Box>
        Filters are
        {currentTechFilters}
      </Box>
      <Box
        display="flex"
        className="projects__board"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: 'column' }}>
        {projects.map(project => (<ProjectCard thisProject={project} key={`project_${project.title}`} />))}
      </Box>
      <Box align="center">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon className="grow" sx={{ fontSize: 150 }} />
        </a>
      </Box>
    </Box>
  );
};

export default Projects;
