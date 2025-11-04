const marvel_heros=["thor","spiderman","ironman"];
const dc_heros=["superman","flash","batman"];

//const allheros=marvel_heros.concat(dc_heros);
// console.log(allheros);

const all_new_heros=[...marvel_heros,...dc_heros];//spread operator
// console.log(all_new_heros);

const arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_arr=arr.flat(Infinity);//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_arr);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"Hitesh"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));