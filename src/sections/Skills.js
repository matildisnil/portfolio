import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
// import { useSpring, animated } from 'react-spring';
import SkillsPaper from '../components/SkillsPaper';
// import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import skills from '../data/skills';

const Skills = () => {
  console.log('');
  // const props = useSpring({
  //   loop: true,
  //   to: [
  //     { color: '#f48fb1' },
  //     { color: '#80deea' },
  //   ],
  //   from: { color: '#80cbc4' },
  //   // to: { color: 'linear-gradient(135deg, rgb(185, 198, 109) 0%, rgb(34, 48, 17) 100%)' },
  //   // from: { color: 'linear-gradient(135deg, rgb(85, 69, 47) 0%, rgb(218, 102, 92) 100%)' },
  // });
  // const AnimatedPaper = animated(Paper);
  // const AnimatedTypography = animated(Typography);

  return (
    <Box className="section skills">
      {/* <AnimatedTypography style={props} variant="h2" component="h2" align="center" mb={5}>
        Skills
      </AnimatedTypography> */}
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
};

export default Skills;
