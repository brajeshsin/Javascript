// Declare with help of singleton


// const tinderUser = new Object()  singleton

const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "Sam"
 tinderUser.isLoggedIn = false
// 

const regularUser = {
    email: "brajesh@gmail.com",
    fullname: {
        userName : {
            firstName: "brajesh",
            lastName : "singh",

        }
    }

}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"d", 4: "e"}

// const obj3 = Object.assign({},obj1,obj2)//combined the both object
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// 

const user = [
    {
        id: 1,
        email: "b@gmail.com"
    }
]

//  Decrypter

const course = {
    courseName: "JavaScipt",
    price: "2999",
    section: "A",
}
const {courseName} = course

console.log(courseName);

