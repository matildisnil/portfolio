import React from 'react'
import {Box, Typography, Grid} from '@mui/material'
import SkillsPaper from '../components/SkillsPaper';
// import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import skills from '../data/skills'


const Skills = () => {
  return (
    <Box className='section skills'>
        <Typography variant="h2" component="h2" align="center" mb={5}>
        Skills
        </Typography>
        <Box className="section__space-anchor" id="Skills"></Box>
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} className='skills__board'>
        {skills.map((skill, index) => {
            return <SkillsPaper thisSkill={skill} key={'skill' + index}/>
        })}
      </Grid>
      {/* <Box align="center" className="expand-less">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{fontSize: 150}}/>
        </a>
      </Box> */}
        <Box align="center">
          <a href="#Projects">
            <ExpandMoreOutlinedIcon className="grow" sx={{fontSize: 150}}/>
          </a>
        </Box>
    </Box>
  )
}

export default Skills