import React from 'react'
import {Grid, Paper, Typography, Box} from '@mui/material';
import { GoPrimitiveDot } from 'react-icons/go';

const SkillsPaper = ({thisSkill}) => {
  return (
    <Grid item xs={12} sm={3}>
      <Paper elevation={2} sx={{height: 200}}>
        <Box className="skillspaper__text-container">
          <Typography variant="subtitle" component="h3">
              {thisSkill.title}
          </Typography>
          {thisSkill.techs.map((element, index)=> {
            return (
                  <Box className="skill-row">
                    {element.icon ? element.icon : <GoPrimitiveDot />}
                    <Typography ml={1} key={index} >  {element.title} </Typography>
                  </Box>
                  )
          })}
        </Box>
      </Paper>
    </Grid>
  )
}

export default SkillsPaper