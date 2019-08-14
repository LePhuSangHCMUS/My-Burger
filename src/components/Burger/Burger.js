import React from 'react'
import classes from './Burger.module.css'
//BurgerIngredient (Top - Meat...- Bottom)
import BurgerGredient from './BurgerIngredient/BurgerIngredient'

//Berger chinh o day 
export default (props) => {
    const transformedIngredient =
        Object.keys(props.ingredients).map(type => {
            {/*Ep số thành mang roi dung spread de chuyen thanh mang n* undefined  */ }
            {/*Array(2)=[<2 emptys item >]===> [...Array(2)]=[undefined,undefined] */ }
            return [...Array(props.ingredients[type])].map((undefined, index) => {
                return <BurgerGredient key={type+index} type={type} />
            })
        })
            .reduce((arr, element) => {
                return arr.concat(element)
            }, [])
    console.log(transformedIngredient.length)

    return (
        <div className={classes.Burger}>
            <BurgerGredient type='bread-top' />
            {
                transformedIngredient.length ? transformedIngredient : <div className={classes.PleaseAddIngredient}>Please Start Add Ingredient</div>
            }
            <BurgerGredient type='bread-bottom' />
        </div>
    )
}