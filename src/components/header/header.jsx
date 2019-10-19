import React from 'react';
import h from './header.module.css';
function Header() {
    return (
        <header>
            <div className={`${h.block} ${h.test}`}>
                <div className="App-header">
                    <img src='https://static.runukraine.org/wp-content/uploads/sites/2/2017/09/Logo_Lviv_Gorod-01.png' className="App-logo" alt="logo"/>
                </div>
            </div>
        </header>
    );
}


export default Header;