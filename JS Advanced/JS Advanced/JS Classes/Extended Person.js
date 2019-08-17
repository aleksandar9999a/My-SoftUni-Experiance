class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        let str = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        return str;
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, age, email, subject, group, students){
        super(firstName, lastName, age, email);
        this. subject = subject;
        this.group = group;
        this.students = students;
    }
}