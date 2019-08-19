import React from 'react';
import classes from './App.module.css';
import Layout from './components/layouts/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import RouterRedirect from './RouterRedirect'

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Layout>
          <RouterRedirect />
        </Layout>
      </Router>

    </div>
  );
}

export default App;
