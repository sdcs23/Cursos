/*
// values & variables
const country = "Colombia";
const continent = "America";
let colombiaPopulation = 50000000;

// console.log(country);
// console.log(continent);
// console.log(population);
// Data types
const isIsland = false;
let lenguage;

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(lenguage);
//let,const,var
lenguage = 'spanish';
//isIsland = False // if we change a const variable javascript deploys a error because const variables cant change

const halfPopulation = colombiaPopulation / 2;
console.log(halfPopulation);

colombiaPopulation++;
console.log(colombiaPopulation);
colombiaPopulation--;

const finlandPopulation = 6000000;
console.log(colombiaPopulation > finlandPopulation)

const averagePopulation = 33000000;
console.log(averagePopulation > colombiaPopulation)

// const description = country + " is in " + continent + ", and its " + colombiaPopulation + " people speak " + lenguage;
// console.log(description);

///////////// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${colombiaPopulation} people speak ${lenguage}`;
console.log(description);

/////////////Taking Decisions: if / else Statements
let populationBelowAverage;
if (colombiaPopulation > averagePopulation) {
  console.log(`Colombia's population is above the average`)
} else {
  populationBelowAverage = averagePopulation - colombiaPopulation;
  console.log(`Colombia's population is ${populationBelowAverage} million below average`)
}

////////////Type Conversion and Coercion
//'9' - '5'; //4
//'19' - '13' + '17'; // '617'
//'19' - '13' + 17; // 23
//'123' < 57; //false
//5 + 6 + '4' + 9 - 4 - 2; //1143
*/

////////////////Equiality operators
/*
let numNeighbours = Number(prompt(`How many neighbour does your country have?`));

if (numNeighbours === 1) {
  console.log(`only 1 neighbour`);
} else if (numNeighbours >= 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
*/

//////////////////////////
//Logical operators
/*
let colombiaPopulation = 50000000;
const isIsland = false;
const country = "Colombia";
let lenguage = "Spanish";

if(lenguage === "Spanish" && colombiaPopulation <= 50000000 && isIsland === false){
  console.log(`Colombia is a good choice`)
}else{
  console.log(`Colombia does not meet your criteria :(`)
}
*/