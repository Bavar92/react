import React from 'react';
import p from './profile.module.css';

const Profile = () => {
    return (
        <div className="profile">
            avatar
            <div className="items">
                <div className={p.item}>Text</div>
                <div className={p.item}>Text</div>
                <div className={p.item}>Text</div>
                <div className={p.item}>Text</div>
            </div>
        </div>
    )
};

export default Profile;