import React from 'react';
import d from './dialogs.module.css';
import DialogsItem from "./dialogsItem/dialogsItem";
import Message from "./message/message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messageElements = props.state.messages.map(m => <Message message={m.message} />);
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;

