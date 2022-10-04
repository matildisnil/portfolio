import { Link, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Box className='footer' sx={{p: 2}} bgcolor={theme => theme.palette.secondary.main } color={theme => theme.palette.secondary.contrastText}>
        <Container>
            <Typography align="center">
                Contact me: <Link sx={{color: "white"}} href="mailto:matildalindahl.contact@gmail.com"> matildalindahl.contact@gmail.com </Link>
            </Typography>

        </Container>
    </Box>
  )
}

export default Footer