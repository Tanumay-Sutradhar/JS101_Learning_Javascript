// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties


let YOB=2007;
let age= 2023-YOB;

((age >= 13) && (age <= 19))? console.log ("Teenage"):((age >=20) && (age <= 29))? console.log ("Twenties"): console.log ("Neither teenage or twenties")