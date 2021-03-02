function findRepeatedNumFromArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr[j];
      }
    }
  }
}

function getArrayWithADuplicateElement() {
  let arr = [];
  for (let i = 1; i <= 101; i++) {
    arr.push(i);
  }
  let random = arr[Math.floor(Math.random() * arr.length)];
  arr[random] = random;
  return arr;
}

let consecArrWithDuplicateElement = getArrayWithADuplicateElement();
let repeatedElement = findRepeatedNumFromArray(consecArrWithDuplicateElement);

console.log(
  `Consecutive Array between 0 to 101 with one repeated element is: [${consecArrWithDuplicateElement}]`
);
console.log(`Repeated Element in the Array is: ${repeatedElement}`);
