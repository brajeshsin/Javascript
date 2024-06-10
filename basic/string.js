const name = "brajesh"
const Age = 23;
// console.log(name + Age+"singh");

// console.log(`Hello my name is brajesh singh ${name} and my age is ${Age} working in js.`);

const gameName = new String('Tarality')
console.log(gameName[0]);
console.log(gameName.__proto__);//object gives
console.log(gameName.length);
console.log(gameName.toUpperCase());// But this is not change the original value it gives a copy of original value beacuse of stack memory.
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('T'));

let Name1 = "Delhi"
let newString = Name1.substring(0,3);
console.log(newString);
// const anotherString = Name.slice(1,3);
// console.log(anotherString);
let newString1 = '  Noida   ';
console.log(newString1);
console.log(newString1.trim());
const url= "https//brajesh.com/brajes%20singh"

console.log(url.replace('%20', '-'));
console.log(url.includes('rahul'));

