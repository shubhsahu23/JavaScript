//if
// const isUserLoggedIn=false;
const temperature=41;
// if(temperature===40){
//     console.log("temperature is not 40");
// }
// else{
//     console.log("temperature is less than 50");
// }

const score=200;

// if(score>100){
//     let power="fly";
//     console.log(`user power: ${power}`);
// }

//console.log(`user power: ${power}`);

const balance=1000;

//if(balance>500) console.log("good"),console.log("bad");

// if(balance<500){
//     console.log("balance is less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const isUserLoggedIn=true;
const debitcard=true;
const LoggedInFromGoogle=false;
const LoggedInFromEmail=true;

if(isUserLoggedIn&&debitcard){
    console.log("allowed");
}

if(LoggedInFromEmail||LoggedInFromGoogle){
    console.log("User Logged In");
}
