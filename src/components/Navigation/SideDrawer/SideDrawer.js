import React from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
export default (props) => {
    return (
        <div className={props.showSideDrawer ? [classes.SideDrawer, classes.Open].join(' ') : classes.SideDrawer}>

            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.Nav}>
                <NavigationItems sideDrawer={true} />
            </nav>
        </div>
    )
}