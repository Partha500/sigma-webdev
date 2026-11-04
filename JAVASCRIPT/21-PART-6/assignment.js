let larger=5;
let arr = [1,3,7,5,7,8,2,9,10];
function array(arr,larger){
   for(let i=0; i<arr.length; i++){
    if(arr[i] > larger ){
        console.log(arr[i]);
    }
   }
}
array(arr,larger);

// unique characters checking
function charCheck(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    let seenBefore = false;
    for (let j = 0; j < i; j++) {   // only look at earlier characters
      if (str[i] === str[j]) {
        seenBefore = true;
        break;
      }
    }
    if (!seenBefore) ans += str[i];
  }
  return ans;
}

console.log(charCheck("abcdeffghhijkkllm")); // "abcdefghijklm"

// longest string 
function longestString(arr) {
  let max = 0;
  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestString(["apple", "banana", "kiwi", "watermelon", "fig"]));

//vowel counting 
function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();   // so 'A', 'E', etc. are counted too

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Education\n"));   // 5
console.log(countVowels("rhythm\n"));      // 0
console.log(countVowels("JavaScript\n"));  // 3

//random no within a range 

let start = prompt("Enter the upper bound ");
let end = prompt("Enter the lower bound ");

function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * (diff +1) ) + start;
}
console.log(generateRandom(start,end));