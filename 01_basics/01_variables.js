const accountId = 1;
let accountEmail = "kushal@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//Prefer not to use var because of block scope and functional scope

accountEmail = "kushalmaru@google.com";
accountPassword = "6789";
accountCity = "Mumbai";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);