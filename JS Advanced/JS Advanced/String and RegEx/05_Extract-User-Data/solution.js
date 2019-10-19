const extractParam = str => str.match(/([^\d\-+]+)|([\d \+ \-]+)/gim).map(x => x.trim());
const parseName = names => {
    names = names.split(" ").filter(x => x[0] === x[0].toLocaleUpperCase())
    if (names.length !== 2) {
        return invalidData;
    }
    return names.join(' ')
};
const parseMail = mail => {
    if (/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/gm.test(mail)) {
        return mail
    }
    return invalidData
};
const parsePhone = phone => {
    if (!phone.startsWith("+359") || phone.indexOf("-") === phone.indexOf(" ")) {
        return invalidData;
    }
    return phone;
};
const parseParams = x => [parseName(x[0]), parsePhone(x[1]), parseMail(x[2])];
const reformParams = x => `Name: ${x[0]}
Phone Number: ${x[1]}
Email: ${x[2]}
- - -`;
const matchInvalidData = x => x.match(invalidData) ? invalidData : x;

const invalidData = `Invalid data
- - -`;

module.exports = function solve(arr) {
    return arr
        .map(extractParam)
        .map(parseParams)
        .map(reformParams)
        .map(matchInvalidData)
        .join('\n');
}