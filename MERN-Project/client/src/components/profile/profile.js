import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
  InputBase,
  withStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

import Pagination from "../Pagination";

import Posts from "../Posts/Posts";
import ProfileDetail from "./profileDetail";

import useStyles from "./styles";
import "../../index.css";
// import "./styles.scss";
// import { alpha, styled } from "@material-ui/core/styles";
// import { alpha, styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
// import './styles.scss';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

//Textfield color custom
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
  },
})(TextField);

const CssChipInput = withStyles({
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
  },
})(ChipInput);


const Profile = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();
  const [tags, setTag] = useState([]);

  //   useEffect(() => {
  //     dispatch(getPosts());
  //   }, [currentId, dispatch]);


  return (
    <Grow in>
      <Container maxWidth="xl" className={classes.Home}>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
 
            <ProfileDetail />
            {!searchQuery && !tags.length && (
              <Paper elevation={6} className={classes.pagination}>
                <Pagination page={page} />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Profile;
