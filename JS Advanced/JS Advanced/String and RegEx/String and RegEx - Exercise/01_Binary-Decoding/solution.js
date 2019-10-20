function getBinaryCode(){
	return document.getElementsByTagName('input')[0].value;
}

function solve() {
	let binCode = getBinaryCode();
	
	
}

function getBinCodeReduceNumber(binCode) {
	while (binCode.toString().length > 1) {
		binCode = binCode.toString().split('').reduce((a,b) => a + Number(b), 0)
	}
	return binCode
}

function binCodeReducer(binCode, number) {
	return binCode.substring(number, binCode.length - number)
}

function binCodeReducerBySegments(binCode) {
	return binCode.match(/.{8}/gim);
}

function parseBinToDecimal(binCodeArr) {
	return binCodeArr.map(x => parseInt(x, 2));
}

function parseAsciiToText(arr) {
	return arr.map(x => String.fromCharCode(x));
}

module.exports = function binDecode(binCode){
	let binCodeReducerNumber = getBinCodeReduceNumber(binCode);
	let reducedBinCode = binCodeReducer(binCode, binCodeReducerNumber);
	let reduceBinCodeBySegments = binCodeReducerBySegments(reducedBinCode);
	let decimalCode = parseBinToDecimal(reduceBinCodeBySegments);
	let text = parseAsciiToText(decimalCode)

	return text.join('')
}