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

import { getPosts, getPostsBySearch } from "../../actions/posts";
import Pagination from "../Pagination";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import useStyles from "./styles";
import "../../index.css";
// import "./styles.scss";
// import { alpha, styled } from "@material-ui/core/styles";
// import { alpha, styled } from '@mui/material/styles';
import Swal from 'sweetalert2';
import './styles.scss';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const PaginationCircle = withStyles({
  root:{
    background:'#d9e650'
  }
})(Pagination);
//Textfield color custom
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#d9e650',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#d9e650',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: '#d9e650',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#d9e650',
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


const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();
  // const [search, setSearch] = useState("");
  const [tags, setTag] = useState([]);
  const [click,setClick] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'));
  // console.log(user);
  //   useEffect(() => {
  //     dispatch(getPosts());
  //   }, [currentId, dispatch]);

  // const searchPost = () => {
  //   // Swal.fire({
  //   //   title: 'Error!',
  //   //   text: 'Do you want to continue',
  //   //   icon: 'error',
  //   //   confirmButtonText: 'Cool'
  //   // })
  //   if (search.trim() || tags) {
  //     dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
  //     history.push(
  //       `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
  //     );
  //   } 

  //   else {
  //     history.push("/");
  //   }
  // };

  // const handleKeyPress = (e) => {
  //   console.log(e.keyCode)
  //   if (e.keyCode === 13 || e.key === "Enter") {
  //     //press enter
  //     //search post
  //     searchPost();
  //   }
  // };

  // const handleAdd = (tag) => setTag([...tags, tag]);
  // const handleDelete = (tagToDetele) =>
  //   setTag(tags.filter((tag) => tag !== tagToDetele));

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
            {/* <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              
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
              /> */}


             
            {/* </AppBar> */}
            {/* <Button onClick={() => history.push(`/posts/create?currentId=${currentId}&setCurrentId=${setCurrentId}`)}> + Review</Button> */}
            {/* <Button onClick={() => history.push(`/posts/create/${currentId}`)}> + Review</Button> */}
            {/* {user?.result?.name&&<Button onClick={() => setClick(1)}>+Review</Button>} */}
            {/* {click&&<Form currentId={currentId} setCurrentId={setCurrentId} />} */}
            <Form currentId={currentId} setCurrentId={setCurrentId} />
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

export default Home;
