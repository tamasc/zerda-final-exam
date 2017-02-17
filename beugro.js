// Create a function that takes an array of integers and returns the average of the even numbers from that array

function average(arr) {
  const n = arr.length;
  let evenNums = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (typeof arr[i] !== 'number' || arr[i] % 1 !== 0) {
      console.error('array contains non integer elements');
      return;
    }
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
      evenNums++;
    }
  }
  return sum/evenNums;
}

arr = [2, 2, 2, 2, 2, 2, 8];

console.log(average(arr));
