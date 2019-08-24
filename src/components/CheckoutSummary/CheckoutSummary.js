
//Nền đen đằn sau modal
import React from 'react'
import classes from './CheckoutSummary.module.css'
import Burger from '../Burger/Burger'
import Btn from '../UI/Button/Button'
import { withRouter } from 'react-router-dom'
const CheckoutSummary = (props) => {
    console.log(props);

    let checkoutCancelled = function () {
        //Quay ve tran chu        
        props.history.goBack();
        //Hoac 
        // props.history.push('/');

    }
    let checkoutContinued = function () {
        //Loai bo trang truwoc do khoi dtack va thay the luon khi goBack thi trang kia khong con nua
        // props.history.replace('/checkout/contact-data');

        //===> Viet cach khac de gui da ta thong qua router dung :  Query Params
        // let queryParams = [];

        // for (let i in props.ingredients) {
        //     //encodeURIComponent tao mot chuoi hop le tren URL
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.ingredients[i]))
        // }
        // queryParams.push(encodeURIComponent("totalPrice")+'='+encodeURIComponent(props.totalPrice))

        // const stringQuerryParams=queryParams.join('&');


        // Gui Query sang router kia nhu data
        props.history.push({
            pathname: '/checkout/contact-data'
            // search: stringQuerryParams
        });
        //=========DUNG REDUX=============
    }

    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it Tastes Well  </h1>
            <div >
                <Burger ingredients={props.ingredients} />
            </div>
            <Btn btnType='Danger' onClicked={checkoutCancelled}>CANCEL</Btn>
            <Btn btnType='Success' onClicked={checkoutContinued}>CONTINUE</Btn>

        </div>
    )
}

export default withRouter(CheckoutSummary)