module.exports = function solve(arr) {
    let str = arr[0]
        .match(/([^\d\-+]+)|([\d \+ \-]+)/gim)
        .map(x => x.trim())

    if (str.length !== 3) {
        return "Invalid"
    }
    let [names, phone, mail] = str;

    names = names
        .split(" ")
        .filter(x => x[0] === x[0].toLocaleUpperCase());

    if (names.length !== 2) {
        return "Invalid"
    }

    if (!phone.startsWith("+359") || phone.indexOf("-") === phone.indexOf(" ")) {
        return "Invalid"
    }

    if (/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/gm.test(mail)) {
        return "Invalid"
    }

    return `Name: ${names.join(' ')}
Phone number: ${phone}
Email: ${mail}`;
}

//["George Smith     +359 2 123 456     George@gmail.com", => invalid
//"G S               +359-5-759-684     valid@gmail.com", => valid
//"Smith             +359-5 789 654     smith@gmail.com"] => invalid