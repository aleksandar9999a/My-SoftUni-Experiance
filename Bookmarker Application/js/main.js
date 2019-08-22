const SELECTOR = {
    submitForm: '#submitForm',
    siteNameInput: '#siteName',
    siteURL: '#siteURL',
    submitBtn: '#submit',
    bookmarksDiv: '#bookmarksResults',
}

class Submit {
    constructor(){
        this.submitForm = document.querySelector(SELECTOR.submitForm);
        this.siteNameInput = document.querySelector(SELECTOR.siteNameInput);
        this.siteURL = document.querySelector(SELECTOR.siteURL);
        this.submitBtn = document.querySelector(SELECTOR.submitBtn);
        this.bookmarksDiv = document.querySelector(SELECTOR.bookmarksDiv);
    }
}