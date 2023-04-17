// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username="Tanumay", stored_password="password";

let input_username="Tanumay", input_password="passworddd";

if (input_username === stored_username){

    if (stored_password === input_password){
        console.log ("Login Succesful")
    }
    else {
        console.log ("Wrong Password")
    }
}
else {
  console.log ("Check your username")
}