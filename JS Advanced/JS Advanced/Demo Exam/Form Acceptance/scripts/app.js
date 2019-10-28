function acceptance() {

	function validateInput(company, product, quantity, scrape) {
		if (company === '' || product === '' || quantity === '' || scrape === '' || isNaN(quantity) || isNaN(scrape)) {
			return false;
		}

		return true;
	}

	function createElement(type, content) {
		let e = document.createElement(type);
		if (typeof content === "string") {
			e.innerHTML = content;
		}
		if (typeof content === "object") {
			e.appendChild(content);
		}

		return e;
	}

	function appendElements(parent, elements) {
		if (Array.isArray(elements)) {
			return elements.map(x => parent.appendChild(x));
		}
		return parent.appendChild(elements);
	}

	function createItem(company, product, quantity, scrape) {
		let div = createElement('div');
		let p = createElement('p', `[${company}] ${product} - ${quantity - scrape} pieces`);
		let btn = createElement('button', 'Out of stock');
		btn.type = 'button';

		appendElements(div, [p, btn]);
		return div;
	}

	function init() {
		let [company, product, quantity, scrape] = document.getElementsByTagName('input');
		
		if (validateInput(company.value, product.value, quantity.value, scrape.value)) {
			let newItem = createItem(company.value, product.value, quantity.value, scrape.value);
			let section = document.getElementById('warehouse');
			appendElements(section, newItem);
		}
	}

	document.getElementById('acceptance').addEventListener('click', init)
}