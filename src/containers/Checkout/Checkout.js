import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from '../Checkout/ContactData/ContactData'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { connect } from 'react-redux';

class Checkout extends Component {
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 0

    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
            </div>
        )
    }
    componentDidMount() {
        // const ingredients = {};
        // let totalPrice = 0;
        // const query = new URLSearchParams(this.props.history.location.search)
        // for (let param of query.entries()) {
        //     //[['salad','1'],['bacon','2]]
        //     if (param[0] === 'totalPrice') {
        //         totalPrice = parseFloat(param[1])
        //     }
        //     else {
        //         ingredients[param[0]] = + param[1];//('dung toan tu =+ se ep param[1] than so do phai dùng hàm chuyển')

        //     }
        // }
        this.setState({ ingredients: this.props.ingredients, totalPrice: this.props.totalPrice });
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        ingredients: state.BurgerReducer.ingredients,
        totalPrice: state.BurgerReducer.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout)