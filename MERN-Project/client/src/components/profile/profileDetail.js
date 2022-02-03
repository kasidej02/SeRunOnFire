import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { updateUser } from "../../actions/auth";
import useStyles from "./styles";
import "../../index.css";
import { useLocation, useParams, useHistory } from "react-router-dom";

const ProfileDetail = () => {
   let user = JSON.parse(localStorage.getItem("profile"));
   const defualt = {
    name: user.result.name,
    email: user.result.email,
    password: "",
  }
  const [toggle,setToggle] = useState(0)
  const [userData, setUserData] = useState(defualt);
   
  //   const user = useSelector((state) => (currentId ? state.users.users.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
 
  // console.log(user);
  const history = useHistory();

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);
    dispatch(updateUser({ ...userData }));
    alert("Profile updated, plaese refresh this page")
    history.push('/profile')
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {/* {currentId ? `Editing "${user.title}"` : "Creating Your Review"} */}
          Profile
        </Typography>

        <TextField
          name="name"
          size="small"
          className="inputRounded"
          variant="outlined"
          label="Name"
          fullWidth
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />

        <TextField
          name="email"
          className="inputMessageRounded"
          variant="outlined"
          label="Email"
          fullWidth
          multiline
          // rows={4}
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        <TextField
          name="password"
          size="small"
          className="inputRounded"
          variant="outlined"
          label="New Password"
          fullWidth
          // value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />

        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Button
              className={classes.buttonSubmit}
              // variant="contained"
              // color="primary"
              size="small"
              type="submit"
            >
              UPDATE
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ProfileDetail;
