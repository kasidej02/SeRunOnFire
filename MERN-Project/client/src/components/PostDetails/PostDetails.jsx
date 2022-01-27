import React,{useEffect} from 'react';
import {Paper, Typography, CircularProgress, Divider,Grid} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';
import CommentSection from './CommentSection'; 
import {getPost, getPostsBySearch} from '../../actions/posts'

import useStyles from './styles';

const PostDetails = () => {
    // console.log('Post Details');
    const {post, posts, isLoading} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getPost(id))
    },[id])

    if(!post) return null;
    if(isLoading){
        return (
            <Paper elevation={6} className={classes.loadingPaper}>
                <CircularProgress size="7em" />
            </Paper>
        )
    }

    return(
        <Paper style={{ padding: '80px 20px 20px 20px', borderRadius: '0px',boxShadow:'0' }} elevation={6}>
            <div className={classes.card}>
                <Grid className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                    <Typography className={classes.createdby}>Created by: {post.name}</Typography>
                    <Typography className={classes.createdAt}>{moment(post.createdAt).fromNow()}</Typography>
                </Grid>
                <div className={classes.section}>
                    <Typography  className={classes.title}>{post.title}</Typography>
                    <Typography gutterBottom  color="textSecondary" className={classes.tag}>{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography gutterBottom className={classes.details}>{post.message}</Typography>
                    
                    {/* <Divider style={{ margin: '20px 0' }} /> */}
                    {/* <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography> */}
                    <Divider style={{ margin: '20px 0' }} />
                    <CommentSection post={post}  />
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                
            </div>
            {/* {!!recommendedPosts.length && (
            <div className={classes.section}>
                <Typography gutterBottom variant="h5">You might also like:</Typography>
                <Divider />
                <div className={classes.recommendedPosts}>
                    {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
                    <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                        <Typography gutterBottom variant="h6">{title}</Typography>
                        <Typography gutterBottom variant="subtitle2">{name}</Typography>
                        <Typography gutterBottom variant="subtitle2">{message}</Typography>
                        <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                        <img src={selectedFile} width="200px" />
                    </div>
                    ))}
                </div>
            </div>
            )} */}
        </Paper>
    ) ;
};

export default PostDetails;
