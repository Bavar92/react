import React from 'react';
import m from './../dialogs.module.css';

const Message = (props) => {

    let addMessage = () => {
        let text = newMessageLink.current.value;
        alert(text);
    };

    let newMessageLink = React.createRef();
    return (
        <div>
            <textarea ref={newMessageLink} name="" id="newMessage" cols="25" rows="5"></textarea>
            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>
            <div className={m.dialog}>{props.message}</div>
        </div>

    )
};

export default Message;