import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import ContactData from './containers/Checkout/ContactData/ContactData'
import Orders from './containers/Orders/Orders'
import { BrowserRouter as Router, Route, NavLink ,Switch} from "react-router-dom";

class RouterRedirect extends Component {
    render() {
        return (
            <div>
                {/*AWitch chi duy nhat mot route duoc render khi match */}
                <Switch>
                    <Route path="/" exact component={BurgerBuilder} />
                    <Route path="/burger-builder" exact component={BurgerBuilder} />
                    <Route path="/checkout" exact component={Checkout} />
                    <Route path="/checkout/contact-data" exact component={ContactData} />
                    <Route path="/orders" exact component={Orders} />
                    
                </Switch>

            </div>
        );
    }
}

export default RouterRedirect;