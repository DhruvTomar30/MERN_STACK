const max=prompt("enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the  number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
    }
    if(guess==random){
        console.log("congrats you are right! random number was:", random);
        break;
    }
    else if(guess<random){
        guess=prompt("hint: you guess was too small. Try Again.")
    }
    else{
        guess=prompt("hint: you guess was too large. Try Again.")
    }
}