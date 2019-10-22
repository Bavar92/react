import React from 'react';
import post from './post.module.css';

const Post = (props) => {

    return (
        <div className={post.item}>
            <img src={props.img} alt=""/>
            {props.message}
        </div>
    )
};

export default Post;