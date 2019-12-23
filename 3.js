// Write a function digitsum that calculates the digit sum of an integer. The digit sum of an integer is the sum of all its digits. 

let sumDigits = (num) => { 
    let starting = 0;
    let sum = 0;
    let numString = num.toString(); 
    
    for (var i = starting; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    return sum;
}
console.log(sumDigits(153));