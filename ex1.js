//Coding Challenge #1
//  Arrow function to calculate average
const calcAverage = (a, b, c) => (a + b + c) / 3;


const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(avgDolphins1, avgKoalas1);
console.log(avgDolphins2, avgKoalas2);
// Function to check the winner
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins!');
  }
};


checkWinner(avgDolphins1, avgKoalas1); 
checkWinner(avgDolphins2, avgKoalas2); 


