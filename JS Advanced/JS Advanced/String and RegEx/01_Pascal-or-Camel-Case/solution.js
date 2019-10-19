const types ={
  "Pascal Case": str => {
    return str.toLocaleLowerCase().split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')
  },
  "Camel Case": () => {}
}

function solve(type, string) {
  if (typeof types[type] === "undefined") {
    return 'Error!'
  }
  return types[type](string);
}

module.exports = solve;