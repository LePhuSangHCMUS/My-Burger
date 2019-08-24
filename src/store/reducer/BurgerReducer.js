import * as actionTypes from '../action/actionTypes';

const initState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 2//Mặc định bánh mỳ không la 2 $,
}

const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            return { ...state, ingredients: action.ingredients, totalPrice: action.totalPrice };
        case actionTypes.REMOVE_INGREDIENTS:
            return { ...state, ingredients: action.ingredients, totalPrice: action.totalPrice };
        case actionTypes.FETCH_INGREDIENTS:
            return { ...state, ingredients: action.ingredients, totalPrice: action.totalPrice };
        default:
            return state;
    }
}
export default burgerReducer;