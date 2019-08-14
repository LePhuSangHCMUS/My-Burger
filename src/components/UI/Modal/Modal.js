
/* Modal Bao gom Backdrop va OrderSummary */

import React from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxx'
import Backdrop from '../Backdrop/Backdrop'
export default (props) => {
    //Phai cho no hien ra moi thuc hien transition duoc an di bang cach cho no translat di cho khac
    return (
        <Aux>
            <Backdrop
                showPurchasingModal={props.showPurchasingModal}
                hiddenPurchasingModalHandle={props.hiddenPurchasingModalHandle}
            />
            <div className={classes.Modal} style={{ transform: props.showPurchasingModal ? 'translate(-50%,-50%)' : null,top:props.showPurchasingModal ? '50%':null }}>
                {props.children}
            </div>
        </Aux>
    )
}