const currencyFormatter = require(`./formator`);
const getDollar = require(`./currencyType`);
let currency = getDollar(currencyFormatter);

console.log(currency(100,5384));

