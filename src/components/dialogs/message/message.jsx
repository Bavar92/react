import React from 'react';
import m from './../dialogs.module.css';

const Message = (props) => {

    return (
        <div className={m.dialog}>{props.message}</div>
    )
};


export default Message;