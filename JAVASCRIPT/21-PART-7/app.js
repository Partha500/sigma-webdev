let student = {
    name : "partha",
    age: 25,
    math : 81,
    phy : 91,
    getAvg(){
        let avg  = (this.math+this.phy)/2; // here if direct use math and phy it will say undefined so this used where this referes to the object 
        console.log(avg);
    }
}
student.getAvg();

try {
    console.log(a);
}catch{
    console.log("woe no Error");
}

const sum = (a,b) => {
    console.log(a+b);
}
const mul = (a,b) =>(
    a*b 
);
const cube = n => n*n*n; 

// setTimeout function

console.log("Hi ! ");

setTimeout( () => {
    console.log("apna bikash");
}, 5000);

console.log("welcome to library");

// setInterval 

let id = setInterval( () => {
    console.log("wow");
} , 2000);

// can stop clearInterval(id)
