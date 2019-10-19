import React from 'react';
import p from './profile.module.css';
import Post from "./post";

const Profile = () => {
    return (
        <div className={p.profile}>
            avatar
            <div className="items">
                <Post message='hi'/>
                <Post message='good'/>

            </div>
        </div>
    )
};

export default Profile;