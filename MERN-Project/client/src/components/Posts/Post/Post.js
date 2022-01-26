import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  CardActionArea,
  Avatar,
  CardHeader,
  IconButton,
  
} from "@material-ui/core/";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { getPost, likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";

//implement
// import Avatar from '@mui/material/Avatar';
// import CardHeader from '@mui/material/CardHeader';
// import { red } from '@mui/material/colors';
// import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const TextTypography = withStyles({
  root: {
    // color: "#990000",
    // fontFamily: "IBM Plex Sans Thai, sans-serif"
  }
})(Typography);



const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
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

  const openPost = () => history.push(`/posts/${post._id}`);

  return (
    <Card className={classes.card} raised elevation={6}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#000' }} aria-label="recipe" src={user?.result.imageUrl}> 
            
          </Avatar>
  //ค้างใส่รูป
        }
        action={
          (user?.result?.googleId === post?.creator ||
            user?.result?._id === post?.creator) && (
            <div className={classes.overlay2}>
              <IconButton
                aria-label="settings"
                onClick={() => setCurrentId(post._id)}
                style={{ color: "gray" }}
                // size="small"
              >
                <MoreVertIcon/>
              </IconButton>
            </div>
          )
          // <IconButton aria-label="settings">
            
          // </IconButton>
        }
        title={post.name} 
        subheader={moment(post.createdAt).fromNow()}
      />
      <ButtonBase className={classes.cardAction} onClick={openPost}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
      />   
      
        <Typography
          className={classes.title}
          // gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>  
        <CardContent style={{ display: "flex" }}>
          <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <div className={classes.details}>
          <Typography className={classes.typography} variant="body2" color="textSecondary" component="h2" >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <IconButton
        className={classes.likeButton}
          size="small"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </IconButton>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          //เอา save มาแทนที่
          <IconButton
          className={classes.deleteButton}
            size="small"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> 
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
