import {
  TextField, Button, Box, Typography, Paper,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { SiLinkedin, SiGithub } from 'react-icons/si';

const Contact = () => {
  const defaultValues = {
    email: '',
    name: '',
    message: '',
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //   const formSubmitHandler = async e => {
  //     e.preventDefault();
  //   };

  return (
    <Box
      className="section"
      sx={{
        width: { xs: 1, sm: 0.8, md: 0.6 }, mx: 'auto',
      }}>
      <Box sx={{ padding: 1, backgroundColor: 'button1.main', borderRadius: 1 }}>

        <Paper>
          <Box className="contact__container" sx={{ borderRadius: 1 }}>
            {/*  <Box align="center" sx={{ m: 1 }}>
              <a href="https://github.com/matildisnil">
                <GitHubIcon sx={{ fontSize: 30 }} />
              </a>
              <a href="http://www.linkedin.com/in/matildalindahl">
                <LinkedInIcon sx={{ ml: 1, fontSize: 30 }} />
              </a>
            </Box>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              // my={2}
              mb={2.5}
              mt={1}
              className="form-container__heading">
              Contact me!
            </Typography> */}
            <Typography
              variant="h3"
              component="h2"
              align="center"
              // my={2}
              mb={2}
              mt={3}
              className="form-container__heading">
              Contact me!
            </Typography>
            <Box align="center" sx={{ p: 0.5 }}>
              <a href="https://github.com/matildisnil">
                <GitHubIcon sx={{ fontSize: 30 }} />
              </a>
              <a href="http://www.linkedin.com/in/matildalindahl">
                <LinkedInIcon sx={{ ml: 1, fontSize: 30 }} />
              </a>
              {/* <IconButton sx={{ ml: 1 }} color="inherit">
                <GitHubIcon sx={{ fontSize: 30 }} />
              </IconButton> */}
            </Box>
            <Box
              className="section__space-anchor
           section__space-anchor--less-space"
              id="Contact" />
            <Box component="form" target="_blank" action="https://formsubmit.co/81288dfd0888dfc00e1552147fed9660" method="POST" className="contact-form" sx={{ my: 2, mx: { xs: 0, sm: 1, md: 2 } }}>
              <TextField
                id="email-input"
                name="email"
                label="Your email address"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
                required />
              <TextField
                id="name-input"
                name="name"
                label="Name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                required />
              <TextField
                id="message-input"
                name="message"
                label="Message"
                type="text"
                value={formValues.message}
                multiline
                rows={4}
                onChange={handleInputChange}
                required />
              <Button variant="contained" type="submit" color="primary">Submit</Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box align="center" className="expand-less">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{ fontSize: 150 }} />
        </a>
      </Box>
    </Box>
  );
};

export default Contact;
