

//Coding Challenge #2
// function 
let tip =0;

const calcTip = (value)=>{
    if(value>=50 && value<=300){
        tip = (value / 100)*15; 
        console.log("tip = "+tip)
    }else{
        tip = (value /100)*20;
        console.log("tip = "+tip)
    }
    return tip;
}

// test 100
calcTip(100)

const bills = [125, 555, 44];

// push all the value into an array
const tips = [];
for(let i = 0; i < bills.length; i++){
    tips.push( calcTip(bills[i]));   
}

console.log(tips)


// combine 2 arrays into one
const billsAndTips = bills.concat(tips)
console.log(billsAndTips) 