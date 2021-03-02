function getEvenNumFromArray(arr) {
  let evenNumArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumArr.push(arr[i]);
    }
  }
  return evenNumArr;
}

let randomArray = [2, 23, 11, 27, 8, 92, 1, 104];
let evenNumArray = getEvenNumFromArray(randomArray);

console.log(`Array with Random Elements: ${randomArray}`);
console.log(`Array with Even Elements: ${evenNumArray}`);
