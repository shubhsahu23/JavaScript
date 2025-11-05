var c= 300;
let a=300;
if(true){
    let a=10;
    const b=20;
    // console.log("inner:",a);    
}
// console.log(a);
//console.log(b);
// console.log(c);


function one(){
    const userName="shubh";

    function two(){
        const website="youtube";
        console.log(userName);
    }
    //console.log(website);
    two();
}

// one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++ Intresting ++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1;
}
console.log(addtwo(5));
function addtwo(num){
    return num+2;
}