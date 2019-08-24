import * as actionTypes from './actionTypes'
import axiosInstance from '../../axios-orders-instance'
const INGREDIENT_PRICE = {
    salad: 0.1,
    bacon: 0.5,
    cheese: 0.2,
    meat: 0.3
}
export const addIngredients = (ingredients, totalPrice) => {
    //Do khong co asyncho nen return Plain Object để dishpath luôn không qua middleware 
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredients: ingredients,
        totalPrice: totalPrice
    }
}
export const removeIngredients = (ingredients, totalPrice) => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredients: ingredients,
        totalPrice: totalPrice
    }
}

//Lam truc tiep ben kia khong dung redux thunk con dung redux-thunk thi thế này nhé
export const fetchIngredients = (ingredients, totalPrice) => {
    return (dispatch) => {
        //Dung asynch de kéo data ve 
        axiosInstance.get('/ingredients.json')
            .then(response => {
                let newTotalPrice = 2;
                console.log(response.data);

                for (let type in response.data) {
                    newTotalPrice += response.data[type] * INGREDIENT_PRICE[type]
                }
                // this.setState({ ingredients: { ...response.data }, totalPrice: newTotalPrice });
                //==> Dung REDUX nên comment      
                dispatch({
                    type: actionTypes.FETCH_INGREDIENTS,
                    ingredients: response.data,
                    totalPrice: newTotalPrice
                })
            })
            .catch(err => {
                console.log(err);

            })

    }
}