 //singleton
 //objects.create

 //Object literals

 const jsUser={
    name:"shubh",
    age:20,
    email:"shubhsahu@gmail.com",
    location:"punjab",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"],
 };

//  console.log(jsUser.age);
//  console.log(jsUser.name);


jsUser.email = "shubh@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "shubh@microsoft.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello");
};
jsUser.greetingtwo=function(){
    console.log(`hello ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());