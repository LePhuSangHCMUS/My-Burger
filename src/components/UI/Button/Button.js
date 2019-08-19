import React from 'react'
import classes from './Button.module.css'
export default (props) => {
    return (
        <button className={[classes.Btn, classes[props.btnType]].join(' ')}
            onClick={props.onClicked} disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}