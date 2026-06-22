//accountId , account_Id, account_id ye sab sahi way h 

const accountId = 12341
let accountEmail = "sneha@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "soni@gmail.com"
accountPassword = "2342223"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

