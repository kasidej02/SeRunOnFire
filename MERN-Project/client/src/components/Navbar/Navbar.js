import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Typography,
  Toolbar,
  Button,
  Box,
  TextField,
  Container,
  CardMedia,
  withStyles,
  IconButton
} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import decode from "jwt-decode";
import * as actionType from "../../constants/actionTypes";
import { getPosts, getPostsBySearch } from "../../actions/posts";

import useStyles from "./styles";
import logo from "../../images/logo2.png";
// import logo2 from '../../images/Asset1.png';
import Bookmark from '@material-ui/icons/BookmarkBorder';
import { amber } from '@mui/material/colors';

import "../../index.css";
import Swal from "sweetalert2";
import "./styles.scss";
// import { borders } from '@material-ui/system';

// import SearchBar from "material-ui-search-bar";

// const Swal = require('sweetalert2');
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#f14a16',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f14a16',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: '#f14a16',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#f14a16',
      },
    },
  margin: "auto"
  },
})(TextField);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [search, setSearch] = useState("");
  const [tags, setTag] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const searchPost = () => {
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'error',
    //   confirmButtonText: 'Cool'
    // })
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      //press enter
      //search post
      searchPost();
    }
  };


  return (
    <Container className={classes.fixedNavbar} maxWidth="xl">
      <Box
        className={classes.appBar}
        borderBottom={1}
        position="static"
        color="inherit"
      >
        <div className={classes.brandContainer}>
          <Link to="/" className={classes.brandContainer}>
            <img className={classes.image} src={logo} alt="logo" height="60" />
          </Link>
        </div>

        {/* <div className={classes.brandContainer}>
                <Link to='/' className={classes.brandContainer}>
                <img className={classes.image}
                    src={logo2}
                    alt="logo"
                    height="60" />
                </Link>
            </div> */}
        {/* <div className="slideshow-text"> */}
        {/* <div class="item">Canyon</div> */}
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h6"
          align="center"
          justify="center"
        >
          AEP-SAEP AEP-BOK.
        </Typography>
        {/* </div> */}
        {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        /> */}
        <CssTextField
                className="inputRounded"
                size="small"
                name="search"
                variant="outlined"
                label="Search review"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.avater}
                alt={user?.result.name}
                src={user?.result.imageUrl}
              >
                {user?.result.name.charAt(0)}
              </Avatar>

              <Typography className={classes.userName} variant="h6">
                {user?.result.name}
              </Typography>
              <IconButton
                aria-label="settings"
                style={{ color: amber[400] }}
                onClick={() => history.push('/profile')}
              >
                <Bookmark />
              </IconButton>

              <Button
                style={{ margin: "auto" }}
                // variant='contained'
                className={classes.button}
                // color='secondary'
                onClick={logout}
              >
                Log out
              </Button>
            </div>
          ) : (
            <Button
              className={classes.button}
              component={Link}
              to="/auth"
              size="small"
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </Box>
    </Container>
  );
};

export default Navbar;
