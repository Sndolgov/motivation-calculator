import React, {Component} from 'react';
import {connect} from "react-redux";
import HomePage from "./page/Home/HomePage";
import {Redirect, Route, Switch} from "react-router-dom";
import IncomePoints from "./initialData/IncomePoints/IncomePoints";


class App extends Component {

    render() {
        return (
            <Switch>
                <Route path='/income/points' exact component={IncomePoints}/>
                <Route path='/' exact component={HomePage}/>
                <Redirect to={'/'}/>
            </Switch>)
    }
}

export default connect()(App);

