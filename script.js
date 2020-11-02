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

    console.log(markBMI > johnBMI);

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





