const accountId=1234
let accountEmail="barejshsingh2911@gmail.com"
var accountPassword="12345"
accountcity="jaipur"

// accountId=2 not allowed

accountEmail="fhurfh@gmail.com"
accountPassword="567890"
accountcity="Kanpur"
let accountstate;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity, accountstate])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/