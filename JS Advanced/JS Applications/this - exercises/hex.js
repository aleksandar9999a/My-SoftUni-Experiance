class Hex {
    constructor(value) {
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toLocaleUpperCase();
    }

    plus(number) {
        let newValue = this.value + number;
        return '0x' + newValue.toString(16).toLocaleUpperCase();
    }

    minus(number) {
        let newValue = this.value - number;
        return '0x' + newValue.toString(16).toLocaleUpperCase();
    }

    parse(string){
        return parseInt(string)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');

