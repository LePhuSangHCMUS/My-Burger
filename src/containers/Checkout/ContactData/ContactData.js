import React, { Component } from 'react'
import classsess from './ContactData.module.css'
import Btn from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import Burger from '../../../components/Burger/Burger'
import axiosInstance from '../../../axios-orders-instance'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../hoc/Auxx/Auxx'
export default class ContactData extends Component {
    state = {
        loading: false,
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0

        },
        totalPrice: 0,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }
    onChangeHandle(event) {
        if (event.target.name === 'street' || event.target.name === 'postalCode') {
            return this.setState({ address: { ...this.state.address, [event.target.name]: event.target.value } })
        }
        this.setState({ [event.target.name]: event.target.value })

    }
    OrderHandle(event) {
        this.setState({ loading: true })
        event.preventDefault();
        // //Khi Ma nhấn nut Order thi bắt đầu gửi request thi xuất hiện spinner va ẩn SummaryOrder đi
        // this.setState({ loading: true })
        //Do config global ch Axios install nen khong can duong dan vao databas
        //https://react-my-burger-ab7d9.firebaseio.com/
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: this.state.name,
                address: { ...this.state.address },
                email: this.state.email,
                deliverMethod: 'fastest'

            }
        }

        axiosInstance.post("/orders.json", order).then(response => {
            //Bao gio nhan du lieu ve thi set la mat Spinner va mat luon modle
            this.setState({ loading: false })

            this.props.history.push('/orders');
            console.log('Add Order Success', response);


        })
            .catch(err => {
                console.log('Add Order Err:', err);
                this.setState({ loading: false })

                this.props.history.push('/orders');

            })
    }
    componentDidMount() {
        const ingredients = {};
        let totalPrice = 0;
        const query = new URLSearchParams(this.props.history.location.search)
        for (let param of query.entries()) {
            //[['salad','1'],['bacon','2]]
            if (param[0] === 'totalPrice') {
                totalPrice = parseFloat(param[1])
            }
            else {
                ingredients[param[0]] = + param[1];//('dung toan tu =+ se ep param[1] than so do phai dùng hàm chuyển')

            }
        }
        this.setState({ ingredients: ingredients, totalPrice: totalPrice });
    }
    render() {
        console.log(this.state);

        return (
            <div>
                {this.state.loading ? <Spinner /> : (<Aux><Burger ingredients={this.state.ingredients} />
                    <div className={classsess.ContactData}>
                        <h4>Enter Your Contact</h4>
                        <form>
                            <Input
                                type='text'
                                placeholder='Name'
                                name='name'
                                label='Name'
                                onChange={this.onChangeHandle.bind(this)}
                            />
                            <Input
                                type='text'
                                placeholder='Email'
                                name='email'
                                label='Email'
                                onChange={this.onChangeHandle.bind(this)}
                            />
                            <Input
                                type='text'
                                placeholder='Street'
                                name='street'
                                label='Street'
                                onChange={this.onChangeHandle.bind(this)}
                            />
                            <Input
                                type='text'
                                placeholder='Postal Code'
                                name='postalcode'
                                label='Postal Code'
                                onChange={this.onChangeHandle.bind(this)}
                            />

                            <Btn btnType='Success' onClicked={this.OrderHandle.bind(this)}>ORDER</Btn>
                        </form>

                    </div></Aux>)}

            </div>
        )
    }
}
