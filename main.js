//! Task 1 
let a = 5;
let b = 6;

console.log(a, b); // outputs "5 6"

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // outputs "6 5"

//!Task 2
let login = "IngressAcademy";
let passwordLogin = "Ingress12345";
let userName = prompt("Adinizi daxil edin");
let password = prompt("Sifrenizi daxil edin");

if (userName === login && password === passwordLogin) {
  console.log("Welcome!");
} else {
  console.log("Incorrect login or password.");
}
