import React from 'react'
import Aux from '../../hoc/Auxx/Auxx'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
export default (props) => {

    return (
        <Aux>
            {/* <div>Toolbar  SideBar</div> */}
            <Toolbar/>
            <main className={classes.MainContent}>
                {props.children}
            </main>
        </Aux>
    )
}