import React, { Component } from 'react'
import Aux from '../../hoc/Auxx/Auxx'
import axios from 'axios'//Thay bang AxiosInstance Có config Authotication urlBase 
import axiosInstance from '../../axios-orders-instance'
import withErrorHandle from '../../hoc/withErrorHandle/withErrorHandle'
//Spinner
import Spinner from '../../components/UI/Spinner/Spinner'
//Them Vao Burgerbuiler
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

//Modal
import Modal from '../../components/UI/Modal/Modal'
//Orderummary
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import { connect } from 'react-redux';

//Actio Type
import * as actionTypes from '../../store/action/actionTypes'


//Burgerbuilde Action
import * as burgerBuilderActions from '../../store/action/burgerBuilder'

const INGREDIENT_PRICE = {
    salad: 0.1,
    bacon: 0.5,
    cheese: 0.2,
    meat: 0.3
}
class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     meat: 0
        // },
        // totalPrice: 2,//Mặc định bánh mỳ không la 2 $,
        purchasable: true,//Disable or enable button OrderNow
        showPurchasingModal: false,//Click button se hien Modal
        loading: true
    }
    componentDidMount() {
        axiosInstance.get('/ingredients.json')
            .then(response => {
                let newTotalPrice = 2;
                console.log(response.data);

                for (let type in response.data) {
                    newTotalPrice += response.data[type] * INGREDIENT_PRICE[type]
                }
                // this.setState({ ingredients: { ...response.data }, totalPrice: newTotalPrice });
                //==> Dung REDUX nên comment
                this.props.fetchIngredients(response.data, newTotalPrice)
                this.setState({ loading: false });
                if (newTotalPrice > 2) {
                    this.setState({ purchasable: false })
                }
            })
            .catch(err => {
                console.log(err);

            })

            ///Có thể dung redux thunk de fetch data ve 
    }

    upDatePurchasable(newIngredients) {
        const ingredients = { ...newIngredients };
        let quantityIngredients = 0;
        for (let type in ingredients) {
            quantityIngredients += ingredients[type]
        }
        this.setState({ purchasable: quantityIngredients <= 0 })
    }
    //==============Show/Hidden Modle,Backdrop
    showPurchasingModalHandle() {
        this.setState({ showPurchasingModal: true })
    }
    hiddenPurchasingModalHandle() {
        this.setState({ showPurchasingModal: false })

    }
    continuePruchasingModalHandle() {

        // //===> Viet cach khac de gui da ta thong qua router dung :  Query Params
        // let queryParams = [];

        // for (let i in this.props.ingredients) {
        //     //encodeURIComponent tao mot chuoi hop le tren URL
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ingredients[i]))
        // }
        // queryParams.push(encodeURIComponent("totalPrice") + '=' + encodeURIComponent(this.props.totalPrice))
        // const stringQuerryParams = queryParams.join('&');


        // // Gui Query sang router kia nhu data
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: stringQuerryParams
        // });
        // //this.props.history.location.pathname(or .search ......)
        //=> DO DUNG REDUX NEN KHONG CAN CAI NAY NUA

        //Luu thong tin ingredient tam thoi vao dataabae

        axiosInstance.put('/ingredients.json', this.props.ingredients)
            .then(response => {
                this.props.history.push({
                    pathname: '/checkout',
                    // search: stringQuerryParams
                });
            })
            .catch(err => {
                console.log(err);

            })




    }
    //====================================================
    addIngredientHandle(type) {

        //So luong tang len 1

        const oldTypeCount = this.props.ingredients[type];
        let newTypeCount = oldTypeCount + 1;
        //===========================
        const oldTotalPrice = this.props.totalPrice;
        const newTotalPrice = oldTotalPrice + INGREDIENT_PRICE[type];
        //Update lai Pricce
        const newIngredients = { ...this.props.ingredients };
        //Update lai ingredient
        newIngredients[type] = newTypeCount;

        //Set state cho Ingredient va Price
        this.props.addIngredients(newIngredients, newTotalPrice);

        //Goi Ham Update Purchasable
        this.upDatePurchasable(newIngredients);

    }
    removeIngredientHandle(type) {
        const oldTypeCount = this.props.ingredients[type];
        if (oldTypeCount >= 1) {

            //So luong tang len 1
            let newTypeCount = oldTypeCount - 1;
            //===========================
            const oldTotalPrice = this.props.totalPrice;
            const newTotalPrice = oldTotalPrice - INGREDIENT_PRICE[type];
            //Update lai Pricce
            const newIngredients = { ...this.props.ingredients };
            //Update lai ingredient
            newIngredients[type] = newTypeCount;

            //Set state cho Ingredient va Price
            this.props.removeIngredient(newIngredients, newTotalPrice);
            this.upDatePurchasable(newIngredients);
        }


    }

    render() {

        //Neu type đó bằng 0 thì disabled nut Less đi
        let disabledInfo = { ...this.props.ingredients };
        for (let type in disabledInfo) {
            disabledInfo[type] = disabledInfo[type] === 0;
        }

        return (

            < Aux >
                {/* Modal Bao gom Backdrop va OrderSummary */}
                {/*showPurchasingModal= Bat tat modle */}
                {/*Loading= vi Modal co ham shouldComponentUpdate nen chuyen sang de kiem tra re-render */}
                {/*hiddenPurchasingModalHandle thay doi showPurchasingModal  */}


                {
                    this.state.loading ? (
                        <Spinner />
                    ) : (<Aux>
                        <Modal showPurchasingModal={this.state.showPurchasingModal}
                            hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)}
                            loading={this.state.loading} >
                            {this.state.loading ? <Spinner /> : (<OrderSummary
                                ingredients={this.props.ingredients}
                                hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)}
                                continuePruchasingModalHandle={this.continuePruchasingModalHandle.bind(this)}
                                totalPrice={this.props.totalPrice.toFixed(2)}
                            />

                            )}

                        </Modal>
                        <Burger ingredients={this.props.ingredients} />
                        <BurgerControls
                            addIngredientHandle={this.addIngredientHandle.bind(this)}
                            removeIngredientHandle={this.removeIngredientHandle.bind(this)}
                            disabledInfo={disabledInfo}
                            totalPrice={this.props.totalPrice}
                            purchasable={this.state.purchasable}
                            showPurchasingModalHandle={this.showPurchasingModalHandle.bind(this)}
                        />

                    </Aux>)
                }

            </Aux >

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        ingredients: state.BurgerReducer.ingredients,
        totalPrice: state.BurgerReducer.totalPrice
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchIngredients: (ingredients, totalPrice) => {
            dispatch({ type: actionTypes.FETCH_INGREDIENTS, ingredients: ingredients, totalPrice: totalPrice })
        },
        addIngredients: (ingredients, totalPrice) => {
            dispatch(burgerBuilderActions.addIngredients(ingredients, totalPrice))

        },
        removeIngredient: (ingredients, totalPrice) => {
            dispatch(burgerBuilderActions.removeIngredients(ingredients, totalPrice))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandle(BurgerBuilder));