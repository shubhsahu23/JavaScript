function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
}
// sayMyName();

function addTwoNumbers(num1,num2){
    return num1+num2;
}
const result=addTwoNumbers(2,3);
// console.log(result);

function loginUserMessage(userName="sam"){
    if(!userName){
        console.log("enter a valid name");
        return ;
    }
    else{
        console.log(`${userName} loggedin`);
        return;
    }
}
// loginUserMessage();
// loginUserMessage("shubh");

function calculatePrice(num1,num2,...val){
    return val;
}
//console.log(calculatePrice(1,2,3));

const user={
    name:"shubh",
    id:"101"
};

function handleObject(anyObject){
    console.log(`my name is ${anyObject.name} and my user id is ${anyObject.id}`);
}
// handleObject(user);

// handleObject({
//     name:"sam",
//     id:102,
// })

const arr=[100,200,300,400,500];

function secondElement(array){
    console.log(array[1]);
}
// secondElement(arr);
// secondElement([500,600,800]);
