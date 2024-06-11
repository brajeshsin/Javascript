// singleton

// object literals

const mySym = Symbol("key1")

const myUser = {
    name: "Brajesh",
    age: 18,
    location: "Delhi",
    email: "brajesh@gmail.com",
    isLoggedIn: false,
    lastLogoinDays: ["monday","saturday"],
    "Day": "Sunday",// This key is not accessible by dot notation method 
}

// console.log( myUser.email);
// console.log(myUser["Day"]);

myUser.email = "ritik@gmail.com"
// Object.freeze(myUser)
myUser.email = "ankit@gmail.com"
// console.log(myUser);

myUser.greetings = function(){
    console.log("Hello js user");
}

console.log(myUser.greetings());