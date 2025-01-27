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



function reverseString(str){
  let reverseStr=""
  for(let i=str.length-1;i>=0;i--){
    reverseStr+=str[i]
  }
  return reverseStr
}

console.log(reverseString("hello"))
console.log(reverseString("JavaScript"))
function isPalindrome(str) {
  str=str.toLowerCase()
  let n=str.length
  let i=0
  while(i<n){
    if(str[i]===str[n-i-1]){
      i++
      return true
    }
    return false
  }
}
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"))
function findLargestNumber(arr) {
  let n=arr.length
  let max=arr[0]
  for(let i=1;i<n;i++){
    for(j=i+1;j<n;j++){
      if(arr[i]>arr[j]){
        max=arr[i]
      }
    }
  }
  return max
}
console.log(findLargestNumber([1, 5, 3, 9, 2]))
console.log(findLargestNumber([-10, -5, -2, -20]))
function sumEvenNumbers(arr) {
  let n=arr.length
  let sum=0
  for(let i=0;i<n;i++){
    let num=arr[i]
    if(num%2===0){
      sum+=num
    }
  }
  return sum
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))
console.log(sumEvenNumbers([10, 15, 20, 25]))

function flattenArray(arr){
  let flatArr=[]
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      flatArr=flatArr.concat(flattenArray(arr[i]))
    }else{
      flatArr.push(arr[i])
    }
  }
  return flatArr
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]))
console.log(flattenArray([[1], [2, [3, 4], 5], [6]]))
function secondLargestNumber(arr) {
  let largestNum= arr[0]
  let secondLargestNum=-Infinity
  for(let i=1;i<arr.length;i++){
    if(arr[i]>largestNum){
      secondLargestNum=largestNum
      largestNum=arr[i]
    }else if( arr[i]>secondLargestNum && arr[i]<largestNum){
      secondLargestNum=arr[i]
    }
  }
  return secondLargestNum
}
console.log(secondLargestNumber([1, 5, 3, 9, 2]))

function removeDuplicates(arr){
  let array=[]
  for(let i=0;i<arr.length;i++){
  let isDuplicate=false
  for(let j=0;j<array.length;j++){
    if(arr[i]===array[j]){
      isDuplicate=true
      break
    }
  }
  if(!isDuplicate){
      array.push(arr[i])
    }
  }
  return array
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5]))
console.log(removeDuplicates([10, 10, 10, 1, 2, 3]))


function removeDuplicates(arr){
  let result=[]
  let seen={}
  for(let num of arr){
    if(!seen[num]){
      result.push(num)
      seen[num]=true
    }
  }
  return result
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5]))
console.log(removeDuplicates([10, 10, 10, 1, 2, 3]))

function mergeSortedArrays(arr1, arr2){
  let mergedArr=[]
  let i=0;
  let j=0;
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      mergedArr.push(arr1[i])
      i++
    }else{
      mergedArr.push(arr2[j])
      j++
    }
  }
  
  while(i<arr1.length){
  mergedArr.push(arr1[i])
  i++
  }
  while(j<arr2.length){
    mergedArr.push(arr2[j])
    j++
  }
  return mergedArr
}
console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]))
console.log(mergeSortedArrays([1, 10, 15], [5, 6, 7, 8]))

function findMissingNumber(arr, n) {
  for(let i=1;i<n;i++){
    if(!arr.includes(i)){
      return i
    }
  }
}
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8))
console.log(findMissingNumber([1, 2, 3, 5], 5))

function findMissingNumbers(arr){
  arr.sort((a,b)=>a-b)
  let min=arr[0]
  let max=arr[arr.length-1]
  let result=[]
  for(let i=min;i<max;i++){
    if(!arr.includes(i)){
      result.push(i)
    }
  }
  return result
}
console.log(findMissingNumbers([1, 2, 4,6,9,10]))

function intersection(arr1, arr2) {
  let result=[]
  for(let num of arr1){
    if(arr2.includes(num)){
      result.push(num)
    }
  }
  return result 
}
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersection([1, 2, 2, 1], [2, 2]))
function groupAnagrams(strs) {
  let result={}
  for(let str of strs){
    // console.log(str)
    let newstr=str.split("").sort().join("")
    if(!result[newstr]){
      result[newstr]=[]
    }
    result[newstr].push(str)
  }
  return Object.values(result)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams(["", "b"]))

function isValid(s){
  let stack=[]
  const mapping={
    '}':'{',
    ")":"(",
    "]":"["
  }
  for(let char of s){
    if(char in mapping){
      const topElement=stack.pop()
      if(topElement!==mapping[char]){
        return false
      }
    }else{
      stack.push(char)
    }
  }
  return stack.length===0
}
console.log(isValid("(]"))
console.log(isValid("()[]{}"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))


function findPairsWithSum(arr,target) {
  let result={}
  let pairs=[]
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]===target){
        let sortArr=[arr[i], arr[j]].sort((a, b) => a - b).toString();
        if(!result[sortArr]){
          result[sortArr]=true
          pairs.push([arr[i],arr[j]])
        }
      }
    }
  }
  return pairs
}
console.log(findPairsWithSum([1, 2, 3, 4, 3, 2, 1], 4))
console.log(findPairsWithSum([1, 5, 7, -1, 5], 6))
function lengthOfLongestSubstring(s){
let maxLength=0;
let start=0;
let charMap={}
let longestSubsrting=""
for(let right=0;right<s.length;right++){
  if(charMap[s[right]]!==undefined){
    start=Math.max(start,charMap[s[right]]+1)
  }
  charMap[s[right]]=right
  
  let currentLength=right-start+1;
  if(currentLength>maxLength){
    maxLength=currentLength;
    longestSubsrting=s.slice(start,right+1)
  }
}
return {maxLength,longestSubsrting}
}
console.log(lengthOfLongestSubstring("abcabcbb"));  
console.log(lengthOfLongestSubstring("bbbbb"));     
console.log(lengthOfLongestSubstring("pwwkew"));    

function mergeIntervals(intervals){
  intervals.sort((a,b)=>a[0]-b[0])
  let result=[intervals[0]]
  for(let i=0;i<intervals.length;i++){
    let currentInterval=intervals[i]
    let lastMergedInterval=result[result.length-1]
    if(currentInterval[0]<=lastMergedInterval[1]){
      lastMergedInterval[1]=Math.max(lastMergedInterval[1],currentInterval[1])
    }else{
      result.push(currentInterval)
    }
  }
  return result
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(mergeIntervals([[1, 4], [4, 5]]));

function reverseWords(str){
  const words=str.trim().split(/\s+/)
  const reverseString=words.reverse()
  return reverseString.join(" ")
}
console.log(reverseWords("the sky is blue"));
function topKFrequent(arr,k){
  let count={}
  let result=[]
  for(let num of arr){
    if(count[num]){
      count[num]+=1
    }else{
      count[num]=1
    }
  }
  const entries=Object.entries(count)
  entries.sort((a,b)=>b[1]-a[1])
  for(let i=0;i<k;i++){
    result.push(parseInt(entries[i][0]))
  }
  return result
}
console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([9, 1, 2, 3, 4, 9, 9, 2, 3], 3))
console.log(topKFrequent([4, 5, 6, 7, 8, 5, 6, 5, 4], 1))
console.log(topKFrequent([1, 1, 2, 2, 3, 3, 3], 2))

function findDuplicates(arr){
  let seen={}
  let duplicates=[]
  for(let num of arr){
    if(seen[num]){
      duplicates.push(num)
    }else{
      seen[num]=true
    }
  }
  return duplicates
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]))

function productExceptSelf(arr){
  let result= new Array(arr.length).fill(1)
  let leftProduct=1
  let rightProduct=1
  for(let i=0;i<arr.length;i++){
    result[i]=leftProduct
    leftProduct*=arr[i]
  }
  for(let j=arr.length-1;j>=0;j--){
    result[j]*=rightProduct
    rightProduct*=arr[j]
  }
  console.log(result)
}

productExceptSelf([1,2,3,4])
function collectGrades(arr){
  let grades={}
  for(let obj of arr){
    if(!grades[obj.name]){
      grades[obj.name]=[]
    }
    grades[obj.name].push(obj.grade)
  }
  return grades
}
console.log(collectGrades( [
    { name: "abc", grade: "A" },
    { name: "xyz", grade: "A+" },
    { name: "abc", grade: "C" },
    { name: "jkl", grade: "A" }
  ]))

function deepClone(obj){
  if(obj===null || typeof obj!=='object'){
    return obj
  }
  let clone=Array.isArray(obj)?[]:{}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      clone[key]=deepClone(obj[key])
    }
  }
  return clone
}
let original = { 
  name: "John", 
  age: 30, 
  address: { city: "New York", zip: 10001 },
  hobbies: ["reading", "sports"]
};

let clone =deepClone(original)
clone.name="vamsi"
console.log(original)
console.log(clone)

function arrayToObject(arr, key) {
  let result={}
  for(let obj of arr){
    result[obj[key]]=obj
  }
  return result
  
}
console.log(arrayToObject([{id:1,name:"vamsi"},{id:2,name:"John"}],"name"))

let array1=[{id:1,name:"vamsi"},{id:2,name:"John"}]
let obj=Object.assign({},array1)
console.log(obj)
let array2=[1,2,3,5,6,7]
let newObj={}
for(let i=0;i<array2.length;i++){
  newObj[i]=array2[i]
}
console.log(newObj)
function removeDuplicates(arr,key){
  let seen={}
  let result=[]
  for(let i=0;i<arr.length;i++){
    const obj=arr[i]
    if(!seen[obj[key]]){
      seen[obj[key]]=true
      result.push(obj)
    }
  }
  return result
}

let arr = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 1, name: "Alice" },
    { id: 3, name: "Charlie" }
];

let result = removeDuplicates(arr, "id");
console.log(result);


function findLongestWord(str) {
  const words = str.split(' ');
  let longest = "";
  words.forEach(word => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const originall = { name: 'John', address: { city: 'New York', zip: 10001 } };
const cloned = deepClone(originall);
cloned.address.city = 'Los Angeles';
console.log(original.address.city);
//Implement a Simple Event Emitter
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  }
}

const emitter = new EventEmitter();
function onFoo(data) {
  console.log('foo event received:', data);
}
emitter.on('foo', onFoo);
emitter.emit('foo', { key: 'value' }); // Output: foo event received: { key: 'value' }
emitter.off('foo', onFoo);

function toBinary(num) {
  return num.toString(2);
}
console.log(toBinary(5)); // Output: "101"
//Implement a Simple Queue
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
//Implement a Simple Stack
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output: 2

function romanToInt(roman) {
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanMap[roman[i]];
    const nextVal = romanMap[roman[i + 1]];
    result += (currentVal < nextVal) ? -currentVal : currentVal;
  }
  return result;
}
console.log(romanToInt("IX")); // Output: 9
//Find All Permutations of a String
function permute(str) {
  if (str.length === 0) return [''];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = permute(remainingChars);
    remainingPermutations.forEach(perm => result.push(char + perm));
  }
  return result;
}
console.log(permute("abc"));
//commonElements
function commonElements(...arrays) {
  let result = [];
  
  // Iterate through the elements of the first array
  for (let i = 0; i < arrays[0].length; i++) {
    let isCommon = true;
    
    // Check if the element exists in all other arrays
    for (let j = 1; j < arrays.length; j++) {
      let found = false;
      // Search for the element in the current array (arrays[j])
      for (let k = 0; k < arrays[j].length; k++) {
        if (arrays[j][k] === arrays[0][i]) {
          found = true;
          break;
        }
      }
      
      if (!found) {
        isCommon = false;
        break;
      }
    }
    
    // If the element is common to all arrays, add it to the result
    if (isCommon) {
      result.push(arrays[0][i]);
    }
  }
  
  return result;
}

console.log(commonElements([1, 2, 3], [2, 3, 4], [3, 5, 6])); // Output: [3]
//firstNonRepeating
function firstNonRepeating(str) {
  // Create an object to store character frequencies
  let charCount = {};
  
  // Count the frequency of each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char] += 1;
    }
  }
  
  // Check for the first character that appears only once
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char; // First non-repeating character
    }
  }
  
  return null; // No non-repeating character found
}

console.log(firstNonRepeating("aabbcc")); // Output: null
console.log(firstNonRepeating("aabcc"));  // Output: "b"
//longestIncreasingSubsequence
function longestIncreasingSubsequence(nums) {
  if (nums.length === 0) return 0;

  let dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}
//findFirstDuplicate
function findFirstDuplicate(arr) {
  // Sort the array first
  arr.sort((a, b) => a - b);
  
  // Iterate through the array and check for duplicates
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      return arr[i]; // Found the first duplicate
    }
  }

  return null; // No duplicates found
}
//generateSubsets
function generateSubsets(nums) {
  let result = [];  // Start with an empty array, but no empty subset

  // Iterate through each number in the input array
  for (let num of nums) {
    // For each current subset in result, create a new subset by adding the current number
    let newSubsets = result.map(subset => [...subset, num]);
    // console.log(newSubsets);
    
    // Add the new subsets to the result
    result.push(...newSubsets);

    // Also include the number as a subset (i.e., itself)
    result.push([num]);
  }

  return result;  // Return the power set (all subsets except the empty subset)
}
console.log(generateSubsets([1, 2, 3]));

function toTitleCase(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(toTitleCase("hello world")); // Output: "Hello World"
//Check if a string has balanced parentheses
function isBalanced(str) {
  const stack = [];
  for (let char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("(a + b)")); // Output: true
console.log(isBalanced("(a + b"));  // Output: false

function isPerfectSquare(num) {
  return Math.sqrt(num) % 1 === 0;
}

console.log(isPerfectSquare(16)); // Output: true
console.log(isPerfectSquare(14)); // Output: false
//findMedian
function findMedian(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  const n = arr.length;

  if (n % 2 !== 0) {
    // If the length is odd, return the middle element
    return arr[Math.floor(n / 2)];
  } else {
    // If the length is even, return the average of the two middle elements
    const mid1 = arr[n / 2 - 1];
    const mid2 = arr[n / 2];
    return (mid1 + mid2) / 2;
  }
}

console.log(findMedian([1, 2, 3, 4, 5])); // Output: 3 (odd number of elements)
console.log(findMedian([1, 2, 3, 4, 5, 6])); // Output: 3.5 (even number of elements)


function reduceString(s) {
  let stack = [];
  
  for (let char of s) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
          stack.pop();  // Remove the last character if it's the same as current one
      } else {
          stack.push(char);  // Otherwise, add the character to the stack
      }
  }
  
  let result = stack.join('');  // Convert the stack back to a string
  return result === '' ? "Empty String" : result;  // Return result or "Empty String" if empty
}

// Test cases
console.log(reduceString("aaabccddd"));  // Output: "abd"
console.log(reduceString("aa"));         // Output: "Empty String"
console.log(reduceString("baab"));       // Output: "Empty String"
//camelcase
function camelcase(s) {
  let wordCount = 1;  // Start with 1 because the first word is always lowercase.
  
  // Iterate over the string and count uppercase letters
  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i].toUpperCase()) {
          wordCount++;  // Each uppercase letter indicates a new word.
      }
  }
  
  return wordCount;
}
















