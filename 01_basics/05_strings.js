const name="shubh";
const repocount=10;

//console.log(name+repocount+" value");

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String('pokemon');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(0,-4);
console.log(anotherString);

const newStringOne="   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim(" "));

const url="https://pokemon.com/pokemon%20pikachu";
console.log(url.replace("%20","-"));

console.log(url.includes("pokemon"));

console.log(gameName.split('-'));

