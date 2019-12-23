// Write a function addElements to find the sum of the given elements in an array.

let addElements = (a) => {
    console.log(a.reduce((a, b) => a + b, 0));
}
addElements([5, 10, 3, 4]);