// coding 4

// Create an array 'billss' containing all 10 test bill values
const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty arrays for the tips and the totals
const tipss = [];
const totals = [];

// Function to calculate the tip
function calcTiip(value) {
    return value >= 50 && value <= 300 ? (value * 0.15) : (value * 0.20);
}

// Use the 'calcTiip' function to calculate tips and total values
for (let i = 0; i < billss.length; i++) {
    const tiip = calcTiip(billss[i]);
    tipss.push(tiip);
    totals.push(billss[i] + tiip);
}

console.log("Tipss:", tipss);
console.log("Totals:", totals);

// Function to calculate the average
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Call the function with the 'totals' array
const averageTotal = calcAverage(totals);
console.log("Average Total:", averageTotal.toFixed(2));
