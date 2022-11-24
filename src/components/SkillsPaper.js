import React from 'react';
import {
  Grid, Paper, Typography, Box,
} from '@mui/material';
import { GoPrimitiveDot } from 'react-icons/go';
// import { useInViewport } from 'react-in-viewport';
// import { useSpring, animated } from 'react-spring';

const SkillsPaper = ({ thisSkill }) => {
  // eslint-disable-next-line no-console
  console.log('');
  // const myRef = useRef();
  // const [visible, setVisible] = useState(false);

  // const {
  //   inViewport,
  // } = useInViewport(
  //   myRef,
  //   // options,
  //   // config = { disconnectOnLeave: false },
  //   // props,
  // );

  // useEffect(() => {
  //   if (inViewport) {
  //     setTimeout(() => {
  //       setVisible(true);
  //     }, 100);
  //   }
  // }, [inViewport]);

  // const [flip, set] = useState(false);
  // const props = useSpring({
  //   loop: true,
  //   to: [
  //     { backgroundColor: '#ffaaee' },
  //     { backgroundColor: 'rgb(14,26,19)' },
  //   ],
  //   from: { backgroundColor: 'red' },
  // });
  // const props = useSpring({
  //   loop: true,
  //   to: [
  //     { backgroundColor: '#f48fb1' },
  //     { backgroundColor: '#80deea' },
  //   ],
  //   from: { backgroundColor: '#80cbc4' },
  // });
  // const AnimatedPaper = animated(Paper);
  // const AnimatedBox = animated(Box);

  return (
    <Grid item>
      <Box
        sx={{
          padding: 1, backgroundColor: 'button3.dark', borderRadius: 1, margin: 2,
        }}>
        {/* <Fade in={visible} timeout={1500}> */}
        <Paper
          elevation={2}>
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
        {/* </Fade> */}
      </Box>

    </Grid>
  );
};

export default SkillsPaper;
