import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input'
import Btn from '../../components/UI/Button/Button'
import classes from './Auth.module.css'
import actinTypes from '../../store/action/actionTypes'
import * as authActions from '../../store/action/Auth'
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner'

class Auth extends Component {
    state = {
        email: '',
        password: '',
        isSignup: false,
    }
    onChangeHandle(event) {
        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log(this.state);

        })
    }
    onSubmitHandle(event) {
        event.preventDefault();
        //Neu khong la  signup thi la login 
        if (!this.state.isSignup) {
            this.props.onAuth(this.state.email, this.state.password);
            this.props.history.push('/');
            return;
        }
        //Neu la signup thi ta dang ki
        this.props.onSignup(this.state.email, this.state.password);
        this.props.history.push('/');

    }
    switchSignup() {
        this.setState({ isSignup: !this.state.isSignup })
    }
    render() {
        const formAuth = (<div className={classes.Auth}>
            {this.props.error && !this.state.isSignup ? <p style={{ color: 'red' }}>Email or password is wrong</p> : null}
            {this.props.error && this.state.isSignup ? <p style={{ color: 'red' }}>Email is exists</p> : null}
            <form onSubmit={this.onSubmitHandle.bind(this)} className={classes.Form}>
                <Input
                    inputtype='input'//viet thuong thi React se khong canh bao khi convert attribute khong ton tai trong prop
                    type='text'
                    placeholder='Email'
                    name='email'
                    label='Email'
                    onChange={this.onChangeHandle.bind(this)}
                    value={this.state.email}
                />
                <Input
                    inputtype='input'
                    type='text'
                    placeholder='Password'
                    name='password'
                    label='Password'
                    onChange={this.onChangeHandle.bind(this)}
                    value={this.state.password}
                />

                <Btn btnType='Success'>SUBMIT</Btn>
            </form>
            <Btn btnType='Primary' onClicked={this.switchSignup.bind(this)}>SWITCH TO {!this.state.isSignup ? 'SIGNUP' : 'SIGNIN'} </Btn>

        </div>)
        return(this.props.loading?<Spinner/>:formAuth)


    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAuth: (email, password) => {
            dispatch(authActions.auth(email, password))
        },
        onSignup: (email, password) => {
            dispatch(authActions.signup(email, password))
        }

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        error: state.AuthReducer.error,
        loading: state.AuthReducer.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth)