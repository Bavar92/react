import React from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Profile from './components/profile/profile.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import Footer from "./components/footer/footer";
import Dialogs from "./components/dialogs/dialogs";
import {Route} from "react-router-dom";



function App(props) {

    return (

            <div id="main">
                <Header/>
                <div className="parent-box">
                    <Sidebar/>
                    <div className="content">
                        <Route path='/profile'
                               render={() => <Profile
                                   profilePage={props.state.profilePage}
                                   addPost={props.addPost}/>}/>
                        <Route path='/dialogs'
                               render={() => <Dialogs
                                   state={props.state.dialogsPage}/>}/> {/* or let sameFunction = () => <Dialogs/> */}
                    </div>
                </div>
                <Footer/>
            </div>

    )
}


export default App;
