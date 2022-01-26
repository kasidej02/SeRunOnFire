import React from 'react';
import { TextField, Grid, InputAdornment, IconButton, withStyles } from '@material-ui/core' 
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "../../index.css";


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#f14a16',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#f14a16',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          // borderColor: 'black',
        },
        '&:hover fieldset': {
          borderColor: '#f14a16',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#f14a16',
        },
      },
    },
  })(TextField);

const Input = ( { autoFocus, name, handleChange, label, type, handleShowPassword, half }) => (
    
            <Grid item xs={12} sm={half ? 6 : 12}>
                <CssTextField name={name}
                    className='inputRounded'
                    size='small'
                    onChange={handleChange}
                    variant='outlined'
                    required
                    fullWidth
                    label={label}
                    autoFocus={autoFocus}
                    type={type}
                    InputProps={name === 'password ' ? {
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton onClick={handleShowPassword}>
                                    {type === 'password' ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    } : null  } />

            </Grid>
)

export default Input
