function solve(inputArray) {
    let userName = inputArray[0];
    let password = "";

    for (let i = userName.length - 1; i >= 0; i--) {
        password += userName[i];
    }

    let arrayLength = inputArray.length;

    for (let i = 1; i < arrayLength; i++ ){

        if (inputArray[i] == password) {
            console.log("User " + userName + " logged in.");
        }
        else{
            if (i == 4){
                console.log("User " +  userName + " blocked!");
                break;
            }
            else{
                console.log("Incorrect password. Try again.");
            }
        }
    }
}
solve(['Acer','login','go','let me in','recA'])