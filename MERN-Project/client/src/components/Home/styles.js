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
  }
  }));

