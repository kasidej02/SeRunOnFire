import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../../actions/posts';
import './styles.css';

export default function FadeMenu({ post , setCurrentId }) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = JSON.parse(localStorage.getItem("profile"));
    const history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const openPost = () => history.push(`/posts/${post._id}`);

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => setCurrentId(post._id)}>Edit</MenuItem>
                <MenuItem onClick={() => dispatch(deletePost(post._id))}>Delete</MenuItem>
            </Menu>
        </div>
    );
}