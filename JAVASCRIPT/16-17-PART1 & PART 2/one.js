//Traffic Light Signal  

let signalLight="white";

if(signalLight==="red"){
    console.log(`STOP! the color is ${signalLight}.`);
}
else if(signalLight==="yellow"){
    console.log(`SLOW DOWN! the color is ${signalLight}.`);
}
else if(signalLight==="green"){
    console.log(`GO! the color is ${signalLight}.`);
}
else{
    console.log(`Traffic light is broken.`)
}
// name and age prompt 
let nam=prompt("enter you name: ");
let age=prompt("enter your age: ");
alert(`${nam} is ${age} years old `);


// compare numbers 
let x=prompt("enter x: ");
let y=prompt("enter y: ");
let z=prompt("enter z: ");

if(x>y && x>z){
    console.log(x);
}
else if(y>z){
    console.log(y);
}else{
    console.log(z);
}


// same last digit check 
let a=32;
let b=2672522;
if((a%10)==(b%10)){
    console.log("yes");
}else{
    console.log("not");
}