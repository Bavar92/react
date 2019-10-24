import {renderEntireTree} from "../renger";


let state = {
    profilePage: {
        posts: [
            {
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                message: 'Hi',
                likesCount: 20
            },
            {
                img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                message: 'How kama',
                likesCount: 10
            },
            {
                img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                message: 'You',
                likesCount: 5
            },
            {
                img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                message: 'How',
                likesCount: 120
            },
        ],
        newPostText: 'IT'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andriy'},
            {id: 2, name: 'Oleg'},
            {id: 3, name: 'Vasyl'},
            {id: 4, name: 'Nasar'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How kama'},
            {id: 3, message: 'You'},
            {id: 4, message: 'How'},
        ]
    }
};


export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
};


export default state;