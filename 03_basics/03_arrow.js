const user={
    name:"shubh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name} welcome `);
        console.log(this);
    }
}
// user.welcomeMessage();
// console.log(this);


const chai=()=>{
    let username="shubh";
    console.log(username);
}
chai();

const addTwo=(num1,num2)=>  num1+num2;
console.log(addTwo(5,4));