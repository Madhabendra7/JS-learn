
//if

/*
if(true){

}                      // if we write true then the code enter into 
if(false){             // the if body else if we write false not enter
    
} */
const isUserLoggedIn1 = true
const temperature = 41

if (temperature < 50){
    // console.log("less than 50")
}else{
// console.log("temperature is greter than 50");
}
// console.log("execute");

// <, >, <=, >=, ==, !=, ===, !==,

const score = 200
if(score > 100){
    let power = "fly"
    // console.log(`User power : ${power}`);
    
}
    // console.log(`User power : ${power}`);


   /* const balance = 1000
    // if(balance > 500) console.log("test"),console.log("test2");
    
    if(balance < 500){
        console.log("less than 500");
    }else if( balance < 750){
        console.log("less than 750");
    }else if( balance < 900){
        console.log("less than 900");
    }else{
        console.log("less than 1200");
    }*/

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true
if (isUserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromGmail){
    console.log("user logged in");
    
}