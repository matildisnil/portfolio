import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Button,
} from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import ProjectCard from '../components/ProjectCard';
import importedProjects from '../data/projects';

const Projects = () => {
  const [projects, setProjects] = useState(importedProjects);
  const [techs, setTechs] = useState([]);
  const [techsNamesInFilteredProjects, setTechsNamesInFilteredProjects] = useState([]);

  const getUniqueTechs = projectsArray => {
    const techNames = [];
    projectsArray.forEach(project => {
      const projectTechs = project.techs.map(tech => tech.name);
      techNames.push(...projectTechs);
    });
    return [...new Set(techNames)].sort();
  };

  useEffect(() => {
    const uniqueTechNames = getUniqueTechs(importedProjects);
    const techsInitialState = uniqueTechNames.map(tech => ({ name: tech, filterIsActive: false }));
    setTechs(techsInitialState);
  }, []);

  const changeFilters = e => {
    const indexOfTech = techs.findIndex(tech => tech.name === e.currentTarget.name);
    setTechs(prev => {
      const found = prev[indexOfTech];
      found.filterIsActive = !found.filterIsActive;
      return [...prev.slice(0, indexOfTech), found, ...prev.slice(indexOfTech + 1)];
    });
  };

  const clearFilters = () => {
    setTechs(prev => prev.map(tech => ({ ...tech, filterIsActive: false })));
  };

  useEffect(() => {
    let filteredProjects = importedProjects;
    techs.filter(tech => tech.filterIsActive).forEach(techObj => {
      filteredProjects = filteredProjects.filter(project => project.techs
        .find(tech => tech.name === techObj.name));
    });
    setProjects(filteredProjects);
    // this dependency works because i'm not changing it in here
  }, [techs]);

  useEffect(() => {
    const techsInFilteredProjects = getUniqueTechs(projects);
    setTechsNamesInFilteredProjects(techsInFilteredProjects);
  }, [projects]);

  return (
    <Box className="section" sx={{ /* display: { xs: 'block', sm: 'none'} */ }}>
      <Typography variant="h2" align="center" mb={5}>
        My projects
      </Typography>
      <Box className="section__space-anchor" id="Projects" />
      <Box sx={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {techs.filter(tech => !tech.filterIsActive).map(tech => (
          <Button
            variant="contained"
            sx={{ margin: 1 }}
            disabled={!techsNamesInFilteredProjects.includes(tech.name)}
            color="buttonTech"
            onClick={changeFilters}
            name={tech.name}
            key={tech.name}>
            {tech.name}
          </Button>
        ))}
      </Box>
      <Box sx={{
        display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 5,
      }}>
        {techs.filter(tech => tech.filterIsActive).map(tech => (
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            onClick={changeFilters}
            name={tech.name}
            color="buttonActiveTech"
            key={tech.name}
            endIcon={<ClearIcon />}>
            {tech.name}
          </Button>
        ))}
        {techs.filter(tech => tech.filterIsActive).length !== 0
        && (
        <Button
          variant="contained"
          color="buttonClearFilters"
          sx={{ margin: 1 }}
          onClick={clearFilters}
          key="remove_all"
          endIcon={<ClearIcon />}>
          Clear filters
        </Button>
        )}
      </Box>
      <Box
        display="flex"
        className="projects__board"
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: 'column' }}>
        {projects.map(project => (
          <ProjectCard thisProject={project} techs={techs} key={`project_${project.title}`} />
        ))}
        {projects.length === 0 && 'There are no projects matching all the criteria'}
      </Box>
      <Box align="center">
        <a href="#Contact">
          <ExpandMoreOutlinedIcon className="grow" sx={{ fontSize: 150 }} />
        </a>
      </Box>
    </Box>
  );
};

export default Projects;
