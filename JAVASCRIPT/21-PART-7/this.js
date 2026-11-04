const student = {
    name : "partha",
    marks : 8,
    props : this,

    getName : function(){
        console.log(this);
        console.log(this.name);
    },
  
    getMarks : () => {
        console.log(this); // parents scope --> window 
        console.log(this.marks);
    }
} 

console.log(student.props);
console.log(student.getName());
console.log(student.getMarks());


// practice question setTimeout wala 

let id = setInterval( () =>{
    console.log("HELLO !");
},2000);
 
setTimeout(() => {
    clearTimeout(id);
    console.log("times out ");
},10000);
