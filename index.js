function Closure(){
  let a=2
  let sum
  function add(){
    sum=a+3
    console.log(sum)
  }
  return add
}
const result=Closure()
result()

let obj={
  fname:"vamsi",
  lname:"krishna"
}
let obj1={
  fname:"vamsii",
  lname:"krishna"
}

let getFullName=function (From,state){
  console.log(this.fname+" "+ this.lname+" "+"from "+From+","+state)
}
getFullName.call(obj,"Nellore","AP")
getFullName.apply(obj1,["Gudur","AP"])

let printFullName=getFullName.bind(obj1,"Tirupati","AP")
printFullName()

function currying(a){
  return  function(b){
      return b?currying(a+b):a
  }
  }
let ans=currying(1)(2)()
// ans()
console.log(ans)

function multiply(a,b){
  console.log(a*b)
}
function sub(a,b){
  console.log(a-b)
}

function output(x,a,b){
  x(a,b)
}
output(sub,5,4)
output(multiply,2,3)
///palindrome
let a="madam"
function palindrome(str){
  let left=0
  let right=str.length-1
  while(left<right){
  if(str[left]!=str[right]){
    return false
  }
  left++
  right--
  return true
    
  }
}
console.log(palindrome(a))
//PrimeNumber
function isPrimeNumber(n){
  if(n<2) return `${n} not a prime number`
  for (let i = 2; i < n; i++) {
    if(n%i===0){
      return `${n} is not a Prime number`
    }
    return  `${n} is a Prime number`
  }
}
console.log(isPrimeNumber(8))
//sorting
let arr=[0,9,8,7,6,5,4,3,2,1,1,11,12,11,12,16,14,19,18,20]
for(let i=0;i<arr.length;i++){
  for(let j=i;j<arr.length;j++){
    if(arr[i]>arr[j]){
      let swap=arr[i]
      arr[i]=arr[j]
      arr[j]=swap
    }
  }
}
console.log(arr,"Sorted array")

// (function() {
//   var a = 1;
//   console.log(a,"a")
// })();


const nestedArray = [1, [2, [3, 4,[8,9,0,9]], 5], 6];

function FlattenArray(arr){
  let faltenarr=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      faltenarr=faltenarr.concat(FlattenArray(arr[i]))
    }else{
      faltenarr.push(arr[i])
    }
  }
  return faltenarr
}
const res=FlattenArray(nestedArray)
console.log(res,"Flaten array")

function Sorting(arr){
  let swaped;
  do{
    swaped=false
    for(let i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
        let temp=arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=temp
        swaped=true
      }
    }
  }
  while (swaped){
    console.log(arr,"arr")
  }
}
function selectionSort(arr){
  let n=arr.length
  for(let i=0;i<n-1;i++){
    let minIndex=i
    for(let j=i;j<n;j++){
      if(arr[j]<arr[minIndex]){
        minIndex=j
      }
    }
    if(minIndex !=i){
      let temp=arr[i]
      arr[i]=arr[minIndex]
      arr[minIndex]=temp
    }
  }
  return arr
}
Sorting(res)
const resultt=selectionSort(res)
console.log(resultt,"result")



function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
      const nestedKey = `${prefix}${key}`;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
          Object.assign(acc, flattenObject(obj[key], `${nestedKey}.`));
      } else {
          acc[nestedKey] = obj[key];
      }
      return acc;
  }, {});
}

// Example object
const nestedObject = {
  a: {
      b: 1,
      c: {
          d: 2,
          e: {
              f: 3
          }
      }
  },
  g: 4
};

// Flatten the object
const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);

function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      } 
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const arr1 = [5, 3, 8, 4, 2, 7, 1];
console.log(quickSort(arr1)); // Output: [1, 2, 3, 4, 5, 7, 8]
//The time complexity of the QuickSort algorithm depends on the choice of pivot. In the average case, QuickSort has a time complexity of O(n log n),

let isOn = false;

function toggle() {
  isOn = !isOn; // Toggle the value of isOn
  console.log(isOn ? 'ON' : 'OFF');
}

toggle(); // Output: ON
toggle(); // Output: OFF
toggle(); // Output: ON
//DUPLICATES
let names = ["John", "Jane", "john", "Alice", "Jane"];
let uniqueNames = [];

for (let i = 0; i < names.length; i++) {
  let isDuplicate = false;
  let currentName = names[i].toLowerCase();
  
  for (let j = 0; j < uniqueNames.length; j++) {
    if (uniqueNames[j].toLowerCase() === currentName) {
      isDuplicate = true;
      break;
    }
  }
  
  if (!isDuplicate) {
    uniqueNames.push(names[i]);
  }
}
function findDuplicates(nums) {
  const duplicates = new Set();
  const seen = new Set();
  for (let num of nums) {
      if (seen.has(num)) {
          duplicates.add(num);
      } else {
          seen.add(num);
      }
  }
  return Array.from(duplicates);
}

// Example usage:
const numssss = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(numssss)); // Output: [2, 3]


console.log(uniqueNames);


function removeDuplicates(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// Example usage
var numbers = [1, 2, 3, 4, 2, 3, 5, 6, 5];
var uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);// Output: [1, 2, 3, 4, 5, 6]

function countDuplicates(arr) {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  var duplicates = {};
  for (var num in counts) {
    if (counts[num] > 1) {
      duplicates[num] = counts[num];
    }
  }

  return duplicates;
}

// Example usage
var numbers = [1, 2, 3, 4, 2, 3, 5, 6, 5];
var duplicateCounts = countDuplicates(numbers);
console.log(duplicateCounts); // Output: { '2': 2, '3': 2, '5': 2 }
function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// Example usage:
const array = [5, 2, 10, 8, 3];
const secondLargest = findSecondLargest(array);
console.log("Second largest element:", secondLargest);///Second largest element: 8
let preferences = {
  'Alice': ['Bob', 'Charlie'],
  'Bob': ['Alice','David','Charlie'],
  'Charlie': ['Bob', 'David'],
  'David': ['Alice','Bob','Charlie']
};

function pairUp(preferences){
let freeParticpants=[...new Set(Object.keys(preferences))]
let pairs=[]
for(let particpant of freeParticpants){
  let name=particpant
  //console.log(pairs)
  let avilablePartners=preferences[particpant].filter(partner=>!pairs.some(pair=>pair.includes(partner)))
  //console.log(avilablePartners)
if(avilablePartners.length>0){
  let partner=avilablePartners[0]
  let pair=[name,partner]
  pairs.push([name,partner])
}
}
return pairs
}

const resulttt=pairUp(preferences)
console.log("Avilable pairs",resulttt)
function maxAdjacentCount(inputStr) {
  if (!inputStr) return [];

  let maxChar = inputStr[0];
  let maxCount = 1;
  let currentChar = inputStr[0];
  let currentCount = 1;

  for (let i = 1; i < inputStr.length; i++) {
      if (inputStr[i] === currentChar) {
          currentCount++;
      } else {
          if (currentCount > maxCount) {
              maxChar = currentChar;
              maxCount = currentCount;
          }
          currentChar = inputStr[i];
          currentCount = 1;
      }
  }

  if (currentCount > maxCount) {
      maxChar = currentChar;
      maxCount = currentCount;
  }

  return [maxChar, maxCount];
}

// Example usage
let inputStr = "aabbccdd";
let output = maxAdjacentCount(inputStr);
console.log(output);  // Output: ['b', 3]
function compressString(input) {
  let newString=""
  let count=1

  for(let i=0;i<input.length;i++){
    if(input[i]===input[i+1]){
      count++
    }
    else{
      newString=newString+input[i]+count
      count=1
    }
  }
  return newString
}

let input = "aaabbbcccdefgg";
let output = compressString(input);
console.log(output); // Output: "a3b3c3d1e1f1g2"
function findTwoSum(nums, target) {
  const numMap = new Map(); // Map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]; // Calculate the complement required to reach the target sum
      if (numMap.has(complement)) {
          return [numMap.get(complement), i] // Found the pair, return their indices
      }
      numMap.set(nums[i], i); // Store current number and its index in the map
  }

  return []; // If no such pair found
}

// Example usage:
const nums = [4, 7,6, 11,3, 15];
const target = 10;
console.log(findTwoSum(nums, target)); // Output: [0, 1] (Indices of numbers 2 and 7 which add up to 9)
function rotateArray(nums, k) {
  const n=nums.length
  k=k%n
  
  reverse(nums,0,n-1)  // Reverse the entire array
  reverse(nums,0,k-1)  // Reverse the first k elements
  reverse(nums,k,n-1) // Reverse the remaining elements
  return nums
}

function reverse(nums, start, end) {
   while(start<end){
     let temp=nums[start]
     nums[start]=nums[end]
     nums[end]=temp
     start++
     end--
   }
}

// Example usage:
const numss = [1, 2, 3, 4, 5, 6, 7];
const k = 2;
console.log(rotateArray(numss, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
function isValid(s) {
  const stack = [];
  const mapping = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let char of s) {
      if (char in mapping) { // If the current character is a closing bracket
          const topElement = stack.pop() || '#'; // Use '#' as placeholder if stack is empty
          if (topElement !== mapping[char]) {
              return false; // If the top element of the stack is not the corresponding opening bracket
          }
      } else {
          stack.push(char); // If the current character is an opening bracket, push it onto the stack
      }
  }

  return stack.length === 0; // If the stack is empty, all brackets are properly closed
}

// Example usage:
const s1 = "()"; // Output: true
const s2 = "()[]{}"; // Output: true
const s3 = "(]"; // Output: false
const s4 = "([)]"; // Output: false
const s5 = "{[]}"; // Output: true
console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
console.log(isValid(s5));
function longestSubstringWithoutRepeating(s) {
  let maxLength = 0; // Initialize the maximum length of the substring
  let start = 0; // Initialize the start index of the window
  let longestSubstring = ""; // Initialize the longest substring

  const charIndexMap = new Map(); // Map to store the index of each character

  for (let end = 0; end < s.length; end++) {
      const char = s[end];
      if (charIndexMap.has(char)) {
          // If the current character has been seen before, update the start index to the next index of the repeating character
          start = Math.max(start, charIndexMap.get(char) + 1);
      }
      // Update the index of the current character in the map
      charIndexMap.set(char, end);
      // Update the maximum length of the substring
      if (end - start + 1 > maxLength) {
          maxLength = end - start + 1;
          longestSubstring = s.substring(start, end + 1);
      }
  }

  return [longestSubstring,maxLength]
}

// Example usage:
const s = "abcabcbb";
console.log(longestSubstringWithoutRepeating(s)); // Output: ["abc",3]
function findLargestNumber(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
      return "Array is empty.";
  }

  // Initialize the largest number to the first element of the array
  let largest = numbers[0];

  // Loop through the array starting from the second element
  for (let i = 1; i < numbers.length; i++) {
      // If the current number is greater than the current largest number, update the largest number
      if (numbers[i] > largest) {
          largest = numbers[i];
      }
  }

  return largest;
}

// Test the function
const numbers = [5, 8, 2, 10, 3];
console.log("The largest number is:", findLargestNumber(numbers)); // Output: 10
function factorial(n) {
  // Base case: if n is 0 or 1, factorial is 1
  if (n === 0 || n === 1) {
      return 1;
  } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
  }
}

// Test the function
console.log("Factorial of 5:", factorial(5)); // Output: 120
function mergeSortedArrays(arr1, arr2) {
  // Initialize an empty array to store the merged result
  let mergedArray = [];

  // Pointers for iterating through arr1 and arr2
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Iterate through both arrays simultaneously
  while (i < arr1.length && j < arr2.length) {
      // Compare the current elements of arr1 and arr2
      if (arr1[i] < arr2[j]) {
          // If element in arr1 is smaller, push it to mergedArray
          mergedArray.push(arr1[i]);
          i++; // Move pointer for arr1 to next element
      } else {
          // If element in arr2 is smaller or equal, push it to mergedArray
          mergedArray.push(arr2[j]);
          j++; // Move pointer for arr2 to next element
      }
  }

  // If there are remaining elements in arr1 or arr2, push them to mergedArray
  while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
  }
  while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
  }

  return mergedArray;
}

// Test the function
const arr11 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log("Merged Sorted Array:", mergeSortedArrays(arr11, arr2)); // Output: [1, 2, 3, 4, 5, 6]
function isAnagram(str1, str2) {
  // Remove spaces and punctuation, and convert to lowercase
  const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  // Check if the lengths of the cleaned strings are different
  if (cleanStr1.length !== cleanStr2.length) {
      return false;
  }

  // Sort the characters of both strings and compare them
  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  // Return true if the sorted strings are equal, indicating that they are anagrams
  return sortedStr1 === sortedStr2;
}

// Test cases
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world")); // Output: false
/////subarrayWithGivenSumSTART
let N = 5
let S = 12
const A = [1, 2, 3, 7, 5];

for(let i=0;i<N;i++){
let sum=0 
 for(j=i;j<N;j++){
   sum+=A[j]
   if(sum===S){
     console.log([i+1,j+1])
   }
 }
}
//////subarrayWithGivenSumEND
///TRIPPLEATES
let arrr=[2,3,4,1]
//tripletes
//arr.sort((a,b)=>a-b)
function tripletes(arr){
  arr.sort((a,b)=>a-b)
  let count=0
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
      const sum=arr[i]+arr[j]
      if(binarySearch(arr,sum)){
        count ++
      }
    }
  }
  return count
}

function binarySearch(arr,target){
  let left=0
  let right=arr.length-1
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]===target){
      return true
    }else if(arr[mid]<target){
      left=mid+1
    }else{
      right=mid-1
    }
  }
  return false
}

console.log(tripletes(arrr))
///TRIPLATES END
///MISSING NUMBER IN ARRAY
function findMissingNumber(nums) {
  const n = nums.length + 1; // Since one number is missing
  const expectedSum = (n * (n + 1)) / 2; // Sum of integers from 1 to n
  const actualSum = nums.reduce((acc, num) => acc + num, 0); // Sum of elements in the array
  return expectedSum - actualSum; // Missing number is the difference
}

// Test the function
const numbers = [1, 2, 4, 5, 6];
console.log("Missing number:", findMissingNumber(numbers)); // Output: 3
///END
///SMALLEST ELEMENT IN AN ARRAY
function findSmallestElement(arr) {
  if (arr.length === 0) {
      return null; // Return null if the array is empty
  }

  let smallest = arr[0]; // Initialize smallest element with the first element

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
          smallest = arr[i]; // Update smallest if a smaller element is found
      }
  }

  return smallest; // Return the smallest element
}

// Test the function
const arrNUms = [4, 2, 7, 1, 9, 5];
console.log("Smallest element:", findSmallestElement(arrNUms)); // Output: 1
//////CONVER ARRAY INTO ZIG ZAG ARRAY
function zigzag(arr) {
  const n = arr.length;
  let flag = true;

  for (let i = 0; i < n - 1; i++) {
      if (flag) {
          if (arr[i] > arr[i + 1]) {
              swap(arr, i, i + 1);
          }
      } else {
          if (arr[i] < arr[i + 1]) {
              swap(arr, i, i + 1);
          }
      }
      flag = !flag;
  }

  return arr;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Test the function
const arr111 = [4, 3, 7, 8, 6, 2, 1];
console.log("Zig-Zag array:", zigzag(arr111)); // Output: [3, 7, 4, 8, 2, 6, 1]
/////LAST INDEX OF GIVEN NUMBER
function lastIndex(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === target) {
          return i; // Return the index of the last occurrence of the target
      }
  }
  return -1; // Return -1 if the target is not found in the array
}

// Test the function
const arrval = [1, 3, 5, 3, 2, 3];
const targetVal = 3;
console.log("Last index of", target, ":", lastIndex(arrval, targetVal)); // Output: 5


///DATA MODIFICATION IMPACT ANALYSTICs
// Given original data
const originalData = {
  Sales_Category: {
    sales: {
      current: {
        February_week1: 256788.0,
        February_week2: 256788.0,
        February_week3: 256788.0,
        February_week4: 256788.0,
      },
      last: {
        February_week1: 42798.0,
        February_week2: 42798.0,
        February_week3: 42798.0,
        February_week4: 42798.0,
        March_week1: 42798.0,
      },
      variance: {
        February_week1: 500.0,
        February_week2: 500.0,
        February_week3: 500.0,
        February_week4: 500.0,
      },
    },
  },
  Margin_Category: {
    margin: {
      current: {
        February_week1: 256788.0,
        February_week2: 256788.0,
        February_week3: 256788.0,
        February_week4: 256788.0,
      },
      last: {
        February_week1: 42798.0,
        February_week2: 42798.0,
        February_week3: 42798.0,
        February_week4: 42798.0,
        March_week1: 42798.0,
      },
      variance: {
        February_week1: 500.0,
        February_week2: 500.0,
        February_week3: 500.0,
        February_week4: 500.0,
      },
    },
  },
};

// Function to convert data
function transformData(data) {
  const transformedData = [];

  // Iterate over each category (Sales_Category and Margin_Category)
  for (const categoryKey in data) {
    if (Object.prototype.hasOwnProperty.call(data, categoryKey)) {
      const category = data[categoryKey];

      // Iterate over each metric (sales and margin)
      for (const metricKey in category) {
        if (Object.prototype.hasOwnProperty.call(category, metricKey)) {
          const metric = category[metricKey];

          // Create an object for the metric
          const metricObject = {
            metric: metricKey.charAt(0).toUpperCase() + metricKey.slice(1), // Capitalize metric name (Sales or Margin)
            subRows: [],
          };

          // Iterate over each reference (current, last, variance)
          for (const refKey in metric) {
            if (Object.prototype.hasOwnProperty.call(metric, refKey)) {
              const reference = metric[refKey];

              // Create an object for each reference
              const referenceObject = {
                metric: metricKey,
                reference: refKey === 'last' ? 'compare' : refKey, // Change 'last' to 'compare'
              };

              // Copy week data
              for (const weekKey in reference) {
                if (Object.prototype.hasOwnProperty.call(reference, weekKey)) {
                  referenceObject[weekKey] = reference[weekKey];
                }
              }

              // Add referenceObject to subRows
              metricObject.subRows.push(referenceObject);
            }
          }

          // Add uniqueId and expandableCols
          if (metricKey === 'sales') {
            metricObject.uniqueId = 'salesSales';
            metricObject.expandableCols = 'metric';
          }

          // Push metricObject to transformedData
          transformedData.push(metricObject);
        }
      }
    }
  }

  return transformedData;
}

// Transform the original data
const transformedData = transformData(originalData);

// Output the transformed data
console.log(transformedData);
//////////////////////////////