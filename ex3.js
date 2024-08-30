// Coding Challenge #3


const mark = {
    fullName: "Mark Miller",
    mass: 78, 
    height: 1.69 
};

const john = {
    fullName: "John Smith",
    mass: 92, 
    height: 1.95 
};


function calcBMI(person) {
    return person.mass / (person.height * person.height);
}


const markBMI = calcBMI(mark);
const johnBMI = calcBMI(john);


if (markBMI > johnBMI) {
    console.log(mark.fullName + "'s BMI (" + markBMI.toFixed(1) + ") is higher than " + john.fullName + "'s (" + johnBMI.toFixed(1) + ")!");
} else if (johnBMI > markBMI) {
    console.log(john.fullName + "'s BMI (" + johnBMI.toFixed(1) + ") is higher than " + mark.fullName + "'s (" + markBMI.toFixed(1) + ")!");
} else {
    console.log(mark.fullName + " and " + john.fullName + " have the same BMI (" + markBMI.toFixed(1) + ")!");
}