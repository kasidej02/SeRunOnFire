import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';
import Swal from 'sweetalert2'

export const signin = (formData, history) => async (dispatch) => { 
    try {
    // login user

    
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    
        history.push('/');
    } catch (error) {
        Swal.fire({
            title: 'Not found!',
            text: 'Email or Password not found',
            icon: 'error',
            // confirmButtonText: 'Cool'
          })
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
    // signup user

    const { data } =await api.signUp(formData);

    dispatch({ type: AUTH, data });

        history.push('/posts');
    } catch (error) {
        console.log(error);
    }
};