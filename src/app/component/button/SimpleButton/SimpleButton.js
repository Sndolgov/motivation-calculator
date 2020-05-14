import React from 'react'
import classes from './SimpleButton.module.css'

export default (props) =>{
    const cls = [
        classes.Button,
        classes[props.type]
    ];
    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.label}
        </button>
    )
}