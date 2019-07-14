function cutReverse(text) {
    let arr = text.split('').reverse();
    let firstHalf = '';
    let secondHalf = '';

    for (let i = 0; i < arr.length; i++) {
        if (i < (arr.length - 1)/2) {
            firstHalf += arr[i];
        }
        else{
            secondHalf += arr[i];
        }
    }
    
    console.log(secondHalf);
    console.log(firstHalf);
}
cutReverse('tluciffiDsIsihTgnizamAoSsIsihT')