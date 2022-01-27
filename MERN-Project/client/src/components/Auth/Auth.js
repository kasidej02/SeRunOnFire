import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  IconButton,
  CardMedia,
  Box,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";
import { AUTH } from "../../constants/actionTypes";
import { signin, signup } from "../../actions/auth";
import logo from '../../images/picas.png';
import Slide from '@material-ui/core/Slide';
import "./styles.css";




const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignUp = () => {
  const classes = useStyles();
  const [showPassword, setshowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleShowPassword = () => setshowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setshowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj; // cannot get propoty profile undefined
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    alert("Google Sign In was UnSuccessful. Try Again");
  };

  

  return (
    <Container component="main" maxWidth="xl" className={classes.auth}>
      <Grid container spacing={0} style={{display:'flex'}}>
      <Grid item xs className={classes.pic}>
      {/* <Container style={{marginLeft:'-60px'}}> */}
        <CardMedia maxWidth='300'
          // className='box-text'
          className={`${classes.media} banner-slide`}
          // className='img-hover-zoom'
          component='img'
          image={logo}
       />
       {/* </Container> */}
        </Grid>
        <Grid item xs style={{backgroundColor:'#fff',maxHeight:'550px'}}>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In "}
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />

            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handlechange={handleChange}
                type="password"
              />
            )}
          </Grid>
            
            <Grid container spacing={0}
            alignItems="center"
            justifyContent='center'>
          <Button
            type="submit"
            // className={classes.buttonSubmit}
            // fullWidth
            // variant='contained'
            // color='primary'
            className={classes.submit}
          >
            {isSignup ? "Sign up" : "Sign In"}
          </Button>
          </Grid> 
          <Grid container spacing={0}
          alignItems="center"
          justifyContent='center'>      
          <GoogleLogin
            clientId="1001634285-g1pfma2ph95ol7km97ub214ps5s2o31d.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                // color="primary"
                // fullWidth
                size='small'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                
              >
                <svg
                  style={{ width: "20px", height: "20px" }}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#f14a16"
                    d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
                  />
                </svg>
                &nbsp;
                 GOOGLE SIGN IN
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          </Grid>  

          <Grid container justify="center">
            <Grid item>
              <Button 
              className={classes.signupButton}
              size='small'
              onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In "
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
