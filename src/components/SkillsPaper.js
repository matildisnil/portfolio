import React, { useRef, useState, useEffect } from 'react';
import {
  Grid, Paper, Typography, Box,
  Fade,
} from '@mui/material';
import { GoPrimitiveDot } from 'react-icons/go';
import { useInViewport } from 'react-in-viewport';

const SkillsPaper = ({ thisSkill }) => {
  const myRef = useRef();
  const [visible, setVisible] = useState(false);

  const {
    inViewport,
  } = useInViewport(
    myRef,
    // options,
    // config = { disconnectOnLeave: false },
    // props,
  );

  useEffect(() => {
    if (inViewport) {
      setTimeout(() => {
        setVisible(true);
      }, 100);
    }
  }, [inViewport]);

  return (
    <Grid item ref={myRef}>
      <Box sx={{
        padding: 1, backgroundColor: 'button3.dark', borderRadius: 1, margin: 2,
      }}>
        <Fade in={visible} timeout={1500}>
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
        </Fade>
      </Box>

    </Grid>
  );
};

export default SkillsPaper;
