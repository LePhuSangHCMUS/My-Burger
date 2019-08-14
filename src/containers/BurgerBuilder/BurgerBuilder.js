import React, { Component } from 'react'
import Aux from '../../hoc/Auxx'


//Them Vao Burgerbuiler
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

//Modal
import Modal from '../../components/UI/Modal/Modal'
//Orderummary
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICE = {
    salad: 0.1,
    bacon: 0.5,
    cheese: 0.2,
    meat: 0.3
}
export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,//Mặc định bánh mỳ không la 2 $,
        purchasable: true,//Disable or enable button OrderNow
        showPurchasingModal: false//Click button se hien Modal
    }

    upDatePurchasable(newIngredients) {
        console.log("New", newIngredients)
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
        alert('Continue')
    }
    //====================================================
    addIngredientHandle(type) {
        console.log(type);
        console.log(this.state)
        //So luong tang len 1

        const oldTypeCount = this.state.ingredients[type];
        let newTypeCount = oldTypeCount + 1;
        //===========================
        const oldTotalPrice = this.state.totalPrice;
        const newTotalPrice = oldTotalPrice + INGREDIENT_PRICE[type];
        //Update lai Pricce
        const newIngredients = { ...this.state.ingredients };
        //Update lai ingredient
        newIngredients[type] = newTypeCount;

        //Set state cho Ingredient va Price
        this.setState({ totalPrice: newTotalPrice, ingredients: newIngredients });

        //Goi Ham Update Purchasable
        this.upDatePurchasable(newIngredients);

    }
    removeIngredientHandle(type) {
        const oldTypeCount = this.state.ingredients[type];
        if (oldTypeCount >= 1) {
            console.log(type);
            console.log(this.state)
            //So luong tang len 1
            let newTypeCount = oldTypeCount - 1;
            //===========================
            const oldTotalPrice = this.state.totalPrice;
            const newTotalPrice = oldTotalPrice - INGREDIENT_PRICE[type];
            //Update lai Pricce
            const newIngredients = { ...this.state.ingredients };
            //Update lai ingredient
            newIngredients[type] = newTypeCount;

            //Set state cho Ingredient va Price
            this.setState({ totalPrice: newTotalPrice, ingredients: newIngredients });
            //Goi Ham Update Purchasable
            this.upDatePurchasable(newIngredients);
        }


    }

    render() {

        //Neu type đó bằng 0 thì disabled nut Less đi
        let disabledInfo = { ...this.state.ingredients };
        for (let type in disabledInfo) {
            disabledInfo[type] = disabledInfo[type] === 0;
        }
        return (
            <Aux>
                {/* Modal Bao gom Backdrop va OrderSummary */}
                <Modal showPurchasingModal={this.state.showPurchasingModal} hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)}
                        continuePruchasingModalHandle={this.continuePruchasingModalHandle.bind(this)}
                        totalPrice={this.state.totalPrice.toFixed(2)}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls
                    addIngredientHandle={this.addIngredientHandle.bind(this)}
                    removeIngredientHandle={this.removeIngredientHandle.bind(this)}
                    disabledInfo={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    showPurchasingModalHandle={this.showPurchasingModalHandle.bind(this)}
                />

            </Aux>
        )
    }
}
