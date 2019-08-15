import React from 'react'
import classes from './DrawToggle.module.css'

export default (props) => {

    return (
        <div className={classes.DrawToggle} onClick={props.clicked}>
            <div className={classes.ToggleItem}></div>
            <div className={classes.ToggleItem}></div>
            <div className={classes.ToggleItem}></div>
        </div>

    )



}