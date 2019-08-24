import * as actionTypes from '../action/actionTypes';

const initState = {
    idToken: null,
    userId: null,
    error: null,
    loading: false,

}

const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return { ...state, error: null, loading: true };
        case actionTypes.AUTH_SUCCESS:
            return { ...state, idToken: action.idToken, loading: false, userId: action.userId, error: null };
        case actionTypes.AUTH_FAIL:
            return { ...state, error: action.error, loading: false };
        case actionTypes.AUTH_LOGOUT:
            return { ...state, error: null, loading: false ,idToken:null,userId:null};
        default:
            return state;
    }
}
export default burgerReducer;