
//Nền đen đằn sau modal
import React from 'react'
import classes from './OrderItem.module.css'
export default (props) => {
    const ingredientsOutput = [];
    for (let key in props.ingredients) {
        ingredientsOutput.push([key, props.ingredients[key]])
    }
    return (
        <div className={classes.OrderItem}>
            <strong>Ingredient :</strong>
            {ingredientsOutput.map((ig, index) => {
                return (
                    <span key={index}>
                        {ig[0]}:({ig[1]})
                    </span>
                )
            })}
            <p><strong>Price:</strong>${props.price.toFixed(2)}</p>

        </div>
    )
}