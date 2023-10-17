/*/////////////////
values & variables

let js = 'amazing';
console.log(50 + 8 + 34 - 15);

console.log('Simon');
console.log(23);

let firstName = "Isabella";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM"
let $function = 27;

let person = "jonas" //write variable names in lowercase, and use a convention like cammelcase to write a large variable name like this: firstName = "simon".
let PI = 3.1416;//the constants just write in uppercase because we know that doesnt change.

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";//the names of the variable should provide a description of the content.

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
*//////////////////////
// Data types
/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof (javaScriptIsFun));
// console.log(typeof (24));
// console.log(typeof ('Jonas'));

javaScriptIsFun = 'YES!';
console.log(typeof (javaScriptIsFun));

let year;
console.log(year);
console.log(typeof (year));

year = 2023;
console.log(typeof (year));

console.log(typeof (null));
*//////////////////////
//Let, const, var
/*
let age = 30;//when you need to mutate a variable use let, and in the empty variables
age = 31;

const birthYear = 2003;//const cannot be mutated, and doesnt not use to declare empty variables
//always use const, but if you are completely sura that the variable can change or mutate use let

var job = "programmer";
job = "teacher";//var is function scope, never use var because is a primitive type of let

lastname = "Schmedtmann";//never write variables like this, always declare with const or let
console.log(lastname);
*/////////////////////
//Basic operator
//Math operators
/*
const actualYear = 2023;
const ageJonas = actualYear - 1991;
const ageIsabella = actualYear - 2003;
console.log(ageJonas, ageIsabella);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Simon';
const lastName = 'Colmenares';
console.log(firstName + ' ' + lastName);

//Assigment operators
let x = 10 + 5;//15
x += 10;//x = x + 10 = 25
x *= 4;//x = x * 4 = 100
x++;// x = x + 1
x--;//x = x - 1
x--;
console.log(x);

//Comparison operator
console.log(ageJonas > ageIsabella);// > , < , >=, <=
console.log(ageIsabella >= 21);

const isFullAge = ageIsabella >= 18;

console.log(actualYear - 1991 > actualYear - 2003);
*//////////////////
//Operator precedence
/*
const actualYear = 2023;
const ageJonas = actualYear - 1991;
const ageIsabella = actualYear - 2003;

console.log(actualYear - 1991 > actualYear - 2003);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence   table of precedence in javascript

let x, y;
x = y = 25 - 10 - 5
console.log(x, y);

const averageAge = (ageJonas + ageIsabella) / 2
console.log(ageJonas, ageIsabella, averageAge);
*//////////////////
//String and Template literals
/*
const firstName = 'Simon';
const job = 'student';
const birthYear = 2003;
const year = 2023;

const simon = "I'm " + firstName + ', a ' + (year-birthYear) + ' Years old ' +  job + '!';
console.log(simon);

const simonNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(simonNew);

console.log(`Just a regular string...`);//you can to use backticks like this `` to write all the strings and made faster to insert values in

console.log('String with \n\
mutiple \n\
lines');

console.log(`String whit
multiple
lines`)//with backticks its easier to write multiple line strings

*/////////////////////
//Desicions
/*
const age = 18;

if(age >= 18){
  console.log(`Simon can start driving license 🚗`);
}else{
  const yearsLeft = 18 - age;
  console.log(`Simon needs ${yearsLeft} years more to start driving 🚗`);
}


const birthYear = 2003;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/////////////////////
//Type conversion and coersion
/*
//type conversion
const inputYear = '2003';//string to number
console.log(Number(inputYear));
console.log(Number(inputYear) + 20);

console.log(Number('Jonas'));//only convert strings that contains a number
console.log(typeof(NaN));

console.log(String(20),20);

//type coercion
console.log('I am ' + 20 + ' years old');
console.log('20' - '10' - 3);//the others operators converts into a number, but the plus convert to a string because we use the + to concat
console.log('20' * '2');
console.log('20' / '2');


let n = '1' + 1;// = 11
n = n -1;// 11 - 1
console.log (n);
*/////////////////
//Truthy and Falsy values

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('a'));
console.log(Boolean({}));
console.log(Boolean('a'));
console.log(Boolean(''));

const money = 0;

if (money) {
  console.log(`Don't spend it all ;)`)
} else {
  console.log(`You should get a job!`)
}

let height;
if (height) {
  console.log(`YAY!`)
} else {
  console.log(`is undefined`)
}

///////////////////////
//equality operators == vs ===

const age = 18;