
//Nền đen đằn sau modal
import React from 'react'
import classes from './Backdrop.module.css'
export default (props)=>{
    //Phai cho no hien ra moi thuc hien transition duoc an di bang cach cho no translat di cho khac
       return props.showPurchasingModal?(<div className={classes.Backdrop} onClick={props.hiddenPurchasingModalHandle}></div>):null
}