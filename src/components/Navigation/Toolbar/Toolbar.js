import React, { Component } from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawToggle from './DrawToggle/DrawToggle'
import Backdrop from '../../UI/Backdrop/Backdrop';
import SideDrawer from '../SideDrawer/SideDrawer'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class extends Component {
    state={
        showBackdrop:false,
        showSideDrawer:false
    }
    showSideDrawerHandle(){
        this.setState({showBackdrop:true,showSideDrawer:true})
    }
    hiddenSideDrawerHandle(){
        this.setState({showBackdrop:false,showSideDrawer:false})

    }

    render() {
        return (
            <header className={classes.Toolbar}>
                {/* showBackdrop={this.state.showBackdrop} clicked={this.hiddenSideDrawerHandle.bind(this)} */}
                <Backdrop showBackdrop={this.state.showBackdrop} clicked={this.hiddenSideDrawerHandle.bind(this)} />
                <SideDrawer showSideDrawer={this.state.showSideDrawer} />
                <DrawToggle clicked={this.showSideDrawerHandle.bind(this)} />
                <NavLink to='/'><Logo /></NavLink>
                <nav className={classes.Nav}>
                    <NavigationItems toolBar={true} />
                </nav>
            </header>
        )
    }


}