let hello = function(){
    console.log("whats your name ");
}
hello();
hello = function(){
    console.log("dont know")
}
hello(); // here we changed the function using hello just like a variable 

// higher order functions
let song = function(){
    console.log("wind blows when i miss you ");
}

function multipleSongs(inside,count){
     for(let i=1; i<=count; i++){
        inside();
     }
}

multipleSongs(song,10);

// returns for higher order functions 

let request = prompt("Enter either odd or even");

function oddEvenFactory(req){
   if(req=="odd"){
    return function(n){
        console.log("Odd number",!(n%2==0));
    }
   }
   else if(req=="even"){
    return function(n){
        console.log("Even",n%2==0);
    }
   }
   else {
    console.log("wrong request");
   }
}
let  ans = oddEvenFactory(request); // in ans the function that  is being return by the oddEvenFactory function is be ing stored 
ans(prompt("enter a  number to check ")); // so when called with a given a number as parameter the function gets called with a arguments and give 

// Methods 
const calculator = {
    num : 2.17 ,
    
    add : function(a,b){    
          return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul(a,b){
        return a-b;
    },
    div(a,b){
        return a-b;
    }
}
console.log(calculator.num);
console.log("sum is ",calculator.add(2,5));
console.log("division is ",calculator.div(4,2));