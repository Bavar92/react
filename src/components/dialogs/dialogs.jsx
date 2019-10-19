import React from 'react';
import d from './dialogs.module.css';

const Dialogs = () => {
    return (
        <div className="dialogs">
            avatar
            <div className="items">
                <div className={d.item}>Dialogs</div>
                <div className={d.item}>Text</div>
                <div className={d.item}>Text</div>
                <div className={d.item}>Text</div>
            </div>
        </div>
    )
};

export default Dialogs;