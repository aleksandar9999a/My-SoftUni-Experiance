const SELECTORS = {
	articleList: '#articles',
	title: '#createTitle',
	content: '#createContent',
	btn: '#createArticleBtn'
}

function createArticle() {
	let articles = document.querySelector(SELECTORS.articleList);
	let title = document.querySelector(SELECTORS.title);
	let content = document.querySelector(SELECTORS.content);

	if (title === null && content === null & articles === null) {
		throw new Error("Something is wrong!")
	}

	let article = document.createElement("article");
	let h3 = document.createElement("h3");
	let p = document.createElement("p");
	h3.innerHTML = title.value;
	p.innerHTML = content.value;

	article.appendChild(h3);
	article.appendChild(p);

	articles.appendChild(article);

	title.value = "";
	content.value = "";
}

document.addEventListener('DOMContentLoaded', x => {
	document.querySelector(SELECTORS.btn).addEventListener('click', createArticle);
})
