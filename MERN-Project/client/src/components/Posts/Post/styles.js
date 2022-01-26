import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '10px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px',
    // backgroundColor: '#8B9',
    padding: '0px 16px 0px 16px'
    // fontFamily: 'IBM Plex Sans Thai, sans-serif',
  },
  title: {
    padding: '20px 16px 0px 16px',
    display: 'flex',
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontWeight: 600,
     },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  typography:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    // padding: '20px 0px 0px 0px',
    // fontStyle: 'Medium',
  }, 
  likeButton: {
    // background: '#8B9A46',
    // border: 0,
    borderRadius: 100,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#8B9A46',
    // height: 50,
    padding: '10px 10px',
  },
  deleteButton:{
    color: '#F14A16',
  }
 
});
