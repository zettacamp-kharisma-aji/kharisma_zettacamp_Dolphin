/**
 *
 * Write a function max_of_two(a, b) that takes in two integers, a and b, and returns the maximum of the two numbers without using any arrays or built-in functions like max().
 *
 */
function max_of_two(a, b) {
  // Your logic here
  //return a === b ? 'Kedua angka sama besar' : a > b ? a : b;

  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    console.log('Kedua angka sama besar');
  }
}

console.log(max_of_two(10, 5));
console.log(max_of_two(5, 10));
console.log(max_of_two(45, 66));
console.log(max_of_two(66, 45));
console.log(max_of_two(0.9, 0.099));
