let max =  prompt("Enter the maximum number : ");

const random = Math.floor(Math.random() * max ) + 1 ;

let  guess = prompt("Guess the number from 1 to max : ");

while(true){
    if(guess == "quit"){
        console.log("the player quits");
        break;
    }
    if(guess == random ){
        console.log("Guess is correct.Congrats!!. the no was",random);
        break ;
    }else if(guess < random){
        guess = prompt("Hint : Too small.");
    }else {
        guess = prompt("Hint : Too big .");
    }
}