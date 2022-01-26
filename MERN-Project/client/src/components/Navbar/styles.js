import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    // borderRadius: 15,
    marginBottom: '30px',
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
    fontSize: '1em',
    fontWeight: 300,
  },
  image: {
    margin: '10px',
    // marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '0px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
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
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
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
}));
