import React, { Component } from 'react'
import Aux from '../../hoc/Auxx'
import axios from 'axios'//Thay bang AxiosInstance Có config Authotication urlBase 
import axiosInstance from '../../axios-orders-instance'

//Spinner
import Spinner from '../../components/UI/Spinner/Spinner'
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
        showPurchasingModal: false,//Click button se hien Modal
        loading: false
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

        //Khi Ma nhấn nut continus thi bắt đầu gửi request thi xuất hiện spinner va ẩn SummaryOrder đi
        this.setState({ loading: true })
        //Do config global ch Axios install nen khong can duong dan vao databas
        //https://react-my-burger-ab7d9.firebaseio.com/
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Lê Phú Sang',
                address: {
                    street: 'Tran Hung Dao',
                    zipCode: '800000',
                    country: 'Viet Nam'
                },
                email: 'lehsangus@gmail.com',
                deliverMethod: 'fastest'

            }
        }

        axiosInstance.post("/orders.json", order).then(response => {
            //Bao gio nhan du lieu ve thi set la mat Spinner va mat luon modle
            this.setState({ loading: false, showPurchasingModal: false });
            console.log('Add Order Success', response);


        })
            .catch(err => {
                console.log('Add Order Err:', err);
                this.setState({ loading: false, showPurchasingModal: false });

            })
    }
    //====================================================
    addIngredientHandle(type) {

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
                {/*showPurchasingModal= Bat tat modle */}
                {/*Loading= vi Modal co ham shouldComponentUpdate nen chuyen sang de kiem tra re-render */}
                {/*hiddenPurchasingModalHandle thay doi showPurchasingModal  */}
                <Modal showPurchasingModal={this.state.showPurchasingModal}
                    hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)}
                    loading={this.state.loading} >
                    {this.state.loading ? <Spinner /> : (<OrderSummary
                        ingredients={this.state.ingredients}
                        hiddenPurchasingModalHandle={this.hiddenPurchasingModalHandle.bind(this)}
                        continuePruchasingModalHandle={this.continuePruchasingModalHandle.bind(this)}
                        totalPrice={this.state.totalPrice.toFixed(2)}
                    />

                    )}

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

            </Aux >
        )
    }
}
