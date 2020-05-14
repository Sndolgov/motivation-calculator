import React, {Component} from "react";
import {connect} from "react-redux";
import MyButton from "../../component/button/GradientButton";
import {withRouter} from "react-router-dom";


class HomeButtons extends Component{
    render(){
        return(
            <MyButton
                label={'Добавить новый мотивационный расчет'}
                onClick={()=>this.props.history.push('/income/points')}
            />
        )
    }
}

export default withRouter(connect()(HomeButtons));
