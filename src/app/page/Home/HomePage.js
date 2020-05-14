import React, {Component} from "react";
import classes from './HomePage.module.css'
import {connect} from "react-redux";
import HomeButtons from "./HomeButtons";

class HomePage extends Component {
    render() {
        return (
            <div className={classes.HomePage}>
                <HomeButtons/>
            </div>
        )
    }
}


export default connect()(HomePage);
