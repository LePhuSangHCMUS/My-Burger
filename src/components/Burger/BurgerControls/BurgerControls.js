import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'
import classes from './BurgerControls.module.css'
export default (props) => {
console.log('CTRls',props)
    const controlsLabel = [
        {
            label: 'Meat',
            type: 'meat'
        },
        {
            label: 'Bacon',
            type: 'bacon'
        },
        {
            label: 'Salad',
            type: 'salad'
        },
        {
            label: 'Cheese',
            type: 'cheese'
        }
    ]
    return (
        <div className={classes.BurgerControls}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controlsLabel.map((controlLabel, index) => {
                return <BurgerControl
                    label={controlLabel.label}
                    key={index}
                    type={controlLabel.type}
                    addIngredientHandle={props.addIngredientHandle}
                    removeIngredientHandle={props.removeIngredientHandle}
                    disabledInfo={props.disabledInfo}
                />

            })}
            <button 
            className={classes.ButtonOrderNow} 
            disabled={props.purchasable} 
            onClick={props.showPurchasingModalHandle}
            >Order Now</button>
        </div>
    )

}