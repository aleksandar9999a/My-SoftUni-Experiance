const SELECTOR = {
    submitForm: '#submitForm',
    siteNameInput: '#siteName',
    siteURL: '#siteURL',
    submitBtn: '#submit',
    bookmarksDiv: '#bookmarksResults',
}

const submitForm = document.querySelector(SELECTOR.submitForm);
const siteNameInput = document.querySelector(SELECTOR.siteNameInput);
const siteURL = document.querySelector(SELECTOR.siteURL);
const submitBtn = document.querySelector(SELECTOR.submitBtn);
const bookmarksDiv = document.querySelector(SELECTOR.bookmarksDiv);

submitBtn.addEventListener('click', addBookmark);

let bookmarks = [];

function addBookmark(e) {
    if (siteNameInput.value != '' && siteURL.value != '') {
        let currentBookmark = {
            name: siteNameInput.value,
            url: siteURL.value,
        };
    
        if (localStorage.getItem('bookmarks') === null) {
            bookmarks.push(currentBookmark);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }
        else{
            let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            bookmarks.push(currentBookmark);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        }
        
        clear();
        e.preventDefault();
    }
}

function printBookmarks(){

}

function clear(){
    siteNameInput.value = '';
    siteURL.value = '';
}
