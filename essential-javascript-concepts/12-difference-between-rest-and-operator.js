//rest
function sum(a, b, ...restExam) {
  console.log(restExam);
}

//list of item converted into array
sum(1, 2, 3, 4, 5);



//spread
let spreadExample = [1, 2, 3]

console.log(Math.min(...spreadExample))