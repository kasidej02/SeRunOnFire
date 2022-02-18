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
    boxShadow: 'none',
    // background: '#f14a16',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton:{
    border: '1px solid #9ACD32',
    // borderColor: '#f14a16',
    // borderColor: '#F14A16',
    borderRadius: 100,
    color: '#9ACD32',
    "&:hover":{
      backgroundColor: '#669933',
      color: '#fff',
    }
  },
  Home:{
    paddingTop: '100px',
  },
  
  }));

