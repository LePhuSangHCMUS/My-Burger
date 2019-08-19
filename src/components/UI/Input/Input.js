import React from 'react'
import classes from './Input.module.css'
import Aux from '../../../hoc/Auxx/Auxx'
export default (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = <input rows="4" cols="50" className={classes.Input} {...props} />
            break
        case 'textarea ':
            inputElement = <area rows="4" cols="50" className={classes.Input} {...props} />
            break
        case 'select':
            inputElement = <select {...props} className={classes.InputSelect}  >
                <option value={props.option[0]}>{props.option[0]}</option>
                <option value={props.option[1]}>{props.option[1]}</option>
            </select>
            break
        default:
            inputElement = <input className={classes.Input} {...props} />
    }
    return (
        <div className={classes.InputItem} >
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}