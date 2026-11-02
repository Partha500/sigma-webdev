alert("welcome to my todo app ");

let todo=[];
let req =prompt("Enter your req : ");

while(true){
    if(req == "quit"){
        console.log("quitting from todo");
        break;
    }

    if(req == "list"){
        console.log("---------------");
        for(let i=0; i<todo.length ; i++){
            console.log(todo[i]);
        }
        console.log("---------------");
    }
    else if(req == "add"){
        let task = prompt("Enter the task you want to add ");
        todo.push(task);
        console.log("task added ");
    }
    else if(req == "delete"){
        let idx =prompt("Enter the task index you want to delete");
        console.log(`task deleted . deleted task : ${todo[idx]}`); // for showing the deleted task . otherwise would put after splice 
        todo.splice(idx,1);
        
    }
    else{
        console.log("entered req is invalid ");
    }

    req = prompt("Enter your req : ");
}