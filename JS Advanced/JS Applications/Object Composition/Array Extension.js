(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let arr = [];

        for (let i = n; i < this.length; i++) {
            arr[i - n] = this[i];
        }

        return arr;
    }

    Array.prototype.take = function (n) {
        let arr = [];

        for (let i = 0; i < n; i++) {
            arr[i] = this[i];
        }

        return arr;
    }

    Array.prototype.sum = function () {
        let sum = 0;

        for (let i = 0; i < this.length; i++) {
            sum += Number(this[i]);
        }

        return sum;
    }

    Array.prototype.average = function () {
        let sum = 0;

        for (let i = 0; i < this.length; i++) {
            sum += Number(this[i]);
        }

        return sum / this.length
    }
} ())

