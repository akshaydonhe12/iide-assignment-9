// Write a function factorial that calculates the factorial of a positive integer. 

let factorial = (a) => { 

    if (a === 0)
   {
      return 1;
   }
    return a * factorial(a-1);
           
  }

console.log(factorial(8));