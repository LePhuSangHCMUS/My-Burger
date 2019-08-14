import React from 'react'
import Aux from '../../../hoc/Auxx'
import classes from './OrderSummary.module.css'
import Btn from '../../UI/Button/Button'
export default (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((type, index) => {
        return (<li key={index} className={classes.OrderItem}><span style={{ textTransform: 'capitalize' }}>{type}</span>:        {props.ingredients[type]} </li>)
    })
    return (
        <Aux>
            <h3 className={classes.OrderTitle}>Your Order</h3>
            <p className={classes.OrderDescription}>A Delicious Burger With The Following Ingredients</p>
            <ul className={classes.OrderList}>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price:</strong>{props.totalPrice}</p>
            <p>Continue To Checkout ?</p>
            <Btn btnType='Danger' onClicked={props.hiddenPurchasingModalHandle}>    CANCEL  </Btn>
            <Btn btnType='Primary' onClicked={props.continuePruchasingModalHandle}>    CONTINUE  </Btn>
        </Aux>
    )
}