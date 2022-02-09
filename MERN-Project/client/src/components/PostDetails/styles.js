import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '0px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    marginTop:'60px',
    // textAlign: 'center'
  },
  section: {
    borderRadius: '0px',
    margin: '50px',
    flex: 1,
    marginTop:'10px'
  },
  imageSection: {
    marginLeft: '0px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '20px', 
    borderRadius: '15px', 
    height: '39vh',
  },

  commentsOutContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    color:'#9ACD32'
  },

  commentsInnerContainer: {
    height: '200px',
    overflowY:'auto',
    marginRight: '30px', 
    // color : '#d9e650'
  },
  title:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontWeight:'700',
    fontSize: '1.5em',
  },
  tag:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontWeight:'500',
    fontSize: '10px',
  },
  details:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontWeight:'500',
    fontSize: '15px',
  },
  createdby:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontWeight:'500',
    fontSize: '15px',
  },
  createdAt:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontWeight:'500',
    fontSize: '10px',
  }
}));