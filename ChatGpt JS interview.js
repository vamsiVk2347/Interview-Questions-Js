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