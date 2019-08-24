import * as actionTypes from '../action/actionTypes'
import axios from 'axios'
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (idToken,userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId:userId
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}
export const checkAuthTimeout=(expirationTime)=>{
    //Middleware 2 taang
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({type:actionTypes.AUTH_LOGOUT})
        },360000);
    }


}
export const signup=(email, password)=>{
    return (dispatch, getState) => {
        //Có thể viết luôn vao trong nay cung được
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAXYsrqobFSPphXRNK7fbYeAPOOHpO9Wjs', authData)
                .then(response => {
                    console.log(response);
                    dispatch(authSuccess(response.data.idToken,response.data.localId))
                    //Khi luu token thi ta dem thoi gian ton tai cua no luon
                    dispatch(checkAuthTimeout(response.data.expiresIn))


                })
                .catch(err => {
                    console.log(err);
                    dispatch(authFail(err))

                })
    }
}
export const auth = (email, password) => {
    return (dispatch, getState) => {
        //Có thể viết luôn vao trong nay cung được
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAXYsrqobFSPphXRNK7fbYeAPOOHpO9Wjs', authData)
                .then(response => {
                    console.log(response);
                    console.log(response.data.localId);
                    
                    dispatch(authSuccess(response.data.idToken,response.data.localId));
                    dispatch(checkAuthTimeout(response.data.expiresIn));
                    


                })
                .catch(err => {
                    console.log(err);
                    dispatch(authFail(err))

                })
    }
}