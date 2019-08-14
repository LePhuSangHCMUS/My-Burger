import React from 'react'
import classes from './BurgerControl.module.css'
export default (props) => {
    return (
        <div className={classes.BurgerControl}>
            <label className={classes.Label}>{props.label}</label>
            <div className={classes.ButtonGroup}>
                <button disabled={props.disabledInfo[props.type]}  className={classes.ButtonLess} onClick={() => props.removeIngredientHandle(props.type)} >
                    Less <i className="fas fa-minus-circle"></i>
                </button>
                <button className={classes.ButtonMore} onClick={() => props.addIngredientHandle(props.type)} >
                    More <i className="fas fa-plus-circle"></i>
                </button>
            </div>

        </div>
    )
}