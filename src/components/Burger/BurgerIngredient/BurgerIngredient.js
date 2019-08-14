//Moudle hoa cac thanh phan de tao ra mot burger

import React, { Component } from 'react'
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types';
export default class extends Component {
    //Viet Thường
    static propTypes = {
        type: PropTypes.string.isRequired
    }
    render() {
        let ingredient = "null";
        switch (this.props.type) {
            case 'bread-bottom':
                ingredient = (<div className={classes.BreadBottom}></div>);
                break;
            case 'bread-top':
                ingredient = (<div className={classes.BreadTop}>
                    {/*2 Hạt gạo tren bread-top cong them before after nua thanh 5 hạt */}
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
                break;
            case 'meat':
                ingredient = (<div className={classes.Meat}></div>);
                break;
            case 'cheese':
                ingredient = (<div className={classes.Cheese}></div>);
                break;
            case 'bacon':
                ingredient = (<div className={classes.Bacon}></div>);
                break;
            case 'salad':
                ingredient = (<div className={classes.Salad}></div>);
                break;
            default:
                break;
        }
        return ingredient;
    }

}