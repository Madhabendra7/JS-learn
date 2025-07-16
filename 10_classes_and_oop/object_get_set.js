
const User ={
    _email: 'hbdch@34.com',
    _password: "abc123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email
    }
}
const hi = Object.create(User)
console.log(hi.email);
