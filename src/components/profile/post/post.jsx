import React from 'react';
import post from './post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
            <figure>
                <img src={props.img} alt=""/>
            </figure>
            <p>{props.message}</p>

            <p className={post.like}><img
                src="https://icon-library.net/images/icon-like/icon-like-11.jpg"
                alt=""/>{props.likesCount}</p>
        </div>
    )
};

export default Post;