
//Nền đen đằn sau modal
import React from 'react'
import classes from './Logo.module.css'
import Logo from '../../assets/images/Logo-Burger.png'
export default (props) => {
    return (
        <div className={classes.Logo}>
            <img  className={classes.LogoImage} src={Logo} alt="Logo Burger" />
        </div>
    )
}