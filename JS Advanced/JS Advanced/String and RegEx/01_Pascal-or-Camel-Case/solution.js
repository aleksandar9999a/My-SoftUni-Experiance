const types = {
  "Pascal Case": str => str.toLocaleLowerCase().split(" ").map(x => x.charAt(0).toLocaleUpperCase() + x.slice(1)).join(''),
  "Camel Case": str => {
    let string = str.toLocaleLowerCase().split(" ").map(x => x.charAt(0).toLocaleUpperCase() + x.slice(1)).join('')
    return string.charAt(0).toLocaleLowerCase() + string.slice(1)
  }
}

function solve(type, string) {
  if (typeof types[type] === "undefined") {
    return 'Error!'
  }
  return types[type](string);
}

module.exports = solve;