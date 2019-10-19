import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Profile from './components/profile/profile.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Footer from "./components/footer/footer";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter ,Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div id="main">
                <Header/>
                <div className="parent-box">
                    <Sidebar/>
                    <div className="content">
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}


export default App;
