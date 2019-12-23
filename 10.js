// Write a function sort that sorts a given array into ascending order.
// You cannot use the inbuilt ’.sort’ JS function.

let Sort = (array) => {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

console.log(Sort([12, 10, 15, 11, 14, 13, 16]));