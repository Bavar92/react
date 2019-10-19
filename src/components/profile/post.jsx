import React from 'react';
import post from './post.module.css';

const Post = (props) => {
    return (
        <div className={post.item}>
            {props.message}
        </div>
    )
};

export default Post;