import React from 'react';
import s from './sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <ul>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Dialog</NavLink></li>
                <li className={s.item}><a href="/sdasd">Profile</a></li>
                <li className={s.item}><a href="/sdasd">Profile</a></li>
                <li className={s.item}><a href="/sdasd">Profile</a></li>
            </ul>
        </div>
    )
};

export default Sidebar;