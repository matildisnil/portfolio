import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Fade } from '@mui/material';

const MyImage = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center">
      {/* <Box
        component="img"
        sx={{
        height: 400,
        width: 400,
        maxHeight: { xs: 250, md: 400 },
        maxWidth: { xs: 250, md: 400 },
        }} */}
      <Box sx={{
        backgroundColor: 'button1.main', p: 2, pb: 1,
      }}>
        <Fade in={visible} timeout={1500}>
          <Box
            component="img"
            sx={{
              height: { xs: 250, sm: 300, md: 300 },
              width: { xs: 250, sm: 300, md: 300 },
            }}
            alt="The house from the offer."
            src="/cv-modified.png" />
        </Fade>
      </Box>
    </Box>
  );
};

export default MyImage;
