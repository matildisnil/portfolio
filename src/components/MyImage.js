import React from 'react';
import Box from '@mui/material/Box';

const MyImage = () => {
  return (
    <Box   display="flex"
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
        height: { xs: 250, sm: 300, md: 300, lg: 300, xl: 600 },
        width: { xs: 250, sm: 300, md: 300, lg: 300, xl: 600 },
        }}
        alt="The house from the offer."
        src="/roundCVImage.png"
      />
    </Box>
  )
}

export default MyImage