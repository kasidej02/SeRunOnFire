import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    // background: '#000',
    marginBottom: '0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 0px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  heading: {
    // color: theme.palette.primary.main,
    // boxShadow: '0',
    color: 'black',
    textDecoration: 'none',
    fontSize: '1.5em',
    fontWeight: 700,
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
  },
  image: {
    margin: '10px',
    // marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '250px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
    padding:'0px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'center', //space-between
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    // textAlign: 'right',
    fontSize: '10px',
    fontWeight:'700',
    margin:'15px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  button: {
    fontSize: '2px',
    padding: '0px 10px 0px 10px',
    border: '1px solid #F14A16',
    // borderColor: '#f14a16',
    // borderColor: '#F14A16',
    borderRadius: 100,
    color: '#F14A16',
    "&:hover":{
      backgroundColor: '#F14A16',
      color:'#fff',
    }
  },
  fixedNavbar:{
    // marginTop: '24px',
    // borderBottom: '1',
    border:'0px 0px 1px 0px solid #000',
    background: '#f3f3f3',
    position: 'fixed',
    width: '100%',
    left: '50%',
    zIndex: '99',
    transform:'translate(-50%,0%)',
  },
 
}));
