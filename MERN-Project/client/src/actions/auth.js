import { AUTH, FETCH_SAVE, UPDATE_USER} from '../constants/actionTypes';
import * as api from '../api/index';
import Swal from 'sweetalert2'

export const signin = (formData, history) => async (dispatch) => { 
    try {
    // login user

    const { data } = await api.signIn(formData);
    console.log(data);
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

//bug
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

export const fetchSavedPost = (userId, history) => async (dispatch) => {
    try{
        const { data } =await api.fetchSavedPost(userId);
        dispatch({ type: FETCH_SAVE, payload:data });
        history.push('/profile');
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = (formData) => async (dispatch) => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    try {
        
      const { data } = await api.updateUser(formData);
      profile.result = data
    //   console.log(profile);
      localStorage.setItem('profile', JSON.stringify(profile));
      dispatch({ type: UPDATE_USER, profile });
      
    } catch (error) {
      console.log(error.message);
    }
  };

