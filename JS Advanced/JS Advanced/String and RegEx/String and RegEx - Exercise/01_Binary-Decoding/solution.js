const  getBinaryCode = () => document.getElementsByTagName('input')[0].value;
const binCodeReducer = (binCode, number) => binCode.substring(number, binCode.length - number);
const binCodeReducerBySegments = binCode => binCode.match(/.{8}/gim);
const parseBinToDecimal = binCodeArr => binCodeArr.map(x => parseInt(x, 2));
const parseAsciiToText = arr =>arr.map(x => String.fromCharCode(x));
const printResult = str => document.getElementById('resultOutput').textContent = str;

function getBinCodeReduceNumber(binCode) {
	while (binCode.toString().length > 1) {
		binCode = binCode.toString().split('').reduce((a,b) => a + Number(b), 0)
	}
	return binCode
}

function binDecode(binCode){
	let binCodeReducerNumber = getBinCodeReduceNumber(binCode);
	let reducedBinCode = binCodeReducer(binCode, binCodeReducerNumber);
	let reduceBinCodeBySegments = binCodeReducerBySegments(reducedBinCode);
	let decimalCode = parseBinToDecimal(reduceBinCodeBySegments);
	let text = parseAsciiToText(decimalCode)

	return text.join('')
}

function solve() {
	let binCode = getBinaryCode();
	let text = binDecode(binCode);
	printResult(text)
}