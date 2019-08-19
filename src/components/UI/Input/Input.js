import React from 'react'
import classes from './Input.module.css'
import Aux from '../../../hoc/Auxx/Auxx'
export default (props) => {
    return (
        <div className={classes.InputItem} >
            <label>{props.label}</label>
            <input className={classes.Input} type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} />
        </div>
    )
}