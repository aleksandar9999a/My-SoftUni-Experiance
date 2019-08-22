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

function addBookmark(e) {
    let p = document.createElement('p');
    p.textContent = siteNameInput.value;
    bookmarksDiv.appendChild(p);
    clear();
    e.preventDefault();
}

function clear(){
    siteNameInput.value = '';
    siteURL.value = '';
}
