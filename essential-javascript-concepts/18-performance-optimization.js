// Performance optimization is a crucial aspect of web development to ensure fast and efficient user experiences. Let's explore three key techniques for optimizing website performance: minification and compression, lazy loading resources, and asynchronous loading of scripts.

// 1. Minification and Compression:
// Minification:
// Minification involves removing unnecessary characters from code without affecting its functionality. This reduces file sizes, leading to faster downloads and improved performance.

// For example, consider the following JavaScript code:

function calculateTotal(price, quantity) {
  var result = price * quantity;
  return result;
}

console.log(calculateTotal(2, 2))

// After minification:
function calculateTotal1(a,b){return a*b}

console.log(calculateTotal1(5, 5))