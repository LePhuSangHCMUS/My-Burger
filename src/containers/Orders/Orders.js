import React, { Component } from 'react'
import OrderItem from '../../components/OrderItem/OrderItem'
import axiosInstance from '../../axios-orders-instance'
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux'
 class Orders extends Component {
    state = {
        orders: {},
        loading: true,
    }
    componentDidMount() {
        //Moi lan gui request phai gui them token de xac minh tai khoan
        axiosInstance.get('/orders.json?auth='+this.props.token)
            .then(response => {
                
                console.log(response);
                this.setState({ loading: false })
                if(response.data){
                    this.setState({ orders: response.data })
                }
            })
            .catch(err => {
                console.log(err);

            })
    }
    render() {

        return (
            <div>
                {
                    this.state.loading ? <Spinner /> : (
                        Object.keys(this.state.orders).map((i, index) => {
                            return <OrderItem key={index} ingredients={this.state.orders[i].ingredients} price={this.state.orders[i].price} />
                        })
                    )
                }




            </div>
        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        token: state.AuthReducer.idToken
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)