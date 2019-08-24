import React, { Component } from 'react'
import { withRouter } from 'react-router'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import * as actionTypes from '../../../store/action/actionTypes'
import { connect } from 'react-redux'
class NavigationItems extends Component {
    onClicked(event) {
        event.preventDefault();
        this.props.logout();
        this.props.history.push('/')

    }
    render() {
        return (
            <ul className={this.props.toolBar ? classes.ToolBarNavigationItems : classes.SideDrawerNavigationItems}>
                <NavigationItem link='/burger-builder' isActive={true}>
                    Burger Builder
                </NavigationItem>
               {this.props.isAuthenticated?( <NavigationItem link='/orders'>
                    Orders
                </NavigationItem>):null}
                {!this.props.isAuthenticated ? (<NavigationItem link='/authentication'>
                    Authentication
                </NavigationItem>) : (<NavigationItem onClicked={this.onClicked.bind(this)} link='/logout'>
                        Logout
                </NavigationItem>)}

            </ul >
        )
    }


}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: () => {
            dispatch({ type: actionTypes.AUTH_LOGOUT })
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationItems))