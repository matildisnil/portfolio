import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SkillsPaper from '../components/SkillsPaper';
// import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import skills from '../data/skills';

const Skills = () => (
  <Box className="section skills">
    <Typography variant="h2" component="h2" align="center" mb={5}>
      Skills
    </Typography>
    <Box className="section__space-anchor" id="Skills" />
    <Grid container direction="row" justifyContent="center" alignItems="center" className="skills__board" sx={{ width: { sm: 600, mdl: 1 }, mx: 'auto' }}>
      {skills.map(skill => (
        <SkillsPaper
          thisSkill={skill}
          key={`skill${skill.title}`} />
      ))}
    </Grid>
    {/* <Box align="center" className="expand-less">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{fontSize: 150}}/>
        </a>
      </Box> */}
    <Box align="center">
      <a href="#Projects">
        <ExpandMoreOutlinedIcon className="grow" sx={{ fontSize: 150 }} />
      </a>
    </Box>
  </Box>
);

export default Skills;
