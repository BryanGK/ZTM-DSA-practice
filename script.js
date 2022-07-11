// const num = Math.pow(6, 100);
// console.log(num)

// function rowSumOddNumbers(n) {
//   let result = 0;
//   let num = ((n - 1) * n) + 1
//   if (n === 1) return 1;
//   for (let i = 1; i <= n; i++) {
//     result += num;
//     num += 2;
//   }
//   return result;
// }

// console.log(rowSumOddNumbers(3));

// function reverseString(string) {
//   const stringArr = string.split('');
//   const reversedStringArr = [];
//   for (let i = string.length; i >= 0; i--) {
//     reversedStringArr.push(stringArr[i]);
//   }
//   return reversedStringArr.join('');
//   // return string.split('').reverse().join('');
// }

// console.log(reverseString('Hello world!'));

// function mergeSortedArray(array1, array2) {
//   const mergedArray = [];
//   let pos1 = 0;
//   let pos2 = 0;
//   while (pos1 < array1.length || pos2 < array2.length) {
//     if (array1[pos1] === array2[pos2]) {
//       mergedArray.push(array1[pos1])
//       mergedArray.push(array2[pos2]);
//       pos1++;
//       pos2++;
//     }
//     if (array1[pos1] < array2[pos2] || array2[pos2] === undefined) {
//       mergedArray.push(array1[pos1]);
//       pos1++;
//     } else if (array1[pos1] > array2[pos2] || array1[pos1] === undefined) {
//       mergedArray.push(array2[pos2]);
//       pos2++;
//     }
//   }
//   return mergedArray;
// }

// const array1 = [0, 9, 14, 11, 44, 77, 650, 800, 1000, 10001];
// const array2 = [3, 9, 13, 42, 900, 1000];
// console.log(mergeSortedArray(array1, array2));

// var maxSubArray = function (nums) {
//   let largestSum = 0;
//   let workingSum = 0;
//   if (nums.length === 1) return nums[0];
//   for (let i = 0; i <= nums.length - 1; i++) {
//     workingSum = nums[i];
//     for (let j = i + 1; j <= nums.length; j++) {
//       if (workingSum > largestSum) largestSum = workingSum;
//       workingSum += nums[j];
//     }
//   }
//   return largestSum;
// };

// console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([5, 4, -1, 7, 8]));

function firstRecurringNum(array) {
  let index = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) if (index > j) index = j;
    }
  }
  return array[index];
}

function firstRecurringNum2(array) {
  const numObject = {}
  for (let i = 0; i < array.length; i++) {
    if (numObject[array[i]]) return array[i];
    numObject[array[i]] = i;
  }
}

console.log(firstRecurringNum([2, 5, 5, 2, 4, 5, 3]));
console.log(firstRecurringNum2([2, 5, 5, 2, 4, 5, 3]));
console.log(firstRecurringNum([1, 2, 3]));