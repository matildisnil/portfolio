import React from 'react';
import {
  Grid, Paper, Typography, Box,
} from '@mui/material';
import { GoPrimitiveDot } from 'react-icons/go';

const SkillsPaper = ({ thisSkill }) => (
  <Grid item>
    <Paper
      elevation={2}
      sx={{
        margin: 2,
      }}>
      <Box sx={{ padding: 2, backgroundColor: '#b2dfdb', borderRadius: 1 }}>
        <Box
          className="coloredPadding"
          sx={{
            padding: 3, px: 4, height: 230, minWidth: 200, backgroundColor: 'white', borderRadius: 1,
          }}>
          <Typography variant="subtitle" component="h3" sx={{ mb: 0.5 }}>
            {thisSkill.title}
          </Typography>
          {thisSkill.techs.map(element => (
            <Box className="skill-row" key={`${element.title}_skill`}>
              {element.icon ? element.icon : <GoPrimitiveDot />}
              <Typography ml={1}>
                {' '}
                {element.title}
                {' '}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  </Grid>
);

export default SkillsPaper;
