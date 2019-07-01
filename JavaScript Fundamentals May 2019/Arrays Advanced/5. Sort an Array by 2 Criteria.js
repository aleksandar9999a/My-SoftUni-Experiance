function sortArrayByTwoCriteria(strArr) {
    strArr = strArr.sort(function (a, b) {
        if (a.length < b.length || a.length > b.length) {
            return a.length - b.length
        }
        else if (a.length === b.length) {
            return a > b
        }
    });
    
    console.log(strArr.join(`\n`));
}
sortArrayByTwoCriteria([ 'alpha', 'beta', 'gamma' ]);