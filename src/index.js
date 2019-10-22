import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Andriy'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Vasyl'},
    {id: 4, name: 'Nasar'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How kama'},
    {id: 3, message: 'You'},
    {id: 4, message: 'How'},
];

let postItem = [
    {img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', message: 'Hi'},
    {img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', message: 'How kama'},
    {img: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', message: 'You'},
    {img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', message: 'How'},
];
ReactDOM.render(<App dialogs={dialogs} messages={messages} postItem={postItem}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

