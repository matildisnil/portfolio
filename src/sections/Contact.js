import {
  TextField, Button, Box, Typography, Paper,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { MedicationLiquidSharp } from '@mui/icons-material';

const submitString = process.env.NODE_ENV === 'development' ? '81288dfd0888dfc00e1552147fed9660' : 'matildalindahl.contact@gmail.com';

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
      <Paper>
        <Box sx={{ padding: 2, backgroundColor: '#b2ebf2', borderRadius: 1 }}>
          <Box className="contact__container" sx={{ backgroundColor: 'white', borderRadius: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              align="center"
              my={2}
              className="form-container__heading">
              Contact me!
            </Typography>
            <Box
              className="section__space-anchor
           section__space-anchor--less-space"
              id="Contact" />
            <Box component="form" target="_blank" action={`https://formsubmit.co/${submitString}`} method="POST" className="contact-form" sx={{ my: 2, mx: { xs: 0, sm: 1, md: 2 } }}>
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
        </Box>
      </Paper>
      <Box align="center" className="expand-less">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{ fontSize: 150 }} />
        </a>
      </Box>
    </Box>
  );
};

export default Contact;
