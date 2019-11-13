import { fetchData } from './data.js';

function withCache(fn) {
    fn.cache = new Map();
    return function() {
        let key = JSON.stringify(arguments);
        if (!fn.cache.has(key)) {
            fn.cache.set(key, fn(...arguments));
        }
        return fn.cache.get(key);
    }
}

const BASE_URL = 'https://blog-apps-c12bf.firebaseio.com/';
const makeUrl = x => `${BASE_URL}${x}.json`;

const cacheFetct = withCache(fetchData.bind(window, undefined, undefined))
const getPosts = () => cacheFetct(makeUrl('posts'));
const getPost = id => cacheFetct(makeUrl(`posts/${id}`));
const getComments = () => cacheFetct(makeUrl('comments'));

function displayPosts(posts) {
    let fragment = document.createDocumentFragment();
    html.posts().innerHTML = '';
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
        const comments = await getComments();

        createComments(comments, post);
        createPost(post);
    }
}

function createPost(post) {
    Object.keys(post).forEach(x => {
        if (typeof html[x] === 'function') {
            html[x]().innerHTML = post[x];
        }
    });
}

function createComments(comments, post) {
    Object
        .keys(comments)
        .filter(filterById(comments, post))
        .map(getCommentById(comments))
        .map(createLiElement)
        .map(addToCommentBody);
}

function addToCommentBody(x) {
    html.comments().innerHTML = '';
    html.comments().appendChild(x);
}

function createLiElement(x) {
    let li = document.createElement('li');
    li.innerHTML = x.text;
    return li;
}

function getCommentById(comments) {
    return x => comments[x];
}

function filterById(comments, post) {
    return x => comments[x].postId === post.id;
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