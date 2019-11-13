import { fetchData } from './data.js';

const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com/';
const makeUrl = x => `${BASE_URL}${x}.json`;

const getPosts = fetchData.bind(undefined, undefined, undefined, makeUrl('posts'));
const getPost = id => fetchData(undefined, undefined, makeUrl(`posts/${id}`));
window.getComments = fetchData.bind(undefined, undefined, undefined, makeUrl('comments'));

function displayPosts(posts) {
    let fragment = document.createDocumentFragment();

    Object.keys(posts).forEach(x => {
        let option = document.createElement('option');
        option.value = x;
        option.innerHTML = posts[x].title;
        fragment.appendChild(option);
    });

    html.posts().appendChild(fragment);
}

const actions = {
    btnLoadPosts: async () => {
        displayPosts(await getPosts());
    },
    btnViewPost: async () => {
        const post = await getPost(html.posts().value);
        Object.keys(post).forEach(x => {
            if (typeof html[x] === 'function') {
                html[x]().innerHTML = post[x];
            }
        });
    }
}

function handleEvent(e) {
    if (typeof actions[e.target.id] === 'function') {
        actions[e.target.id]();
    }
}

const html = {
    posts: () => document.getElementById('posts'),
    title: () => document.getElementById('post-title'),
    body: () => document.getElementById('post-body'),
    comments: () => document.getElementById('post-comments')
}

function attachEvents() {
    document.addEventListener('click', handleEvent)
}

attachEvents();