String.prototype.ensureStart = function (str) {
    return this.startsWith(str) ? this.toString() : `${str}${this}`;
}

String.prototype.ensureEnd = function (str) {
    return this.endsWith(str) ? this.toString() : `${this}${str}`;
}

String.prototype.isEmpty = function () {
    return this.toString() === '';
}

String.prototype.truncate = function (n) {
    if (n < 4) {
        return '.'.repeat(n);
    }

    if (n >= this.toString().length) {
        return this.toString()
    }

    let i = this.substr(0, n - 2).lastIndexOf(' ');
    if (i === -1) {
        i = n - 3;
    }

    return `${this.substr(0, i)}...`;
}

String.format = function (str, ...params) {
    params.forEach((e, i) => {
        str = str.replace(`{${i}}`, e);
    })

    return str;
}

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}', 'dog');
console.log(str);