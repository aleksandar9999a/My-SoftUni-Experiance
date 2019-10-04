const SELECTORS ={
	articleList: '#articles',
	title: '#createTitle',
	content: '#createContent'
}

function createItem (title, content) {
	return `<article>` +
			`<h3>${title}</h3>` +
			`<p>${content}</p>` +
			`</article>`;
}

function clear() {
	document.querySelector(SELECTORS.title).value = '';
	document.querySelector(SELECTORS.content).value = '';
}

function createArticle() {
	let title = document.querySelector(SELECTORS.title).value;
	let content = document.querySelector(SELECTORS.content).value;

	if (title != '' && content != '') {
		document.querySelector(SELECTORS.articleList).innerHTML += (createItem(title, content));
	}
	
	clear()
}