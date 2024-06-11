const myHeros= ['batman', "Ironman", "Spiderman"]
const dc = ["Superman", "flash","thor"]

//myHeros.push(dc)

//console.log(myHeros);
//  const n3= myHeros.concat(dc)
//  console.log(n3);
 
const all_NewHeros= [...myHeros,...dc]//Spread operator merge all the elements in a single array
// console.log(all_NewHeros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherarr = anotherArr.flat(Infinity)
console.log(realAnotherarr);

console.log(Array.isArray("Brajesh"))
console.log(Array.from("Brajesh"))

console.log(Array.from({name: "brajesh"}));// interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));// coverta in array