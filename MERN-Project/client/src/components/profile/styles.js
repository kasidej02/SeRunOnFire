import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton:{
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
  Home:{
    paddingTop: '100px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginLeft: '10px',
    borderRadius: 100,
    // background: rgb(255,224,0);
    // background: 'linear-gradient(45deg, rgba(255,224,0,1) 0%, rgba(121,159,3,1) 100%)',
    background:'#F14A16',
    color: '#fff',
    "&:hover":{
      backgroundColor: '#669933',
    }
  },
  clearInput:{
    marginRight: '0px',
    border: '1px solid #F14A16',
    // borderColor: '#F14A16',
    borderRadius: 100,
    color: '#F14A16'
  }
  }));

