function printArrayWithGivenDelimiter(arr) {
    return arr.join(arr.pop());
}
console.log(printArrayWithGivenDelimiter(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
));
