import React from 'react'
import classes from './NavigationItem.module.css'
export default (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a className={props.isActive?[classes.NavigationItemLink,classes.IsActive].join(' '):classes.NavigationItemLink} href={props.link}>{props.children}</a>
        </li>
    )

}