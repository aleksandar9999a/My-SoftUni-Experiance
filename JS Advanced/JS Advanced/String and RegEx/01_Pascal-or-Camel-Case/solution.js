const transformStr = (transformation, str) => str.charAt(0)[transformation]() + str.slice(1);
const reduceStr = str => str.toLocaleLowerCase().split(" ").map(upperFirstLetter).join('');

const upperFirstLetter = transformStr.bind(undefined, "toLocaleUpperCase");
const lowerFirstLetter = transformStr.bind(undefined, "toLocaleLowerCase");

const types = {
  "Pascal Case": reduceStr,
  "Camel Case": str => lowerFirstLetter(reduceStr(str))
}

function solve(type, string) {
  if (typeof types[type] === "undefined") {
    return 'Error!'
  }
  return types[type](string);
}

module.exports = solve;