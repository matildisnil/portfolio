import React from 'react'
import {Box, Paper, Typography, Grid} from '@mui/material'
import SkillsPaper from '../components/SkillsPaper';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

const skills = [{title: 'Frontend', techs: ['React', 'Redux', 'CSS3', 'HTML5', 'PrimeReact', 'Material-UI']}, {title: 'Backend', techs: ['node.js', 'express', 'REST', 'MongoDB', 'PostgreSQL', ]}, {title: 'Tools', techs: ['Git', 'Heroku', 'Netlify', 'Contentful']}];

const Skills = () => {
  return (
    <Box className='skills section' id='Skills'>
    <Typography variant="h2" component="h2" align="center" mb={5}>
    Skills
    </Typography>
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} className='skills__board'>
        {skills.map((skill, index) => {
            return <SkillsPaper thisSkill={skill} key={index}/>
        })}
      </Grid>
      <Box align="center" className="expand-less">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{fontSize: 150}}/>
        </a>
      </Box>
    </Box>
  )
}

export default Skills