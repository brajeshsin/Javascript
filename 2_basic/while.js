// let score = 11;
// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score<=10);


// For of loop

// const arr =[1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
    
// }

// Maps

const map = new Map()
map.set('IN', "United state")
map.set('Fr', "France")
map.set('UK',"Uttrakhand")
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }

for (const [key,value] of map) {
    console.log(key, ':', value);
    
}