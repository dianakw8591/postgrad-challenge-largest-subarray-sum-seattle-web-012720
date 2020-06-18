// let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

// Naive solution

// function largestSubarraySum(array) {
//   let max = 0;
//   for (let i=0; i < array.length; i++) {
//     let current = array[i];
//     if (current > max) {
//       max = current 
//     }
//     for (let j=i+1; j < array.length; j++) {
//       current += array[j]
//       if (current > max) {
//         max = current
//       }
//     }
//   }
//   return max
// }

function largestSubarraySum(array) {
  let current = array[0];
  let max = current > 0 ? current : 0;
  let window_end = 0;

  for (let i = 1; i < array.length; i++) {
    current += array[i]
    if (current > max) {
      max = current
      window_end = i;
    }
  }

  current = max;

  for (let i = 0; i < window_end; i++) {
    current -= array[i];
    if (current > max) {
      max = current;
    }
  }
  return max;
}