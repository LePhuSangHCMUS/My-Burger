/* Modal Bao gom Backdrop va OrderSummary */

import React, { Component } from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxx'
import Backdrop from '../Backdrop/Backdrop'
// export default (props) => {
//     //Phai cho no hien ra moi thuc hien transition duoc an di bang cach cho no translat di cho khac
//     return (
//         <Aux>
//             <Backdrop
//                 showBackdrop={props.showPurchasingModal}
//                 clicked={props.hiddenPurchasingModalHandle}
//             />
//             <div className={classes.Modal} style={{ transform: props.showPurchasingModal ? 'translate(-50%,-50%)' : null,top:props.showPurchasingModal ? '50%':null }}>
//                 {props.children}
//             </div>
//         </Aux>
//     )
// }

//============Improve Performance

export default class extends Component {
    //Moi lan thay doi Ingredient thi ham nay bi render lai khien cho nhưng nó là không cần thiêt
    componentWillUpdate() {
        console.log("[Modal.js] componentWillUpdate")
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.showPurchasingModal !== nextProps.showPurchasingModal) {
            return true;
        }
        return false;
    }
    //End Performance

    //Phai cho no hien ra moi thuc hien transition duoc an di bang cach cho no translat di cho khac
    render() {
        return (< Aux >
            <   Backdrop showBackdrop={this.props.showPurchasingModal}
                clicked={this.props.hiddenPurchasingModalHandle}
            />
            < div className={classes.Modal}
                style={
                    { transform: this.props.showPurchasingModal ? 'translate(-50%,-50%)' : null, top: this.props.showPurchasingModal ? '50%' : null }} >
                {this.props.children}
            </div>
        </Aux>
        )
    }
}