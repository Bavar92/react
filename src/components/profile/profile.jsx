import React from 'react';
import p from './profile.module.css';
import Posts from "./posts/posts";

const Profile = (props) => {

    return (
        <div className={p.profile}>
            <Posts postItem={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost}/>
        </div>
    )
};

export default Profile;