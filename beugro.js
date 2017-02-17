// Create a function that takes an array of integers and returns the average of the even numbers from that array

function average1(arr) {
  return arr.reduce((a, c) => {return a + c}, 0) / arr.length;
}

function average2(arr) {
  const n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (typeof arr[i] !== 'number' || arr[i] % 1 !== 0) {
      console.error('array contains non integer elements');
      return;
    }
    sum = sum + arr[i];
  }
  return sum/n;
}

arr = [1, 2, 3, 1, 2, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3];

console.log(average1(arr));
console.log(average2(arr));
