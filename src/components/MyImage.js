import React from 'react';
import Box from '@mui/material/Box';

const MyImage = () => {
  return (
    <Box   display="flex"
    justifyContent="center"
    alignItems="center">
    <Box
    component="img"
    sx={{
    height: 400,
    width: 400,
    maxHeight: { xs: 250, md: 400 },
    maxWidth: { xs: 250, md: 400 },
    }}
    alt="The house from the offer."
    src="/roundCVImage.png"
    />
    </Box>
  )
}

export default MyImage