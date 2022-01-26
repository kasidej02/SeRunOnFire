import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: '5px 20px 5px 20px',
    textAlign: 'center',
    // marginLeft: '10px',
    borderRadius: 100,
    // background: rgb(255,224,0);
    // background: 'linear-gradient(45deg, rgba(255,224,0,1) 0%, rgba(121,159,3,1) 100%)',
    background:'#F14A16',
    color: '#fff',
    "&:hover":{
      // backgroundColor: '#669933',
      // border:'1px solid #f14a16',
      // background: 'linear-gradient(to left, #ffe259, #ffa751)',
      background:'#D84213',
    }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    border: '1px solid #f14a16',
    alignItems: 'center',
   
  },
  signupButton:{
    padding: '0px 20px',
    border: '1px solid #F14A16',
    // borderColor: '#f14a16',
    // borderColor: '#F14A16',
    borderRadius: 100,
    color: '#F14A16',
    "&:hover":{
      backgroundColor: '#F14A16',
      color: '#fff',
    }
  },
  auth:{
    paddingTop: '100px',
  }
}));