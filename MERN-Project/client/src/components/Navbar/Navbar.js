import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Typography, Toolbar, Button, Box, Container } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import decode from 'jwt-decode';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import logo from '../../images/logo.png';
import "../../index.css";
import Swal from 'sweetalert2';
// import SearchBar from "material-ui-search-bar";

// const Swal = require('sweetalert2');


const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location]);


    return (
        <Container maxWidth="md" >
        <Box className={classes.appBar}
            position="static"
            color="inherit">

            <div className={classes.brandContainer}>
                <Link to='/' className={classes.brandContainer}>
                <img className={classes.image}
                    src={logo}
                    alt="logo"
                    height="60" />
                </Link>
            </div>
            <Typography component={Link} to='/' className={classes.heading}
                    variant="h6"
                    align="center"
                    justify='center'>
                     Aep-Seap Aep-Bok
                </Typography>
            {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}

            <Toolbar className={classes.toolbar}>
                {user?.result? (
                    <div className={classes.profile}>
                        <Avatar className={classes.avater} alt={user?.result.name} src={user?.result.imageUrl}>
                            {user?.result.name.charAt(0)}
                        </Avatar>

                        <Typography className={classes.userName}
                            variant='h6'>
                            {user?.result.name}
                        </Typography>

                        <Button variant='contained' 
                        className={classes.logout} 
                        color='secondary' 
                        onClick={logout}>
                            Log out
                        </Button>

                    </div>
                ) : (
                    <Button className={classes.button}  component={Link} to='/auth' size='small' >Sign In</Button>
                )}
            </Toolbar>

        </Box>
        </Container>

    )
}

export default Navbar;