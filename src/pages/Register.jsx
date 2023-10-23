import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/login">
        React Course
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Register = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password:""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
    const registered_data = localStorage.getItem('Registered_data'); //get data from localstorage
    let data = {};
    let stored_reg_data = []; 
    let id = 1;
    if(registered_data) //check if in localstorage
    {
        stored_reg_data = JSON.parse(registered_data); //convert string to array
        id = stored_reg_data.length + 1; //increment id value
    }  
    data['id'] = id;
    data['fullname'] = inputs.fullname;
    data['username'] = inputs.username;
    data['password'] = inputs.password;
    stored_reg_data.push(data); //push new data in existing
    localStorage.setItem("Registered_data", JSON.stringify(stored_reg_data));
    setInputs({
      fullname: "",
      username: "",
      password:""
    }); //set blank value to reset form
    alert('Registered Successfully!');
    navigate('/login'); //redirect to login
  };

  const handleChange = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth id="fullname" label="Full Name" name="fullname" value={inputs.fullname} onChange={handleChange} autoComplete="fullname"/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="username" label="Username" name="username" value={inputs.username} onChange={handleChange} autoComplete="username"/>
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" value={inputs.password} onChange={handleChange} autoComplete="new-password"/>
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                  Already have an account? &nbsp;
                <Link to="/login" variant="body2">
                  Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register