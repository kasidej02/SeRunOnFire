import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, IconButton,Grid,withStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
import "../../index.css";
import { useLocation, useParams,useHistory } from 'react-router-dom';
import Swal from "sweetalert2";




const Form = ({currentId,setCurrentId}) => {
  const [postData, setPostData] = useState({  title: '',
   message: '', 
   tags: '', 
   selectedFile: '' });
  //  const {currentId} = useParams()
  //  console.log(currentId);
  // const [currentId,setCurrentId] = useState(0)
  // const params = useQuery()
  //  console.log(params.get("currentId"));
  //  function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }
  // setCurrentId(params.get("currentId"))

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#9ACD32',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#9ACD32',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          // borderColor: 'black',
        },
        '&:hover fieldset': {
          borderColor: '#9ACD32',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#9ACD32',
        },
      },
      // padding:'0px 100px'
    },
  })(TextField);
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ 
     title: '', 
     message: '', 
     tags: '', 
     selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(postData.title==''){
      // return alert("Please enter the title")
      Swal.fire({
        // title: "Not found!",
        text: "Please enter the title",
        icon: "warning",
        // confirmButtonText: 'Cool'
      });
    }
    if(postData.message==''){
      // return alert("Please enter the massage")
      Swal.fire({
        // title: "Not found!",
        text: "Please enter the massage",
        icon: "warning",
        // confirmButtonText: 'Cool'
      });
    }
    if(postData.selectedFile==''){
      // return alert("Please select the picture")
      Swal.fire({
        // title: "Not found!",
        text: "Please select the picture",
        icon: "warning",
        // confirmButtonText: 'Cool'
      });
    }
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name}));
      console.log(postData);
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
    history.push('/')
  };

  if(!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center' className={classes.signCode}>
          Please Sign In or Sign Up to create a your review
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" 
      noValidate 
      className={`${classes.root} ${classes.form}`} 
      onSubmit={handleSubmit}>

        <Typography variant="h6" className={classes.createCode}>
          {currentId ? `Editing "${post.title}"` : 'Creating Your Review'}
        </Typography>
        
        <CssTextField name="title" 
        size='small'
        className="inputRounded"
        variant="outlined" label="Title*" 
        fullWidth value={postData.title} 
        onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

        <CssTextField name="message" 
        className="inputMessageRounded"
        variant="outlined" label="Message*" 
        fullWidth multiline rows={4} value={postData.message} 
        onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        
        <CssTextField name="tags"
        size='small'  
        className="inputRounded"
        variant="outlined" 
        label="Tags (coma separated)"
        fullWidth value={postData.tags} 
        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        
        
        <div className={classes.fileInput}>
          <FileBase type="file" 
          multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
        <Button className={classes.buttonSubmit} 
          // variant="contained" 
          // color="primary" 
          size="small" 
          type="submit" 
          >{currentId ? 'UPDATE' : 'POST'}
        </Button>
     
        </Grid>
        <Grid item xs={6} md={4}>
        <Button 
        // variant="contained" 
        className={classes.clearInput}
        // color="secondary" 
        size="small" 
        onClick={clear} >
          Clear
        </Button>
        </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;
