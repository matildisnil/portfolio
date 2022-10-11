import React from 'react';
import Box from '@mui/material/Box';

const MyImage = () => (
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
    <Box
      component="img"
      sx={{
        height: { xs: 250, sm: 300, md: 300 },
        width: { xs: 250, sm: 300, md: 300 },
      }}
      alt="The house from the offer."
      src="/cv-modified.png" />
  </Box>
);

export default MyImage;
