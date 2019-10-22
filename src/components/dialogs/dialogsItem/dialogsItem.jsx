import React from 'react';
import d from './../dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={d.dialog + ' ' + d.active}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}


export default DialogsItem;