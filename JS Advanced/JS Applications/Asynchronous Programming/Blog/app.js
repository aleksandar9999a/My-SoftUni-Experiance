import { fetchData } from './data.js';

const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com/';
const makeUrl = x => `${BASE_URL}${x}.json`;

window.getPosts = fetchData.bind(undefined, undefined, undefined, makeUrl('posts'));
window.getPost = id => fetchData(undefined, undefined, makeUrl(`posts/${id}`));
window.getComments = fetchData.bind(undefined, undefined, undefined, makeUrl('comments'));


function attachEvents() {

}

attachEvents();