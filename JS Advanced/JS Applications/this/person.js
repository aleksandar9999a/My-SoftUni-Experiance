class Person {
    _first;
    _last;

    constructor(first, last){
        this._first = first;
        this._last = last;
    }

    get firstName(){
        return this._first;
    }
    get lastName(){
        return this._last;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
