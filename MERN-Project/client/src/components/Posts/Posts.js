import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";
import Swal from "sweetalert2";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Posts not found
        </Typography>
      </Paper>

    );
    // return Swal.fire({
    //   title: "Error!",
    //   text: "Do you want to continue",
    //   icon: "error",
    //   confirmButtonText: "yes",
    // });
  }

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={12} lg={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
