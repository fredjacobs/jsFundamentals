const markWeightOne = 70;
const johnWeightOne = 92;

const markHeightOne = 1.69;
const johnHeightOne = 1.95;


const markWeightTwo = 95;
const johnWeightTwo = 85;

const markHeightTwo = 1.88;
const johnHeightTwo = 1.76;

let markHigherBMI;

function getBMI(mass, height) {

    console.log(mass / height ** 2);

    return mass / height ** 2;
}

function compareBMI(markBMI, johnBMI) {

    let outputString = "";

    if (markBMI > johnBMI) {

        outputString = `Mark's BMI ${markBMI} is higer than John's BMI ${johnBMI}`;

    } else {

        outputString = `John's BMI ${johnBMI} is higer than Mark's BMI ${markBMI}`;

    }

    console.log(outputString);

}

const markBMIOne = getBMI(markWeightOne, markHeightOne);
const johnBMIOne = getBMI(johnWeightOne, johnHeightOne);

compareBMI(markBMIOne, johnBMIOne);

const markBMITwo = getBMI(markWeightTwo, markHeightTwo);
const johnBMITwo = getBMI(johnWeightTwo, johnHeightTwo);

compareBMI(markBMITwo, johnBMITwo);



//Template Literal

const outputString = `Mark's BMI is ${markBMIOne}`;
console.log(outputString);

//Multiline Strings

console.log(`Make a 
multiline 
string`);

//convert to number

const inputYear = '1991';

console.log(Number(inputYear));

//convert to string

console.log(String(23));

console.log(1 - '1');

//Type conversion & Type Coercion


//################################
//TRUTHY & FALSY Values
//################################

//Falsy Values:
// 0, '', undefined, null, NaN

//Truthy Values
//All else

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Fred'));
console.log(Boolean({}));



const num = prompt("What is your favourite number?");

const convertNum = Number(num);

console.log(num, typeof num);



if (convertNum === 23){
    console.log(`23 is a cool number`, typeof convertNum);
}


//Coding challenge 3

const avgScoreDolphins = ( 97 + 112 + 101 ) / 3;
const avgScoreKoalas = ( 109 + 95 + 106 ) / 3;

console.log(`Average Score for Dolphins: ${avgScoreDolphins}`);
console.log(`Average Score for Koa;as: ${avgScoreKoalas}`);

let winner = "";

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins > 100) {

    winner = `Dolphins are winner. Score: ${avgScoreDolphins}`;

}else if(avgScoreDolphins < avgScoreKoalas && avgScoreKoalas > 100){

    winner = `Koalas are winners. Score: ${avgScoreKoalas}`;

}else if(avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {

    winner = "DRAW";
   
}else{

    winner = "No Trophy Winner!";

}

console.log(winner);

const age = 46;
//Ternary operator
const drink = age >= 18 ? 'I like to drink wine' : 'I like to drink water'; 

console.log(drink);


//Use inside a template literal
console.log(`What do I like to drink? : ${age >= 18 ? 'I like to drink wine' : 'I like to drink water'}`);


const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`);






