import React, {Component} from "react";
import MyButton from "../button/GradientButton";

export default (props) => {
    return (
        <>
            <h3 style={{color: 'red'}}>{props.error}</h3>
            <MyButton
                label={'return'}
                onClick={props.errorHandler}
            />
        </>
    )
}