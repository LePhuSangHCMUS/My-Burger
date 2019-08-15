import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
export default (props) => {
    return (
        <ul className={props.toolBar?classes.ToolBarNavigationItems:classes.SideDrawerNavigationItems}>
            <NavigationItem link='#' isActive={props.toolBar?true:false}>
                Burger Builder
            </NavigationItem>
            <NavigationItem link='#'>
               Check Out
            </NavigationItem>
        </ul >
    )

}