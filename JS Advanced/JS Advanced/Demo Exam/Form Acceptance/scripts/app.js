function acceptance() {

	function validateInput(company, product, quantity, scrape) {
		if (company === '' || product === '' || quantity === '' || scrape === '' || isNaN(quantity) || isNaN(scrape)) {
			return false;
		}

		return true;
	}

	function init() {
		let [company, product, quantity, scrape] = document.getElementsByTagName('input');
		if (validateInput(company.value, product.value, quantity.value, scrape.value)) {
			console.log('pedal');
			
		}
	}
	
	document.getElementById('acceptance').addEventListener('click', init)
}