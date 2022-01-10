import React, { useState } from 'react';
import {  Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import { AUTH } from '../../constants/actionTypes';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName:'', 
lastName: '', 
email:'', 
password:'', 
confirmPassword:'' }



const SignUp = () => {
    const classes = useStyles();
    const [showPassword, setshowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleShowPassword = () => setshowPassword(!showPassword);


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value});
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
        dispatch({ type : AUTH , data: { result, token } });

        history.push('/');
    } catch (error) { 
        console.log(error);
    }
   };

   const googleFailure =() => {
    alert('Google Sign In was UnSuccessful. Try Again');
   };


    return (
        
            <Container component='main' maxWidth='xs'>
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component='h1' variant='h5'>
                        {isSignup ? 'Sign Up' : 'Sign In ' }
                    </Typography>

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}

                            <Input name='email' 
                            label='Emaill Address' 
                            handleChange={handleChange} 
                            type='email' />

                            <Input name='password' 
                            label='Password' 
                            handleChange={handleChange} 
                            type={showPassword ? 'text' : 'password'} 
                            handleShowPassword={handleShowPassword} />

                            { isSignup && <Input name='confirmPassword' 
                            label='Confirm Password' 
                            handlechange={handleChange}
                            type='password' />}

                        </Grid>
                        
                        
                        <Button type='submit' 
                        fullWidth 
                        variant='contained' 
                        color='primary' 
                        className={classes.submit}>
                            { isSignup ? 'Sign up' : 'Sign In' }
                        </Button>

                        <GoogleLogin clientId='1001634285-g1pfma2ph95ol7km97ub214ps5s2o31d.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button className={classes.googleButton}
                                    color='primary'
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant='contained'>
                                    Google Sign In
                                </Button>
                            )}

                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                      />


                        <Grid container justify='center'>
                                <Grid item>
                                    <Button onClick={switchMode}>
                                        { isSignup ? "Already have an account? Sign In " : "Don't have an account? Sign Up"}
                                    </Button>
                                </Grid>
                        </Grid>


                    </form>

                </Paper>
            </Container>
    
    )
}

export default SignUp;
