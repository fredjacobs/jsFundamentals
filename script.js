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

console.log('Updated File Content.');





