//primitive

// 7 types: String , Number , Boolean , null ,undefined , symbol , BigInt

const score=100;
const scorevalue=100.6;
const isLoggedIn=false;
const outSideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id==anotherId);
const bigNumber=1234567895545959594559n;

//Refrence (Non Primitive)

//Array, Objects, Functions

const heros=["shaktiman","Nagraj","Tanjiro"];

let myObj={
    name:"shubh",
    age:20,
};

const myFunction=function(){
    console.log("Hello");
}
myFunction();
console.log(typeof(id));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive) , Heap (Non-primitive)

let ytname="chaiandcodedotcom";

let anothername=ytname;
anothername="codeyt";
console.log(ytname)
console.log(anothername);

let user={
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo=user;
userTwo.email="shubh@gmail.com";
console.log(userTwo.email);
console.log(user.email);
