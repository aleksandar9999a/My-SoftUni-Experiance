class CheckingAccount{
    _clientId;
    _email;
    _firstName;
    _lastName;
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId(){
        return this._clientId;
    }
    set clientId(value){
        if (value.length !== 6) {
            throw TypeError("Client ID must be a 6-digit number")
        }

        this._clientId = value;
    }

    get email(){
        return this._email;
    }
    set email(value){
        let pattern = /[A-Za-z]+@[A-Za-z ]+/g;
        if (!pattern.test(value)) {
            throw TypeError("Invalid e-mail")
        }

        this._email = value;
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(name){
        this.validateName(name, "First");
        this._firstName = name;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(name){
        this.validateName(name, "Last");
        this._lastName = name;
    }

    validateName(value, prop) {
        if (value.length < 3 || value.length > 20) {
          throw new TypeError(`${prop} name must be between 3 and 20 characters long`);
        }
     
        if (!/^[A-Za-z]+$/g.test(value)) {
          throw new TypeError(`${prop} name must contain only Latin characters`);
        }
      }
}
new CheckingAccount('423415', 'petkan@another.co.uk', 'Petkan', 'Draganov');