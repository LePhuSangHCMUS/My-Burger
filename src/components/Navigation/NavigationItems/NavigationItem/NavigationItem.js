import React from 'react'
import classes from './NavigationItem.module.css'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
export default (props) => {
    
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link}
                className={classes.NavigationItemLink}
                activeClassName={props.isActived ? "selected" : null}

                >

                {props.children}

            </NavLink>
        </li>
    )

}