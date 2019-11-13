import { fetchData } from './data.js';

const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com/';
const makeUrl = x => `${BASE_URL}${x}.json`;

const getPosts = fetchData.bind(undefined, undefined, undefined, makeUrl('posts'));
window.getPost = id => fetchData(undefined, undefined, makeUrl(`posts/${id}`));
window.getComments = fetchData.bind(undefined, undefined, undefined, makeUrl('comments'));



const actions = {
    btnLoadPosts: () => console.log(1),
    posts: '',
    btnViewPost: ''
}

function handleEvent(e) {
    if (typeof actions[e.target.id] === 'function') {
        actions[e.target.id]();
    }
}

function attachEvents() {
    document.addEventListener('click', handleEvent)
}

attachEvents();