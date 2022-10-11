import {
  TextField, Button, Box, Typography, Container, Paper,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';

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
    <Container className="section" sx={{ width: { xs: 1, sm: 0.8, md: 0.7 } }}>
      <Paper>
        <Box className="contact__container">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            m={2}
            className="form-container__heading">
            Contact me!
          </Typography>
          <Box
            className="section__space-anchor
           section__space-anchor--less-space"
            id="Contact" />
          <form target="_blank" action="https://formsubmit.co/81288dfd0888dfc00e1552147fed9660" method="POST" className="contact-form">
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
          </form>
        </Box>
      </Paper>
      <Box align="center" className="expand-less">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{ fontSize: 150 }} />
        </a>
      </Box>
    </Container>
  );
};

export default Contact;
