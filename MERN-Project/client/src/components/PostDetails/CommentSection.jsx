import React, { useState, useRef } from "react";
import { Typography, TextField, Button , withStyles} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import  useStyles  from "./styles";
import "../../index.css";


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
    },
  })(TextField);

const CommentSection = ({ post }) => {
    console.log(post);
    const classes = useStyles();
    const dispatch = useDispatch();
    const commentsRef = useRef();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentPost(finalComment, post._id));

        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth'})
    };

    return (
        <div >
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6" >Comments</Typography>
                    {comments.map((c, i) => (
                        <Typography key={i} gutterBottom varaiant="subtitle1">
                            <strong>
                                {c.split(': ')[0]}
                            </strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </div>
                { user?.result?.name && (
                <div style={{ width: '70%', color: '#d9e650' }}>
                    <Typography gutterBottom variant="h6" >Write your comment</Typography>
                    <CssTextField
                        className = 'inputMessageRounded'
                        fullWidth
                        rows={2}
                        variant="outlined"
                        label="comment"
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        color = '#9ACD32'
                        backgroundColor = '#9ACD32'
                        TextStyle= '#9ACD32'
                        sx={{ 
                            input: { 
                                color: '#d9e650',
                                backgroundColor : '#d9e650'
                             } 
                        }}
                                                
                    />
                    <Button style={{
                        marginTop: '10px',
                        backgroundColor:'#d9e650',
                        borderRadius:'100px',
                        padding: '10px 25px',
                        fontFamily: 'IBM Plex Sans Thai, sans-serif',
                        fontWeight:'500',
                        fontSize: '12px',
                        color: 'white'
                    
                }} 
                    // fullWidth 
                    disabled={!comment}
                    // variant="contained"
                    onClick={handleClick} >
                        Comment
                    </Button>
                </div>
                )}
            </div>
        </div>
    );
};

export default CommentSection;