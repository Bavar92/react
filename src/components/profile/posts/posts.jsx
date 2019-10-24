import React from 'react';
import Post from "../post/post";
import p from './posts.module.css'

const Posts = (props) => {
    let postElements =
        props.postItem.map(p => <Post img={p.img} message={p.message} likesCount={p.likesCount}/>);

    let newPostLink = React.createRef();

    let addPost = () => {
        let text = newPostLink.current.value;
        props.addPost(text);
        newPostLink.current.value = '';
    };

    let onPostChange = () => {
        let text = newPostLink.current.value;
        console.log(text);
    };
    return (
        <div>
            <textarea onChange={onPostChange} ref={newPostLink} name=""
                      id="newPost" cols="25" rows="5" value={props.newPostText}/>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={p.items}>
                {postElements}
            </div>
        </div>
    )
};


export default Posts;