// 1. Linear Search

let arr = [17, 26, 35, 44, 53, 62, 71, 810, 99, 108];
let target = 71;

function linearSearch(arr, target) {
  let l = arr.length;

  for (let i = 0; i < l; i++) {
    if (arr[i] === target) {
      return `Target found at index number ${i}`;
    }
  }
  return "data not found";
}

console.log(linearSearch(arr, target)); 