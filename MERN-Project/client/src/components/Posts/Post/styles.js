import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  media: {
    height: 0,
    paddingTop: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
    "&hover": {
      // transform: "scale(1.5)",
    // backgroundBlendMode: 'darken',
    // color: "#f4a",
    }
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
    borderRadius: '0px',
    height: '100%',
    position: 'relative',
    boxShadow:'none',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    padding: '0px',

  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    padding: '0px',
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
    padding: '15px 16px 0px 16px',
    display: 'flex',
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontWeight: 600,
    fontSize: '20px',
    // letterSpacing:'0.5px',
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
    // padding: '20px',
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
  },
  ownerPost:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    // justifyItems:'left'
    textAlign: 'left',
    margin:'0px 0px 0px 5px',
    fontSize: '15px',
    fontWeight: '600',
  },
  time:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    textAlign: 'right',
    fontSize: '15px',
    
    // textJustify:'right',
    margin:'0px 16px 0px 0px',
  },
  by:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    // justifyItems:'left'
    textAlign: 'left',
    textJustify:'center',
    margin:'0px 0px 0px 16px',
    fontSize: '15px',
    fontWeight: '500',
  },
  grid:{
    display:'flex',
  },
  tag:{
    fontFamily: 'IBM Plex Sans Thai, sans-serif',
    fontSize:'10px',
  }
 
});
