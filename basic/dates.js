let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
let myDate1= new Date("2023-01-14")
console.log(myCreatedDate.toLocaleDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate1.getTime());//milisecond output.

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
newDate.toLocaleString('default',{
    weekday: 'long'
})
