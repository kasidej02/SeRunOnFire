
import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: '0px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // margin: '100px'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    // borderRadius:'100px',
    // color:'#9ACD32',
  },
  buttonSubmit: {
    marginLeft: '10px',
    borderRadius: 100,
    // background: rgb(255,224,0);
    // background: 'linear-gradient(45deg, rgba(255,224,0,1) 0%, rgba(121,159,3,1) 100%)',
    background:'#9ACD32',
    color: '#fff',
    "&:hover":{
      backgroundColor: '#669933',
    }
  },
  clearInput:{
    marginRight: '0px',
    border: '1px solid #9ACD32',
    // borderColor: '#669933',
    borderRadius: 100,
    color: '#9ACD32'
  },
  signCode:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    // textAlign: 'right',
    fontSize: '12px',
    fontWeight:'500',
  },
  createCode:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    // textAlign: 'right',
    fontSize: '15px',
    fontWeight:'700',
  }
  
}));
