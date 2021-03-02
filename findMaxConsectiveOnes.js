function findMaxConsecutiveOnes(arr) {
  let maxCount = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 0 ? (current = 0) : current++;
    if (current > maxCount) {
      maxCount = current;
    }
  }
  return maxCount;
}

let firstInputArray = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
let seconInputArray = [1, 0, 0, 0, 0, 1, 0, 0, 0, 1];
let maxConsOnesFirstArray = findMaxConsecutiveOnes(firstInputArray);
let maxConsOnesSecondArray = findMaxConsecutiveOnes(seconInputArray);

console.log(
  `${firstInputArray} - Output :${maxConsOnesFirstArray} [Max num of consecutive 1's is ${maxConsOnesFirstArray}]`
);
console.log(
  `${seconInputArray} - Output :${maxConsOnesSecondArray} [Max num of consecutive 1's is ${maxConsOnesSecondArray}]`
);
