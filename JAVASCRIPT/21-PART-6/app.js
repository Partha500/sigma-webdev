function printInfo(name,age){
    console.log(`${name}'s age is ${age}. `);
}
printInfo("partha",21);

let sum =56 ; // global function
console.log(sum);
function stringSum(arr){
    let sum=""; // function scope  and if there are no sum defined inside the function the function can use the global var 
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum ;
}
console.log(stringSum(["partha","ujesh",'aamir',"hunny"]));

let greet="hello"; // global scope 

function outerchat(){
    let greet="namaste"; //block scope
    console.log(greet);
        function innerchat(){
            console.log(greet); // lexical scope 
        }
}
console.log(greet);
outerchat();  // no  2ndtime namaste cause innerchat was defined but not called 