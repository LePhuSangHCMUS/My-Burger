import React from 'react'
import classes from './Spinner.module.css'
import Spinner from '../../../assets/images/Spinner.gif'
export default (props) => {
    return (
        <div className={classes.Spinner}>
            <img src={Spinner}></img>
        </div>
    )
}