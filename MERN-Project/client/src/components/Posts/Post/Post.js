import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  ButtonBase,
  CardHeader,
  IconButton,
  Grid,
  Menu,
  MenuItem,
  Fade,
  Button
} from "@material-ui/core/";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import Bookmark from "@material-ui/icons/Bookmark";
import { amber } from "@mui/material/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { likePost, deletePost, savePost, getSavedPost } from "../../../actions/posts";
import useStyles from "./styles";
import Divider from "@material-ui/core/Divider";

//implement
// import Avatar from '@mui/material/Avatar';
// import CardHeader from '@mui/material/CardHeader';
// import { red } from '@mui/material/colors';
// import IconButton from '@mui/material/IconButton';
import "./styles.css";
// import { getSavedPost } from "../../../api";

const TextTypography = withStyles({
  root: {
    // color: "#990000",
    // fontFamily: "IBM Plex Sans Thai, sans-serif"
  },
})(Typography);

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  // console.log(user?.result?.saved);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [likes, setLikes] = useState(post?.likes);
  const userId = user?.result.googleId || user?.result._id;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const hasLikePost = post.likes.find(
    (like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikePost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const onEdit = () => {
    setCurrentId(post._id);
    handleClose();
  };

  const onDelete = () => {
    dispatch(deletePost(post._id));
    handleClose();
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find(
        (like) => like === userId
      ) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }



    return (
      <>
        <FavoriteBorderIcon fontSize="small" />
        &nbsp;
      </>
    );
  };

  const ButtonCircle = withStyles({
    root:{
      // borderRadius:'100px'
    }
  })(Button);
  
  const Save = () => {
    
    return user?.result?.saved?.find((save) => save === post._id) ? (
      <Bookmark />
    ) : (
      <BookmarkBorder />
    );
  };

  const openPost = () => history.push(`/posts/${post._id}`);

  return (
    <Card className={classes.card} raised elevation={4}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
        <div style={{width:'100%'}}>
        <CardMedia style={{ height: "337px",width: '100%', overflow: "hidden"}}>
         
          <CardMedia
            // className='box-text'
            className={`${classes.media} hover-media`}
            // className='img-hover-zoom'
            // image={
            //   post.selectedFile ||
            //   "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            // }

            image={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
          />
        </CardMedia>
        <div>
        <Typography
          className={classes.title}
          // gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent style={{ display: "flex", padding: "5px 16px 0px 16px" }}>
          <Typography
            className={classes.typography}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {post.message}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          <Typography
            className={classes.tag}
            variant="body2"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        </div>
       </div>

        <Grid container spacing={3}>
          <Grid item xs className={classes.grid}>
            <Typography className={classes.by} color="textSecondary">
              BY
            </Typography>
            <Typography className={classes.ownerPost}>{post.name}</Typography>
          </Grid>
          <Grid item xs justifyContent="right">
            <Typography className={classes.time} color="textSecondary">
              {moment(post.createdAt).fromNow()}{" "}
            </Typography>
          </Grid>
        </Grid>

        {/* <Divider variant="middle" /> */}
      </ButtonBase> 
      

      <CardHeader
        style={{ padding: "0px",background:'green'}}
        action={
          (user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <div className={classes.overlay2}>
              {/* <IconButton
                aria-label="settings"
                // onClick={() => setCurrentId(post._id)}
                style={{ color: "gray" }}
              > */}
                <Button
                style={{borderRadius:'100px',
                // background:'#9ACD32'
              }}
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon  style={{color:'#fff'}}/>
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => onEdit(post._id)}>Edit</MenuItem>
                  <MenuItem onClick={() => onDelete(post._id)}>Delete</MenuItem>
                </Menu>
              {/* </IconButton> */}
            </div>
          )
        }
      />

      <CardActions className={classes.cardActions}>
        <IconButton
          className={classes.likeButton}
          size="small"
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </IconButton>

        {(user?.result?.googleId !== post?.creator ||
          user?.result?._id !== post?.creator) &&
          user?.result && (
            //เอา save มาแทนที่
            <IconButton
              aria-label="settings"
              style={{ color: amber[400] }}
              onClick={() => {
                dispatch(savePost(post._id));
                // console.log("clicked");
                // history.push('/profile')
              }}
            >
              <Save />
            </IconButton>
          )}
      </CardActions>
    </Card>
  );
};

export default Post;
