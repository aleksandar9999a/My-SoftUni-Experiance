function acceptance() {


	function init() {
		let [company, product, quantity, scrape] = document.getElementsByTagName('input');
		console.log(company, product, quantity, scrape);
		
		
	}
	
	document.getElementById('acceptance').addEventListener('click', init)
}