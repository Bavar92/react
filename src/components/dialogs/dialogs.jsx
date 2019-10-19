import React from 'react';
import d from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={d.dialog + ' ' + d.active}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {


    let dialogsData = [
        {id: 1, name: 'Andriy'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Vasyl'},
        {id: 4, name: 'Nasar'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How kama'},
        {id: 3, message: 'You'},
        {id: 4, message: 'How'},
    ];
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3   ].id}/>
            </div>
            <div className={d.messages}>
                <Message message='Hi'/>
                <Message message='How kama'/>
                <Message message='You'/>
                <Message message='How'/>
            </div>
        </div>
    )
}


export default Dialogs;