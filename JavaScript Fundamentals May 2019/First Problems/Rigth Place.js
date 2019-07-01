function solve(searchString, char, stringToMatch){
    let newString = searchString.replace(`_`, char);
    
    if (newString == stringToMatch){
        console.log(`Matched`);
    }
    else{
        console.log(`Not Matched`);
    }
}
solve(`str_ng`, `i`, `strong`)