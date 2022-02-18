import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: theme.spacing(2),
    // padding: '0px 300px',
    margin: '0 auto',
    maxWidth:'500px',
    // padding: '100px 0px 0 0',
    // padding: '0 300px',
    boxShadow: 'none',
    borderRadius: '0',
    height:'550px',
    // paddingTop: '50px'
    justifyContent:'center',
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
    background:'#9ACD32',
    color: '#fff',
    "&:hover":{
      // backgroundColor: '#669933',
      // border:'1px solid #f14a16',
      // background: 'linear-gradient(to left, #ffe259, #ffa751)',
      background:'#7ba428',
    }
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    border: '1px solid #9ACD32',
    alignItems: 'center',
    // boxShadow:'10px',
    borderRadius:'100px',
    padding:'5px 10px',
    color:'#9ACD32',
   
  },
  signupButton:{
    padding: '0px 20px',
    border: '1px solid #9ACD32',
    // borderColor: '#f14a16',
    // borderColor: '#F14A16',
    borderRadius: 100,
    color: '#9ACD32',
    "&:hover":{
      backgroundColor: '#9ACc32',
      color: '#fff',
    }
  },
  auth:{
    padding: '80px 0px 0px 0px',
  },
  pic:{
    // width: '1087px'
    maxWidth:'300px',
    // height:538,
    backgroundColor: '#fff',
    // overflow:'hidden'
    // height: '200px',
  },
  media: {
    // scale: '50%',
    position: 'absolute',
    // left:'-150px',
    height: 550,
    width: 300,
    display: 'flex',
    margin:'0px 0px 0px 0px',
    // background:'#000',
    // paddingTop: '80%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
    "&hover": {
      // transform: "scale(1.5)",
    // backgroundBlendMode: 'darken',
    // color: "#f4a",
    }
  },

}));