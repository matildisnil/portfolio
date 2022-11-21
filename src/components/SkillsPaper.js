import React from 'react';
import {
  Grid, Paper, Typography, Box,
} from '@mui/material';
import { GoPrimitiveDot } from 'react-icons/go';

const SkillsPaper = ({ thisSkill }) => (
  <Grid item>
    <Box sx={{
      padding: 2, backgroundColor: 'button3.main', borderRadius: 1, margin: 2,
    }}>
      <Paper
        elevation={2}
        sx={{

        }}>

        <Box
          className="coloredPadding"
          sx={{
            padding: 3, px: 4, height: 230, minWidth: 200, borderRadius: 1,
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
      </Paper>
    </Box>

  </Grid>
);

export default SkillsPaper;
