let favmovie = "hello";

let guess=prompt("guess my favourite movie : ");
while((guess != favmovie) && (guess != "quit")){
   alert("wrong guess!");
   guess = prompt("again guess : ");  // can write just prompt("wrong guess try again ")
}

if(guess == favmovie){
    console.log("you guessed right ");
}else{
    console.log("you quit");
}

let std =[
           ["rahul", "vijay"], 
           ["partha", "ujesh" , "aamir"]
         ];
          
     for(let lists of std){
        
        for(names of lists){
            console.log(names);
        }
     }    
