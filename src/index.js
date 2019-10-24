import './index.css';
import * as serviceWorker from './serviceWorker';
import {renderEntireTree} from "./renger";
import state from "./redax/state";


renderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

