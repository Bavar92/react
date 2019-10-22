import React from 'react';
import Post from "../post/post";


const Posts = (props) => {

    let postElements = props.postItem.map(p => <Post img={p.img} message={p.message} />);
    return (
        <div className="items">
            {postElements}
        </div>
    )
};


export default Posts;