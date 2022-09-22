import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';



const Form = ({ setTripState }) => {
  const defaultValues = {
    email: "",
    subject: "",
    message: ""
  };
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const formSubmitHandler = async e => {
    e.preventDefault();
  };

  return (
    <Container id="Contact" className="section contact" sx={{width:{xs: 1, sm: 0.8, md: 0.7}}}>
      <Paper>  
        <Box className="contact__container">
      <Typography variant="h3" component="h1" align="center" m={2} className="form-container__heading" >Contact me!</Typography>
    <form onSubmit={formSubmitHandler} className="contact-form">
      <TextField
        id="email-input"
        name="email"
        label="Your email address"
        type="text"
        value={formValues.email}
        onChange={handleInputChange}
        required
      />
      <TextField
        id="subject-input"
        name="subject"
        label="Subject"
        type="text"
        value={formValues.subject}
        onChange={handleInputChange}
        required
      />
      <TextField
        id="message-input"
        name="message"
        label="Message"
        type="text"
        value={formValues.message}
        multiline
        rows={4}
        onChange={handleInputChange}
        required
      />
      <Button variant="contained" type="submit" color="primary">Submit</Button>
    </form>
    </Box>
    </Paper>
    <Box align="center" className="expand-less">
        <a href="#Introduction">
          <ExpandLessOutlinedIcon sx={{fontSize: 150}}/>
        </a>
    </Box>
    </Container>
  );
};

export default Form;
