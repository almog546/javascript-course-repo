// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Given a random non-negative number,
// you have to return the digits
// of this number within an array in reverse order

// pseudocode:

// input a number
// check if number is non-negative
// assign the number in an array
// reverse order the number in the array
// return the number in array

digitize(35231);

function digitize(n) {
  let array = []
  // n >= 0 ? console.log(n) : console.log('number is negative');
  if (n >= 0) {
    // console.log(n)
    array[0] = n;
    console.log(array)
  } else {
    console.log('number is negative')
  }
}
