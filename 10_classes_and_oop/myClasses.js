
//ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `abc${this.password}`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("chai", 'chai@gmail.com', "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

