// Create a function that takes an array of integers and returns the average of the even numbers from that array

function average(arr) {
  return arr.reduce((a, c) => {return a + c}, 0) / arr.length;
}


console.log(average([1, 2, 3, 1, 2, 3]));
